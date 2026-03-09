#!/usr/bin/env python3
"""
GIF Auto-Tagger — tag Discord GIFs using Qwen3.5.

Downloads each GIF/video, runs Qwen3.5 inference, and writes structured tags
back into the JSON format expected by the Favorite GIF Search shelter plugin.
"""

import argparse
import json
import os
import re
import shutil
import subprocess
import tempfile
import time
import traceback
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import requests
import torch
from PIL import Image
from transformers import AutoModelForImageTextToText, AutoProcessor

# ─── Prompt ──────────────────────────────────────────────────────────────────

SYSTEM_PROMPT = """\
You are a GIF/meme tagging assistant. You will be shown a short animated image or video clip from someone's Discord favorites collection.

Analyze it and return a JSON object with exactly these fields:

- "caption": A short, natural-language description of what happens in the clip (1-2 sentences).
- "ocr": Any text visible in the image/video. If there is no text, use an empty string.
- "meme": If you recognize a known meme template, meme name, or cultural reference, name it. Otherwise use an empty string.
- "mood": One or two words describing the overall mood/tone (e.g. "funny", "chaotic", "wholesome", "sarcastic", "angry", "sad", "excited").
- "characters": A list of recognized characters, celebrities, or public figures. If none are recognized, use an empty list.
- "tags": A flat list of relevant search keywords. Include: objects, actions, emotions, colors, settings, character names, meme names, and any OCR text — anything someone might search for to find this GIF.

Rules:
- Return ONLY the raw JSON object, no markdown fences, no commentary.
- All string values must be lowercase.
- The "tags" list should be comprehensive (aim for 5-20 tags) and must include relevant words from all other fields.
- Do NOT repeat the same tag with slight variations (e.g. don't include both "cat" and "cats").\
- Do NOT include irrelevant or overly generic tags (e.g. "funny" is good, but "video" is not). Focus on what makes this clip unique and identifiable.
- Don't be afraid to include specific character names, meme names, or niche references if they are clearly present as these can be very helpful for searchability. But if you're not sure, it's better to leave them out than to guess wildly.
- Don't be afraid of explicit content if it's clearly present in the clip, just tag it accurately without judgment.
"""

USER_PROMPT = "Analyze this media and return the tagging JSON."


# ─── Device detection ────────────────────────────────────────────────────────


def detect_device(forced: str | None = None) -> str:
    if forced:
        return forced
    if torch.cuda.is_available():
        return "cuda"
    if hasattr(torch.backends, "mps") and torch.backends.mps.is_available():
        return "mps"
    return "cpu"


# ─── Media download & conversion ─────────────────────────────────────────────


def download_file(url: str, dest: Path, timeout: int = 60) -> Path:
    resp = requests.get(url, stream=True, timeout=timeout)
    resp.raise_for_status()
    with open(dest, "wb") as f:
        for chunk in resp.iter_content(chunk_size=1 << 16):
            f.write(chunk)
    return dest


def is_static_image(path: Path) -> bool:
    """Check if a file is a static (non-animated) image."""
    try:
        with Image.open(path) as img:
            # Check for animation
            try:
                img.seek(1)
                return False  # Has multiple frames = animated
            except EOFError:
                return True  # Only one frame = static
    except Exception:
        return False


