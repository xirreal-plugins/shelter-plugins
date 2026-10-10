const MAX_BYTES = 32 * 1024 * 1024;
const FRACTIONS = [0.1, 0.25, 0.5, 0.75, 0.9];

export function mediaUrl(src) {
   const url = new URL(src);
   if (!["https:", "http:"].includes(url.protocol)) throw new Error("This favorite has no downloadable media URL.");
   const tenor =
      /^images-ext-\d+\.discordapp\.net$/i.test(url.hostname) &&
      url.pathname.match(/^\/external\/[^/]+\/https\/(media\.tenor\.com\/.+\.(?:mp4|webm))$/i);
   return tenor ? new URL(`https://${tenor[1]}`) : url;
}

export function sampleIndices(count) {
   if (!Number.isInteger(count) || count < 1) throw new Error("This GIF has no decodable frames.");
   return [...new Set(FRACTIONS.map((fraction) => Math.min(count - 1, Math.floor(count * fraction))))];
}

function captureFrame(image, width, height) {
   if (!width || !height) throw new Error("This GIF has no decodable frame.");
   const scale = Math.min(1, 768 / Math.max(width, height));
   const canvas = document.createElement("canvas");
   canvas.width = Math.max(1, Math.round(width * scale));
   canvas.height = Math.max(1, Math.round(height * scale));
   canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
   return canvas.toDataURL("image/jpeg", 0.9);
}

function waitForMedia(media, event, signal, start) {
   return new Promise((resolve, reject) => {
      const cleanup = () => {
         media.removeEventListener(event, ready);
         media.removeEventListener("error", failed);
         signal.removeEventListener("abort", aborted);
      };
      const ready = () => {
         cleanup();
         resolve();
      };
      const failed = () => {
         cleanup();
         reject(new Error("Discord's media preview could not be decoded."));
      };
      const aborted = () => {
         cleanup();
         reject(signal.reason);
      };
      signal.throwIfAborted();
      media.addEventListener(event, ready, { once: true });
      media.addEventListener("error", failed, { once: true });
      signal.addEventListener("abort", aborted, { once: true });
      start();
   });
}

async function videoFrames(blob, signal) {
   const video = document.createElement("video");
   const url = URL.createObjectURL(blob);
   video.muted = true;
   video.preload = "auto";
   try {
      await waitForMedia(video, "loadeddata", signal, () => {
         video.src = url;
      });
      if (!Number.isFinite(video.duration) || video.duration <= 0)
         throw new Error("This video has no readable duration.");
      const frames = [];
      for (const fraction of FRACTIONS) {
         await waitForMedia(video, "seeked", signal, () => {
            video.currentTime = video.duration * fraction;
         });
         signal.throwIfAborted();
         frames.push(captureFrame(video, video.videoWidth, video.videoHeight));
      }
      return frames;
   } finally {
      video.pause();
      video.removeAttribute("src");
      video.load();
      URL.revokeObjectURL(url);
   }
}

export async function extractFrames(src, signal) {
   const url = mediaUrl(src);
   const timedSignal = AbortSignal.any([signal, AbortSignal.timeout(30000)].filter(Boolean));
   let response;
   try {
      response = await fetch(url, { signal: timedSignal, credentials: "omit" });
   } catch {
      if (timedSignal.aborted) throw timedSignal.reason;
      throw new Error(
         "Cannot download this GIF. Its URL may have expired or the media server may block downloads from Discord.",
      );
   }
   if (!response.ok) throw new Error(`GIF download failed (${response.status}).`);
   const chunks = [];
   let size = 0;
   const reader = response.body.getReader();
   try {
      while (true) {
         const { value, done } = await reader.read();
         if (done) break;
         size += value.byteLength;
         if (size > MAX_BYTES) throw new Error("This GIF exceeds the 32 MB download limit.");
         chunks.push(value);
      }
   } finally {
      await reader.cancel();
   }
   timedSignal.throwIfAborted();
   let type = response.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
   if (!type || type === "application/octet-stream") {
      const extension = url.pathname.split(".").pop().toLowerCase();
      type = {
         gif: "image/gif",
         webp: "image/webp",
         avif: "image/avif",
         png: "image/png",
         jpg: "image/jpeg",
         jpeg: "image/jpeg",
         mp4: "video/mp4",
         webm: "video/webm",
      }[extension];
   }
   const blob = new Blob(chunks, { type });
   if (type?.startsWith("video/")) return videoFrames(blob, timedSignal);
   if (!type?.startsWith("image/")) throw new Error("This URL did not return a supported image or video.");
   if (typeof ImageDecoder === "function" && (await ImageDecoder.isTypeSupported(type))) {
      const decoder = new ImageDecoder({ data: await blob.arrayBuffer(), type });
      const cancel = () => decoder.close();
      timedSignal.addEventListener("abort", cancel, { once: true });
      try {
         await decoder.tracks.ready;
         await decoder.completed;
         const frames = [];
         for (const frameIndex of sampleIndices(decoder.tracks.selectedTrack.frameCount)) {
            timedSignal.throwIfAborted();
            const { image } = await decoder.decode({ frameIndex });
            try {
               frames.push(captureFrame(image, image.displayWidth, image.displayHeight));
            } finally {
               image.close();
            }
         }
         return frames;
      } finally {
         timedSignal.removeEventListener("abort", cancel);
         decoder.close();
      }
   }
   const image = await createImageBitmap(blob);
   try {
      timedSignal.throwIfAborted();
      return [captureFrame(image, image.width, image.height)];
   } finally {
      image.close();
   }
}
