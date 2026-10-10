const {
   observeDom,
   patcher: { after },
   onDispose,
   disposeAllNow,
} = shelter.plugin.scoped;

const {
   React,
   ui: { openModal, CheckboxItem, renderSolidInReact, Button, ButtonSizes, ButtonColors, Header, HeaderTags, Divider },
   solid: { createSignal, createRoot, onCleanup },
   util: { getFiberOwner, getFiber, reactFiberWalker },
   plugin: { store },
} = shelter;

import { AddTagModal } from "./modal";
import { filterFavorites } from "./filter";
import { mergeTags, validateMetadata } from "./autotag";
import { AutoTagSettings, cancelAutotag, getFavoriteGifs } from "./autotagSettings";
import classes from "./index.jsx.scss";

const [onlyUntagged, setOnlyUntagged] = createSignal(false);
const patchedPickers = new Set();

function exportTags() {
   const json = createRoot((dispose) => {
      try {
         const data = {};
         const metadata = store.aiMetadata ?? {};
         for (const [url, gif] of Object.entries(getFavoriteGifs())) {
            data[url] = { src: gif.src || url, tags: store[url] || [], ai: metadata[url] };
         }
         return JSON.stringify(data, null, 2);
      } finally {
         dispose();
      }
   });
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
      input.oncancel = () => resolve(0);
      input.onchange = async (e) => {
         const file = e.target.files[0];
         if (!file) return resolve(0);
         try {
            const text = await file.text();
            const data = JSON.parse(text);
            if (!data || typeof data !== "object" || Array.isArray(data)) return resolve(-1);
            const entries = Object.entries(data)
               .filter(([url]) => /^https?:\/\//i.test(url))
               .map(([url, value]) => [url, value, value?.ai ? validateMetadata(value.ai) : undefined]);
            const count = createRoot((dispose) => {
               try {
                  let imported = 0;
                  for (const [url, value, metadata] of entries) {
                     let changed = false;
                     const existing = mergeTags(store[url]);
                     const merged = mergeTags(existing, Array.isArray(value) ? value : value?.tags);
                     if (merged.length > existing.length) {
                        store[url] = merged;
                        changed = true;
                     }
                     if (metadata) {
                        store.aiMetadata ??= {};
                        store.aiMetadata[url] = {
                           ...metadata,
                           model: typeof value.ai.model === "string" ? value.ai.model : "Imported",
                           updatedAt:
                              typeof value.ai.updatedAt === "string" ? value.ai.updatedAt : new Date().toISOString(),
                        };
                        changed = true;
                     }
                     if (changed) imported++;
                  }
                  return imported;
               } finally {
                  dispose();
               }
            });
            resolve(count);
         } catch {
            resolve(-1);
         }
      };
      input.click();
   });
}
function refreshPicker() {
   const panel = document.querySelector("#gif-picker-tab-panel");
   if (panel) getFiberOwner(panel)?.forceUpdate();
}

function FilterControls(props) {
   return (
      <div class={classes.filters}>
         <CheckboxItem
            checked={onlyUntagged()}
            onchange={(event) => {
               setOnlyUntagged(event.currentTarget.checked);
               refreshPicker();
            }}
         >
            Show only untagged GIFs
         </CheckboxItem>
         <span class={classes.counter} role="status" aria-label={`${props.visible} of ${props.total} favorite GIFs`}>
            {props.visible}/{props.total}
         </span>
      </div>
   );
}

function setupPicker(panel) {
   if (!panel.isConnected) return;
   const picker = getFiberOwner(panel);
   if (!picker) return;
   const prototype = Object.getPrototypeOf(picker);
   if (
      patchedPickers.has(prototype) ||
      typeof prototype.renderContent !== "function" ||
      typeof prototype.renderHeader !== "function"
   )
      return;
   patchedPickers.add(prototype);

   after("renderContent", prototype, function (_, result) {
      if (result?.props?.resultType !== "Favorites" || !Array.isArray(this.props.favorites)) return result;

      // Shelter storage reads subscribe to Solid; dispose them after each React render.
      const data = createRoot((dispose) => {
         try {
            return filterFavorites(
               this.props.favorites,
               result.props.data,
               this.props.query,
               store,
               onlyUntagged(),
               store.aiMetadata,
            );
         } finally {
            dispose();
         }
      });
      return React.cloneElement(result, { data });
   });

   after("renderHeader", prototype, function (_, result) {
      if (this.state.resultType !== "Favorites" || !React.isValidElement(result)) return result;
      const controls = renderSolidInReact(FilterControls, {
         visible: this.renderContent().props.data.length,
         total: this.props.favorites.length,
      });
      return React.createElement("div", { className: classes.header }, result, controls);
   });
   picker.forceUpdate();
}

function handleContextMenu(event) {
   if (!(event.target instanceof Element)) return;

   const panel = event.target.closest("#gif-picker-tab-panel");
   if (!panel || getFiberOwner(panel)?.state.resultType !== "Favorites") return;

   const card = event.target.closest('[role="button"][class*="result_"]');
   if (!card || !panel.contains(card)) return;

   const item = reactFiberWalker(getFiber(card), "item", true)?.memoizedProps?.item;
   if (!item?.url || !item.src) return;
   event.preventDefault();
   event.stopPropagation();

   openModal((p) => AddTagModal(p.close, item, refreshPicker));
}

export function onLoad() {
   observeDom("#gif-picker-tab-panel", setupPicker);
   const panel = document.querySelector("#gif-picker-tab-panel");
   if (panel) setupPicker(panel);
   document.addEventListener("contextmenu", handleContextMenu, true);
   onDispose(() => document.removeEventListener("contextmenu", handleContextMenu, true));
}

export function onUnload() {
   cancelAutotag();
   disposeAllNow();
   patchedPickers.clear();
   refreshPicker();
}

export function settings() {
   const [importStatus, setImportStatus] = createSignal("");
   const [importResult, setImportResult] = createSignal(0);
   let statusTimer;
   onCleanup(() => clearTimeout(statusTimer));

   async function handleImport() {
      setImportStatus("Selecting file...");
      setImportResult(0);
      const result = await importTags();
      setImportResult(result);
      if (result === -1) {
         setImportStatus("Import failed: invalid JSON file.");
      } else if (result === 0) {
         setImportStatus("No new tags to import.");
      } else {
         setImportStatus(`Imported tags for ${result} GIF(s).`);
         refreshPicker();
      }
      clearTimeout(statusTimer);
      statusTimer = setTimeout(() => setImportStatus(""), 4000);
   }

   return (
      <div class={classes.settings}>
         <AutoTagSettings onUpdate={refreshPicker} />
         <Divider />
         <section class={classes.section} aria-label="Tag backups">
            <Header tag={HeaderTags.H4} margin={false}>
               Tag backups
            </Header>
            <div class={classes.buttonRow}>
               <Button size={ButtonSizes.MEDIUM} grow color={ButtonColors.SECONDARY} onClick={exportTags}>
                  Export tags
               </Button>
               <Button size={ButtonSizes.MEDIUM} grow color={ButtonColors.SECONDARY} onClick={handleImport}>
                  Import tags
               </Button>
            </div>
            {importStatus() && (
               <span
                  class={classes.importStatus}
                  classList={{ [classes.error]: importResult() < 0, [classes.connected]: importResult() > 0 }}
                  role="status"
               >
                  {importStatus()}
               </span>
            )}
         </section>
      </div>
   );
}