def convert_to_mp4(src: Path, dest: Path) -> Path:
    """Convert GIF/WebP/any format to MP4 using ffmpeg for video reading compatibility.

    Animated WebPs are first extracted to PNG frames via Pillow (since ffmpeg's
    WebP demuxer often chokes on them), then stitched into an MP4.
    """
    # Try Pillow extraction for animated WebP (ffmpeg often can't decode these)
    try:
        with Image.open(src) as img:
            if getattr(img, "is_animated", False) and img.format == "WEBP":
                frames_dir = dest.parent / "frames"
                frames_dir.mkdir(exist_ok=True)
                for i in range(img.n_frames):
                    img.seek(i)
                    frame = img.convert("RGB")
                    frame.save(frames_dir / f"{i:05d}.png")
                # Determine original frame rate from duration (ms per frame)
                duration = img.info.get("duration", 50) or 50
                fps = 1000 / max(duration, 1)
                fps = max(1, min(fps, 60))  # clamp to sane range
                cmd = [
                    "ffmpeg",
                    "-y",
                    "-framerate",
                    str(fps),
                    "-i",
                    str(frames_dir / "%05d.png"),
                    "-vf",
                    "scale=trunc(iw/2)*2:trunc(ih/2)*2",
                    "-c:v",
                    "libx264",
                    "-pix_fmt",
                    "yuv420p",
                    "-movflags",
                    "+faststart",
                    "-an",
                    "-loglevel",
                    "error",
                    str(dest),
                ]
                subprocess.run(cmd, check=True, capture_output=True)
                shutil.rmtree(frames_dir)
                return dest
    except Exception:
        pass  # Fall through to direct ffmpeg conversion

    cmd = [
        "ffmpeg",
        "-y",
        "-i",
        str(src),
        "-vf",
        "scale=trunc(iw/2)*2:trunc(ih/2)*2",
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        "-an",
        "-loglevel",
        "error",
        str(dest),
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    return dest


def _convert_to_static_image(src: Path, dest_dir: Path) -> Path:
    """Convert any image file to PNG via Pillow as a fallback."""
    png_path = dest_dir / "fallback.png"
    with Image.open(src) as img:
        img.convert("RGB").save(png_path, "PNG")
    return png_path


def prepare_media(url: str, tmp_dir: Path, fps: float) -> dict:
    """Download and prepare media, returning a chat message content element."""
    ext = _guess_extension(url)
    raw_path = tmp_dir / f"raw{ext}"
    download_file(url, raw_path)

    # Static images → use image type directly
    if is_static_image(raw_path):
        return {"type": "image", "image": f"{raw_path}"}

    # Animated content → convert to mp4 for reliable video reading
    mp4_path = tmp_dir / "converted.mp4"
    try:
        convert_to_mp4(raw_path, mp4_path)
        return {"type": "video", "video": f"{mp4_path}", "fps": fps}
    except subprocess.CalledProcessError:
        # ffmpeg failed — try treating it as a static image via Pillow
        try:
            png_path = _convert_to_static_image(raw_path, tmp_dir)
            return {"type": "image", "image": f"{png_path}"}
        except Exception:
            raise  # Re-raise if Pillow also can't handle it


def _guess_extension(url: str) -> str:
    path = url.split("?")[0].split("#")[0]
    for ext in (".mp4", ".webm", ".webp", ".gif", ".png", ".jpg", ".jpeg"):
        if path.lower().endswith(ext):
            return ext
    return ".bin"


# ─── Tag extraction ──────────────────────────────────────────────────────────


def extract_json(text: str) -> dict | None:
    """Try to parse JSON from model output, tolerating markdown fences."""
    text = text.strip()
    # Strip markdown code fences if present
    fence_match = re.search(r"```(?:json)?\s*\n?(.*?)```", text, re.DOTALL)
    if fence_match:
        text = fence_match.group(1).strip()
    # Try direct parse
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass
    # Try to find a JSON object in the text
    brace_match = re.search(r"\{.*\}", text, re.DOTALL)
    if brace_match:
        try:
            return json.loads(brace_match.group())
        except json.JSONDecodeError:
            pass
    return None


def flatten_tags(parsed: dict) -> list[str]:
    """Merge all fields into a flat, deduplicated tag list."""
    tags = set()

    for field in ("caption", "ocr", "meme", "mood"):
        val = parsed.get(field, "")
        if isinstance(val, str) and val.strip():
            tags.add(val.strip().lower())

    for item in parsed.get("tags", []):
        if isinstance(item, str) and item.strip():
            tags.add(item.strip().lower())

    for item in parsed.get("characters", []):
        if isinstance(item, str) and item.strip():
            tags.add(item.strip().lower())

    return sorted(tags)


# ─── Model inference ─────────────────────────────────────────────────────────


def _generate_text(
    model,
    processor,
    content_element: dict,
) -> str:
    """Run Qwen3.5 inference on a single media item and return raw output text."""
    messages = [
        {"role": "system", "content": [{"type": "text", "text": SYSTEM_PROMPT}]},
        {
            "role": "user",
            "content": [content_element, {"type": "text", "text": USER_PROMPT}],
        },
    ]

    inputs = processor.apply_chat_template(
        messages,
        tokenize=True,
        add_generation_prompt=True,
        enable_thinking=False,
        return_dict=True,
        return_tensors="pt",
    )
    inputs = {
        k: v.to(model.device) for k, v in inputs.items() if isinstance(v, torch.Tensor)
    }

    with torch.inference_mode():
        generated_ids = model.generate(
            **inputs,
            max_new_tokens=1024,
            do_sample=False,
            temperature=0.0,
        )
    generated_ids_trimmed = [
        out_ids[len(in_ids) :]
        for in_ids, out_ids in zip(inputs["input_ids"], generated_ids)
    ]
    output_text = processor.batch_decode(
        generated_ids_trimmed,
        skip_special_tokens=True,
        clean_up_tokenization_spaces=False,
    )
    output_text = output_text[0] if isinstance(output_text, list) else output_text

    # Strip thinking tags if the model produced them
    think_match = re.search(r"</think>\s*(.*)", output_text, re.DOTALL)
    if think_match:
        output_text = think_match.group(1).strip()

    return output_text


def run_inference(
    model,
    processor,
    content_element: dict,
    max_retries: int = 2,
) -> list[str] | None:
    """Run inference with retry on JSON parse failure. Returns None if all attempts fail."""
    for attempt in range(1, max_retries + 1):
        output_text = _generate_text(model, processor, content_element)
        parsed = extract_json(output_text)
        if parsed is not None:
            return flatten_tags(parsed)
        if attempt < max_retries:
            print(
                f"  ⚠ Failed to parse JSON (attempt {attempt}/{max_retries}), retrying..."
            )
        else:
            print(f"  ✗ Failed to parse JSON after {max_retries} attempts, skipping")
            print(f"    Raw output: {output_text[:200]}")
    return None


# ─── Batch download ──────────────────────────────────────────────────────────


def download_all(
    entries: dict, tmp_root: Path, fps: float, workers: int
) -> dict[str, dict]:
    """Download and prepare all media files in parallel. Returns key→content_element map."""
    results = {}
    total = len(entries)

    def _process(key: str, src: str) -> tuple[str, dict | None]:
        item_dir = tmp_root / key.replace("/", "_").replace(":", "_")[:120]
        item_dir.mkdir(parents=True, exist_ok=True)
        try:
            element = prepare_media(src, item_dir, fps)
            return key, element
        except Exception as e:
            print(f"  ✗ Download/convert failed for {key}: {e}")
            return key, None

    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(_process, k, v["src"]): k for k, v in entries.items()}
        done = 0
        for future in as_completed(futures):
            done += 1
            key, element = future.result()
            if element is not None:
                results[key] = element
            print(f"  ↓ Downloaded {done}/{total}", end="\r")

    print()
    return results


