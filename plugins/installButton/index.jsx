const {
   flux: { subscribe },
   observeDom,
} = shelter.plugin.scoped;

const {
   flux: {
      stores: { SelectedChannelStore },
   },
   plugins,
   ui: { showToast, ToastColors, Button, ButtonColors, ButtonSizes, openModal, ModalRoot, ModalHeader, ModalBody, ModalFooter, ModalSizes },
   solid: { createSignal },
} = shelter;

import classes from "./index.jsx.scss";

import { ContentIcon, CopyIcon, WarningIcon } from "./icons.jsx";

const allowedUrls = [];

function copyToClipboard(text) {
   if (window.DiscordNative) {
      DiscordNative.clipboard.copy(text);
      return;
   }

   navigator.clipboard.writeText(text).catch(() => {
      const copyArea = document.createElement("textarea");

      copyArea.style.visibility = "hidden";
      copyArea.style.position = "fixed";
      copyArea.style.top = "0";
      copyArea.style.left = "0";

      document.body.appendChild(copyArea);
      copyArea.focus();
      copyArea.select();

      try {
         document.execCommand("copy");
      } catch (err) {
         console.error(err);
      }

      document.body.removeChild(copyArea);
   });
}

function Card(props) {
   const pluginId = props.url.replace("https://", "").replace("http://", "");

   const isInstalled = () => {
      return pluginId in plugins.installedPlugins();
   };

   const [copied, update] = createSignal(0);

   let timer = null;
   const doCopy = () => {
      if (copied()) {
         clearTimeout(timer);
      }

      copyToClipboard(props.url);
      update(true);
      timer = setTimeout(() => {
         update(false);
      }, 2000);
   };

   const copyText = () => {
      return copied() ? "Link copied!" : "Copy link";
   };

   const copiedClass = () => {
      return copied() ? classes.copied : "";
   };

   return (
      <div class={classes.card}>
         <div class={classes.content}>
            <ContentIcon />
            <div>
               <div class={classes.title}>{props.json.name}</div>
               <div class={classes.header}>
                  <div class={classes.author}>{props.json.author}</div>
                  <svg class={classes.divider} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 4 4">
                     <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                  </svg>
                  <div onMouseDown={doCopy} class={`${classes.copyLink} ${copiedClass()}`}>
                     <CopyIcon class={classes.icon} />
                     <div>{copyText()}</div>
                  </div>
               </div>
               <div class={classes.description}>{props.json.description}</div>
            </div>
            <Show when={!props.withoutButton}>
               <Button
                  color={isInstalled() ? ButtonColors.SECONDARY : ButtonColors.GREEN}
                  disabled={isInstalled()}
                  class={classes.alignRight}
                  size={ButtonSizes.MEDIUM}
                  onClick={async () => {
                     if (!isInstalled()) {
                        await plugins.addRemotePlugin(pluginId, props.url);
                        plugins.startPlugin(pluginId);
                        showToast({
                           title: "New plugin installed",
                           content: props.json.name,
                           color: ToastColors.SUCCESS,
                        });
                     }
                  }}
               >
                  {isInstalled() ? "Installed" : "Install"}
               </Button>
            </Show>
         </div>
      </div>
   );
}

function handleDispatch(payload) {
   if ((payload.type === "MESSAGE_CREATE" || payload.type === "MESSAGE_UPDATE") && payload.message.channel_id !== SelectedChannelStore.getChannelId()) return;

   const unobs = observeDom("[class*=messageContent] [class*=anchor]:not([data-instbtn])", async (element) => {
      // don't find element we've already replaced
      element.dataset.instbtn = 1;
      unobs();

      if (element.textContent !== element.href) {
         return;
      }

      let url = element.href.endsWith("/") ? element.href : `${element.href}/`;

      // If the URL ends with plugin.json/ remove it
      if (url.endsWith("plugin.json/")) {
         url = url.slice(0, -12);
      }

      // Check if the URL is allowed
      if (!allowedUrls.some((allowedUrl) => url.startsWith(allowedUrl))) {
         return;
      }

      try {
         const response = await fetch(`${url}plugin.json`);
         if (!response.ok) return;

         const json = await response.json();
         const card = (
            <Card
               json={{
                  name: json.name,
                  description: json.description,
                  author: json.author,
               }}
               url={url}
            />
         );

         // removing the element entirely causes react to blow up
         element.style.display = "none";
         element.insertAdjacentElement("afterend", card);

         // extract message id
         const id = element.parentElement.id.split("-").pop();

         // attempt to get the message accessories container immediately
         const accessories = document.querySelector(`[id="message-accessories-${id}"]`);
         if (accessories) {
            accessories.dataset.instbtn = 1;
            accessories.style.display = "none";
            return;
         }

         // otherwise we wait a little
         const unobserve = observeDom(`[id="message-accessories-${id}"]`, (embed) => {
            embed.dataset.instbtn = 1;
            embed.style.display = "none";
            unobserve();
         });
         setTimeout(unobserve, 5000); // bail after 5s seems reasonable
      } catch (e) {
         console.error(e);
      }
   });

   // just in case
   setTimeout(unobs, 200);
}

