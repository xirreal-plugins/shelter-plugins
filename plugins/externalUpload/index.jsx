const { observeDom } = shelter.plugin.scoped;

const {
   ui: {
      openModal,
      showToast,
      Header,
      HeaderTags,
      Text,
      TextBox,
      Button,
      ButtonSizes,
      ButtonColors,
      SwitchItem,
      focusring,
   },
   solid: { createSignal },
   plugin,
} = shelter;

const { subscribe } = shelter.plugin.scoped.flux;

import { UploadModal } from "./modal";
import { updateS3Client, deleteAllThumbnails, testConnection } from "./utils";
import { UploadIcon } from "./Icons";

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
         {UploadIcon()}
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

   plugin.store.filenameCache ??= {};
   plugin.store.debugLogging ??= false;

   // goodbye old previews...
   if (plugin.store.previews) {
      delete plugin.store.previews;
   }

   updateConfig();

   subscribe("CHANNEL_SELECT", () => {
      let unobserve = observeDom('[class*="inner"] > [class*="buttons"], [class*="accessoryBarRight"]', (element) => {
         if (element.dataset.externalUpload) return;
         unobserve();
         element.dataset.externalUpload = true;
         element.prepend(uploadButton());
      });
      setTimeout(() => unobserve(), 2000);
   });
}

export const settings = () => {
   const [connectionStatus, setConnectionStatus] = createSignal(null);

   return (
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
         <div style={{ display: "flex", "align-items": "center", gap: "12px" }}>
            <Button
               style={{ width: "auto" }}
               size={ButtonSizes.LARGE}
               color={ButtonColors.BRAND}
               disabled={connectionStatus() === "testing"}
               onClick={async () => {
                  setConnectionStatus("testing");
                  const result = await testConnection();
                  setConnectionStatus(result);
               }}
            >
               {connectionStatus() === "testing" ? "Testing..." : "Test Connection"}
            </Button>
            {connectionStatus() && connectionStatus() !== "testing" && (
               <Text
                  style={{
                     color: connectionStatus().success
                        ? "var(--text-feedback-positive)"
                        : "var(--control-critical-secondary-text-default)",
                  }}
               >
                  {connectionStatus().success ? "Connection successful!" : `Error: ${connectionStatus().error}`}
               </Text>
            )}
         </div>
         <br />
         <br />
         <Header tag={HeaderTags.H3}>Cache</Header>
         <Text>Filenames and thumbnail URLs are cached locally to reduce requests to the bucket.</Text>
         <div style={{ margin: "24px 0px", display: "flex", "flex-direction": "row", gap: "16px" }}>
            <Button
               style={{ width: "auto" }}
               size={ButtonSizes.LARGE}
               color={ButtonColors.RED}
               onClick={() => {
                  plugin.store.filenameCache = {};
                  showToast({
                     title: "External Upload",
                     content: "Cleared filename cache. Reload dashboard to fetch from metadata.",
                  });
               }}
            >
               Clear filename cache
            </Button>
            <Button
               style={{ width: "auto" }}
               size={ButtonSizes.LARGE}
               color={ButtonColors.RED}
               onClick={async () => {
                  showToast({
                     title: "External Upload",
                     content: "Deleting all remote thumbnails...",
                  });
                  try {
                     const { deleted } = await deleteAllThumbnails();
                     showToast({
                        title: "External Upload",
                        content: `Deleted ${deleted} remote thumbnail${deleted !== 1 ? "s" : ""}. They will be regenerated on next view.`,
                     });
                  } catch (e) {
                     showToast({
                        title: "External Upload",
                        content: "Failed to delete thumbnails: " + e.message,
                     });
                  }
               }}
            >
               Delete all remote thumbnails
            </Button>
         </div>
         <Header tag={HeaderTags.H3}>Advanced</Header>
         <SwitchItem
            value={plugin.store.debugLogging}
            onChange={(v) => {
               plugin.store.debugLogging = v;
            }}
            hideBorder={true}
            note="Log debug messages to the browser console"
         >
            Enable debug logging
         </SwitchItem>
         <br />
      </>
   );
};
