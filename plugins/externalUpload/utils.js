import { S3Client, ListObjectsV2Command, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import xxhash from "xxhash-wasm";

const previewSize = 256;

export async function getFilePreview(file, isImage, isVideo, publicUrl) {
   const url = file.Key ? getUrl(file, publicUrl) : URL.createObjectURL(file);

   if (isImage || file?.type?.startsWith("image/")) {
      return new Promise((resolve) => {
         const img = document.createElement("img");
         img.crossOrigin = "anonymous";
         img.src = url;

         img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            let scale = Math.min(previewSize / img.width, previewSize / img.height, 1);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(img.src);
            resolve(canvas.toDataURL("image/webp"));
         };

         img.onerror = () => resolve(null);
      });
   }

   if (isVideo || file?.type?.startsWith("video/")) {
      return new Promise((resolve) => {
         const video = document.createElement("video");
         video.crossOrigin = "anonymous";
         video.preload = "metadata";
         video.src = url;

         video.onloadedmetadata = () => {
            video.currentTime = 1;
         };

         video.onseeked = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            let scale = Math.min(previewSize / video.videoWidth, previewSize / video.videoHeight, 1);
            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(video.src);
            resolve(canvas.toDataURL("image/webp"));
         };

         video.onerror = () => resolve(null);
      });
   }

   return null;
}

export function formatFileSize(bytes) {
   if (bytes < 1024) return bytes + " bytes";
   else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
   else if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + " MB";
   else return (bytes / 1073741824).toFixed(1) + " GB";
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

let hashPromise = null;

async function getUUID(file) {
   const { create64 } = await (hashPromise ??= xxhash());

   return new Promise((resolve, reject) => {
      const hash = create64();
      const reader = file.stream().getReader();

      function processChunk({ done, value }) {
         if (done) {
            const hashHex = hash.digest().toString("16");
            const extension = file.name.substring(file.name.lastIndexOf("."));
            resolve(`${hashHex}${extension}`);
            return;
         }

         hash.update(value);
         reader.read().then(processChunk);
      }

      reader.read().then(processChunk).catch(reject);
   });
}

function getTotalUploadedSize(uploadedSizes) {
   return Object.values(uploadedSizes).reduce((acc, size) => acc + size, 0);
}

export async function uploadFiles(files, _previews, onProgress) {
   const totalSize = files.reduce((acc, file) => acc + file.size, 0);
   let uploadedSizes = {};
   const previews = {};

   const uploadPromises = files.map(async (file, index) => {
      const name = await getUUID(file);
      const upload = new Upload({
         client: s3Client,
         params: { Bucket: BUCKET_NAME, Key: name, Body: file },
      });

      upload.on("httpUploadProgress", (progress) => {
         uploadedSizes[name] = progress.loaded;
         onProgress(getTotalUploadedSize(uploadedSizes) / totalSize);
      });

      const uploadPromise = upload.done();
      uploadPromise.catch(() => {
         uploadedSizes[name] = file.size;
         onProgress(getTotalUploadedSize(uploadedSizes) / totalSize);
      });

      previews[name] = _previews[index];

      return uploadPromise;
   });

   return { uploadedFiles: Promise.allSettled(uploadPromises), previewsToSave: previews };
}

export async function getAllFiles() {
   const response = await s3Client.send(
      new ListObjectsV2Command({
         Bucket: BUCKET_NAME,
      }),
   );

   return response.Contents.sort((a, b) => b.LastModified - a.LastModified);
}

export async function deleteFile(key) {
   await s3Client.send(
      new DeleteObjectCommand({
         Bucket: BUCKET_NAME,
         Key: key,
      }),
   );
}

export function formatDate(date) {
   return new Date(date).toLocaleString();
}

export function getUrl(file, publicUrl) {
   if (publicUrl) {
      return `${publicUrl}/${file.Key}`;
   } else {
      return file.Location;
   }
}
