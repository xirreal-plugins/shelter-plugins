const {
   ui: { focusring },
   solid: { createSignal, createEffect, onCleanup, createUniqueId, onMount },
} = shelter;

import classes from "./style.scss";
import { registerListenerElement } from "../utils.js";

import { CodeToName } from "./maps.js";

const getDisplayFromCodes = (codes) => {
   const platform = DiscordNative.process.platform;
   const map = CodeToName[platform] || CodeToName.linux;
   const isMac = platform === "darwin";

   return codes
      .map((code) => {
         let name = map[code];

         if (!name) return `Unknown(${code})`;

         name = name.toUpperCase();

         if (isMac) {
            const symbolMatch = MacSymbols.find(([text]) => text === name || text === name.replace(" ", ""));
            if (symbolMatch) {
               return symbolMatch[1];
            }
         } else {
            if (name === "META") return "Win";
            if (name === "RIGHT META") return "Right Win";

            if (name.length > 1) {
               name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
               name = name.replace(/\b\w/g, (l) => l.toUpperCase());
            }
         }

         return name;
      })
      .join(" + ");
};

export function KeybindCapture({ keybind, setValid, setKeybind, setScancodes }) {
   const [isCapturing, setIsCapturing] = createSignal(false);
   const inputId = createUniqueId();
   let inputRef;

   const handleNativeChange = (rawCombo) => {
      if (!isCapturing()) return;

      const codes = rawCombo.map((item) => item[1]);

      if (codes && codes.length > 0) {
         const displayString = getDisplayFromCodes(codes);

         setScancodes(codes);
         setKeybind(displayString);
         setValid(true);

         setIsCapturing(false);
      }
   };

   onMount(() => {
      if (inputRef) {
         const unregister = registerListenerElement(inputId, handleNativeChange);
         onCleanup(() => {
            if (unregister) unregister();
         });
      }
   });

   createEffect(() => {
      if (isCapturing()) {
         inputRef?.focus();
      } else {
         inputRef?.blur();
      }
   });

   const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsCapturing(!isCapturing());
   };

   const handleBlur = () => {
      setIsCapturing(false);
   };

   return (
      <div class={classes.container}>
         <div class={classes.label}>{isCapturing() ? "Press keys to record" : "Keybind"}</div>

         <div class={`${classes.keybindButton} ${isCapturing() ? classes.capturing : ""}`} onClick={handleClick}>
            <input
               id={inputId}
               ref={inputRef}
               type="text"
               readOnly
               value={keybind() || ""}
               placeholder={isCapturing() ? "Waiting for input..." : "Click to set"}
               style={{
                  position: "absolute",
                  opacity: 0,
                  width: "1px",
                  height: "1px",
                  cursor: "none",
                  "pointer-events": "auto",
               }}
               onBlur={handleBlur}
            />
            <span>{keybind() || (isCapturing() ? "Waiting for input..." : "Click to set")}</span>
         </div>
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
