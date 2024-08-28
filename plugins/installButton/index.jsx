const { observeDom } = shelter.plugin.scoped;

const {
   flux: {
      dispatcher,
      stores: { SelectedChannelStore },
   },
   plugins,
   ui: { showToast, Button, ButtonColors, ButtonSizes, openModal, ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter },
   solid: { createSignal },
} = shelter;

import classes from "./index.jsx.scss";

import { CopyIcon, ContentIcon } from "./icons.jsx";

let trustedUrls = [];

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
      return plugins.installedPlugins().hasOwnProperty(pluginId);
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
         <div class={classes.header}>
            <div class={classes.author}>{props.json.author}</div>
            <div
               onMouseDown={doCopy}
               class={`${classes.copyLink} ${copiedClass()}`}
            >
               <CopyIcon class={classes.icon} />
               <div>{copyText()}</div>
            </div>
         </div>
         <div class={classes.content}>
            <ContentIcon />
            <div>
               <div class={classes.title}>{props.json.name}</div>
               <div class={classes.description}>{props.json.description}</div>
            </div>
            <Button
               color={
                  isInstalled() ? ButtonColors.SECONDARY : ButtonColors.GREEN
               }
               disabled={isInstalled()}
               class={classes.alignRight}
               size={ButtonSizes.MEDIUM}
               onClick={async () => {
                  if (!isInstalled()) {
                     await plugins.addRemotePlugin(pluginId, props.url);
                     plugins.startPlugin(pluginId);
                     showToast({
                        title: props.json.name,
                        content: `has been installed.`,
                     });
                  }
               }}
            >
               {isInstalled() ? "Installed" : "Install"}
            </Button>
         </div>
      </div>
   );
}

function handleDispatch(payload) {
   if (
      (payload.type === "MESSAGE_CREATE" ||
         payload.type === "MESSAGE_UPDATE") &&
      payload.message.channel_id !== SelectedChannelStore.getChannelId()
   )
      return;

   const unobs = observeDom(
      "[class*=messageContent_] [class^=anchor_]:not([data-instbtn])",
      async (element) => {
         // don't find element we've already replaced
         element.dataset.instbtn = 1;
         unobs();

         if (element.textContent != element.href) {
            return;
         }

         let url = element.href.endsWith("/")
            ? element.href
            : element.href + "/";

         // If the URL ends with plugin.json/ remove it
         if (url.endsWith("plugin.json/")) {
            url = url.slice(0, -12);
         }

         // Check if the URL is trusted
         if (!trustedUrls.some((trustedUrl) => url.startsWith(trustedUrl))) {
            return;
         }

         element.onclick = (e) => {
            e.preventDefault();
         };

         try {
            let response = await fetch(url + "plugin.json");
            if (!response.ok) return;

            let json = await response.json();
            let card = (
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
            // and react fails to remove us if we insert at the same level
            element.className = "";
            element.style.all = "unset";
            element.style.display = "contents";
            element.replaceChildren(card);
         } catch (e) {
            console.error(e);
         }
      },
   );

   // just in case
   setTimeout(unobs, 200);
}

function InstallationModal(props) {
   const { closeModal, json, url, pluginId } = props;

   return <ModalRoot>
      <ModalHeader>Install Plugin</ModalHeader>
      <ModalBody>
         <p>Are you sure you want to install <strong>{json.name}</strong> by <strong>{json.author}</strong>?</p>
         <p><i>{json.description}</i></p>
      </ModalBody>
      <ModalConfirmFooter
         close={closeModal}
         type="danger"
         confirmText="Install"
         onConfirm={async () => {
            await plugins.addRemotePlugin(pluginId, url);
            plugins.startPlugin(pluginId);
            showToast({
               title: json.name,
               content: `has been installed.`,
            });
         }}
      />
   </ModalRoot>;
}

async function handleInstall(_, url) {
   if(window.InstallButtonEnabled === false) return;

   url = url.substring(1);
   url = url.endsWith("/") ? url : url + "/";

   if (!trustedUrls.find((trustedUrl) => url.startsWith(trustedUrl))) {
      showToast({
         title: "Plugin Installation",
         content: "This plugin is not trusted.",
      });
      return;
   }

   const response = await fetch(url + "plugin.json");
   if (!response.ok) return;

   const json = await response.json();

   const pluginId = url.replace("https://", "").replace("http://", "");

   if (plugins.installedPlugins().hasOwnProperty(pluginId)) {
      showToast({
         title: json.name,
         content: `is already installed.`,
      });
      return;
   }

   openModal((modal) => InstallationModal({ closeModal:modal.close, json, url, pluginId }));
}

const TRIGGERS = [
   "MESSAGE_CREATE",
   "MESSAGE_UPDATE",
   "UPDATE_CHANNEL_DIMENSIONS",
];

export function onLoad() {
   fetch("https://shindex.uwu.network/data").then((body) =>
      body
         .json()
         .then((repos) => repos.forEach((repo) => trustedUrls.push(repo.url))),
   );

   for (const t of TRIGGERS) dispatcher.subscribe(t, handleDispatch);

   window.InstallButtonEnabled = true;
   if(window.DiscordNative && !window.InstallButtonInjected) {
      window.DiscordNative.ipc.on("DISCORD_MAIN_WINDOW_PATH", handleInstall);
      window.InstallButtonInjected = true;
   }
}

export function onUnload() {
   trustedUrls.length = 0;
   // select all elements with the class name of anchor_ and remove the data-instbtn attribute
   document
      .querySelectorAll(
         "[class*=messageContent_] [class^=anchor_][data-instbtn]",
      )
      .forEach((element) => {
         element.removeAttribute("data-instbtn");
         element.onclick = null;
      });

   window.InstallButtonEnabled = false;
}