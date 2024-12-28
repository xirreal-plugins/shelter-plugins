import styles from './modal.jsx.scss';

import { formatFileSize, getFilePreview, uploadFiles } from './utils';

const {
  ui: { ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter, ModalSizes, showToast },
  solid: { createSignal, createEffect, Show },
  util: { log, getFiber },
  plugin: { store }
} = shelter;

export function UploadModal(closeModal) {
  const [files, setFiles] = createSignal([]);
  const [isDragOver, setIsDragOver] = createSignal(false);
  const [previews, setPreviews] = createSignal([]);
  const [isUploading, setIsUploading] = createSignal(false);
  const [uploadProgress, setUploadProgress] = createSignal(0);

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

    const uploadedFiles = await uploadFiles(files(), (progress) => {
      setUploadProgress(progress * 100);
    });

    const uploadedUrls = uploadedFiles
      .filter((result) => result.status === "fulfilled").map((result) => result.value);

    const failedUploads = uploadedFiles.filter((result) => result.status === "rejected").map((result) => result.reason);

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

      const fiber = getFiber(document.querySelector('[class*="slateContainer"]'));
      const editor = fiber.child.pendingProps.editor;

      for(let i = 0; i < uploadedUrls.length; i++) {
        const result = uploadedUrls[i];
        if(store.publicUrl) {
          editor.insertText(`${store.publicUrl}/${result.Key}`);
        } else {
          editor.insertText(result.Location);
        }
        if(i < uploadedUrls.length - 1) {
          editor.insertText(" ");
        }
      }
    }

    closeModal();
    setIsUploading(false);
  };

  createEffect(() => {
    const newFiles = files();
    Promise.all(newFiles.map(file => getFilePreview(file))).then(newPreviews => {
      setPreviews(newPreviews);
    });
  });

  return (
    <ModalRoot size={ModalSizes.MEDIUM} class={styles.uploadModal}>
      <ModalHeader close={closeModal}>Upload Files</ModalHeader>
      <ModalBody>
        <div
          class={`${styles.uploadArea} ${isDragOver() ? styles.dragOver : ''} ${isUploading() ? styles.uploading : ''}`}
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
                {file.type.startsWith('image/') && (
                  <img src={previews()[index()]} alt={file.name} class={styles.previewImage} />
                )}
                {file.type.startsWith('video/') && (
                  <img src={previews()[index()]} alt={file.name} class={styles.previewVideo} />
                )}
                {!file.type.startsWith('image/') && !file.type.startsWith('video/') && (
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
                  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" clip-rule="evenodd" class=""></path></svg>
                </button>
              </div>
            )}
          </For>
        </div>
      </ModalBody>
      <ModalConfirmFooter
        close={() => isUploading() ? null : closeModal()}
        confirmText={isUploading() ? "Uploading..." : "Upload"}
        onConfirm={handleConfirm}
        disabled={isUploading() || files().length === 0}
        cancelDisabled={isUploading()}
      />
    </ModalRoot>
  );
}

