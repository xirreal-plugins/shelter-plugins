# GIF Auto-Tagger

Automatically tag your Discord GIFs using **Florence-2**, which does captioning, OCR, and object detection all at once, with full CUDA/MPS GPU acceleration.

Designed to work with the [Favorite GIF Search](https://shelter.xirreal.dev/favoriteSearch) shelter plugin.

| Task | What it does | Example output |
|---|---|---|
| **Caption** | Short natural language description | `a cat sitting on a keyboard` |
| **Detailed caption** | Longer, richer description | `a fluffy orange tabby cat sitting on a mechanical keyboard next to a monitor` |
| **OCR** | Reads visible text in the image | `one day we will answer to god`, `bottom text` |
| **Object detection** | Identifies objects and their labels | `cat`, `keyboard`, `monitor` |

## Setup

Requires Python 3.10+.

```sh
cd autotagger
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### GPU support

- **NVIDIA GPU**: Install PyTorch with CUDA — `pip install torch --index-url https://download.pytorch.org/whl/cu124`
- **Apple Silicon**: MPS acceleration works out of the box with the default PyTorch install
- **CPU only**: Works fine, just slower.

## Workflow

### 1. Export tags from Discord

Go to shelter settings, find Favorite Search and click the gear icon, and click the **Export tags** button. This downloads a `gif-tags.json` file.

### 2. Run the auto-tagger

```sh
python autotag.py gif-tags.json
```

This will:

1. Download each GIF/video to a temp directory
2. Extract a representative frame (supports `.gif`, `.mp4`, and static images)
3. Run Florence-2 captioning, OCR, and object detection
4. Write results to `gif-tags-tagged.json`

The first run downloads the model (~500 MB, cached by HuggingFace for future runs).

### 3. Import tags back into Discord

Back in Discord, same as before and click the **Import tags** button. Select the output file. New tags are merged with any existing manual tags — nothing is overwritten by default.

## Options

```
python autotag.py <input.json> [options]
```

| Option | Description |
|---|---|
| `-o`, `--output PATH` | Output file path (default: `<input>-tagged.json`) |
| `--skip-tagged` | Skip GIFs that already have tags |
| `--overwrite` | Replace existing tags instead of merging |
| `--ocr-only` | Only run OCR (skip captioning and object detection) |
| `--caption-only` | Only run captioning (skip OCR and object detection) |
| `--no-objects` | Skip object detection (still runs captioning and OCR) |
| `--model ID` | HuggingFace model ID (default: `microsoft/Florence-2-base`) |
| `--device DEVICE` | Force device: `cuda`, `mps`, or `cpu` (default: auto) |
| `--download-workers N` | Parallel download threads (default: 8) |

## Examples

Full pipeline on all GIFs:
```sh
python autotag.py gif-tags.json
```

Only tag GIFs that don't have tags yet:
```sh
python autotag.py gif-tags.json --skip-tagged
```

Fast OCR-only pass (finds text in memes):
```sh
python autotag.py gif-tags.json --ocr-only
```

Use the larger Florence-2 variant for better accuracy:
```sh
python autotag.py gif-tags.json --model microsoft/Florence-2-large
```

Custom output path:
```sh
python autotag.py gif-tags.json -o my-tagged-gifs.json
```

## File Format

The JSON maps each GIF's store key to an object with `src` (the downloadable media URL) and `tags`:

```json
{
  "https://tenor.com/view/funny-cat-12345": {
    "src": "https://media.tenor.com/.../funny-cat.gif",
    "tags": ["a cat sitting on a keyboard", "cat", "keyboard", "sitting"]
  },
  "https://tenor.com/view/meme-67890": {
    "src": "https://media.tenor.com/.../meme.mp4",
    "tags": ["when you mass tag", "mass", "tag"]
  },
  "https://tenor.com/view/untouched-11111": {
    "src": "https://media.tenor.com/.../untouched.gif",
    "tags": []
  }
}
```

The autotagger downloads from `src`, runs inference, and writes the results back in the same format. The plugin's import reads the `tags` arrays and merges them with existing manual tags (case-insensitive deduplication).
