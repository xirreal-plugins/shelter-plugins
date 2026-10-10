const {
   ui: { Button, ButtonColors, ButtonSizes, CheckboxItem, Header, HeaderTags, Select, SelectOption, TextBox },
   solid: { createSignal, createMemo, createRoot, For, Show },
   util: { createSubscription },
   plugin: { store, flushStore },
   flux: {
      stores: { UserSettingsProtoStore },
   },
} = shelter;

import { listModels, normalizeEndpoint, tagFrames } from "./autotag";
import { extractFrames } from "./media";
import classes from "./index.jsx.scss";

const [job, setJob] = createSignal({ running: false, done: 0, total: 0, saved: 0, errors: [], phase: "", last: null });
const [config, setConfig] = createSignal(
   withStore(() => ({
      endpoint: "http://127.0.0.1:1234/v1",
      model: "",
      apiKey: "",
      onlyNew: true,
      ...JSON.parse(JSON.stringify(store.autotagger ?? {})),
   })),
);
const [models, setModels] = createSignal([]);
const [connecting, setConnecting] = createSignal(false);
const [connection, setConnection] = createSignal("");
const [connectionError, setConnectionError] = createSignal(false);
let controller;
let connectionController;

export function getFavoriteGifs() {
   return UserSettingsProtoStore.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {};
}

function withStore(callback) {
   return createRoot((dispose) => {
      try {
         return callback();
      } finally {
         dispose();
      }
   });
}

export function cancelAutotag() {
   controller?.abort();
   connectionController?.abort();
}

async function startTagging(config, entries, onUpdate) {
   if (controller || !entries.length) return;
   controller = new AbortController();
   const signal = controller.signal;
   setJob({ running: true, done: 0, total: entries.length, saved: 0, errors: [], phase: "Starting…", last: null });
   let cancelled = false;
   let stopped = false;
   try {
      for (const [url, gif] of entries) {
         try {
            signal.throwIfAborted();
            setJob((current) => ({ ...current, phase: `Reading GIF ${current.done + 1} of ${entries.length}…` }));
            const frames = await extractFrames(gif.src || url, signal);
            signal.throwIfAborted();
            setJob((current) => ({ ...current, phase: `Tagging GIF ${current.done + 1} of ${entries.length}…` }));
            const metadata = await tagFrames(config, frames, signal);
            signal.throwIfAborted();
            const previous = withStore(() =>
               store.aiMetadata?.[url] ? JSON.parse(JSON.stringify(store.aiMetadata[url])) : undefined,
            );
            withStore(() => {
               store.aiMetadata ??= {};
               store.aiMetadata[url] = { ...metadata, model: config.model, updatedAt: new Date().toISOString() };
            });
            try {
               flushStore();
            } catch {
               withStore(() => {
                  if (previous) store.aiMetadata[url] = previous;
                  else delete store.aiMetadata[url];
               });
               throw Object.assign(
                  new Error(
                     "Could not save tags to shelter storage.",
                  ),
                  { fatal: true },
               );
            }
            onUpdate();
            setJob((current) => ({
               ...current,
               done: current.done + 1,
               saved: current.saved + 1,
               last: { ...metadata, preview: frames[0] },
            }));
         } catch (error) {
            if (signal.aborted) {
               cancelled = true;
               break;
            }
            setJob((current) => ({
               ...current,
               done: current.done + 1,
               errors: [...current.errors, { url, message: error.message || "Could not analyze this GIF." }],
            }));
            if (
               error.fatal ||
               [400, 401, 403, 404, 429].includes(error.status) ||
               /Cannot reach the endpoint/.test(error.message)
            ) {
               stopped = true;
               break;
            }
         }
      }
   } finally {
      controller = undefined;
      setJob((current) => ({
         ...current,
         running: false,
         phase: cancelled
            ? "Stopped."
            : stopped
              ? "Stopped due to error"
              : `Finished: ${current.saved} saved, ${current.errors.length} failed.`,
      }));
   }
}