# ─── Utilities ────────────────────────────────────────────────────────────────


def _fmt_duration(seconds: float) -> str:
    """Format seconds into a human-readable duration string."""
    s = int(seconds)
    if s < 60:
        return f"{s}s"
    m, s = divmod(s, 60)
    if m < 60:
        return f"{m}m{s:02d}s"
    h, m = divmod(m, 60)
    return f"{h}h{m:02d}m{s:02d}s"


def _progress_bar(current: int, total: int, width: int | None = None) -> str:
    """Return a text progress bar string like [████████░░░░░░░░] 50%."""
    if width is None:
        try:
            width = os.get_terminal_size().columns - 10
        except OSError:
            width = 40
    width = max(10, min(width, 60))
    filled = int(width * current / total)
    bar = "█" * filled + "░" * (width - filled)
    pct = current * 100 // total
    return f"  [{bar}] {pct}%"


# ─── Main ─────────────────────────────────────────────────────────────────────


def main():
    parser = argparse.ArgumentParser(description="Auto-tag Discord GIFs using Qwen3.5")
    parser.add_argument("input", help="Input JSON file (gif-tags.json)")
    parser.add_argument(
        "-o",
        "--output",
        default=None,
        help="Output file (default: <input>-tagged.json)",
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
        "--model",
        default="Qwen/Qwen3.5-4B",
        help="HuggingFace model ID (default: Qwen/Qwen3.5-4B)",
    )
    parser.add_argument(
        "--load-in-4bit",
        action="store_true",
        help="Load model in 4-bit quantization (requires bitsandbytes, saves VRAM)",
    )
    parser.add_argument(
        "--device",
        default=None,
        choices=["cuda", "mps", "cpu"],
        help="Force device (default: auto)",
    )
    parser.add_argument(
        "--fps",
        type=float,
        default=2.0,
        help="Video frame sampling rate (default: 2.0)",
    )
    parser.add_argument(
        "--download-workers",
        type=int,
        default=8,
        help="Parallel download threads (default: 8)",
    )
    args = parser.parse_args()

    # Resolve output path
    if args.output is None:
        stem = Path(args.input).stem
        args.output = str(Path(args.input).parent / f"{stem}-tagged.json")

    # Load input
    print(f"📂 Loading {args.input}")
    with open(args.input) as f:
        data = json.load(f)

    # Filter entries
    entries = {}
    for key, val in data.items():
        if args.skip_tagged and val.get("tags"):
            continue
        entries[key] = val

    print(f"📋 {len(entries)} GIFs to process ({len(data) - len(entries)} skipped)")
    if not entries:
        print("Nothing to do!")
        return

    # Detect device
    device = detect_device(args.device)
    print(f"🖥  Device: {device}")

    # Load model
    print(f"🤖 Loading model: {args.model}")
    t0 = time.time()

    model_kwargs = {"device_map": "auto", "max_memory": {0: "14GiB", "cpu": "24GiB"}}
    if args.load_in_4bit:
        from transformers import BitsAndBytesConfig

        model_kwargs["quantization_config"] = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_compute_dtype=torch.bfloat16,
            bnb_4bit_quant_type="nf4",
        )
        print("   Using 4-bit quantization (bitsandbytes NF4)")
    if device == "cuda":
        model_kwargs["dtype"] = torch.bfloat16
    elif device == "mps":
        model_kwargs["dtype"] = torch.float16
    else:
        model_kwargs["dtype"] = torch.float32

    model = AutoModelForImageTextToText.from_pretrained(args.model, **model_kwargs)
    processor = AutoProcessor.from_pretrained(args.model)

    print(f"   Model loaded in {time.time() - t0:.1f}s")

    # Process GIFs
    with tempfile.TemporaryDirectory(prefix="autotag_") as tmp_root:
        tmp_path = Path(tmp_root)

        # Download all media
        print(f"⬇  Downloading {len(entries)} files ({args.download_workers} workers)")
        media_map = download_all(entries, tmp_path, args.fps, args.download_workers)
        print(f"   {len(media_map)} files ready for inference")

        # Run inference
        results = dict(data)  # start from full original data
        done = 0
        total = len(media_map)
        inference_times: list[float] = []
        inference_start = time.time()
        for key, content_element in media_map.items():
            done += 1
            remaining = total - done
            avg_time = (
                sum(inference_times) / len(inference_times) if inference_times else 0
            )
            eta_str = (
                f"  ETA: {_fmt_duration(avg_time * remaining)}"
                if inference_times
                else ""
            )
            elapsed_str = _fmt_duration(time.time() - inference_start)
            print(
                f"🏷  [{done}/{total}] ⏱ Elapsed: {elapsed_str}{eta_str}  {key[:60]}..."
            )
            item_t0 = time.time()
            try:
                new_tags = run_inference(model, processor, content_element)
            except Exception as e:
                print("  ✗ Inference failed:")
                traceback.print_exc()
                continue
            item_dur = time.time() - item_t0
            inference_times.append(item_dur)

            if new_tags is None:
                continue

            if args.overwrite or not results[key].get("tags"):
                results[key]["tags"] = new_tags
            else:
                # Merge: case-insensitive dedup
                existing = {t.lower() for t in results[key]["tags"]}
                merged = list(results[key]["tags"])
                for tag in new_tags:
                    if tag.lower() not in existing:
                        merged.append(tag)
                        existing.add(tag.lower())
                results[key]["tags"] = merged

            print(
                f"  ✓ {len(new_tags)} tags ({item_dur:.1f}s): {new_tags[:5]}{'...' if len(new_tags) > 5 else ''}"
            )

        total_elapsed = time.time() - inference_start
        print(
            f"\n⏱  Inference complete in {_fmt_duration(total_elapsed)} ({total} items, avg {total_elapsed / max(total, 1):.1f}s/item)"
        )

    # Write output
    with open(args.output, "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\n✅ Done! Output written to {args.output}")


if __name__ == "__main__":
    main()
