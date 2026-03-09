# GIF Auto-Tagger

Automatically tag your Discord GIFs using **Qwen3.5**, a unified vision-language model that natively understands video, reads text, recognises meme and infers tone.

Designed to work with the [Favorite GIF Search](https://shelter.xirreal.dev/favoriteSearch) shelter plugin.

## How

| Field | Example |
|---|---|
| **caption** | `a cat kicking another cat off a table` |
| **ocr** | `when monday hits` |
| **meme** | `but here's the kicker` |
| **mood** | `chaotic` |
| **tags** | `["cat", "kicking", "table", "but here's the kicker", "chaotic", ...]` |

All fields are merged into a flat tag list for search.

## Setup

Requires Python 3.10+ and **ffmpeg** (for converting animated GIFs to video).

```sh
cd autotagger
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip3 install -r requirements.txt
```

### GPU support

- **NVIDIA GPU** (recommended): Install PyTorch with CUDA - For example, `pip3 install --force-reinstall torch torchvision torchcodec --index-url https://download.pytorch.org/whl/cu130`. Change cu130 to your CUDA version (use nvidia-smi).
- **Apple Silicon**: MPS acceleration works out of the box with the default PyTorch install
- **CPU only**: Works, but significantly slower. Consider the 2B model.

For best performance on NVIDIA GPUs and CUDA 12.8, consider using flash-linear-attention:
`pip3 install causal_conv1d flash-linear-attention`

### Model variants

| Model | VRAM needed | Quality |
|---|---|---|
| `Qwen/Qwen3.5-2B` | ~5 GB | Good for basic tagging |
| `Qwen/Qwen3.5-4B` (default) | ~10 GB | Strong all-rounder |
| `Qwen/Qwen3.5-9B` | ~19 GB | Best meme/cultural understanding |
| `Qwen/Qwen3.5-35B-A3B` | ~22 GB (4-bit) | MoE with fast inference, excellent quality |

## Workflow

### 1. Export tags from Discord

Go to shelter settings, find Favorite Search and click the gear icon, and click the **Export tags** button. This downloads a `gif-tags.json` file.

### 2. Run the auto-tagger

```sh
python3 autotag.py gif-tags.json
```

This will:

1. Download each GIF/video to a temp directory
2. Shove the media down Qwen3.5's throat
3. Generate tags via a single prompt
4. Write results to `gif-tags-tagged.json`

The first run downloads the model (~10 GB for 4B, cached by HuggingFace for future runs).

### 3. Import tags back into Discord

Back in Discord, same as before and click the **Import tags** button. Select the output file. New tags are merged with any existing manual tags — nothing is overwritten by default.

## Options

```
python3 autotag.py <input.json> [options]
```

| Option | Description |
|---|---|
| `-o`, `--output PATH` | Output file path (default: `<input>-tagged.json`) |
| `--skip-tagged` | Skip GIFs that already have tags |
| `--overwrite` | Replace existing tags instead of merging |
| `--model ID` | HuggingFace model ID (default: `Qwen/Qwen3.5-4B`) |
| `--device DEVICE` | Force device: `cuda`, `mps`, or `cpu` (default: auto) |
| `--fps N` | Video frame sampling rate in frames per second (default: 2.0). Higher = more frames = better temporal understanding but slower/more VRAM |
| `--download-workers N` | Parallel download threads (default: 8) |

## Examples

Full pipeline on all GIFs:
```sh
python3 autotag.py gif-tags.json
```

Only tag GIFs that don't have tags yet:
```sh
python3 autotag.py gif-tags.json --skip-tagged
```

Better accuracy with the 9B model:
```sh
python3 autotag.py gif-tags.json --model Qwen/Qwen3.5-9B
```

Higher frame rate for fast-paced GIFs:
```sh
python3 autotag.py gif-tags.json --fps 4
```

Lighter model for limited hardware:
```sh
python3 autotag.py gif-tags.json --model Qwen/Qwen3.5-2B
```

Custom output path:
```sh
python3 autotag.py gif-tags.json -o my-tagged-gifs.json
```

## File format

The JSON maps each GIF's store key to an object with `src` (the downloadable media URL) and `tags`:

```json
{
  "https://tenor.com/view/funny-cat-12345": {
    "src": "https://media.tenor.com/.../funny-cat.gif",
    "tags": ["a cat sitting on a keyboard", "cat", "keyboard", "wholesome"]
  },
  "https://tenor.com/view/meme-67890": {
    "src": "https://media.tenor.com/.../meme.mp4",
    "tags": ["when monday hits", "drake meme", "funny", "monday", "drake"]
  }
}
```

The autotagger downloads from `src`, runs inference, and writes the results back in the same format. The plugin's import reads the `tags` arrays and merges them with existing manual tags (case-insensitive deduplication).