function InstallationModal(props) {
   const { closeModal, json, url, pluginId } = props;

   return (
      <ModalRoot size={ModalSizes.MEDIUM}>
         <ModalHeader close={closeModal}>OneClick™ Installer Technologies by UWU NETWORK LLC</ModalHeader>
         <ModalBody>
            <div class={classes.modalContent}>
               <Card withoutButton={true} json={json} url={url} />
               <br />
               <div class={classes.warningBox}>
                  <div class={classes.warningIcon}>
                     <WarningIcon />
                  </div>
                  <p class={classes.warningText}>
                     Only install plugins from sources you trust. Plugins execute code and could access your private Discord data.
                  </p>
               </div>
            </div>
         </ModalBody>
         <ModalFooter>
            <div style={{ display: "flex", "justify-content": "flex-end", gap: "8px" }}>
               <Button size={ButtonSizes.MEDIUM} color={ButtonColors.SECONDARY} onClick={closeModal}>
                  Close
               </Button>
               <Button
                  size={ButtonSizes.MEDIUM}
                  color={ButtonColors.CRITICAL_PRIMARY}
                  onClick={async () => {
                     await plugins.addRemotePlugin(pluginId, url);
                     plugins.startPlugin(pluginId);
                     showToast({
                        title: "New plugin installed",
                        content: props.json.name,
                        color: ToastColors.SUCCESS,
                     });
                     closeModal();
                  }}
               >
                  Install
               </Button>
            </div>
         </ModalFooter>
      </ModalRoot>
   );
}

async function handleInstall(url) {
   if (window.InstallButtonEnabled === false) return;

   DiscordNative.window.focus();

   url = url.endsWith("/") ? url : `${url}/`;

   const response = await fetch(`${url}plugin.json`);
   if (!response.ok) return;

   const json = await response.json();

   const pluginId = url.replace("https://", "").replace("http://", "");

   if (pluginId in plugins.installedPlugins()) {
      showToast({
         title: "Plugin already installed",
         content: `${json.name} is already installed.`,
         color: ToastColors.WARNING,
      });
      return;
   }

   openModal((modal) =>
      InstallationModal({
         closeModal: modal.close,
         json,
         url,
         pluginId,
      }),
   );

   return true;
}

const TRIGGERS = ["MESSAGE_CREATE", "MESSAGE_UPDATE", "UPDATE_CHANNEL_DIMENSIONS"];

export function onLoad() {
   fetch("https://shindex.uwu.network/data").then((body) => body.json().then((repos) => repos.forEach((repo) => allowedUrls.push(repo.url))));

   for (const t of TRIGGERS) subscribe(t, handleDispatch);

   if (!window.InstallButtonWSS) {
      if (!window.DiscordNative) {
         return;
      }

      const { Server } = DiscordNative.nativeModules.requireModule("discord_rpc")?.RPCWebSocket?.ws;
      if (!Server) {
         return;
      }

      const server = new Server({ port: 6767 });

      server.on("connection", (ws) => {
         ws.on("message", async (data) => {
            const message = JSON.parse(data.toString());
            if (message.type === "install" && message.url) {
               await handleInstall(message.url);
            }
         });
      });

      window.InstallButtonWSS = true;
   }

   window.InstallButtonEnabled = true;
}

export function onUnload() {
   allowedUrls.length = 0;

   for (const element of document.querySelectorAll("[data-instbtn]")) {
      element.removeAttribute("data-instbtn");
      element.style.display = "inline-block";
      element.onclick = null;
   }

   for (const element of document.querySelectorAll(`.${classes.card}`)) {
      element.remove();
   }

   window.InstallButtonEnabled = false;
}
