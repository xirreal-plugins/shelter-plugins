import {
   S3Client,
   ListObjectsV2Command,
   DeleteObjectCommand,
   HeadObjectCommand,
   PutObjectCommand,
   HeadBucketCommand,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import xxhash from "xxhash-wasm";
import { uploadState, updateUploadProgress, invalidateDashboardCache } from "./state";

const {
   plugin: { store },
} = shelter;

function debug(...args) {
   if (store.debugLogging) {
      console.log("[ExternalUpload]", ...args);
   }
}

const PREVIEW_SIZE = 256;
export const THUMB_PREFIX = ".thumbs/";
// multipart is considerably slower at uploading small files
const MULTIPART_THRESHOLD = 5 * 1024 * 1024;

const confirmedThumbnails = new Set();
const loadedThumbnails = new Set();

export function markThumbnailLoaded(fileKey) {
   loadedThumbnails.add(fileKey);
}

export function isThumbnailLoaded(fileKey) {
   return loadedThumbnails.has(fileKey);
}

export function formatFileSize(bytes) {
   if (bytes < 1024) return bytes + " bytes";
   else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
   else if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + " MB";
   else return (bytes / 1073741824).toFixed(1) + " GB";
}

export function formatDate(date) {
   const options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
   return new Date(date).toLocaleDateString(undefined, options);
}

let s3Client = null;
let BUCKET_NAME = null;

export function updateS3Client(region, endpoint, accessKeyId, secretAccessKey, bucket) {
   if (!region) {
      region = "us-east-1";
   }

   if (!endpoint || !accessKeyId || !secretAccessKey || !bucket) {
      s3Client = null;
      BUCKET_NAME = null;
      return;
   }

   s3Client = new S3Client({
      region,
      endpoint,
      credentials: {
         accessKeyId,
         secretAccessKey,
      },
   });

   BUCKET_NAME = bucket;
}

export async function testConnection() {
   if (!s3Client || !BUCKET_NAME) {
      return { success: false, error: "S3 client not configured" };
   }

   try {
      await s3Client.send(new HeadBucketCommand({ Bucket: BUCKET_NAME }));
      return { success: true };
   } catch (e) {
      return { success: false, error: e.message || "Connection failed" };
   }
}

let hashPromise = null;

async function getFileHash(file) {
   const { create64 } = await (hashPromise ??= xxhash());

   return new Promise((resolve, reject) => {
      const hash = create64();
      const reader = file.stream().getReader();

      function processChunk({ done, value }) {
         if (done) {
            const hashHex = hash.digest().toString(16).padStart(16, "0");
            resolve(hashHex);
            return;
         }

         hash.update(value);
         reader.read().then(processChunk).catch(reject);
      }

      reader.read().then(processChunk).catch(reject);
   });
}

export function getUrl(file, publicUrl) {
   const key = typeof file === "string" ? file : file.Key;
   if (publicUrl) {
      return `${publicUrl}/${key}`;
   }

   return file.Location;
}

function cacheFilename(key, filename) {
   debug(`Caching filename for ${key}: ${filename}`);
   store.filenameCache = { ...store.filenameCache, [key]: filename };
}

function removeCachedFilename(key) {
   const cache = { ...store.filenameCache };
   delete cache[key];
   store.filenameCache = cache;
}

async function fetchFilenameFromS3(key) {
   if (!s3Client) return key;

   try {
      const response = await s3Client.send(
         new HeadObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
         }),
      );

      const metadata = response.Metadata || {};
      const filename = metadata.filename ? decodeURIComponent(metadata.filename) : key;

      cacheFilename(key, filename);
      return filename;
   } catch (e) {
      debug("Failed to fetch metadata for:", key, e);
      return key;
   }
}

export function createLocalPreviewUrl(file) {
   const isImage = file.type?.startsWith("image/");
   const isVideo = file.type?.startsWith("video/");

   if (!isImage && !isVideo) return null;

   return URL.createObjectURL(file);
}

export function revokeLocalPreviewUrl(url) {
   if (url && url.startsWith("blob:")) {
      URL.revokeObjectURL(url);
   }
}

