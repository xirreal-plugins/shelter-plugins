import styles from "./modal.jsx.scss";
import { formatFileSize, getAllFiles, getFilePreview, uploadFiles, formatDate, getUrl, deleteFile } from "./utils";

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
      focusring,
   },
   solid: { createSignal, createEffect, Show, For },
   util: { log, getFiber },
   plugin: { store },
} = shelter;

export function UploadModal(closeModal) {
   const [files, setFiles] = createSignal([]);
   const [isDragOver, setIsDragOver] = createSignal(false);
   const [previews, setPreviews] = createSignal([]);
   const [isUploading, setIsUploading] = createSignal(false);
   const [uploadProgress, setUploadProgress] = createSignal(0);
   const [dashOpen, setDashOpen] = createSignal(false);
   const [dashboardFiles, setDashboardFiles] = createSignal([]);
   const [fetchingFiles, setFetchingFiles] = createSignal(false);

   let fileInputRef;

   const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragOver(true);
   };

   const handleDragLeave = (e) => {
      e.preventDefault();
      setIsDragOver(false);
   };

   const handleDrop = (e) => {
      e.preventDefault();
      setIsDragOver(false);
      if (!isUploading()) {
         const droppedFiles = Array.from(e.dataTransfer.files);
         setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
      }
   };

   const handleFileChange = (e) => {
      if (e.target.files && !isUploading()) {
         const selectedFiles = Array.from(e.target.files);
         setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
      }
   };

   const handleRemoveFile = (index) => {
      if (!isUploading()) {
         setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
         setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
      }
   };

   const handleUploadClick = () => {
      if (!isUploading()) {
         fileInputRef.click();
      }
   };

   const handleConfirm = async () => {
      setIsUploading(true);
      setUploadProgress(0);

      const { uploadedFiles, previewsToSave } = await uploadFiles(files(), previews(), (progress) => {
         setUploadProgress(progress * 100);
      });

      const uploadedUrls = (await uploadedFiles)
         .filter((result) => result.status === "fulfilled")
         .map((result) => result.value);

      const failedUploads = (await uploadedFiles)
         .filter((result) => result.status === "rejected")
         .map((result) => result.reason);

      if (failedUploads.length == files().length) {
         showToast({
            title: "Upload failed!",
            content: "All files failed to upload",
         });

         for (const error of failedUploads) {
            log("ExternalUpload - " + error, "error");
         }
      } else if (failedUploads.length > 0) {
         showToast({
            title: "Upload partially failed!",
            content: "Some files failed to upload",
         });

         for (const error of failedUploads) {
            log("ExternalUpload - " + error, "error");
         }
      } else {
         showToast({
            title: "Upload successful!",
            content: "All files uploaded successfully",
         });

         store.previews = { ...store.previews, ...previewsToSave };

         const fiber = getFiber(document.querySelector('[class*="slateContainer"]'));
         const editor = fiber.child.pendingProps.editor;

         for (let i = 0; i < uploadedUrls.length; i++) {
            const result = uploadedUrls[i];
            const url = getUrl(result, store.publicUrl);
            editor.insertText(url);
            if (i < uploadedUrls.length - 1) {
               editor.insertText(" ");
            }
         }
      }

      closeModal();
      setIsUploading(false);
   };

   const fetchDashboardFiles = async () => {
      setFetchingFiles(true);
      const files = await getAllFiles();
      setDashboardFiles(files);
      setFetchingFiles(false);
   };

   const handleDeleteFile = async (e, file) => {
      e.stopPropagation();
      await deleteFile(file.Key);
      await fetchDashboardFiles();
   };

   createEffect(() => {
      const newFiles = files();
      Promise.all(newFiles.map((file) => getFilePreview(file))).then((newPreviews) => {
         setPreviews(newPreviews);
      });
   });

   createEffect(() => {
      if (dashOpen()) {
         fetchDashboardFiles();
      }
   });

   return (
      <ModalRoot size={ModalSizes.MEDIUM} class={styles.uploadModal}>
         <ModalHeader close={closeModal}>{dashOpen() ? "File Dashboard" : "Upload Files"}</ModalHeader>
         <Show when={!dashOpen()}>
            <ModalBody>
               <div
                  class={`${styles.uploadArea} ${isDragOver() ? styles.dragOver : ""} ${isUploading() ? styles.uploading : ""}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={handleUploadClick}
               >
                  <Show when={!isUploading()} fallback={<p>Uploading... Please wait</p>}>
                     <p>Drag & drop files here or click to select</p>
                  </Show>
                  <input
                     type="file"
                     ref={fileInputRef}
                     onChange={handleFileChange}
                     multiple
                     hidden
                     disabled={isUploading()}
                  />
               </div>
               <Show when={isUploading()}>
                  <div class={styles.progressBar}>
                     <div class={styles.progressFill} style={{ width: `${uploadProgress()}%` }}></div>
                  </div>
                  <p>Uploading: {uploadProgress().toFixed(2)}%</p>
               </Show>
               <div class={styles.previewArea}>
                  <For each={files()}>
                     {(file, index) => (
                        <div class={styles.previewItem}>
                           {file.type.startsWith("image/") && (
                              <img src={previews()[index()]} alt={file.name} class={styles.previewImage} />
                           )}
                           {file.type.startsWith("video/") && (
                              <img src={previews()[index()]} alt={file.name} class={styles.previewVideo} />
                           )}
                           {!file.type.startsWith("image/") && !file.type.startsWith("video/") && (
                              <div class={styles.previewIcon}>📄</div>
                           )}
                           <div class={styles.previewItemInfo}>
                              <p>{file.name}</p>
                              <p>{formatFileSize(file.size)}</p>
                           </div>
                           <button
                              class={styles.removeButton}
                              onClick={() => handleRemoveFile(index())}
                              disabled={isUploading()}
                           >
                              <svg
                                 aria-hidden="true"
                                 role="img"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    fill="currentColor"
                                    d="M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z"
                                    class=""
                                 ></path>
                                 <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z"
                                    clip-rule="evenodd"
                                    class=""
                                 ></path>
                              </svg>
                           </button>
                        </div>
                     )}
                  </For>
               </div>
            </ModalBody>
         </Show>
         <Show when={dashOpen()}>
            <ModalBody>
               <Show when={fetchingFiles()}>
                  <p>Loading files...</p>
               </Show>
               <Show when={!fetchingFiles()}>
                  <p>
                     Total bucket usage: {formatFileSize(dashboardFiles().reduce((acc, file) => acc + file.Size, 0))}
                  </p>
                  <div class={styles.previewArea}>
                     <For each={dashboardFiles()}>
                        {(file) => {
                           const extension = file.Key.split(".").pop();
                           const isImage = ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension);
                           const isVideo = ["mp4", "webm"].includes(extension);

                           const [preview, setPreview] = createSignal(store.previews[file.Key]);

                           if (!preview() && (isImage || isVideo)) {
                              getFilePreview(file, isImage, isVideo, store.publicUrl).then((url) => {
                                 store.previews = { ...store.previews, [file.Key]: url };
                                 setPreview(url);
                              });
                           }

                           return (
                              <div
                                 class={styles.dashboardItem}
                                 use:focusring
                                 onclick={(e) => {
                                    e.stopPropagation();
                                    const fiber = getFiber(document.querySelector('[class*="slateContainer"]'));
                                    const editor = fiber.child.pendingProps.editor;

                                    const url = getUrl(file, store.publicUrl);
                                    editor.insertText(url + " ");
                                 }}
                              >
                                 {preview() && isImage && (
                                    <img src={preview()} alt={file.Key} class={styles.previewImage} />
                                 )}
                                 {preview() && isVideo && (
                                    <img src={preview()} alt={file.Key} class={styles.previewVideo} />
                                 )}
                                 {(!preview() || (!isImage && !isVideo)) && <div class={styles.previewIcon}>📄</div>}
                                 <div class={styles.previewItemInfo}>
                                    <p>{file.Key}</p>
                                    <p>{formatFileSize(file.Size)}</p>
                                    <p>{formatDate(file.LastModified)}</p>
                                 </div>
                                 <button class={styles.removeButton} onClick={(e) => handleDeleteFile(e, file)}>
                                    <svg
                                       aria-hidden="true"
                                       role="img"
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="24"
                                       height="24"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                    >
                                       <path
                                          fill="currentColor"
                                          d="M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z"
                                          class=""
                                       ></path>
                                       <path
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                          d="M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z"
                                          clip-rule="evenodd"
                                          class=""
                                       ></path>
                                    </svg>
                                 </button>
                              </div>
                           );
                        }}
                     </For>
                  </div>
               </Show>
            </ModalBody>
         </Show>
         <ModalFooter>
            <div class={styles.footer}>
               <Button
                  class={styles.dashboardButton}
                  size={ButtonSizes.MEDIUM}
                  color={ButtonColors.SECONDARY}
                  onClick={() => setDashOpen(!dashOpen())}
               >
                  {dashOpen() ? "Upload Files" : "Dashboard"}
               </Button>
               <Button
                  disabled={isUploading()}
                  size={ButtonSizes.MEDIUM}
                  color={ButtonColors.SECONDARY}
                  onClick={() => (isUploading() ? null : closeModal())}
               >
                  Cancel
               </Button>
               <Show when={!dashOpen()}>
                  <Button
                     disabled={isUploading() || files().length === 0}
                     size={ButtonSizes.MEDIUM}
                     color={ButtonColors.BRAND}
                     onClick={handleConfirm}
                  >
                     {isUploading() ? "Uploading..." : "Upload"}
                  </Button>
               </Show>
            </div>
         </ModalFooter>
      </ModalRoot>
   );
}
