const {
   ui: { Header, HeaderTags, Text, Divider, Button, openModal, ReactiveRoot, ButtonColors, ButtonSizes },
   solid: { For, Show, createSignal },
   plugin: { store },
} = shelter;

import classes from "./style.scss";

import { loadSounds } from "../utils";
import { AddKeybindModal } from "./addModal";
import { SoundWithEmoji } from "./soundPreview";
import { KeybindDisplayOnly } from "./keybinds";

export function KeybindCard({ keybind }) {
   return (
      <div class={classes.card}>
         <div class={classes.content}>
            <div class={classes.fullWidth}>
               <Header tag={HeaderTags.EYEBROW}>Keybind</Header>
               <KeybindDisplayOnly keybind={keybind.text} />
               <Header tag={HeaderTags.EYEBROW} class={classes.marginTop}>
                  Sound
               </Header>
               <SoundWithEmoji soundId={keybind.sound} />
            </div>
            <div class={classes.column}>
               <Button size={ButtonSizes.MEDIUM} onclick={() => openModal((p) => AddKeybindModal(p.close, keybind))}>
                  Edit
               </Button>
               <Button
                  class={classes.margin}
                  color={ButtonColors.RED}
                  size={ButtonSizes.MEDIUM}
                  onClick={() => {
                     store.keybinds = store.keybinds.filter((k) => k.id !== initialState.id);
                     unregisterKeybind(initialState.id);
                     closeModal();
                  }}
               >
                  Delete
               </Button>
            </div>
         </div>
      </div>
   );
}

export function Settings() {
   const [done, setDone] = createSignal(false);
   loadSounds().then(() => setDone(true));

   return (
      <ReactiveRoot>
         <Header tag={HeaderTags.H1}>Soundboard Hotkeys</Header>
         <Text class={classes.spaced}>Customize your soundboard hotkeys.</Text>
         <Divider />

         <Show when={!done()}>
            <Text class={classes.spaced}>Loading sounds...</Text>
         </Show>

         <Show when={done()}>
            <div class={classes.flexSpaceBetween}>
               <Header tag={HeaderTags.H3}>Keybinds</Header>
               <Button
                  class={classes.margin}
                  size={ButtonSizes.LARGE}
                  onclick={() => {
                     openModal((p) => AddKeybindModal(p.close));
                  }}
               >
                  Add keybind
               </Button>
            </div>

            <div>
               <For each={store.keybinds}>{(keybind) => <KeybindCard keybind={keybind} />}</For>
            </div>
         </Show>
      </ReactiveRoot>
   );
}
