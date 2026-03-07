#!/usr/bin/env python3
"""
GIF Auto-Tagger — Qwen3-VL edition.

Tags Discord GIFs/videos using Qwen3-VL, which natively understands video,
reads text (OCR), recognises meme templates, and infers emotional tone — all
in a single prompted generation call.

Designed to work with the Favorite GIF Search shelter plugin.
"""

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

import requests
import torch
from PIL import Image
from qwen_vl_utils import process_vision_info
from transformers import AutoProcessor, Qwen3VLForConditionalGeneration

MODEL_ID = "Qwen/Qwen3-VL-4B-Instruct"
MAX_RETRIES = 2
DOWNLOAD_WORKERS = 8
REQUEST_TIMEOUT = 30

# ── Prompt ───────────────────────────────────────────────────────────────────

SYSTEM_PROMPT = """\
You are a GIF/meme tagging assistant. Your job is to generate concise, \
useful search tags for short animated images and videos so users can find \
them later by searching.

For every image or video you are shown, output a JSON object with these keys:

- "caption": A short natural-language description of what is happening (1 sentence).
- "ocr": Any text visible in the image/video, transcribed exactly. Empty string if none.
- "meme": The name of the meme template if you recognise one, otherwise empty string.
- "mood": The overall mood/emotion/vibe (e.g. "funny", "sad", "threatening", "wholesome", "chaotic").
- "tags": A flat JSON array of lowercase search keywords (strings). Include:
  - Key objects, characters, animals visible
  - Actions happening (e.g. "dancing", "exploding", "typing")
  - The meme name if recognised
  - Important words from any visible text
  - The mood/emotion
  - Any franchise, game, or show you recognise
  - The caption as one tag entry
  Aim for 5-20 tags. No duplicates. All lowercase.

Respond with ONLY the JSON object. No markdown fences, no explanation."""

USER_PROMPT = "Generate search tags for this media."


# ── Helpers ──────────────────────────────────────────────────────────────────


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
    Discord sometimes proxies media through its CDN:
      https://images-ext-1.discordapp.net/external/<hash>/https/media.tenor.com/path.mp4
    Extract the original URL hiding after /external/<hash>/.
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
        for ext in (".mp4", ".webm", ".webp", ".gif", ".png", ".jpg", ".jpeg", ".avif"):
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
    return False, last_error


def dedupe_tags(tags: list[str]) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for tag in tags:
        lower = tag.lower().strip()
        if lower and lower not in seen:
            seen.add(lower)
            result.append(lower)
    return result


def is_video(path: Path) -> bool:
    return path.suffix.lower() in (".mp4", ".webm", ".gif")


def convert_webp_to_mp4(path: Path) -> Path:
    """Convert an animated webp to mp4 so av can decode it. Returns the new path."""
    import av as _av

    img = Image.open(path)
    if not getattr(img, "is_animated", False):
        return path
    mp4_path = path.with_suffix(".mp4")
    fps = round(1000 / img.info.get("duration", 100))
    output = _av.open(str(mp4_path), mode="w")
    stream = output.add_stream("h264", rate=fps)
    stream.width = img.size[0]
    stream.height = img.size[1]
    stream.pix_fmt = "yuv420p"
    for i in range(img.n_frames):
        img.seek(i)
        frame = _av.VideoFrame.from_image(img.copy().convert("RGB"))
        for packet in stream.encode(frame):
            output.mux(packet)
    for packet in stream.encode():
        output.mux(packet)
    output.close()
    return mp4_path


def build_messages(file_path: Path, as_image: bool = False) -> list[dict]:
    """Build the Qwen3-VL chat messages for a given media file."""
    content: list[dict] = []

    if not as_image and is_video(file_path):
        video_item: dict = {
            "type": "video",
            "video": f"file://{file_path.resolve()}",
            "max_pixels": 360 * 420,
        }
        content.append(video_item)
    else:
        content.append(
            {
                "type": "image",
                "image": f"file://{file_path.resolve()}",
            }
        )

    content.append({"type": "text", "text": USER_PROMPT})

    return [
        {"role": "system", "content": [{"type": "text", "text": SYSTEM_PROMPT}]},
        {"role": "user", "content": content},
    ]


