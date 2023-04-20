const {
   observeDom,
   plugins,
   solid,
   ui: { injectCss, showToast },
} = shelter;

let unpatchList = [];

const trustedUrls = [
   "https://yellowsink.github.io/shelter-plugins/",
   "https://shelter.xirreal.dev",
   "https://ioj4.github.io/shelter-plugins/",
   "https://redstonekasi.github.io/shelter-plugins/",
   "https://beefers.github.io/furniture/",
];

function Card(props) {
   const pluginId = props.url.replace("https://", "").replace("http://", "");

   const isInstalled = () => {
      return plugins.installedPlugins().hasOwnProperty(pluginId);
   };

   return (
      <div class="card">
         <div class="title">{props.json.name}</div>
         <div class="description">{props.json.description}</div>
         <div class="author">
            By <b>{props.json.author}</b>
         </div>
         <div class="buttons">
            <button
               class={isInstalled() ? "buttonInstalled" : "button"}
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
               <button class="button">View</button>
            </a>
         </div>
      </div>
   );
}

const CSS = `
.card {
   background-color: var(--background-primary);
   border-radius: 4px;
   box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
   display: flex;
   flex-direction: column;
   margin: 10px 0;
   padding: 10px;
   max-width: 500px;
}

.title {
   font-size: 16px;
   font-weight: 800;
}

.description {
   font-size: 14px;
   margin-top: 5px;
}

.author {
   font-size: 12px;
   margin-top: 5px;
}

.buttons {
   display: flex;
   margin-top: 10px;
}

.button {
   background-color: var(--brand-experiment);
   border-radius: 4px;
   border: none;
   color: var(--text-normal);
   cursor: pointer;
   font-size: 12px;
   font-weight: 600;
   margin-right: 5px;
   padding: 5px 10px;
}

.button:hover {
   background-color: var(--brand-experiment-560);
   transition: background-color 0.2s ease;
}

.buttonInstalled {
   background-color: var(--background-secondary);
   border-radius: 4px;
   border: none;
   color: var(--text-normal);
   cursor: pointer;
   font-size: 12px;
   font-weight: 600;
   margin-right: 5px;
   padding: 5px 10px;
}
`;

export function onLoad() {
   unpatchList.push(injectCss(CSS));
   unpatchList.push(
      observeDom("[class*=messageContent-] [class^=anchor-]", (element) => {
         queueMicrotask(async () => {
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
                        author: json.author,
                     }}
                     url={url}
                  />
               );

               element.replaceWith(card);
            } catch (e) {
               console.error(e);
            }
         });
      })
   );
}

export function onUnload() {
   for (let unpatch of Object.values(unpatchList)) unpatch();
   unpatchList = [];
}
