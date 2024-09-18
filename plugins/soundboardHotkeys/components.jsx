const {
   ui: {
      Header,
      HeaderTags,
      Text,
      Divider,
      Button,
      ButtonSizes,
      ModalRoot,
      ModalHeader,
      ModalBody,
      ModalConfirmFooter,
      ModalSizes,
      openModal,
      ButtonColors,
      ReactiveRoot,
      showToast
   },
   flux: {
      dispatcher,
      stores: { SoundboardStore, EmojiStore, GuildStore },
   },
   solid: { createSignal, createEffect, onCleanup, For, Show },
   plugin: { store },
} = shelter;

function loadSounds() {
   dispatcher.dispatch({
      type: "REQUEST_SOUNDBOARD_SOUNDS",
      guildIds: GuildStore.getGuildIds(),
   });
}

import { registerKeybind, unregisterKeybind } from ".";
import classes from "./style.scss";

export function KeybindCapture({
   keybind,
   setValid,
   setKeybind,
   setScancodes,
}) {
   const [isCapturing, setIsCapturing] = createSignal(false);

   let element;

   const handleKeyDown = (e) => {
      e.preventDefault();
      if (e.repeat) return;

      const modifiers = [];
      const modifiersCode = [];

      if (e.ctrlKey) {
         modifiers.push("CTRL");
         modifiersCode.push(17);
      }

      if (e.altKey) {
         modifiers.push("ALT");
         modifiersCode.push(18);
      }

      if (e.shiftKey) {
         modifiers.push("SHIFT");
         modifiersCode.push(16);
      }

      if (e.metaKey) {
         modifiers.push("META");
         modifiersCode.push(91);
      }

      setValid(false);

      const key = e.key.toUpperCase();
      if (
         !modifiers.includes(key) &&
         key !== "CONTROL" &&
         key !== "ALT" &&
         key !== "SHIFT" &&
         key !== "META"
      ) {
         modifiers.push(key);
         modifiersCode.push(e.keyCode);
         setValid(true);
      }

      setKeybind(modifiers.join(" + "));
      setScancodes(modifiersCode);
   };

   createEffect(() => {
      if (isCapturing()) {
         element.addEventListener("keydown", handleKeyDown);
      } else {
         element.removeEventListener("keydown", handleKeyDown);
      }

      onCleanup(() => {
         element.removeEventListener("keydown", handleKeyDown);
      });
   });

   return (
      <div ref={element}>
         <Header tag={HeaderTags.EYEBROW}>
            {isCapturing() ? "Click again to stop" : "Click to capture keybind"}
         </Header>
         <button
            class={classes.keybindButton}
            onMouseDown={() => setIsCapturing(!isCapturing())}
         >
            <Header tag={HeaderTags.H2} class={classes.noMarginUnselectable}>
               {keybind() || "None"}
            </Header>
         </button>
      </div>
   );
}

export function SoundPicker(props) {
   const sounds = () => {
      return [...SoundboardStore.getFavorites()];
   };

   return (
      <div>
         <Header tag={HeaderTags.EYEBROW} class={classes.marginTop}>
            Sound
         </Header>
         <div class={classes.soundPicker}>
            <For each={sounds()}>
               {(soundId) => (
                  <div
                     class={classes.sound}
                     onClick={() => props.setSoundId(soundId)}
                  >
                     <SoundWithEmoji
                        soundId={soundId}
                        selected={() => soundId == props.soundId()}
                     />
                  </div>
               )}
            </For>
         </div>
         <Text class={classes.margin}>
            Can't find the sound you want? Add it to favorites.
         </Text>
      </div>
   );
}

