const {
   ui: { ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter, ModalSizes },
   solid: { createSignal },
   plugin: { store },
} = shelter;

import { registerKeybind } from "../utils";
import { KeybindCapture } from "./keybinds";
import { SoundPicker } from "./soundPicker";

import classes from "./style.scss";

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
      <ModalRoot size={ModalSizes.MEDIUM} class={classes.tallerModal}>
         <ModalHeader close={closeModal}>Adding keybind</ModalHeader>
         <ModalBody>
            <KeybindCapture
               keybind={keybind}
               setValid={setKeybindValid}
               setKeybind={setKeybind}
               setScancodes={setScancodes}
            />
            <SoundPicker soundId={soundId} setSoundId={setSoundId} />
         </ModalBody>
         <ModalConfirmFooter
            close={closeModal}
            confirmText="Save"
            disabled={!keybindValid() || soundId() === ""}
            onConfirm={async () => {
               const nextId = initialState?.id || store.keybinds[store.keybinds.length - 1]?.id - 1 || -1;

               if (initialState?.id && store.keybinds.find((k) => k.id === initialState.id)) {
                  store.keybinds = store.keybinds.map((k) =>
                     k.id === initialState.id
                        ? {
                             id: initialState.id,
                             scancodes: scancodes(),
                             text: keybind(),
                             sound: soundId(),
                          }
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
