#!/usr/bin/env python3
import argparse
import json
import re
import shutil
import sys
import tempfile
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse

import cv2
import requests
import torch
from PIL import Image
from transformers import AutoModelForCausalLM, AutoProcessor

MODEL_ID = "microsoft/Florence-2-base"
MAX_RETRIES = 2
DOWNLOAD_WORKERS = 8
REQUEST_TIMEOUT = 30

STOP_WORDS = frozenset(
    "a an the is are was were be been being have has had do does did will would "
    "could should may might shall can to of in for on with at by from as into "
    "through during before after above below between out off over under again "
    "further then once here there when where why how all both each few more most "
    "other some such no nor not only own same so than too very just because but "
    "and or if while that this it its up about".split()
)


def log(msg: str):
    ts = time.strftime("%H:%M:%S")
    print(f"[{ts}] {msg}", flush=True)


def progress_bar(current: int, total: int, width: int = 35) -> str:
    pct = current / total if total else 0
    filled = int(width * pct)
    bar = "█" * filled + "░" * (width - filled)
    return f"{bar} {pct:6.1%} ({current}/{total})"


def extract_original_url(proxy_url: str) -> str:
    """
    Sometimes the src is a Discord proxy URL like:
      https://images-ext-1.discordapp.net/external/<hash>/https/media.tenor.com/path.mp4
    Extract the original URL after /external/<hash>/
    """
    try:
        parsed = urlparse(proxy_url)
        hostname = parsed.hostname or ""
        is_proxy = any(
            d in hostname for d in ("discordapp.net", "discord.com", "discordapp.com")
        )
        if not is_proxy:
            return proxy_url

        match = re.search(r"/external/[^/]+/(https?)/(.*)", parsed.path)
        if match:
            return f"{match.group(1)}://{match.group(2)}"
    except Exception:
        pass
    return proxy_url


def get_candidate_urls(url: str) -> list[str]:
    original = extract_original_url(url)
    urls = []
    if original != url:
        urls.append(original)
    urls.append(url)
    return urls


def guess_extension(url: str) -> str:
    try:
        path = urlparse(url).path.lower()
        for ext in (".mp4", ".webm", ".webp", ".gif", ".png", ".jpg", ".jpeg"):
            if ext in path:
                return ext
    except Exception:
        pass
    return ".gif"


def download(url: str, dest: Path) -> tuple[bool, str]:
    candidates = get_candidate_urls(url)
    last_error = ""
    for candidate in candidates:
        for attempt in range(MAX_RETRIES + 1):
            try:
                resp = requests.get(candidate, timeout=REQUEST_TIMEOUT, stream=True)
                resp.raise_for_status()
                with open(dest, "wb") as f:
                    for chunk in resp.iter_content(chunk_size=65536):
                        f.write(chunk)
                return True, ""
            except Exception as e:
                last_error = str(e)
                if attempt < MAX_RETRIES:
                    time.sleep(0.5 * (attempt + 1))
                continue
    return False, last_error


def extract_frame(path: Path) -> Image.Image | None:
    """
    Extract a representative frame from an image or video file.

    For videos/GIFs, picks a frame at ~25% duration to avoid title cards
    and outros. Falls back to OpenCV for anything Pillow can't handle.
    """
    suffix = path.suffix.lower()

    if suffix in (".mp4", ".webm"):
        return _extract_video_frame(path)
    if suffix == ".gif":
        return _extract_gif_frame(path)
    if suffix == ".webp":
        return _extract_webp_frame(path)

    # Static image fallback
    try:
        return Image.open(path).convert("RGB")
    except Exception:
        # Last resort: try OpenCV (handles some formats Pillow doesn't)
        return _extract_video_frame(path)


def _extract_video_frame(path: Path) -> Image.Image | None:
    try:
        cap = cv2.VideoCapture(str(path))
        if not cap.isOpened():
            return None

        total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        if total <= 0:
            total = 1
        target = max(0, int(total * 0.25))

        cap.set(cv2.CAP_PROP_POS_FRAMES, target)
        ok, frame = cap.read()
        cap.release()

        if not ok or frame is None:
            return None

        return Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    except Exception:
        return None


def _extract_gif_frame(path: Path) -> Image.Image | None:
    try:
        img = Image.open(path)
        n_frames = getattr(img, "n_frames", 1)
        target = max(0, int(n_frames * 0.25))
        if target > 0:
            img.seek(target)
        return img.convert("RGB")
    except Exception:
        return None