def parse_model_output(raw: str) -> dict:
    """
    Best-effort parse of the model JSON output.
    Handles markdown fences, trailing commas, and other common quirks.
    """
    text = raw.strip()

    # Strip markdown code fences if present
    if text.startswith("```"):
        lines = text.split("\n")
        # Remove first line (```json or ```)
        lines = lines[1:]
        # Remove last line if it's closing backticks
        if lines and lines[-1].strip().startswith("```"):
            lines = lines[:-1]
        text = "\n".join(lines).strip()

    # Try direct parse first
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass

    # Try to extract JSON object with regex
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if match:
        candidate = match.group(0)
        # Remove trailing commas before } or ]
        candidate = re.sub(r",\s*([}\]])", r"\1", candidate)
        try:
            return json.loads(candidate)
        except json.JSONDecodeError:
            pass

    return {}


def tags_from_parsed(parsed: dict) -> list[str]:
    """Extract a flat tag list from the parsed model output."""
    all_tags: list[str] = []

    # Direct tags array
    tags = parsed.get("tags", [])
    if isinstance(tags, list):
        all_tags.extend(str(t) for t in tags)
    elif isinstance(tags, str):
        all_tags.append(tags)

    # Caption as a tag
    caption = parsed.get("caption", "")
    if isinstance(caption, str) and caption.strip():
        all_tags.append(caption.strip().lower())

    # Meme name
    meme = parsed.get("meme", "")
    if isinstance(meme, str) and meme.strip():
        all_tags.append(meme.strip().lower())

    # Mood
    mood = parsed.get("mood", "")
    if isinstance(mood, str) and mood.strip():
        all_tags.append(mood.strip().lower())

    # OCR words (individual words > 2 chars)
    ocr = parsed.get("ocr", "")
    if isinstance(ocr, str) and ocr.strip():
        words = re.split(r"[\s\n\r]+", ocr)
        words = [re.sub(r"[^a-zA-Z0-9'-]", "", w).strip().lower() for w in words]
        all_tags.extend(w for w in words if len(w) > 2)

    return dedupe_tags(all_tags)


# ── Tagger class ─────────────────────────────────────────────────────────────

# Qwen3-VL uses patch_size=16 (vs 14 for Qwen2.5-VL)
QWEN3_VL_PATCH_SIZE = 16


class Qwen3VLTagger:
    def __init__(
        self,
        model_id: str = MODEL_ID,
        device: str | None = None,
    ):
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

        self.processor = AutoProcessor.from_pretrained(model_id)
        self.model = Qwen3VLForConditionalGeneration.from_pretrained(
            model_id,
            torch_dtype=dtype,
            device_map=self.device if self.device.type == "cuda" else None,
        )
        if self.device.type != "cuda":
            self.model = self.model.to(self.device)
        self.model.eval()

        log("Model loaded.")

    def _process_vision(self, file_path: Path, as_image: bool = False):
        """Build messages and process vision info, returns (messages, image_inputs, video_inputs, video_kwargs)."""
        messages = build_messages(file_path, as_image=as_image)
        image_inputs, video_inputs, video_kwargs = process_vision_info(
            messages,
            image_patch_size=QWEN3_VL_PATCH_SIZE,
            return_video_kwargs=True,
            return_video_metadata=True,
        )
        return messages, image_inputs, video_inputs, video_kwargs

    def tag(self, file_path: Path) -> dict:
        """
        Run inference on a single media file.
        Returns {"caption", "ocr", "meme", "mood", "tags"}.
        """
        if file_path.suffix.lower() == ".webp":
            file_path = convert_webp_to_mp4(file_path)

        # Try as video first; if it fails (e.g. too few frames), fall back to image
        try:
            messages, image_inputs, video_inputs, video_kwargs = self._process_vision(file_path)
        except Exception as e:
            if is_video(file_path):
                log(f"\n  Video decode failed, retrying as image: {e}")
                messages, image_inputs, video_inputs, video_kwargs = self._process_vision(file_path, as_image=True)
            else:
                raise

        # Video inputs come back as (tensor, metadata) tuples when
        # return_video_metadata=True — split them for the processor
        video_metadatas = None
        if video_inputs:
            videos_split, metas_split = zip(*video_inputs)
            video_inputs = list(videos_split)
            video_metadatas = list(metas_split)

        # ── Apply chat template (text only, no tokenization) ─────────────
        text_prompt = self.processor.apply_chat_template(
            messages, tokenize=False, add_generation_prompt=True
        )

        # ── Tokenize & prepare inputs ────────────────────────────────────
        # do_resize=False because qwen-vl-utils already resized
        inputs = self.processor(
            text=[text_prompt],
            images=image_inputs,
            videos=video_inputs,
            video_metadata=video_metadatas,
            do_resize=False,
            return_tensors="pt",
            **video_kwargs,
        )
        inputs = inputs.to(self.device)

        # ── Generate ─────────────────────────────────────────────────────
        with torch.inference_mode():
            generated = self.model.generate(
                **inputs,
                max_new_tokens=512,
                do_sample=False,
            )

        # Trim prompt tokens from output
        prompt_len = inputs["input_ids"].shape[1]
        output_ids = generated[:, prompt_len:]
        decoded = self.processor.batch_decode(
            output_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False
        )[0]

        # Strip thinking tags if present (Qwen3 may wrap reasoning)
        decoded = re.sub(r"<think>.*?</think>", "", decoded, flags=re.DOTALL).strip()

        parsed = parse_model_output(decoded)

        return {
            "caption": parsed.get("caption", ""),
            "ocr": parsed.get("ocr", ""),
            "meme": parsed.get("meme", ""),
            "mood": parsed.get("mood", ""),
            "tags": tags_from_parsed(parsed),
        }


