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

Requires Python 3.10+, **ffmpeg**, and a GPU supported by [vLLM](https://docs.vllm.ai/).

```sh
cd autotagger
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip3 install -r requirements.txt
```

### Model variants

| Model | VRAM needed | Quality |
|---|---|---|
| `Qwen/Qwen3.5-4B` | ~10 GB | Good for basic tagging |
| `Qwen/Qwen3.5-9B` (default) | ~19 GB | Strong all-rounder |

## Workflow

### 1. Export tags from Discord

Go to shelter settings, find Favorite Search and click the gear icon, and click the **Export tags** button. This downloads a `gif-tags.json` file.

### 2. Run the auto-tagger

```sh
python3 autotag.py gif-tags.json
```

This will:

1. Start a vLLM server with the model
2. Download each GIF/video to a temp directory
3. Extract frames and send them to the server for inference
4. Write results to `gif-tags-tagged.json`
5. Shut down the server when done

The first run downloads the model (~19 GB for 9B, cached by HuggingFace for future runs).

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
| `--model ID` | HuggingFace model ID (default: `Qwen/Qwen3.5-9B`) |
| `--fps N` | Video frame sampling rate in frames per second (default: 2.0) |
| `--download-workers N` | Parallel download threads (default: 8) |
| `--vllm-args ...` | Extra arguments passed to vLLM (must be last) |

## Examples

Full pipeline on all GIFs:
```sh
python3 autotag.py gif-tags.json
```

Only tag GIFs that don't have tags yet:
```sh
python3 autotag.py gif-tags.json --skip-tagged
```

Use a smaller model:
```sh
python3 autotag.py gif-tags.json --model Qwen/Qwen3.5-4B
```

Pass extra vLLM options (e.g. limit GPU memory):
```sh
python3 autotag.py gif-tags.json --vllm-args --gpu-memory-utilization 0.8
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
