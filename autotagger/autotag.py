#!/usr/bin/env python3
"""
GIF Auto-Tagger — tag Discord GIFs using Qwen3.5 via vLLM.

Launches a vLLM server as a subprocess, sends frames via the OpenAI-compatible
API, and writes structured tags back into the JSON format expected by the
Favorite GIF Search shelter plugin.

Usage:
    python autotag.py gif-tags.json --model Qwen/Qwen3.5-9B
"""

import argparse
import atexit
import base64
import json
import os
import re
import shutil
import signal
import subprocess
import sys
import tempfile
import time
import traceback
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import requests
from openai import OpenAI
from PIL import Image

# ─── Prompt ──────────────────────────────────────────────────────────────────

SYSTEM_PROMPT = """\
You are an expert multimedia tagging assistant specializing in organizing Discord meme and GIF collections. Your task is to analyze short animated images, GIFs, or video clips and extract highly accurate metadata for searchability.

You MUST return a single, valid JSON object. Do not wrap the JSON in markdown code blocks (e.g., do not use ```json). Do not include any conversational text or commentary before or after the JSON.

### OUTPUT SCHEMA
Your output must strictly adhere to the following JSON structure:
{
  "caption": "string",
  "ocr": "string",
  "meme": "string",
  "mood": "string",
  "characters": ["string"],
  "tags": ["string"]
}

### FIELD GUIDELINES
1. "caption": A concise, natural-language description of the visual action (1-2 sentences).
2. "ocr": Transcribe any visible text. Use an empty string ("") if none is present.
3. "meme": The specific name of the meme template or cultural reference (e.g., "distracted boyfriend", "this is fine dog"). Use an empty string ("") if unrecognized.
4. "mood": 1-2 words capturing the overall vibe (e.g., "chaotic", "wholesome", "passive aggressive").
5. "characters": A list of recognized public figures, fictional characters, or distinct entities. Use an empty list ([]) if none. Do not hallucinate names; leave empty if unsure.
6. "tags": A comprehensive, flat list of search keywords (aim for 5-20).
   - INCLUDE: Objects, actions, emotions, colors, settings, character names, meme names, and relevant OCR words.
   - DO NOT INCLUDE: Overly generic terms (e.g., "video", "gif", "image", "moving").
   - DO NOT INCLUDE: Redundant variations (e.g., choose "cat" OR "cats", not both).
   - NOTE: Explicit content is permitted and should be tagged accurately and neutrally without judgment.

### STRICT FORMATTING RULES
- ALL string values across ALL fields must be strictly lowercase.
- The output must be raw JSON only.
- Ensure all brackets and quotes are properly closed to output valid JSON.
"""

USER_PROMPT = "Analyze this media and output the JSON."


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
            try:
                img.seek(1)
                return False  # Has multiple frames = animated
            except EOFError:
                return True  # Only one frame = static
    except Exception:
        return False


def convert_to_mp4(src: Path, dest: Path) -> Path:
    """Convert GIF/WebP/any format to MP4 using ffmpeg for frame extraction.

    Animated WebPs are first extracted to PNG frames via Pillow (since ffmpeg's
    WebP demuxer often chokes on them), then stitched into an MP4.
    """
    try:
        with Image.open(src) as img:
            if getattr(img, "is_animated", False) and img.format == "WEBP":
                frames_dir = dest.parent / "frames"
                frames_dir.mkdir(exist_ok=True)
                for i in range(img.n_frames):
                    img.seek(i)
                    frame = img.convert("RGB")
                    frame.save(frames_dir / f"{i:05d}.png")
                duration = img.info.get("duration", 50) or 50
                fps = 1000 / max(duration, 1)
                fps = max(1, min(fps, 60))
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
        pass

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


