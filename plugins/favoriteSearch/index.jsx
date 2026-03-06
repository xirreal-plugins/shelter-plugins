const {
   flux: { subscribe },
   observeDom,
} = shelter.plugin.scoped;

const {
   ui: { TextBox, openModal, CheckboxItem, ReactiveRoot, Button, ButtonSizes, ButtonColors },
   solid: { createSignal, createEffect, onCleanup },
   util: { getFiberOwner, getFiber, reactFiberWalker },
   plugin: { store },
   flux: {
      stores: { UserSettingsProtoStore },
   },
} = shelter;

import { AddTagModal } from "./modal";
import classes from "./index.jsx.scss";

function addClickHandlerToFavoritesGifPicker() {
   const stopObserving = observeDom("[class*='result'] > [class*='categoryFadeBlurple']", (container) => {
      stopObserving();
      if (container.parentElement.dataset.clickHandlerAdded) return;

      container.parentElement.dataset.clickHandler = "true";
      container.parentElement.addEventListener("click", handleClick);
   });
   setTimeout(stopObserving, 500);
}

function exportTags() {
   const gifs = UserSettingsProtoStore.__proto__.frecencyWithoutFetchingLatest.favoriteGifs.gifs;

   const data = {};
   for (const [url, gif] of Object.entries(gifs)) {
      data[url] = {
         src: gif.src || url,
         tags: store[url] || [],
      };
   }

   const json = JSON.stringify(data, null, 2);
   const blob = new Blob([json], { type: "application/json" });
   const url = URL.createObjectURL(blob);
   const a = document.createElement("a");
   a.href = url;
   a.download = "gif-tags.json";
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
   URL.revokeObjectURL(url);
}

function importTags() {
   return new Promise((resolve) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";
      input.onchange = async (e) => {
         const file = e.target.files[0];
         if (!file) return resolve(0);
         try {
            const text = await file.text();
            const data = JSON.parse(text);
            let count = 0;
            for (const [url, value] of Object.entries(data)) {
               // Support both formats:
               //   new: { src: "...", tags: [...] }
               //   old: [...]  (plain tag array)
               const tags = Array.isArray(value) ? value : Array.isArray(value?.tags) ? value.tags : [];
               if (tags.length > 0) {
                  const existing = store[url] || [];
                  const existingSet = new Set(existing.map((t) => t.toLowerCase()));
                  const newTags = tags.filter((t) => typeof t === "string" && t.trim().length > 0 && !existingSet.has(t.trim().toLowerCase()));
                  if (newTags.length > 0) {
                     store[url] = [...existing, ...newTags.map((t) => t.trim())];
                     count++;
                  }
               }
            }
            resolve(count);
         } catch {
            resolve(-1);
         }
      };
      input.click();
   });
}
function setupFiberProps(fiber) {
   if (!Object.getOwnPropertyDescriptor(fiber.props, "__favorites")) {
      let original = [...(fiber.props.favorites || [])];
      let internalUpdate = false;

      Object.defineProperty(fiber.props, "__favorites", {
         configurable: true,
         get() {
            return [...original];
         },
         set(value) {
            original = [...(value || [])];
         },
      });

      Object.defineProperty(fiber.props, "favorites", {
         configurable: true,
         get() {
            return this.__current ?? original;
         },
         set(value) {
            if (!internalUpdate) {
               original = [...(value || [])];
            }

            this.__current = [...(value || [])];
         },
      });

      fiber.props.__applyFilter = (filtered) => {
         internalUpdate = true;
         fiber.props.favorites = filtered;
         internalUpdate = false;
      };
   }
}

function getFreshFiber() {
   const container = document.querySelector("#gif-picker-tab-panel");
   if (!container) return null;
   const fiber = getFiberOwner(container);
   if (!fiber?.props?.favorites) return null;
   setupFiberProps(fiber);
   return fiber;
}

