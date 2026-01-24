const {
   ui: { Header, HeaderTags, Text, Button, openModal, ReactiveRoot, ButtonColors, ButtonSizes },
   solid: { For, Show, createSignal, onCleanup },
   plugin: { store },
} = shelter;

import classes from "./style.scss";

import { loadSounds, unregisterKeybind } from "../utils";
import { AddKeybindModal } from "./addModal";
import { SoundWithEmoji, stopSound } from "./soundPreview";
import { KeybindDisplayOnly } from "./keybinds";

function TrashIcon() {
   return (
      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
         <path
            fill="currentColor"
            d="M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z"
         />
         <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z"
            clip-rule="evenodd"
         />
      </svg>
   );
}

export function KeybindCard({ keybind }) {
   return (
      <div class={classes.card}>
         <div class={classes.cardInfo}>
            <div class={classes.cardSection}>
               <div class={classes.label}>Keybind</div>
               <KeybindDisplayOnly keybind={keybind.text} />
            </div>
            <div class={classes.cardSection}>
               <div class={classes.label}>Sound</div>
               <SoundWithEmoji soundId={keybind.sound} />
            </div>
         </div>
         <div class={classes.cardActions}>
            <Button
               color={ButtonColors.RED}
               size={ButtonSizes.MEDIUM}
               class={classes.iconButton}
               onClick={() => {
                  store.keybinds = store.keybinds.filter((k) => k.id !== keybind.id);
                  unregisterKeybind(keybind.id);
               }}
            >
               <TrashIcon />
            </Button>
            <Button color={ButtonColors.SECONDARY} size={ButtonSizes.MEDIUM} onclick={() => openModal((p) => AddKeybindModal(p.close, keybind))}>
               Edit
            </Button>
         </div>
      </div>
   );
}

export function Settings() {
   const [done, setDone] = createSignal(false);
   loadSounds().then(() => setDone(true));

   onCleanup(() => {
      stopSound();
   });

   return (
      <ReactiveRoot>
         <div class={classes.flexSpaceBetween}>
            <Header tag={HeaderTags.H3} margin={false}>
               <Show when={done()} fallback="Loading sounds...">
                  Keybinds ({store.keybinds?.length || 0})
               </Show>
            </Header>
            <Button
               size={ButtonSizes.LARGE}
               disabled={!done()}
               onclick={() => {
                  openModal((p) => AddKeybindModal(p.close));
               }}
            >
               Add keybind
            </Button>
         </div>

         <Show when={done()}>
            <Show
               when={store.keybinds?.length > 0}
               fallback={
                  <div class={classes.emptyState}>
                     <Text>No keybinds configured yet.</Text>
                     <Text>Click "Add keybind" to get started!</Text>
                  </div>
               }
            >
               <div>
                  <For each={store.keybinds}>{(keybind) => <KeybindCard keybind={keybind} />}</For>
               </div>
            </Show>
         </Show>
      </ReactiveRoot>
   );
}
