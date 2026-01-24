const {
   ui: { ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter, ModalSizes },
   solid: { createSignal, onCleanup },
   plugin: { store },
} = shelter;

import { registerKeybind } from "../utils";
import { KeybindCapture } from "./keybinds";
import { SoundPicker } from "./soundPicker";
import { stopPreviewSound } from "./soundPreview";

import classes from "./style.scss";

export function AddKeybindModal(closeModal, initialState) {
   const [keybindValid, setKeybindValid] = createSignal(!!initialState);
   const [keybind, setKeybind] = createSignal(initialState?.text || "");
   const [soundId, setSoundId] = createSignal(initialState?.sound || "");
   const [scancodes, setScancodes] = createSignal(initialState?.scancodes || []);

   const isEditing = !!initialState;
   const modalTitle = isEditing ? "Edit Keybind" : "Add New Keybind";

   onCleanup(() => {
      stopPreviewSound();
   });

   return (
      <ModalRoot size={ModalSizes.MEDIUM} class={classes.tallerModal}>
         <ModalHeader close={closeModal}>{modalTitle}</ModalHeader>
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
            confirmText={isEditing ? "Save Changes" : "Add Keybind"}
            disabled={!keybindValid() || soundId() === ""}
            onConfirm={async () => {
               const nextId = initialState?.id ?? (store.keybinds[store.keybinds.length - 1]?.id - 1 || -1);

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
