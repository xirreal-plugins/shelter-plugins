const {
   ui: { ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter, ModalSizes, TextArea },
   solid: { createSignal },
   plugin: { store },
} = shelter;

export function AddTagModal(closeModal, gifData) {
   const [tags, setTags] = createSignal("");

   let tagsArray = store[gifData.url] || [];
   setTags(tagsArray.join(", "));

   return (
      <ModalRoot size={ModalSizes.MEDIUM}>
         <ModalHeader close={closeModal}>Adding tags to GIF</ModalHeader>
         <ModalBody>
            <div
               style={{
                  display: "flex",
                  "justify-content": "center",
                  "align-items": "center",
                  "margin-bottom": "16px",
               }}
            >
               <video
                  src={gifData.src}
                  autoplay
                  loop
                  muted
                  style={{
                     width: "300px",
                     height: "300px",
                     "object-fit": "stretch",
                     "border-radius": "8px",
                  }}
               />
            </div>
            <TextArea placeholder="Enter tags separated by commas" value={tags()} onInput={(text) => setTags(text)} />
         </ModalBody>
         <ModalConfirmFooter
            close={closeModal}
            confirmText="Save"
            onConfirm={() => {
               tagsArray = tags()
                  .split(",")
                  .map((tag) => tag.trim());
               store[gifData.url] = tagsArray;
               closeModal();
            }}
         />
      </ModalRoot>
   );
}
