const {
   flux: { dispatcher, stores: { SelectedChannelStore } },
   observeDom,
   plugins,
   ui: { injectCss, showToast }
} = shelter;

import { css, classes } from "./index.jsx.scss";

let unpatchList = [];

const trustedUrls = [
   "https://yellowsink.github.io/shelter-plugins/",
   "https://shelter.xirreal.dev",
   "https://ioj4.github.io/shelter-plugins/",
   "https://shelter.ioj4.net/",
   "https://redstonekasi.github.io/shelter-plugins/",
   "https://beefers.github.io/furniture/",
];

function Card(props) {
   const pluginId = props.url.replace("https://", "").replace("http://", "");

   const isInstalled = () => {
      return plugins.installedPlugins().hasOwnProperty(pluginId);
   };

   return (
      <div class={classes.card}>
         <div class={classes.title}>{props.json.name}</div>
         <div class={classes.description}>{props.json.description}</div>
         <div class={classes.author}>
            By <b>{props.json.author}</b>
         </div>
         <div class={classes.buttons}>
            <button
               class={isInstalled() ? classes.buttonInstalled : classes.button}
               onClick={async () => {
                  if (!isInstalled()) {
                     await plugins.addRemotePlugin(pluginId, props.url);
                     plugins.startPlugin(pluginId);
                     showToast({
                        title: props.json.name,
                        content: `has been installed and started.`,
                     });
                  }
               }}
            >
               {isInstalled() ? "Installed" : "Install"}
            </button>
            <a href={props.url} target="_blank">
               <button class={classes.button}>View</button>
            </a>
         </div>
      </div>
   );
}

function handleDispatch(payload) {
   if (
      (payload.type === "MESSAGE_CREATE" || payload.type === "MESSAGE_UPDATE") &&
      payload.message.channel_id !== SelectedChannelStore.getChannelId()
   )
      return;

   const unobs = observeDom("[class*=messageContent-] [class^=anchor-]:not([data-instbtn])", async (element) => {
      // don't find element we've already replaced
      element.dataset.instbtn = 1;
      unobs();

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

      try {
         let response = await fetch(url + "plugin.json");
         if (!response.ok) return;

         let json = await response.json();
         let card = (
            <Card
               json={{
                  name: json.name,
                  description: json.description,
                  author: json.author
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
   });

   // just in case
   setTimeout(unobs, 200);
}

const TRIGGERS = [
   "MESSAGE_CREATE", "MESSAGE_UPDATE", "UPDATE_CHANNEL_DIMENSIONS"
];

export function onLoad() {
   for (const t of TRIGGERS) dispatcher.subscribe(t, handleDispatch);
   unpatchList.push(injectCss(css));
}

export function onUnload() {
   for (const t of TRIGGERS) dispatcher.unsubscribe(t, handleDispatch);

   for (let unpatch of Object.values(unpatchList)) unpatch();
   unpatchList = [];
}