def _extract_webp_frame(path: Path) -> Image.Image | None:
    try:
        img = Image.open(path)
        n_frames = getattr(img, "n_frames", 1)
        if n_frames > 1:
            target = max(0, int(n_frames * 0.25))
            if target > 0:
                img.seek(target)
        return img.convert("RGB")
    except Exception:
        # Fall back to OpenCV for problematic WebPs
        return _extract_video_frame(path)


def extract_keywords(text: str) -> list[str]:
    if not text:
        return []
    words = re.split(r"[\s,;.!?]+", text.strip().lower())
    words = [re.sub(r"[^a-z0-9'-]", "", w).strip() for w in words]
    words = [w for w in words if len(w) > 1 and w not in STOP_WORDS]
    return list(dict.fromkeys(words))


def dedupe_tags(tags: list[str]) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for tag in tags:
        lower = tag.lower().strip()
        if lower and lower not in seen:
            seen.add(lower)
            result.append(tag.strip())
    return result


class Florence2Tagger:
    TASKS = {
        "caption": "<CAPTION>",
        "detailed_caption": "<DETAILED_CAPTION>",
        "ocr": "<OCR>",
        "od": "<OD>",
    }

    def __init__(self, model_id: str = MODEL_ID, device: str | None = None):
        # ── Pick device ──
        if device:
            self.device = torch.device(device)
        elif torch.cuda.is_available():
            self.device = torch.device("cuda")
        elif hasattr(torch.backends, "mps") and torch.backends.mps.is_available():
            self.device = torch.device("mps")
        else:
            self.device = torch.device("cpu")

        dtype = torch.float16 if self.device.type == "cuda" else torch.float32

        log(f"Loading {model_id} on {self.device} (dtype={dtype})...")

        self.processor = AutoProcessor.from_pretrained(model_id, trust_remote_code=True)
        self.model = AutoModelForCausalLM.from_pretrained(
            model_id, torch_dtype=dtype, trust_remote_code=True
        ).to(self.device)
        self.model.eval()

        log("Model loaded.")

    def _run_task(self, image: Image.Image, task_prompt: str) -> dict | str:
        inputs = self.processor(text=task_prompt, images=image, return_tensors="pt")
        inputs = {k: v.to(self.device) for k, v in inputs.items()}

        with torch.inference_mode():
            generated = self.model.generate(
                **inputs,
                max_new_tokens=256,
                num_beams=3,
                early_stopping=True,
            )

        decoded = self.processor.batch_decode(generated, skip_special_tokens=False)[0]
        result = self.processor.post_process_generation(
            decoded, task=task_prompt, image_size=image.size
        )

        # post_process_generation returns a dict like {task_prompt: value}
        if isinstance(result, dict):
            return result.get(task_prompt, result)
        return str(result)

    # ── High-level tagging ───────────────────────────────────────────────────

    def tag(
        self,
        image: Image.Image,
        run_caption: bool = True,
        run_ocr: bool = True,
        run_objects: bool = True,
    ) -> dict:
        result = {
            "caption": "",
            "detailed_caption": "",
            "ocr_text": "",
            "objects": [],
            "tags": [],
        }
        all_tags: list[str] = []

        if run_caption:
            try:
                raw = self._run_task(image, self.TASKS["caption"])
                caption = raw.strip() if isinstance(raw, str) else ""
                result["caption"] = caption
                if caption:
                    all_tags.append(caption.lower())
                    all_tags.extend(extract_keywords(caption))
            except Exception as e:
                log(f"  Caption failed: {e}")

            try:
                raw = self._run_task(image, self.TASKS["detailed_caption"])
                detailed = raw.strip() if isinstance(raw, str) else ""
                result["detailed_caption"] = detailed
                if detailed:
                    all_tags.extend(extract_keywords(detailed))
            except Exception as e:
                log(f"  Detailed caption failed: {e}")

        if run_objects:
            try:
                raw = self._run_task(image, self.TASKS["od"])
                labels = self._parse_od_labels(raw)
                result["objects"] = labels
                all_tags.extend(labels)
            except Exception as e:
                log(f"  Object detection failed: {e}")

        if run_ocr:
            try:
                raw = self._run_task(image, self.TASKS["ocr"])
                ocr_text = self._parse_ocr_text(raw)
                result["ocr_text"] = ocr_text
                if ocr_text:
                    words = re.split(r"[\s\n\r]+", ocr_text)
                    words = [
                        re.sub(r"[^a-zA-Z0-9'-]", "", w).strip().lower() for w in words
                    ]
                    ocr_words = [w for w in words if len(w) > 2]
                    all_tags.extend(ocr_words)
            except Exception as e:
                log(f"  OCR failed: {e}")

        result["tags"] = dedupe_tags(all_tags)
        return result

    @staticmethod
    def _parse_od_labels(raw) -> list[str]:
        labels: list[str] = []
        if isinstance(raw, dict):
            labels = raw.get("labels", [])
        elif isinstance(raw, str) and raw.strip():
            labels = [raw.strip()]

        seen: set[str] = set()
        clean: list[str] = []
        for label in labels:
            s = str(label).strip().lower()
            if s and s not in seen:
                seen.add(s)
                clean.append(s)
        return clean

    @staticmethod
    def _parse_ocr_text(raw) -> str:
        if isinstance(raw, str):
            return raw.strip()
        if isinstance(raw, dict):
            val = raw.get("<OCR>", "")
            if isinstance(val, list):
                return " ".join(str(t) for t in val).strip()
            return str(val).strip()
        return ""