# ── Main ─────────────────────────────────────────────────────────────────────


def main():
    parser = argparse.ArgumentParser(
        description="Auto-tag GIFs using Qwen3-VL (captioning + OCR + meme recognition)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Workflow:
  1. In shelter settings, open Favorite Search settings -> "Export tags" -> saves gif-tags.json
  2. Run:  python autotag.py gif-tags.json
  3. Back in Discord, "Import tags" -> select the output file

Examples:
  python autotag.py gif-tags.json                        # Full pipeline
  python autotag.py gif-tags.json --skip-tagged           # Only untagged GIFs
  python autotag.py gif-tags.json --device cpu             # Force CPU
  python autotag.py gif-tags.json -o my-output.json        # Custom output path
  python autotag.py gif-tags.json --model Qwen/Qwen3-VL-8B-Instruct  # Larger model
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

    tagger = Qwen3VLTagger(
        model_id=args.model,
        device=args.device,
    )

    # ── Download ─────────────────────────────────────────────────────────

    tmp_dir = Path(tempfile.mkdtemp(prefix="gif-autotagger-"))
    log(f"Downloading {len(to_process)} file(s) to {tmp_dir}...")

    url_to_path: dict[str, Path | None] = {}

    def _download_one(idx: int, key: str) -> tuple[str, Path | None, str]:
        src = entries[key]["src"]
        ext = guess_extension(src)
        dest = tmp_dir / f"{idx:06d}{ext}"
        ok, err = download(src, dest)
        return key, dest if ok else None, err

    download_failed = 0
    failed_downloads: list[tuple[str, str, str]] = []
    with ThreadPoolExecutor(max_workers=args.download_workers) as pool:
        futures = {pool.submit(_download_one, i, k): k for i, k in enumerate(to_process)}
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

    # ── Inference ────────────────────────────────────────────────────────

    log("Running inference...\n")

    results: dict[str, list[str]] = {k: list(e["tags"]) for k, e in entries.items()}
    processed = 0
    failed = 0

    for i, key in enumerate(to_process, 1):
        short = key.split("/")[-1][:40] if "/" in key else key[:40]

        print(
            f"\r  {progress_bar(i - 1, len(to_process))}  ⏳ {short}",
            end="",
            flush=True,
        )

        file_path = url_to_path.get(key)
        if file_path is None or not file_path.exists():
            failed += 1
            print(
                f"\r  {progress_bar(i, len(to_process))}  [skip: download failed]",
                end="",
                flush=True,
            )
            continue

        try:
            tag_result = tagger.tag(file_path)
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

    # ── Cleanup & output ─────────────────────────────────────────────────

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