async function uploadSmallFile(key, body, contentType, metadata, abortSignal) {
   const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: body,
      ContentType: contentType,
      Metadata: metadata,
   });

   return s3Client.send(command, { abortSignal });
}

async function uploadLargeFile(key, body, contentType, metadata, abortController, onProgress) {
   const upload = new Upload({
      client: s3Client,
      params: {
         Bucket: BUCKET_NAME,
         Key: key,
         Body: body,
         ContentType: contentType,
         Metadata: metadata,
      },
      abortController,
      queueSize: 4,
      partSize: 5 * 1024 * 1024,
   });

   if (onProgress) {
      upload.on("httpUploadProgress", onProgress);
   }

   return upload.done();
}

async function generateThumbnail(source, { isImage, isVideo } = {}) {
   const isFile = source instanceof File;
   const url = isFile ? URL.createObjectURL(source) : source;

   debug(`Generating thumbnail for ${url}`, {
      isFile,
      isImage,
      isVideo,
   });

   try {
      return await new Promise((resolve, reject) => {
         const el = document.createElement(isImage ? "img" : "video");
         debug(`Created element ${el}`);
         el.crossOrigin = "anonymous";

         const cleanup = () => {
            if (isFile) URL.revokeObjectURL(url);
         };

         const handleRender = () => {
            debug(`Handle render called`);
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            const width = el.naturalWidth || el.videoWidth;
            const height = el.naturalHeight || el.videoHeight;

            debug(`Source dimensions: ${width}x${height}`);

            const scale = Math.min(PREVIEW_SIZE / width, PREVIEW_SIZE / height, 1);
            canvas.width = width * scale;
            canvas.height = height * scale;

            debug(`Target dimensions: ${canvas.width}x${canvas.height}`);

            ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(
               (blob) => {
                  cleanup();
                  debug(`Thumbnail generated successfully`);
                  resolve(blob);
               },
               "image/webp",
               0.7,
            );
         };

         el.onerror = (err) => {
            cleanup();
            console.error("Thumbnail generation failed", err);
            resolve(null);
         };

         if (isImage) {
            el.onload = handleRender;
         } else if (isVideo) {
            el.preload = "metadata";
            el.muted = true;
            el.onloadedmetadata = () => {
               debug(`Video metadata loaded`);
               el.currentTime = Math.min(1, el.duration / 10);
            };
            el.onseeked = handleRender;
         }

         el.src = url;
      });
   } catch (e) {
      console.error("Thumbnail generation failed", e);
      if (isFile) URL.revokeObjectURL(url);
      return null;
   }
}

async function uploadThumbnail(thumbnailBlob, key, originalFilename) {
   if (!thumbnailBlob || !s3Client) return null;

   const thumbKey = `${THUMB_PREFIX}${key}.webp`;

   try {
      const arrayBuffer = await thumbnailBlob.arrayBuffer();
      await uploadSmallFile(
         thumbKey,
         arrayBuffer,
         "image/webp",
         { originalfilename: encodeURIComponent(originalFilename) },
         null,
      );
      return thumbKey;
   } catch (e) {
      console.error("Failed to upload thumbnail:", e);
      return null;
   }
}