export function AutoTagSettings(props) {
   const last = () => job().last;
   const favorites = createSubscription(UserSettingsProtoStore, () => Object.entries(getFavoriteGifs()));
   const remaining = createMemo(() => {
      const metadata = store.aiMetadata ?? {};
      return favorites().filter(([url]) => !Object.hasOwn(metadata, url));
   });
   const pending = () => (config().onlyNew ? remaining() : favorites());

   function updateConfig(values) {
      const next = { ...config(), ...values };
      setConfig(next);
      store.autotagger = next;
      if ("endpoint" in values || "apiKey" in values) {
         connectionController?.abort();
         setModels([]);
         setConnection("");
         setConnectionError(false);
      }
   }

   async function connect() {
      connectionController?.abort();
      const requestController = new AbortController();
      connectionController = requestController;
      setConnecting(true);
      setConnection("Connecting…");
      setConnectionError(false);
      try {
         const endpoint = normalizeEndpoint(config().endpoint);
         const available = await listModels({ ...config(), endpoint }, requestController.signal);
         if (requestController.signal.aborted) return;
         setModels(available);
         const next = {
            ...config(),
            endpoint,
            model: available.includes(config().model) ? config().model : available[0] || config().model,
         };
         setConfig(next);
         store.autotagger = next;
         setConnection(
            available.length
               ? `Connected · ${available.length} model${available.length === 1 ? "" : "s"} available`
               : "Connected. Enter a vision model ID below.",
         );
      } catch (error) {
         if (requestController.signal.aborted) return;
         setConnectionError(true);
         setConnection(
            error.name === "TimeoutError" ? "Connection timed out. Check the endpoint and server." : error.message,
         );
      } finally {
         if (connectionController === requestController) setConnecting(false);
      }
   }

   function run(entries = pending()) {
      const currentConfig = { ...config() };
      try {
         currentConfig.endpoint = normalizeEndpoint(currentConfig.endpoint);
      } catch (error) {
         setConnectionError(true);
         setConnection(error.message);
         return;
      }
      if (!currentConfig.model.trim()) {
         setConnectionError(true);
         setConnection("Connect to load available models, or enter a vision model ID.");
         return;
      }
      void startTagging(currentConfig, [...entries], props.onUpdate);
   }

   return (
      <section class={classes.section} aria-labelledby="favorite-search-autotag-title" data-favorite-search-autotagger>
         <Header tag={HeaderTags.H4} margin={false} id="favorite-search-autotag-title">
            Auto-tag favorites
         </Header>
         <div class={classes.setup}>
            <div class={classes.field}>
               <label for="favorite-search-endpoint">OpenAI-compatible endpoint</label>
               <div class={classes.endpointRow}>
                  <TextBox
                     id="favorite-search-endpoint"
                     value={config().endpoint}
                     onInput={(endpoint) => updateConfig({ endpoint })}
                     placeholder="http://127.0.0.1:1234/v1"
                     disabled={job().running || connecting()}
                     spellcheck={false}
                     aria-describedby={connection() ? "favorite-search-connection" : undefined}
                  />
                  <Button
                     size={ButtonSizes.MEDIUM}
                     color={ButtonColors.GREEN}
                     onClick={connect}
                     disabled={connecting() || job().running}
                  >
                     {connecting() ? "Connecting…" : "Connect"}
                  </Button>
               </div>
               <Show when={connection()}>
                  <span
                     id="favorite-search-connection"
                     class={classes.connection}
                     classList={{
                        [classes.connected]: !connecting() && !connectionError(),
                        [classes.error]: connectionError(),
                     }}
                     role="status"
                  >
                     {connection()}
                  </span>
               </Show>
            </div>
            <div class={classes.field}>
               <label for="favorite-search-model">Vision model</label>
               <Show
                  when={models().length}
                  fallback={
                     <TextBox
                        id="favorite-search-model"
                        value={config().model}
                        onInput={(model) => updateConfig({ model })}
                        placeholder="Connect to find models, or enter a model ID"
                        disabled={job().running || connecting()}
                        spellcheck={false}
                     />
                  }
               >
                  <Select
                     id="favorite-search-model"
                     aria-label="Vision model"
                     value={config().model}
                     onChange={(model) => updateConfig({ model })}
                     disabled={job().running || connecting()}
                  >
                     <For each={models()}>{(model) => <SelectOption value={model}>{model}</SelectOption>}</For>
                  </Select>
               </Show>
            </div>
            <details class={classes.authentication}>
               <summary>API key (optional)</summary>
               <div class={classes.field}>
                  <label for="favorite-search-api-key">API key</label>
                  <TextBox
                     id="favorite-search-api-key"
                     type="password"
                     value={config().apiKey}
                     onInput={(apiKey) => updateConfig({ apiKey })}
                     placeholder="Leave empty if your server doesn't require a key"
                     autocomplete="off"
                     disabled={job().running || connecting()}
                     title="Note: exporting tags will not export this API key."
                  />
               </div>
            </details>
         </div>
         <div class={classes.tagging}>
            <div class={classes.collection}>
               <span class={classes.collectionCount}>{favorites().length.toLocaleString()} favorites</span>
               <span class={classes.hint}>
                  {favorites().length - remaining().length} AI-tagged · {remaining().length.toLocaleString()} remaining
               </span>
            </div>
            <CheckboxItem
               checked={config().onlyNew}
               onchange={(event) => updateConfig({ onlyNew: event.currentTarget.checked })}
               disabled={job().running}
            >
               Only GIFs without AI tags
            </CheckboxItem>
            <div class={classes.buttonRow}>
               <Show
                  when={job().running}
                  fallback={
                     <Button
                        size={ButtonSizes.MEDIUM}
                        grow
                        onClick={() => run()}
                        disabled={connecting() || !pending().length || !config().model.trim()}
                     >
                        Auto-tag {pending().length.toLocaleString()} GIFs
                     </Button>
                  }
               >
                  <Button size={ButtonSizes.MEDIUM} color={ButtonColors.RED} onClick={cancelAutotag}>
                     Stop
                  </Button>
               </Show>
               <Show when={!job().running && !job().errors.length}>
                  <Button
                     size={ButtonSizes.MEDIUM}
                     grow
                     color={ButtonColors.SECONDARY}
                     onClick={() => run(pending().slice(0, 1))}
                     disabled={connecting() || !pending().length || !config().model.trim()}
                  >
                     Tag one GIF
                  </Button>
               </Show>
               <Show when={!job().running && job().errors.length}>
                  <Button
                     size={ButtonSizes.MEDIUM}
                     grow
                     color={ButtonColors.SECONDARY}
                     onClick={() => run(favorites().filter(([url]) => job().errors.some((error) => error.url === url)))}
                  >
                     Retry failed ({job().errors.length})
                  </Button>
               </Show>
            </div>
         </div>
         <Show when={job().total}>
            <div
               class={classes.jobStatus}
               classList={{
                  [classes.connected]: !job().running && job().done === job().total && !job().errors.length,
                  [classes.error]: !job().running && job().errors.length > 0,
               }}
            >
               <progress
                  class={classes.progress}
                  value={job().done}
                  max={job().total}
                  aria-label="GIF tagging progress"
               />
               <span class={classes.hint}>
                  {job().done}/{job().total} checked · {job().saved} saved · {job().errors.length} failed
               </span>
               <p class={classes.phase} role="status" aria-live="polite">
                  {job().phase}
               </p>
            </div>
         </Show>
         <Show when={job().last}>
            <details class={classes.result} open>
               <summary>Last saved result · {last().contentRating}</summary>
               <div class={classes.resultBody}>
                  <img src={last().preview} alt="Last GIF analyzed" class={classes.preview} />
                  <div class={classes.resultText}>
                     <p>{last().caption}</p>
                     <Show when={last().ocr}>
                        <p class={classes.hint}>Text: {last().ocr}</p>
                     </Show>
                     <div class={classes.tags}>
                        <For each={last().tags}>{(tag) => <span class={classes.tag}>{tag}</span>}</For>
                     </div>
                  </div>
               </div>
            </details>
         </Show>
         <Show when={job().errors.length}>
            <details class={classes.failures} open>
               <summary>
                  {job().errors.length} GIF{job().errors.length === 1 ? "" : "s"} couldn't be tagged
               </summary>
               <For each={job().errors.slice(-5)}>
                  {(error) => (
                     <p class={classes.error}>
                        <a href={error.url} target="_blank" rel="noreferrer">
                           View GIF
                        </a>{" "}
                        · {error.message}
                     </p>
                  )}
               </For>
               <Show when={job().errors.length > 5}>
                  <p class={classes.hint}>Showing the last five failures. Retry covers all failed GIFs.</p>
               </Show>
            </details>
         </Show>
      </section>
   );
}