function SearchBar() {
   const [text, setText] = createSignal("");
   const [showUntagged, setShowUntagged] = createSignal(false);
   const container = document.querySelector("#gif-picker-tab-panel");
   let fiber = getFiberOwner(container);
   const [counter, setCounter] = createSignal(fiber.props.favorites.length.toString());
   const total = fiber.props.favorites.length;

   setupFiberProps(fiber);

   function update() {
      const freshFiber = getFreshFiber();
      if (freshFiber) {
         fiber = freshFiber;
      }

      const favorites = fiber.props.__favorites;
      if (!favorites) return;

      const searchText = text();
      const onlyUntagged = showUntagged();

      const filtered = favorites.filter((gif) => {
         const tags = store[gif.url] || [];

         if (onlyUntagged && tags.length > 0) return false;
         if (!searchText) return true;

         const lowerSearch = searchText.toLowerCase();

         if (gif.url.toLowerCase().includes(lowerSearch)) return true;

         return tags.some((tag) => tag?.toLowerCase().includes(lowerSearch));
      });

      fiber.props.__applyFilter(filtered);

      setCounter(filtered.length.toString());
      fiber.forceUpdate();
   }

   createEffect(update);

   const stopObserving = observeDom("#gif-picker-tab-panel", () => {
      setTimeout(update, 100);
   });

   onCleanup(() => {
      stopObserving();
   });

   return (
      <div id={classes.searchBar}>
         <div class={classes.barContainer}>
            <TextBox
               placeholder="Search favorite GIFs..."
               value={text()}
               onInput={(value) => {
                  setText(value ?? "");
               }}
            />
            <div class={classes.counter} aria-hidden="true">
               {counter()}/{total}
            </div>
         </div>
         <div class={classes.align}>
            <CheckboxItem checked={showUntagged()} onchange={() => setShowUntagged(!showUntagged())}>
               Show only untagged GIFs
            </CheckboxItem>
         </div>
      </div>
   );
}

let stopObservingResults = null;
function handleClick() {
   requestAnimationFrame(() => {
      const header = document.querySelector("#gif-picker-tab-panel > div:first-child");
      if (!header) return;
      header.appendChild(
         <div id="shltr-gifsearch-container">
            <ReactiveRoot>
               <SearchBar />
            </ReactiveRoot>
         </div>,
      );

      stopObservingResults = observeDom("[class*='results'] > [class*='content'] > div > [class*='result']", (card) => {
         if (card.dataset.addedRightClick) return;
         card.dataset.addedRightClick = "true";

         addRightClickHandler(card);
      });
   });
}

function handleBack() {
   document.getElementById("shltr-gifsearch-container")?.remove();
   if (stopObservingResults) {
      stopObservingResults();
      stopObservingResults = null;
   }
   addClickHandlerToFavoritesGifPicker();
}

function addRightClickHandler(container) {
   container.addEventListener("contextmenu", (e) => {
      openModal((p) => AddTagModal(p.close, reactFiberWalker(getFiber(e.target.parentNode), "item", true).memoizedProps.item));
   });
}

export function onLoad() {
   subscribe("GIF_PICKER_INITIALIZE", (e) => {
      addClickHandlerToFavoritesGifPicker();
   });

   subscribe("GIF_PICKER_QUERY", (e) => {
      handleBack();
   });
}

export function settings() {
   const [importStatus, setImportStatus] = createSignal("");

   async function handleImport() {
      setImportStatus("Selecting file...");
      const result = await importTags();
      if (result === -1) {
         setImportStatus("Import failed: invalid JSON file.");
      } else if (result === 0) {
         setImportStatus("No new tags to import.");
      } else {
         setImportStatus(`Imported tags for ${result} GIF(s).`);
         update();
      }
      setTimeout(() => setImportStatus(""), 4000);
   }

   return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "16px" }}>
         <div class={classes.buttonRow}>
            <Button size={ButtonSizes.MEDIUM} color={ButtonColors.SECONDARY} onClick={() => exportTags()}>
               Export tags
            </Button>
            <Button size={ButtonSizes.MEDIUM} color={ButtonColors.PRIMARY} onClick={handleImport}>
               Import tags
            </Button>
         </div>
         {importStatus() && <span class={classes.importStatus}>{importStatus()}</span>}
      </div>
   );
}
