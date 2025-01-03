const { observeDom } = shelter.plugin.scoped;

const {
   ui: { openModal, showToast, Header, HeaderTags, Text, TextBox },
   plugin,
} = shelter;

import { UploadModal } from "./modal";
import { updateS3Client } from "./utils";

function updateConfig() {
   updateS3Client(
      plugin.store.region,
      plugin.store.endpoint,
      plugin.store.accessKeyId,
      plugin.store.secretAccessKey,
      plugin.store.bucket,
   );
}

export function onLoad() {
   plugin.store.region ??= "";
   plugin.store.endpoint ??= "";
   plugin.store.accessKeyId ??= "";
   plugin.store.secretAccessKey ??= "";
   plugin.store.bucket ??= "";
   plugin.store.publicUrl ??= "";

   updateConfig();

   observeDom('[class^="giftIconContainer"]', (element) => {
      if (element.dataset.externalUpload) return;
      element.dataset.externalUpload = true;
      element.parentElement.parentElement.parentElement.onclick = (e) => {
         e.stopImmediatePropagation();
         e.preventDefault();

         if (
            plugin.store.endpoint === "" ||
            plugin.store.accessKeyId === "" ||
            plugin.store.secretAccessKey === "" ||
            plugin.store.bucket === ""
         ) {
            showToast({
               title: "External Upload",
               content: "Please go to settings to configure the backend.",
            });
            return;
         } else {
            openModal((p) => UploadModal(p.close));
         }
      };
      element.style.display = "none";

      const newElement = document.createElement("div");
      newElement.style.display = "inline-block";
      newElement.style.marginLeft = "5px";
      newElement.style.marginTop = "-2px";
      newElement.style.cursor = "pointer";
      newElement.innerHTML = "sex button";

      element.parentElement.appendChild(newElement);
   });
}

export const settings = () => (
   <>
      <Text>
         Configure the S3 compatible backend to use for external uploads.
         <br />
         <br />
         Remember to allow CORS for the endpoint!
         <br />
         <br />
         Example CORS configuration:
         <br />
         <br />
         <pre style="background-color: var(--background-secondary); padding: 10px; border-radius: 8px;">
            <code>
               {`{
  "CORSRules": [
    {
      "AllowedHeaders": ["*"],
      "AllowedMethods": ["GET", "PUT", "DELETE"],
      "AllowedOrigins": ["*"],
      "ExposeHeaders": ["ETag"]
    }
  ]
}`}
            </code>
         </pre>
      </Text>
      <br />
      <Header tag={HeaderTags.H3}>S3 endpoint</Header>
      <TextBox
         placeholder="https://your-user-id.r2.cloudflarestorage.com"
         value={plugin.store.endpoint}
         onInput={(v) => {
            plugin.store.endpoint = v;
            updateConfig();
         }}
      />
      <Header tag={HeaderTags.H3}>Region</Header>
      <TextBox
         placeholder="us-east-1"
         value={plugin.store.region}
         onInput={(v) => {
            plugin.store.region = v;
            updateConfig();
         }}
      />
      <Header tag={HeaderTags.H3}>Access Key ID</Header>
      <TextBox
         placeholder="b00b5de99be7b50bb9471a5db83aa7a9"
         value={plugin.store.accessKeyId}
         onInput={(v) => {
            plugin.store.accessKeyId = v;
            updateConfig();
         }}
      />
      <Header tag={HeaderTags.H3}>Secret Access Key</Header>
      <TextBox
         placeholder="deadbeef1063cb36c699199b48cb26b9475197345c08230c66c1c6a6c54b00b5"
         value={plugin.store.secretAccessKey}
         onInput={(v) => {
            plugin.store.secretAccessKey = v;
            updateConfig();
         }}
      />
      <Header tag={HeaderTags.H3}>Bucket</Header>
      <TextBox
         placeholder="discord-uploads"
         value={plugin.store.bucket}
         onInput={(v) => {
            plugin.store.bucket = v;
            updateConfig();
         }}
      />
      <Header tag={HeaderTags.H3}>Public URL</Header>
      <TextBox
         placeholder="https://uploads.example.com"
         value={plugin.store.publicUrl}
         onInput={(v) => {
            plugin.store.publicUrl = v;
         }}
      />
   </>
);
