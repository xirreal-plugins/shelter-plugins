import styles from "./modal.jsx.scss";
import {
   formatFileSize,
   formatDate,
   getUrl,
   deleteFile,
   uploadFiles,
   createLocalPreviewUrl,
   revokeLocalPreviewUrl,
   getThumbnailUrl,
   refreshDashboard,
   markThumbnailLoaded,
   isThumbnailLoaded,
} from "./utils";
import { FileIcon, CloseIcon, TrashIcon, SortIcon, UploadDropIcon } from "./Icons";

import {
   uploadState,
   addPendingFiles,
   removePendingFile,
   clearPendingFiles,
   cancelUpload,
   cancelAllUploads,
   resetUploadState,
   getFilteredSortedFiles,
   removeDashboardFile,
} from "./state";

const {
   ui: {
      ModalRoot,
      ModalHeader,
      ModalBody,
      ModalFooter,
      ModalSizes,
      showToast,
      Button,
      ButtonColors,
      ButtonSizes,
      TextBox,
      Text,
      TextTags,
      TextWeights,
      focusring,
   },
   solid: { createSignal, createEffect, createMemo, Show, For, onMount },
   util: { log, getFiber },
   plugin: { store },
} = shelter;

function UploadProgressItem({ fileId, uploadInfo, onCancel }) {
   const progress = () => uploadInfo.progress;
   const status = () => uploadInfo.status;
   const file = uploadInfo.file;

   const COLORS = {
      completed: "var(--status-positive)",
      failed: "var(--status-danger)",
      cancelled: "var(--text-muted)",
      pending: "var(--text-muted)",
      defaultText: "var(--text-interactive-active)",
      default: "var(--brand-500)",
   };

   const statusColor = (isText) => {
      return COLORS[status()] || (isText ? COLORS.defaultText : COLORS.default);
   };

   const statusText = () => {
      switch (status()) {
         case "completed":
            return "Complete";
         case "failed":
            return "Failed";
         case "cancelled":
            return "Cancelled";
         case "pending":
            return "Queued";
         default:
            return `${progress().toFixed(0)}%`;
      }
   };

   return (
      <div class={styles.uploadProgressItem}>
         <div class={styles.uploadProgressInfo}>
            <span class={styles.uploadProgressName}>{file.name}</span>
            <span class={styles.uploadProgressSize}>{formatFileSize(file.size)}</span>
         </div>
         <div class={styles.uploadProgressBarContainer}>
            <div
               class={styles.uploadProgressBar}
               style={{
                  width: `${status() === "uploading" ? progress() : status() === "completed" ? 100 : 0}%`,
                  "background-color": statusColor(),
               }}
            />
         </div>
         <div class={styles.uploadProgressStatus}>
            <span style={{ color: statusColor(true) }}>{statusText()}</span>
            <Show when={status() === "uploading"}>
               <Button size={ButtonSizes.TINY} color={ButtonColors.CRITICAL_SECONDARY} onClick={() => onCancel(fileId)} tooltip="Cancel upload">
                  <CloseIcon />
               </Button>
            </Show>
         </div>
      </div>
   );
}

