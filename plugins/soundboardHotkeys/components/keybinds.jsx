const {
   ui: { Header, HeaderTags, focusring },
   solid: { createSignal, createEffect, onCleanup },
} = shelter;

import classes from "./style.scss";

export function KeybindCapture({ keybind, setValid, setKeybind, setScancodes }) {
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
