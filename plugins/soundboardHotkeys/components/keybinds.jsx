const {
   ui: { focusring },
   solid: { createSignal, createEffect, onCleanup },
} = shelter;

import classes from "./style.scss";

const specialCodes = {
   win32: {
      CTRL: 162,
      RCTRL: 163,
      ALT: 164,
      RALT: 165,
      SHIFT: 160,
      RSHIFT: 161,
      META: 91,
      RMETA: 92,
   },
   linux: {
      CTRL: 37,
      RCTRL: 105,
      ALT: 64,
      RALT: 113,
      SHIFT: 50,
      RSHIFT: 62,
      META: 133,
      RMETA: 134,
   },
   darwin: {
      CTRL: 224,
      RCTRL: 224,
      ALT: 226,
      RALT: 230,
      SHIFT: 225,
      RSHIFT: 229,
      META: 227,
      RMETA: 231,
   },
};

const modifierLabels = {
   win32: {
      CTRL: "Ctrl",
      RCTRL: "Right Ctrl",
      ALT: "Alt",
      RALT: "Right Alt",
      SHIFT: "⇧",
      RSHIFT: "Right ⇧",
      META: "⊞",
      RMETA: "Right ⊞",
   },
   linux: {
      CTRL: "Ctrl",
      RCTRL: "Right Ctrl",
      ALT: "Alt",
      RALT: "Right Alt",
      SHIFT: "⇧",
      RSHIFT: "Right ⇧",
      META: "Super",
      RMETA: "Right Super",
   },
   darwin: {
      CTRL: "⌃",
      RCTRL: "Right ⌃",
      ALT: "⌥",
      RALT: "Right ⌥",
      SHIFT: "⇧",
      RSHIFT: "Right ⇧",
      META: "⌘",
      RMETA: "Right ⌘",
   },
};

export function KeybindCapture({ keybind, setValid, setKeybind, setScancodes }) {
   const [isCapturing, setIsCapturing] = createSignal(false);

   let element;

   const platform = DiscordNative.process.platform;
   const getPlatformCodes = () => specialCodes[platform] || specialCodes.linux;
   const getLabels = () => modifierLabels[platform] || modifierLabels.linux;

   const handleKeyDown = (e) => {
      e.preventDefault();
      if (e.repeat) return;

      const modifiers = [];
      const modifiersCode = [];
      const codes = getPlatformCodes();
      const labels = getLabels();

      if (e.ctrlKey) {
         if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            modifiers.push(labels.RCTRL);
            modifiersCode.push(codes.RCTRL);
         } else {
            modifiers.push(labels.CTRL);
            modifiersCode.push(codes.CTRL);
         }
      }

      if (e.altKey) {
         if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            modifiers.push(labels.RALT);
            modifiersCode.push(codes.RALT);
         } else {
            modifiers.push(labels.ALT);
            modifiersCode.push(codes.ALT);
         }
      }

      if (e.shiftKey) {
         if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            modifiers.push(labels.RSHIFT);
            modifiersCode.push(codes.RSHIFT);
         } else {
            modifiers.push(labels.SHIFT);
            modifiersCode.push(codes.SHIFT);
         }
      }

      if (e.metaKey) {
         if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            modifiers.push(labels.RMETA);
            modifiersCode.push(codes.RMETA);
         } else {
            modifiers.push(labels.META);
            modifiersCode.push(codes.META);
         }
      }

      setValid(false);

      if (modifiers.length === 0 && (e.key === "Escape" || e.key === "Enter")) {
         setIsCapturing(false);
         return;
      }

      const key = e.key.toUpperCase();
      if (!modifiers.includes(key) && key !== "CONTROL" && key !== "ALT" && key !== "SHIFT" && key !== "META") {
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
         <div class={classes.label}>{isCapturing() ? "Press keys or click to stop" : "Keybind"}</div>
         <button
            classList={{
               [classes.keybindButton]: true,
               [classes.capturing]: isCapturing(),
            }}
            onMouseDown={() => setIsCapturing(!isCapturing())}
            use:focusring
         >
            <span>{keybind() || (isCapturing() ? "Waiting for input..." : "Click to set")}</span>
         </button>
      </div>
   );
}

export function KeybindDisplayOnly({ keybind }) {
   return (
      <div class={classes.keybindButton} style={{ cursor: "default" }}>
         {keybind}
      </div>
   );
}
