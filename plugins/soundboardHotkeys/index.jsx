const {
   observeDom,
   ui: { showToast },
   settings: { registerSection },
} = shelter.plugin.scoped;

const { store } = shelter.plugin;

import { Settings } from "./components";

function playSound(sound) {
   const soundboardButton = document.querySelector(
      '[class^="actionButtons"] > :last-child > :first-child',
   );

   const soundboardPanel = document.querySelector('[class^="picker"]');
   if (soundboardPanel) {
      soundboardPanel.querySelector(`[id^="sound-${sound}"]`).click();
      return;
   } else {
      soundboardButton.click();
      const stopObserving = observeDom('[class^="picker"]', (element) => {
         stopObserving();
         const stopObserving2 = observeDom(`[id^="sound-${sound}"]`, (element) => {
            stopObserving2();
            element.click();
            soundboardButton.click();
         });
      });
   }
}

export function registerKeybind(id, scancodes, sound) {
   const combinations = scancodes.map((scancode) => [0, scancode, 1]);
   nativeModule.inputEventRegister(id, combinations, () => playSound(sound), {
      focused: true,
      blurred: true,
      keydown: true,
      keyup: false,
   });
}

export function unregisterKeybind(id) {
   nativeModule.inputEventUnregister(id);
}

let nativeModule = null;

export function onLoad() {
   if (!window.DiscordNative) {
      showToast({
         title: "Soundboard Hotkeys",
         content: "This plugin only works on the desktop client.",
      });
      return;
   }

   if (!nativeModule) {
      nativeModule =
         window.DiscordNative.nativeModules.requireModule("discord_utils");
   }

   registerSection("divider");
   registerSection("section", "sbhk", "Soundboard Hotkeys", Settings);

   store.keybinds ??= [];

   store.keybinds.forEach(({ id, scancodes, sound }) => {
      registerKeybind(id, scancodes, sound);
   });
}

export function onUnload() {}