def main():
    parser = argparse.ArgumentParser(
        description="Auto-tag GIFs using Florence-2 (captioning + OCR + object detection)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Workflow:
  1. In shelter settings, open Favorite Search settings -> "Export tags" -> saves gif-tags.json
  2. Run:  python autotag.py gif-tags.json
  3. Back in Discord, "Import tags" -> select the output file

Examples:
  python autotag.py gif-tags.json                       # Full pipeline
  python autotag.py gif-tags.json --skip-tagged          # Only untagged GIFs
  python autotag.py gif-tags.json --ocr-only             # Text detection only
  python autotag.py gif-tags.json --device cpu            # Force CPU
  python autotag.py gif-tags.json -o my-output.json      # Custom output path
        """,
    )
    parser.add_argument(
        "input", help="Exported tags JSON from the Favorite Search plugin"
    )
    parser.add_argument(
        "-o", "--output", help="Output file (default: <input>-tagged.json)"
    )
    parser.add_argument(
        "--skip-tagged", action="store_true", help="Skip GIFs that already have tags"
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Replace existing tags instead of merging",
    )
    parser.add_argument("--ocr-only", action="store_true", help="Only run OCR")
    parser.add_argument(
        "--caption-only",
        action="store_true",
        help="Only run captioning (skip OCR and object detection)",
    )
    parser.add_argument(
        "--no-objects", action="store_true", help="Skip object detection"
    )
    parser.add_argument(
        "--model", default=MODEL_ID, help=f"HuggingFace model ID (default: {MODEL_ID})"
    )
    parser.add_argument(
        "--device", default=None, help="Device: cuda, mps, cpu (default: auto)"
    )
    parser.add_argument(
        "--download-workers",
        type=int,
        default=DOWNLOAD_WORKERS,
        help=f"Parallel download threads (default: {DOWNLOAD_WORKERS})",
    )

    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"Error: {input_path} not found.", file=sys.stderr)
        sys.exit(1)

    output_path = (
        Path(args.output)
        if args.output
        else input_path.with_stem(input_path.stem + "-tagged")
    )

    log(f"Reading {input_path}...")
    with open(input_path, "r") as f:
        raw_data = json.load(f)

    entries: dict[str, dict] = {}
    for key, value in raw_data.items():
        if isinstance(value, dict):
            entries[key] = {
                "src": value.get("src", key),
                "tags": list(value.get("tags", [])),
            }
        elif isinstance(value, list):
            entries[key] = {"src": key, "tags": list(value)}
        else:
            entries[key] = {"src": key, "tags": []}

    all_keys = list(entries.keys())
    log(f"Found {len(all_keys)} GIF(s).")

    if args.skip_tagged:
        to_process = [k for k in all_keys if not entries[k]["tags"]]
        skipped = len(all_keys) - len(to_process)
        log(f"Skipping {skipped} already-tagged. Will process {len(to_process)}.")
    else:
        to_process = list(all_keys)

    if not to_process:
        log("Nothing to process.")
        sys.exit(0)

    run_caption = not args.ocr_only
    run_ocr = not args.caption_only
    run_objects = not args.ocr_only and not args.caption_only and not args.no_objects

    task_names = []
    if run_caption:
        task_names.append("captioning")
    if run_ocr:
        task_names.append("OCR")
    if run_objects:
        task_names.append("object detection")
    log(f"Tasks: {', '.join(task_names)}")

    tagger = Florence2Tagger(model_id=args.model, device=args.device)

    tmp_dir = Path(tempfile.mkdtemp(prefix="gif-autotagger-"))
    log(f"Downloading {len(to_process)} file(s) to {tmp_dir}...")

    url_to_path: dict[str, Path | None] = {}

    def _download_one(key: str) -> tuple[str, Path | None, str]:
        src = entries[key]["src"]
        ext = guess_extension(src)
        safe_name = str(abs(hash(key)))[:16] + ext
        dest = tmp_dir / safe_name
        ok, err = download(src, dest)
        return key, dest if ok else None, err

    download_failed = 0
    failed_downloads: list[tuple[str, str, str]] = []  # (key, src, error)
    with ThreadPoolExecutor(max_workers=args.download_workers) as pool:
        futures = {pool.submit(_download_one, k): k for k in to_process}
        for i, future in enumerate(as_completed(futures), 1):
            key, path, err = future.result()
            url_to_path[key] = path
            if path is None:
                download_failed += 1
                failed_downloads.append((key, entries[key]["src"], err))
            print(
                f"\r  Downloading... {progress_bar(i, len(to_process))}",
                end="",
                flush=True,
            )

    print()
    if download_failed:
        log(f"  {download_failed} download(s) failed:")
        for fkey, fsrc, ferr in failed_downloads:
            short_key = fkey.split("/")[-1][:60] if "/" in fkey else fkey[:60]
            log(f"    ✗ {short_key}")
            log(f"      src: {fsrc}")
            log(f"      err: {ferr}")

    log("Running inference...\n")

    results: dict[str, list[str]] = {k: list(e["tags"]) for k, e in entries.items()}
    processed = 0
    failed = 0

    for i, key in enumerate(to_process, 1):
        short = key.split("/")[-1][:40] if "/" in key else key[:40]

        file_path = url_to_path.get(key)
        if file_path is None or not file_path.exists():
            failed += 1
            print(
                f"\r  {progress_bar(i, len(to_process))}  [skip: download failed]",
                end="",
                flush=True,
            )
            continue

        image = extract_frame(file_path)
        if image is None:
            failed += 1
            print(
                f"\r  {progress_bar(i, len(to_process))}  [skip: frame extraction failed]",
                end="",
                flush=True,
            )
            continue

        try:
            tag_result = tagger.tag(
                image,
                run_caption=run_caption,
                run_ocr=run_ocr,
                run_objects=run_objects,
            )
            new_tags = tag_result["tags"]
        except Exception as e:
            log(f"\n  Error on {key[:80]}: {e}")
            failed += 1
            continue

        if args.overwrite:
            results[key] = new_tags
        else:
            existing = results.get(key, [])
            existing_lower = {t.lower() for t in existing}
            merged = existing + [t for t in new_tags if t.lower() not in existing_lower]
            results[key] = merged

        processed += 1
        n = len(new_tags)
        print(
            f"\r  {progress_bar(i, len(to_process))}  +{n:<3} tags  {short}",
            end="",
            flush=True,
        )

    print()

    try:
        shutil.rmtree(tmp_dir, ignore_errors=True)
    except Exception:
        pass

    tagged_count = sum(1 for t in results.values() if t)

    output_data = {}
    for key in all_keys:
        output_data[key] = {
            "src": entries[key]["src"],
            "tags": results.get(key, []),
        }

    with open(output_path, "w") as f:
        json.dump(output_data, f, indent=2)

    print()
    log("Done!")
    log(f"  Processed: {processed}/{len(to_process)}")
    log(f"  Failed:    {failed}")
    log(f"  Tagged:    {tagged_count}/{len(all_keys)} total GIFs now have tags")
    log(f"  Output:    {output_path}")
    print()
    log('Import the output file back into Discord using the "Import tags" button.')


if __name__ == "__main__":
    main()
