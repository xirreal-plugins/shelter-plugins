import { revokeLocalPreviewUrl, THUMB_PREFIX } from "./utils";

const {
   solid: { createSignal, createRoot },
} = shelter;

export const uploadState = createRoot(() => {
   const [pendingFiles, setPendingFiles] = createSignal([]);
   const [pendingPreviews, setPendingPreviews] = createSignal([]);
   const [activeUploads, setActiveUploads] = createSignal(new Map());
   const [overallProgress, setOverallProgress] = createSignal(0);
   const [isUploading, setIsUploading] = createSignal(false);
   const [dashboardFiles, setDashboardFiles] = createSignal([]);
   const [dashboardLoading, setDashboardLoading] = createSignal(false);
   const [dashboardLoaded, setDashboardLoaded] = createSignal(false);

   const [searchQuery, setSearchQuery] = createSignal("");
   const [sortBy, setSortBy] = createSignal("date"); // date, size, name
   const [sortOrder, setSortOrder] = createSignal("desc"); // asc, desc

   const [manifest, setManifest] = createSignal({});

   return {
      pendingFiles,
      setPendingFiles,
      pendingPreviews,
      setPendingPreviews,
      activeUploads,
      setActiveUploads,
      overallProgress,
      setOverallProgress,
      isUploading,
      setIsUploading,
      dashboardFiles,
      setDashboardFiles,
      dashboardLoading,
      setDashboardLoading,
      dashboardLoaded,
      setDashboardLoaded,
      searchQuery,
      setSearchQuery,
      sortBy,
      setSortBy,
      sortOrder,
      setSortOrder,
      manifest,
      setManifest,
   };
});

export function addPendingFiles(files) {
   const { pendingFiles, setPendingFiles } = uploadState;
   setPendingFiles([...pendingFiles(), ...files]);
}

export function cancelUpload(fileId) {
   const { activeUploads, setActiveUploads } = uploadState;
   const uploads = activeUploads();
   const upload = uploads.get(fileId);

   if (upload && upload.abortController) {
      upload.abortController.abort();
      const newUploads = new Map(uploads);
      newUploads.set(fileId, { ...upload, status: "cancelled" });
      setActiveUploads(newUploads);
   }
}

export function cancelAllUploads() {
   const { activeUploads, setActiveUploads, setIsUploading } = uploadState;
   const uploads = activeUploads();

   for (const [fileId, upload] of uploads) {
      if (upload.abortController && upload.status === "uploading") {
         upload.abortController.abort();
      }
   }

   setActiveUploads(new Map());
   setIsUploading(false);
}

export function updateUploadProgress(fileId, progress, status = "uploading") {
   const { activeUploads, setActiveUploads, setOverallProgress } = uploadState;
   const uploads = new Map(activeUploads());
   const upload = uploads.get(fileId);

   if (upload) {
      uploads.set(fileId, { ...upload, progress, status });
      setActiveUploads(uploads);

      let totalProgress = 0;
      let count = 0;
      for (const [, u] of uploads) {
         if (u.status !== "cancelled") {
            totalProgress += u.progress;
            count++;
         }
      }
      setOverallProgress(count > 0 ? totalProgress / count : 0);
   }
}

export function resetUploadState() {
   const { setActiveUploads, setOverallProgress, setIsUploading } = uploadState;
   setActiveUploads(new Map());
   setOverallProgress(0);
   setIsUploading(false);
}

export function invalidateDashboardCache() {
   const { setDashboardLoaded } = uploadState;
   setDashboardLoaded(false);
}

export function getFilteredSortedFiles() {
   const { dashboardFiles, searchQuery, sortBy, sortOrder, manifest } = uploadState;

   let files = dashboardFiles().filter((file) => !file.Key.startsWith(THUMB_PREFIX));
   const manifestData = manifest();
   const query = searchQuery().toLowerCase().trim();

   if (query) {
      files = files.filter((file) => {
         const meta = manifestData[file.Key];
         const filename = meta?.filename || file.Key;
         return filename.toLowerCase().includes(query);
      });
   }

   const order = sortOrder() === "asc" ? 1 : -1;
   const sortKey = sortBy();

   files.sort((a, b) => {
      switch (sortKey) {
         case "name": {
            const nameA = (manifestData[a.Key]?.filename || a.Key).toLowerCase();
            const nameB = (manifestData[b.Key]?.filename || b.Key).toLowerCase();
            return nameA.localeCompare(nameB) * order;
         }
         case "size":
            return (a.Size - b.Size) * order;
         case "date":
         default:
            return (new Date(a.LastModified) - new Date(b.LastModified)) * order;
      }
   });

   return files;
}

export function removeDashboardFile(fileKey) {
   const { dashboardFiles, setDashboardFiles, manifest, setManifest } = uploadState;

   setDashboardFiles(dashboardFiles().filter((f) => f.Key !== fileKey));

   const newManifest = { ...manifest() };
   delete newManifest[fileKey];
   setManifest(newManifest);
}

export function removePendingFile(index) {
   const { pendingFiles, setPendingFiles, pendingPreviews, setPendingPreviews } = uploadState;

   const previews = pendingPreviews();
   if (previews[index]) {
      // i think it leaks memory otherwise?
      revokeLocalPreviewUrl(previews[index]);
   }

   setPendingFiles(pendingFiles().filter((_, i) => i !== index));
   setPendingPreviews(previews.filter((_, i) => i !== index));
}

export function clearPendingFiles() {
   const { setPendingFiles, pendingPreviews, setPendingPreviews } = uploadState;

   pendingPreviews().forEach((url) => revokeLocalPreviewUrl(url));

   setPendingFiles([]);
   setPendingPreviews([]);
}
