const { observeDom } = shelter.plugin.scoped;

const {
   ui: { openModal, showToast, Header, HeaderTags, Text, TextBox, Button, ButtonSizes, ButtonColors, focusring },
   plugin,
} = shelter;

const { subscribe } = shelter.plugin.scoped.flux;

import { UploadModal } from "./modal";
import { updateS3Client } from "./utils";
import uploadIcon from "./uploadIcon";

import classes from "./modal.jsx.scss";

function updateConfig() {
   updateS3Client(
      plugin.store.region,
      plugin.store.endpoint,
      plugin.store.accessKeyId,
      plugin.store.secretAccessKey,
      plugin.store.bucket,
   );
}

function uploadButton() {
   return (
      <button
         use:focusring
         class={classes.replacedButton}
         onClick={() => {
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
         }}
      >
         {uploadIcon}
      </button>
   );
}

export function onLoad() {
   plugin.store.region ??= "";
   plugin.store.endpoint ??= "";
   plugin.store.accessKeyId ??= "";
   plugin.store.secretAccessKey ??= "";
   plugin.store.bucket ??= "";
   plugin.store.publicUrl ??= "";
   plugin.store.previews ??= {};

   updateConfig();

   subscribe("CHANNEL_SELECT", () => {
      let unobserve = observeDom('[class^="inner"] > [class^="buttons"], [class^="accessoryBarRight"]', (element) => {
         if (element.dataset.externalUpload) return;
         unobserve();
         element.dataset.externalUpload = true;
         element.prepend(uploadButton());
      });
      setTimeout(() => unobserve(), 2000);
   });
}

export const settings = () => (
   <>
      <style>
         {`
         [class^="_modal"] {
            width: auto;
         }
         `}
      </style>
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
         <pre style="background: var(--background-code); border: 1px solid var(--border-normal); padding: 10px; border-radius: 4px;">
            <code>
               {`{
  "CORSRules": [
    {
      "AllowedHeaders": ["*"],
      "AllowedMethods": ["GET", "PUT", "DELETE", "POST", "HEAD"],
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
      <br />
      <br />
      <Header tag={HeaderTags.H3}>Region</Header>
      <TextBox
         placeholder="us-east-1"
         value={plugin.store.region}
         onInput={(v) => {
            plugin.store.region = v;
            updateConfig();
         }}
      />
      <br />
      <br />
      <Header tag={HeaderTags.H3}>Access Key ID</Header>
      <TextBox
         placeholder="b00b5de99be7b50bb9471a5db83aa7a9"
         value={plugin.store.accessKeyId}
         onInput={(v) => {
            plugin.store.accessKeyId = v;
            updateConfig();
         }}
      />
      <br />
      <br />
      <Header tag={HeaderTags.H3}>Secret Access Key</Header>
      <TextBox
         placeholder="deadbeef1063cb36c699199b48cb26b9475197345c08230c66c1c6a6c54b00b5"
         value={plugin.store.secretAccessKey}
         onInput={(v) => {
            plugin.store.secretAccessKey = v;
            updateConfig();
         }}
      />
      <br />
      <br />
      <Header tag={HeaderTags.H3}>Bucket</Header>
      <TextBox
         placeholder="discord-uploads"
         value={plugin.store.bucket}
         onInput={(v) => {
            plugin.store.bucket = v;
            updateConfig();
         }}
      />
      <br />
      <br />
      <Header tag={HeaderTags.H3}>Public URL</Header>
      <TextBox
         placeholder="https://uploads.example.com"
         value={plugin.store.publicUrl}
         onInput={(v) => {
            plugin.store.publicUrl = v;
         }}
      />
      <br />
      <br />
      <Header tag={HeaderTags.H3}>Previews</Header>
      <br />
      <Button
         style={{ width: "auto" }}
         size={ButtonSizes.LARGE}
         color={ButtonColors.RED}
         onClick={() => {
            plugin.store.previews = {};
            showToast({
               title: "External Upload",
               content: "Cleared cached previews.",
            });
         }}
      >
         Clear cached previews
      </Button>
      <br />
      <br />
   </>
);