function DashboardFileItem({ file, manifest, onDelete, onInsert }) {
   const [thumbnailLoaded, setThumbnailLoaded] = createSignal(isThumbnailLoaded(file.Key));
   const [thumbnailError, setThumbnailError] = createSignal(false);
   const [generatingThumbnail, setGeneratingThumbnail] = createSignal(false);
   const [thumbnailRetry, setThumbnailRetry] = createSignal(0);
   const [deleting, setDeleting] = createSignal(false);

   const extension = () => file.Key.split(".").pop().toLowerCase();
   const isImage = () => ["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(extension());
   const isVideo = () => ["mp4", "webm", "mov", "avi"].includes(extension());
   const meta = () => manifest()[file.Key] || {};
   const displayName = () => meta().filename || file.Key;
   const canHaveThumbnail = () => isImage() || isVideo();

   const thumbnailUrl = () => {
      const retry = thumbnailRetry();
      const baseUrl = canHaveThumbnail() ? getUrl(`.thumbs/${file.Key}.webp`, store.publicUrl) : null;
      return baseUrl && retry > 0 ? `${baseUrl}?_r=${retry}` : baseUrl;
   };

   const handleThumbnailError = async () => {
      if (generatingThumbnail() || thumbnailRetry() > 0) {
         setThumbnailError(true);
         return;
      }
      setGeneratingThumbnail(true);
      try {
         await getThumbnailUrl(file.Key, store.publicUrl);
         setThumbnailRetry(1);
      } catch (e) {
         setThumbnailError(true);
      } finally {
         setGeneratingThumbnail(false);
      }
   };

   const handleDelete = async (e) => {
      e.stopPropagation();
      if (deleting()) return;

      setDeleting(true);
      try {
         await onDelete(file);
      } catch (e) {
         setDeleting(false);
      }
   };

   return (
      <div class={`${styles.dashboardItem} ${deleting() ? styles.deleting : ""}`} use:focusring onClick={() => !deleting() && onInsert(file)}>
         <div class={styles.thumbnailContainer}>
            <Show when={deleting()}>
               <div class={styles.deletingOverlay}>
                  <div class={styles.spinner} />
               </div>
            </Show>
            <Show when={canHaveThumbnail() && !thumbnailError()}>
               <img
                  src={thumbnailUrl()}
                  alt={displayName()}
                  class={styles.previewImage}
                  style={{ display: thumbnailLoaded() ? "block" : "none" }}
                  onLoad={() => {
                     setThumbnailLoaded(true);
                     markThumbnailLoaded(file.Key);
                  }}
                  onError={handleThumbnailError}
               />
            </Show>
            <Show when={generatingThumbnail()}>
               <div class={styles.thumbnailLoading}>
                  <div class={styles.spinner} />
               </div>
            </Show>
            <Show when={!canHaveThumbnail() || thumbnailError() || (!thumbnailLoaded() && !generatingThumbnail())}>
               <div class={styles.previewIcon}>{FileIcon}</div>
            </Show>
         </div>
         <div class={styles.previewItemInfo}>
            <p class={styles.fileName} title={displayName()}>
               {displayName()}
            </p>
            <p class={styles.fileMeta}>{formatFileSize(file.Size)}</p>
            <p class={styles.fileMeta}>{formatDate(file.LastModified)}</p>
         </div>
         <Show when={!deleting()}>
            <div class={styles.removeButton} onClick={handleDelete} title="Delete file">
               <TrashIcon />
            </div>
         </Show>
      </div>
   );
}

export function UploadModal(closeModal) {
   const [dashOpen, setDashOpen] = createSignal(false);

   const {
      pendingFiles,
      setPendingFiles,
      pendingPreviews,
      setPendingPreviews,
      activeUploads,
      isUploading,
      overallProgress,
      dashboardFiles,
      dashboardLoading,
      dashboardLoaded,
      searchQuery,
      setSearchQuery,
      sortBy,
      setSortBy,
      sortOrder,
      setSortOrder,
      manifest,
   } = uploadState;

   let fileInputRef;

   const filteredFiles = createMemo(() => getFilteredSortedFiles());
   const totalBucketSize = createMemo(() => dashboardFiles().reduce((acc, file) => acc + file.Size, 0));

   const hasActiveUploads = createMemo(() => {
      const uploads = activeUploads();
      for (const [, upload] of uploads) {
         if (upload.status === "uploading") return true;
      }
      return false;
   });

   const handleDragOver = (e) => {
      e.preventDefault();
      e.currentTarget.classList.add(styles.dragOver);
   };

   const handleDragLeave = (e) => {
      e.preventDefault();
      e.currentTarget.classList.remove(styles.dragOver);
   };

   const handleDrop = (e) => {
      e.preventDefault();
      e.currentTarget.classList.remove(styles.dragOver);
      if (!isUploading()) {
         const droppedFiles = Array.from(e.dataTransfer.files);
         addPendingFiles(droppedFiles);
      }
   };

   const handleFileChange = (e) => {
      if (e.target.files && !isUploading()) {
         const selectedFiles = Array.from(e.target.files);
         addPendingFiles(selectedFiles);
         e.target.value = "";
      }
   };

   const handleRemoveFile = (index) => {
      if (!isUploading()) {
         removePendingFile(index);
      }
   };

   const handleUploadClick = () => {
      if (!isUploading()) {
         fileInputRef.click();
      }
   };

   const handleConfirm = async () => {
      const files = pendingFiles();
      if (files.length === 0) return;

      clearPendingFiles();

      const { uploadedFiles, failedFiles } = await uploadFiles(files, (uploaded, failed) => {
         if (failed.length === files.length) {
            showToast({
               title: "Upload failed!",
               content: "All files failed to upload",
            });
            for (const { error } of failed) {
               log("ExternalUpload - " + error, "error");
            }
         } else if (failed.length > 0) {
            showToast({
               title: "Upload partially completed",
               content: `${uploaded.length} files uploaded, ${failed.length} failed`,
            });
         } else if (uploaded.length > 0) {
            showToast({
               title: "Upload successful!",
               content: `${uploaded.length} file${uploaded.length > 1 ? "s" : ""} uploaded`,
            });

            const fiber = getFiber(document.querySelector('[class*="slateContainer"]'));
            if (fiber?.child?.pendingProps?.editor) {
               const editor = fiber.child.pendingProps.editor;
               const urls = uploaded.map((f) => getUrl(f.key, store.publicUrl));
               editor.insertText(urls.join(" ") + " ");
            }
         }

         resetUploadState();
      });
   };

   const handleCancelUpload = (fileId) => {
      cancelUpload(fileId);
   };

   const handleCancelAll = () => {
      cancelAllUploads();
      showToast({
         title: "Uploads cancelled",
         content: "All uploads have been cancelled",
      });
   };

   const handleDeleteFile = async (file) => {
      try {
         await deleteFile(file.Key);
         removeDashboardFile(file.Key);
         showToast({
            title: "File deleted",
            content: file.Key,
         });
      } catch (e) {
         showToast({
            title: "Delete failed",
            content: e.message,
         });
         throw e;
      }
   };

   const handleInsertFile = (file) => {
      const fiber = getFiber(document.querySelector('[class*="slateContainer"]'));
      if (fiber?.child?.pendingProps?.editor) {
         const editor = fiber.child.pendingProps.editor;
         const url = getUrl(file, store.publicUrl);
         editor.insertText(url + " ");
      }
   };

   const handleSortClick = (field) => {
      if (sortBy() === field) {
         setSortOrder(sortOrder() === "asc" ? "desc" : "asc");
      } else {
         setSortBy(field);
      }
   };

   createEffect(() => {
      const files = pendingFiles();
      const currentPreviews = pendingPreviews();

      if (files.length > currentPreviews.length) {
         const newFiles = files.slice(currentPreviews.length);
         const newPreviews = newFiles.map((file) => createLocalPreviewUrl(file));
         setPendingPreviews([...currentPreviews, ...newPreviews]);
      }
   });

   createEffect(() => {
      const previews = pendingPreviews();
      const files = pendingFiles();

      if (files.length === 0 && previews.length > 0) {
         previews.forEach((url) => revokeLocalPreviewUrl(url));
         setPendingPreviews([]);
      }
   });

   createEffect(() => {
      if (dashOpen() && !dashboardLoaded()) {
         refreshDashboard();
      }
   });

   return (
      <ModalRoot size={ModalSizes.MEDIUM} class={styles.uploadModal}>
         <ModalHeader close={closeModal}>
            <div class={styles.headerContent}>
               <span>{dashOpen() ? "File Dashboard" : "Upload Files"}</span>
               <Show when={isUploading()}>
                  <div class={styles.headerProgress}>
                     <span class={styles.headerProgressText}>Uploading: {overallProgress().toFixed(0)}%</span>
                  </div>
               </Show>
            </div>
         </ModalHeader>

         <Show when={!dashOpen()}>
            <ModalBody>
               <div
                  class={`${styles.uploadArea} ${isUploading() ? styles.uploading : ""}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={handleUploadClick}
               >
                  <div class={styles.uploadAreaContent}>
                     <UploadDropIcon />
                     <Text>{isUploading() ? "Upload in progress..." : "Drag & drop files here or click to select"}</Text>
                  </div>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} multiple hidden disabled={isUploading()} />
               </div>

               <Show when={activeUploads().size > 0}>
                  <div class={styles.uploadsSection}>
                     <div class={styles.uploadsSectionHeader}>
                        <Text tag={TextTags.textSM} weight={TextWeights.semibold}>
                           Uploads
                        </Text>
                        <Show when={hasActiveUploads()}>
                           <Button size={ButtonSizes.MEDIUM} color={ButtonColors.CRITICAL_PRIMARY} onClick={handleCancelAll}>
                              Cancel All
                           </Button>
                        </Show>
                     </div>
                     <div class={styles.uploadsList}>
                        <For each={Array.from(activeUploads().entries())}>
                           {([fileId, uploadInfo]) => <UploadProgressItem fileId={fileId} uploadInfo={uploadInfo} onCancel={handleCancelUpload} />}
                        </For>
                     </div>
                  </div>
               </Show>

               <Show when={pendingFiles().length > 0}>
                  <div class={styles.pendingSection}>
                     <div class={styles.pendingSectionHeader}>
                        <Text tag={TextTags.textSM} weight={TextWeights.semibold}>
                           Pending Files ({pendingFiles().length})
                        </Text>
                        <Button size={ButtonSizes.MEDIUM} color={ButtonColors.CRITICAL_SECONDARY} onClick={clearPendingFiles} disabled={isUploading()}>
                           Remove All
                        </Button>
                     </div>
                     <div class={styles.previewArea}>
                        <For each={pendingFiles()}>
                           {(file, index) => (
                              <div class={styles.previewItem}>
                                 <div class={styles.thumbnailContainer}>
                                    <Show when={pendingPreviews()[index()]}>
                                       {file.type?.startsWith("video/") ? (
                                          <video src={pendingPreviews()[index()]} class={styles.previewImage} muted playsinline onLoadedData={() => {}} />
                                       ) : (
                                          <img src={pendingPreviews()[index()]} alt={file.name} class={styles.previewImage} />
                                       )}
                                    </Show>
                                    <Show when={!pendingPreviews()[index()]}>
                                       <div class={styles.previewIcon}>{FileIcon}</div>
                                    </Show>
                                 </div>
                                 <div class={styles.previewItemInfo}>
                                    <p class={styles.fileName} title={file.name}>
                                       {file.name}
                                    </p>
                                    <p class={styles.fileMeta}>{formatFileSize(file.size)}</p>
                                 </div>
                                 <div
                                    class={`${styles.removeButton} ${isUploading() ? styles.disabled : ""}`}
                                    onClick={() => !isUploading() && handleRemoveFile(index())}
                                    title="Remove file"
                                 >
                                    <CloseIcon />
                                 </div>
                              </div>
                           )}
                        </For>
                     </div>
                  </div>
               </Show>
            </ModalBody>
         </Show>

         <Show when={dashOpen()}>
            <ModalBody>
               <div class={styles.dashboardControls}>
                  <TextBox placeholder="Search files..." value={searchQuery()} onInput={(v) => setSearchQuery(v)} />
                  <div class={styles.sortControls}>
                     <button class={`${styles.sortButton} ${sortBy() === "date" ? styles.sortButtonActive : ""}`} onClick={() => handleSortClick("date")}>
                        Date
                        <SortIcon active={sortBy() === "date"} ascending={sortOrder() === "asc"} />
                     </button>
                     <button class={`${styles.sortButton} ${sortBy() === "size" ? styles.sortButtonActive : ""}`} onClick={() => handleSortClick("size")}>
                        Size
                        <SortIcon active={sortBy() === "size"} ascending={sortOrder() === "asc"} />
                     </button>
                     <button class={`${styles.sortButton} ${sortBy() === "name" ? styles.sortButtonActive : ""}`} onClick={() => handleSortClick("name")}>
                        Name
                        <SortIcon active={sortBy() === "name"} ascending={sortOrder() === "asc"} />
                     </button>
                  </div>
               </div>

               <Show when={dashboardLoading()}>
                  <div class={styles.loadingContainer}>
                     <div class={styles.spinner} />
                     <Text>Loading files...</Text>
                  </div>
               </Show>

               <Show when={!dashboardLoading()}>
                  <Show when={filteredFiles().length === 0}>
                     <div class={styles.emptyState}>
                        <Text>{searchQuery() ? "No files match your search" : "No files uploaded yet"}</Text>
                     </div>
                  </Show>
                  <div class={styles.previewArea}>
                     <For each={filteredFiles()}>
                        {(file) => <DashboardFileItem file={file} manifest={manifest} onDelete={handleDeleteFile} onInsert={handleInsertFile} />}
                     </For>
                  </div>
               </Show>

               <div class={styles.statsBar}>
                  <Text tag={TextTags.textSM}>
                     {filteredFiles().length} file{filteredFiles().length !== 1 ? "s" : ""}
                     {searchQuery() && ` matching "${searchQuery()}"`}
                  </Text>
                  <Text tag={TextTags.textSM}>Total: {formatFileSize(totalBucketSize())}</Text>
               </div>
            </ModalBody>
         </Show>

         <ModalFooter>
            <div class={styles.footer}>
               <Button class={styles.dashboardButton} size={ButtonSizes.MEDIUM} color={ButtonColors.SECONDARY} onClick={() => setDashOpen(!dashOpen())}>
                  {dashOpen() ? "Upload Files" : "Dashboard"}
               </Button>
               <Show when={!dashOpen()}>
                  <Button disabled={isUploading() || pendingFiles().length === 0} size={ButtonSizes.MEDIUM} color={ButtonColors.BRAND} onClick={handleConfirm}>
                     {isUploading() ? "Uploading..." : `Upload ${pendingFiles().length > 0 ? `(${pendingFiles().length})` : ""}`}
                  </Button>
               </Show>
               <Show when={dashOpen()}>
                  <Button size={ButtonSizes.MEDIUM} color={ButtonColors.CRITICAL_PRIMARY} onClick={() => refreshDashboard()} disabled={dashboardLoading()}>
                     Refresh
                  </Button>
               </Show>
            </div>
         </ModalFooter>
      </ModalRoot>
   );
}