export async function getThumbnailUrl(fileKey, publicUrl) {
   const thumbKey = `${THUMB_PREFIX}${fileKey}.webp`;
   const thumbUrl = getUrl(thumbKey, publicUrl);

   if (confirmedThumbnails.has(fileKey)) {
      return thumbUrl;
   }

   try {
      await s3Client.send(
         new HeadObjectCommand({
            Bucket: BUCKET_NAME,
            Key: thumbKey,
         }),
      );

      debug("Thumbnail exists remotely:", thumbKey);
      confirmedThumbnails.add(fileKey);
      return thumbUrl;
   } catch (e) {
      debug("Thumbnail not found remotely, attempting to generate:", fileKey);

      const extension = fileKey.split(".").pop().toLowerCase();
      const isImage = ["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(extension);
      const isVideo = ["mp4", "webm", "mov", "avi"].includes(extension);

      if (!isImage && !isVideo) {
         debug("File is not an image or video, skipping thumbnail generation");
         return null;
      }

      const fileUrl = getUrl(fileKey, publicUrl);
      const thumbnailBlob = await generateThumbnail(fileUrl, { isImage, isVideo });

      if (thumbnailBlob) {
         debug("Uploading generated thumbnail for:", fileKey);
         const uploadedThumbKey = await uploadThumbnail(thumbnailBlob, fileKey, fileKey);

         if (uploadedThumbKey) {
            debug("Thumbnail uploaded successfully:", thumbUrl);
            confirmedThumbnails.add(fileKey);
            return thumbUrl;
         }
      }

      debug("Failed to generate/upload thumbnail for:", fileKey);
      return null;
   }
}

async function uploadSingleFile(file, fileId, abortController) {
   const hash = await getFileHash(file);
   const extension = file.name.substring(file.name.lastIndexOf("."));
   const key = `${hash}${extension}`;

   const isImage = file.type?.startsWith("image/");
   const isVideo = file.type?.startsWith("video/");

   let thumbnailBlob = null;
   let thumbKey = null;
   if (isImage || isVideo) {
      debug("Generating thumbnail for upload:", file.name);
      thumbnailBlob = await generateThumbnail(file, { isImage, isVideo });
      if (thumbnailBlob) {
         debug("Thumbnail blob generated:", thumbnailBlob.size, "bytes");
         thumbKey = `${THUMB_PREFIX}${key}.webp`;
      }
   }

   const metadata = {
      filename: encodeURIComponent(file.name),
   };

   const contentType = file.type || "application/octet-stream";

   let mainUploadPromise;

   if (file.size <= MULTIPART_THRESHOLD) {
      debug("Using single-call upload for:", file.name, `(${formatFileSize(file.size)})`);
      const arrayBuffer = await file.arrayBuffer();

      mainUploadPromise = uploadSmallFile(key, arrayBuffer, contentType, metadata, abortController?.signal);
      updateUploadProgress(fileId, 50, "uploading");
   } else {
      debug("Using multipart upload for:", file.name, `(${formatFileSize(file.size)})`);

      mainUploadPromise = uploadLargeFile(key, file, contentType, metadata, abortController, (progress) => {
         const percent = (progress.loaded / progress.total) * 100;
         updateUploadProgress(fileId, percent, "uploading");
      });
   }

   const uploadPromises = [mainUploadPromise];

   if (thumbnailBlob && thumbKey) {
      const thumbArrayBuffer = await thumbnailBlob.arrayBuffer();
      const thumbUploadPromise = uploadSmallFile(
         thumbKey,
         thumbArrayBuffer,
         "image/webp",
         { originalfilename: encodeURIComponent(file.name) },
         abortController?.signal,
      );
      uploadPromises.push(thumbUploadPromise);
   }

   await Promise.all(uploadPromises);

   debug("Upload complete:", key);

   cacheFilename(key, file.name);

   return { key };
}

// batch 2 works well, above this it triggers 429s
const UPLOAD_BATCH_SIZE = 2;

export async function uploadFiles(files, onComplete) {
   const { setActiveUploads, setIsUploading, setOverallProgress } = uploadState;

   if (!s3Client || files.length === 0) {
      return { uploadedFiles: [], failedFiles: [] };
   }

   setIsUploading(true);
   setOverallProgress(0);

   const uploadsMap = new Map();
   files.forEach((file, index) => {
      const fileId = `file-${index}-${Date.now()}`;
      const abortController = new AbortController();
      uploadsMap.set(fileId, {
         file,
         progress: 0,
         status: "pending",
         abortController,
         index,
      });
   });
   setActiveUploads(uploadsMap);

   const uploadedFiles = [];
   const failedFiles = [];

   const entries = Array.from(uploadsMap.entries());

   for (let i = 0; i < entries.length; i += UPLOAD_BATCH_SIZE) {
      const batch = entries.slice(i, i + UPLOAD_BATCH_SIZE);

      const batchPromises = batch.map(async ([fileId, uploadInfo]) => {
         updateUploadProgress(fileId, 0, "uploading");

         try {
            const result = await uploadSingleFile(uploadInfo.file, fileId, uploadInfo.abortController);
            updateUploadProgress(fileId, 100, "completed");
            uploadedFiles.push({ ...result, file: uploadInfo.file });
            return result;
         } catch (e) {
            if (e.name === "AbortError" || uploadInfo.abortController.signal.aborted) {
               updateUploadProgress(fileId, 0, "cancelled");
            } else {
               console.error("Upload failed:", e);
               updateUploadProgress(fileId, 0, "failed");
               failedFiles.push({ file: uploadInfo.file, error: e });
            }
            throw e;
         }
      });

      await Promise.allSettled(batchPromises);
   }

   invalidateDashboardCache();

   if (onComplete) {
      onComplete(uploadedFiles, failedFiles);
   }

   return { uploadedFiles, failedFiles };
}

export async function deleteAllThumbnails() {
   if (!s3Client) return { deleted: 0 };

   const response = await s3Client.send(
      new ListObjectsV2Command({
         Bucket: BUCKET_NAME,
         Prefix: THUMB_PREFIX,
      }),
   );

   const thumbnails = response.Contents || [];
   if (thumbnails.length === 0) {
      return { deleted: 0 };
   }

   debug(`Deleting ${thumbnails.length} thumbnails`);

   const BATCH_SIZE = 10;
   let deleted = 0;

   for (let i = 0; i < thumbnails.length; i += BATCH_SIZE) {
      const batch = thumbnails.slice(i, i + BATCH_SIZE);

      await Promise.all(
         batch.map(async (thumb) => {
            try {
               await s3Client.send(
                  new DeleteObjectCommand({
                     Bucket: BUCKET_NAME,
                     Key: thumb.Key,
                  }),
               );
               deleted++;
            } catch (e) {
               debug("Failed to delete thumbnail:", thumb.Key, e);
            }
         }),
      );
   }

   confirmedThumbnails.clear();
   loadedThumbnails.clear();

   debug(`Deleted ${deleted} thumbnails`);
   return { deleted };
}

export async function getAllFiles() {
   if (!s3Client) return [];

   const response = await s3Client.send(
      new ListObjectsV2Command({
         Bucket: BUCKET_NAME,
      }),
   );

   const allFiles = response.Contents || [];
   const files = allFiles.filter((file) => !file.Key.startsWith(THUMB_PREFIX));

   const manifestData = {};
   const uncachedFiles = files.filter((file) => !store.filenameCache[file.Key]);

   if (uncachedFiles.length > 0) {
      // fetch filenames in batches of 10, otherwise 429
      debug(`Fetching metadata for ${uncachedFiles.length} uncached files`);
      const BATCH_SIZE = 10;

      for (let i = 0; i < uncachedFiles.length; i += BATCH_SIZE) {
         const batch = uncachedFiles.slice(i, i + BATCH_SIZE);
         await Promise.all(batch.map((file) => fetchFilenameFromS3(file.Key)));
      }
   }

   for (const file of files) {
      manifestData[file.Key] = {
         filename: store.filenameCache[file.Key] || file.Key,
         size: file.Size,
         uploadedAt: file.LastModified?.toISOString(),
      };
   }

   uploadState.setManifest(manifestData);

   return allFiles.sort((a, b) => new Date(b.LastModified) - new Date(a.LastModified));
}

export async function deleteFile(key) {
   if (!s3Client) return;

   await s3Client.send(
      new DeleteObjectCommand({
         Bucket: BUCKET_NAME,
         Key: key,
      }),
   );

   try {
      await s3Client.send(
         new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: `${THUMB_PREFIX}${key}.webp`,
         }),
      );
   } catch {}

   removeCachedFilename(key);
}

export async function refreshDashboard() {
   const { setDashboardFiles, setDashboardLoading, setDashboardLoaded } = uploadState;

   setDashboardLoading(true);

   try {
      const files = await getAllFiles();

      setDashboardFiles(files);
      setDashboardLoaded(true);
   } catch (e) {
      console.error("Failed to refresh dashboard:", e);
   } finally {
      setDashboardLoading(false);
   }
}