def extract_frames(video_path: Path, dest_dir: Path, fps: float) -> list[Path]:
    """Extract frames from a video at the given FPS rate."""
    frames_dir = dest_dir / "extracted_frames"
    frames_dir.mkdir(exist_ok=True)
    cmd = [
        "ffmpeg",
        "-y",
        "-i",
        str(video_path),
        "-vf",
        f"fps={fps}",
        "-loglevel",
        "error",
        str(frames_dir / "frame_%04d.png"),
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    return sorted(frames_dir.glob("*.png"))


def _convert_to_static_image(src: Path, dest_dir: Path) -> Path:
    """Convert any image file to PNG via Pillow as a fallback."""
    png_path = dest_dir / "fallback.png"
    with Image.open(src) as img:
        img.convert("RGB").save(png_path, "PNG")
    return png_path


def image_to_data_uri(path: Path) -> str:
    """Read an image file and return a base64 data URI."""
    with open(path, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    suffix = path.suffix.lower()
    mime = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".webp": "image/webp",
    }.get(suffix, "image/png")
    return f"data:{mime};base64,{data}"


def prepare_media(url: str, tmp_dir: Path, fps: float) -> list[Path]:
    """Download and prepare media, returning a list of image frame paths."""
    ext = _guess_extension(url)
    raw_path = tmp_dir / f"raw{ext}"
    download_file(url, raw_path)

    # Static images → single frame
    if is_static_image(raw_path):
        png_path = tmp_dir / "static.png"
        with Image.open(raw_path) as img:
            img.convert("RGB").save(png_path, "PNG")
        return [png_path]

    # Animated content → convert to mp4 then extract frames
    mp4_path = tmp_dir / "converted.mp4"
    try:
        convert_to_mp4(raw_path, mp4_path)
        frames = extract_frames(mp4_path, tmp_dir, fps)
        if frames:
            return frames
    except subprocess.CalledProcessError:
        pass

    # Fallback: treat as static image
    try:
        png_path = _convert_to_static_image(raw_path, tmp_dir)
        return [png_path]
    except Exception:
        raise


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
    fence_match = re.search(r"```(?:json)?\s*\n?(.*?)```", text, re.DOTALL)
    if fence_match:
        text = fence_match.group(1).strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass
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


# ─── vLLM server management ──────────────────────────────────────────────────

VLLM_PORT = 8182  # Use a non-standard port to avoid conflicts


def start_vllm_server(model: str, extra_args: list[str] | None = None) -> subprocess.Popen:
    """Launch vLLM serve as a subprocess and wait until it's ready."""
    url = f"http://localhost:{VLLM_PORT}/v1"
    cmd = [
        sys.executable, "-m", "vllm.entrypoints.openai.api_server",
        "--model", model,
        "--port", str(VLLM_PORT),
        "--max-model-len", "8192",
    ]
    if extra_args:
        cmd.extend(extra_args)

    print(f"🚀 Starting vLLM server: {model}")
    print(f"   Command: {' '.join(cmd)}")

    proc = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
    )

    # Ensure cleanup on exit
    def _cleanup():
        if proc.poll() is None:
            print("\n🛑 Shutting down vLLM server...")
            proc.terminate()
            try:
                proc.wait(timeout=10)
            except subprocess.TimeoutExpired:
                proc.kill()

    atexit.register(_cleanup)
    signal.signal(signal.SIGINT, lambda *_: sys.exit(1))
    signal.signal(signal.SIGTERM, lambda *_: sys.exit(1))

    # Wait for the server to become ready
    health_url = f"http://localhost:{VLLM_PORT}/health"
    print("   Waiting for server to be ready", end="", flush=True)
    deadline = time.time() + 300  # 5 min timeout for model loading
    while time.time() < deadline:
        # Check if process died
        if proc.poll() is not None:
            # Drain remaining output
            remaining = proc.stdout.read() if proc.stdout else ""
            print(f"\n   ✗ vLLM server exited with code {proc.returncode}")
            if remaining:
                for line in remaining.strip().splitlines()[-20:]:
                    print(f"     {line}")
            sys.exit(1)
        try:
            r = requests.get(health_url, timeout=2)
            if r.status_code == 200:
                print(" ✓")
                print(f"   Server ready at {url}")
                return proc
        except requests.ConnectionError:
            pass
        print(".", end="", flush=True)
        time.sleep(2)

    print("\n   ✗ Timed out waiting for vLLM server")
    proc.terminate()
    sys.exit(1)


# ─── Model inference ─────────────────────────────────────────────────────────


def _generate_text(client: OpenAI, frame_paths: list[Path], model: str) -> str:
    """Send frames to the vLLM server and return raw output text."""
    content: list[dict] = []

    for frame_path in frame_paths:
        data_uri = image_to_data_uri(frame_path)
        content.append(
            {"type": "image_url", "image_url": {"url": data_uri}},
        )

    content.append({"type": "text", "text": USER_PROMPT})

    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": content},
        ],
        max_tokens=1024,
        temperature=0.0,
    )

    output_text = response.choices[0].message.content or ""

    # Strip thinking tags if the model produced them
    think_match = re.search(r"</think>\s*(.*)", output_text, re.DOTALL)
    if think_match:
        output_text = think_match.group(1).strip()

    return output_text


def run_inference(
    client: OpenAI,
    frame_paths: list[Path],
    model: str,
    max_retries: int = 2,
) -> list[str] | None:
    """Run inference with retry on JSON parse failure. Returns None if all attempts fail."""
    for attempt in range(1, max_retries + 1):
        output_text = _generate_text(client, frame_paths, model)
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
) -> dict[str, list[Path]]:
    """Download and prepare all media files in parallel. Returns key→frame_paths map."""
    results = {}
    total = len(entries)

    def _process(key: str, src: str) -> tuple[str, list[Path] | None]:
        item_dir = tmp_root / key.replace("/", "_").replace(":", "_")[:120]
        item_dir.mkdir(parents=True, exist_ok=True)
        try:
            frames = prepare_media(src, item_dir, fps)
            return key, frames
        except Exception as e:
            print(f"  ✗ Download/convert failed for {key}: {e}")
            return key, None

    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(_process, k, v["src"]): k for k, v in entries.items()}
        done = 0
        for future in as_completed(futures):
            done += 1
            key, frames = future.result()
            if frames is not None:
                results[key] = frames
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
        default="Qwen/Qwen3.5-9B",
        help="HuggingFace model ID for vLLM (default: Qwen/Qwen3.5-9B)",
    )
    parser.add_argument(
        "--vllm-args",
        nargs=argparse.REMAINDER,
        default=[],
        help="Extra arguments to pass to vLLM server (e.g. --vllm-args --quantization awq --gpu-memory-utilization 0.9)",
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

    # Start vLLM server
    vllm_proc = start_vllm_server(args.model, args.vllm_args or None)
    server_url = f"http://localhost:{VLLM_PORT}/v1"
    client = OpenAI(base_url=server_url, api_key="no-key-required")

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
        for key, frame_paths in media_map.items():
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
                new_tags = run_inference(client, frame_paths, args.model)
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
