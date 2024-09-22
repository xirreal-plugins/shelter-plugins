const {
   ui: { Header, HeaderTags, focusring },
   solid: { createSignal, createEffect, onCleanup },
} = shelter;

import classes from "./style.scss";

const specialCodes = {
   win32: {
      CTRL: 162,
      RCTRL: 163,
      ALT: 164,
      SHIFT: 160,
      RSHIFT: 161,
   },
   linux: {
      CTRL: 37,
      RCTRL: 105,
      ALT: 64,
      SHIFT: 50,
      RSHIFT: 62,
   },
};

export function KeybindCapture({ keybind, setValid, setKeybind, setScancodes }) {
   const [isCapturing, setIsCapturing] = createSignal(false);

   let element;

   const handleKeyDown = (e) => {
      e.preventDefault();
      if (e.repeat) return;

      const modifiers = [];
      const modifiersCode = [];

      if (e.ctrlKey) {
         if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            modifiers.push("RIGHT CTRL");
            modifiersCode.push(specialCodes[DiscordNative.process.platform].RCTRL);
         } else {
            modifiers.push("CTRL");
            modifiersCode.push(specialCodes[DiscordNative.process.platform].CTRL);
         }
      }

      if (e.altKey) {
         modifiers.push("ALT");
         modifiersCode.push(specialCodes[DiscordNative.process.platform].ALT);
      }

      if (e.shiftKey) {
         if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            modifiers.push("RIGHT SHIFT");
            modifiersCode.push(specialCodes[DiscordNative.process.platform].RSHIFT);
         } else {
            modifiers.push("SHIFT");
            modifiersCode.push(specialCodes[DiscordNative.process.platform].SHIFT);
         }
      }

      if (e.metaKey) {
         return; // TODO: Implement meta key
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
         <Header tag={HeaderTags.EYEBROW}>{isCapturing() ? "Click again to stop" : "Click to capture keybind"}</Header>
         <button
            class={classes.keybindButton}
            onMouseDown={() => setIsCapturing(!isCapturing())}
            onKeyPress={(e) => e.key === "Enter" && setIsCapturing(!isCapturing())}
            use:focusring
         >
            <Header tag={HeaderTags.H2} class={classes.noMarginUnselectable}>
               {keybind() || "None"}
            </Header>
         </button>
      </div>
   );
}

export function KeybindDisplayOnly({ keybind }) {
   return (
      <div class={classes.keybindButton}>
         <Header tag={HeaderTags.H2} class={classes.noMarginUnselectable}>
            {keybind}
         </Header>
      </div>
   );
}