export function AddKeybindModal(closeModal, initialState) {
   const [keybindValid, setKeybindValid] = createSignal(false);
   const [keybind, setKeybind] = createSignal("");
   const [soundId, setSoundId] = createSignal("");
   const [scancodes, setScancodes] = createSignal([]);

   if (initialState) {
      setKeybind(initialState.text);
      setSoundId(initialState.sound);
      setScancodes(initialState.scancodes);
   }

   return (
      <ModalRoot size={ModalSizes.SMALL}>
         <ModalHeader close={closeModal}>Adding keybind</ModalHeader>
         <ModalBody>
            <KeybindCapture
               keybind={keybind}
               setValid={setKeybindValid}
               setKeybind={setKeybind}
               setScancodes={setScancodes}
            />
            <SoundPicker soundId={soundId} setSoundId={setSoundId} />
            <Show when={!!initialState?.id}>
               <div class={classes.center}>
                  <Button
                     class={classes.margin}
                     size={ButtonSizes.LARGE}
                     color={ButtonColors.RED}
                     onClick={() => {
                        store.keybinds = store.keybinds.filter(
                           (k) => k.id !== initialState.id,
                        );
                        unregisterKeybind(initialState.id);
                        closeModal();
                     }}
                  >
                     Remove keybind
                  </Button>
               </div>
            </Show>
         </ModalBody>
         <ModalConfirmFooter
            close={closeModal}
            confirmText="Save"
            disabled={!keybindValid() || soundId() === ""}
            onConfirm={async () => {
               const nextId =
                  initialState?.id ||
                  store.keybinds[store.keybinds.length - 1]?.id - 1 ||
                  -1;

               if (
                  initialState?.id &&
                  store.keybinds.find((k) => k.id === initialState.id)
               ) {
                  store.keybinds = store.keybinds.map((k) =>
                     k.id === initialState.id
                        ? { id: initialState.id, scancodes: scancodes(), text: keybind(), sound: soundId() }
                        : k,
                  );
               } else {
                  store.keybinds = [
                     ...store.keybinds,
                     {
                        id: nextId,
                        scancodes: scancodes(),
                        text: keybind(),
                        sound: soundId(),
                     },
                  ];
               }

               registerKeybind(nextId, scancodes(), soundId());
            }}
         />
      </ModalRoot>
   );
}

export function Preview({ soundId }) {
   const baseUrl = "https://cdn.discordapp.com/soundboard-sounds/";
   let audio;

   return (
      <div class={classes.inline}>
         <audio src={`${baseUrl}${soundId}`} ref={audio} />
         <button
            class={classes.preview}
            onclick={() => {
               audio.load();
               audio.play();
            }}
         >
            🔊
         </button>
      </div>
   );
}

export function SoundWithEmoji({ soundId, selected }) {
   const sound = SoundboardStore.getSoundById(soundId);
   if (!sound) {
      return (
         <Text>
            ❌ Sound not found! Please make sure the sound still exists.
         </Text>
      );
   }

   if (!sound.emojiName && sound.emojiId) {
      const emoji = EmojiStore.getCustomEmojiById(sound.emojiId);
      const emojiUrl = `https://cdn.discordapp.com/emojis/${sound.emojiId}.${emoji.animated ? "gif" : "png"}?size=16&quality=lossless`;

      return (
         <div
            classList={{
               [classes.flexRow]: true,
               [classes.selected]: selected?.(),
            }}
         >
            <Preview soundId={soundId} />
            <img class={classes.emoji} src={emojiUrl} />
            <Text>{sound.name}</Text>
         </div>
      );
   }

   return (
      <div
         classList={{
            [classes.flexRow]: true,
            [classes.selected]: selected?.(),
         }}
      >
         <Preview soundId={soundId} />
         <Text>{`${sound.emojiName || ""} ${sound.name}`.trim()}</Text>
      </div>
   );
}

export function Keybind({ keybind }) {
   return (
      <div class={classes.card}>
         <div class={classes.content}>
            <div>
               <Header tag={HeaderTags.EYEBROW}>Keybind</Header>
               <Text>{keybind.text}</Text>
               <Header tag={HeaderTags.EYEBROW} class={classes.marginTop}>
                  Sound
               </Header>
               <SoundWithEmoji soundId={keybind.sound} />
            </div>
            <Button
               onclick={() =>
                  openModal((p) => AddKeybindModal(p.close, keybind))
               }
            >
               Edit
            </Button>
         </div>
      </div>
   );
}

export function Settings() {
   if (!SoundboardStore.hasFetchedAllSounds()) {
      loadSounds();
   }

   return (
      <ReactiveRoot>
         <Header tag={HeaderTags.H1}>Soundboard Hotkeys</Header>
         <Text class={classes.spaced}>Customize your soundboard hotkeys.</Text>
         <Divider />

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
            <For each={store.keybinds}>
               {(keybind) => <Keybind keybind={keybind} />}
            </For>
         </div>
      </ReactiveRoot>
   );
}
