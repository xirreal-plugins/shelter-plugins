const {
   ui: { showToast },
   settings: { registerSection },
} = shelter.plugin.scoped;

const { store } = shelter.plugin;

import { loadNativeModule, registerKeybind, unregisterKeybind } from "./utils";

import { Settings } from "./components/settings";

export function onLoad() {
   if (!window.DiscordNative) {
      showToast({
         title: "Soundboard Hotkeys",
         content: "This plugin only works on the desktop client.",
      });
      return;
   }

   loadNativeModule();

   registerSection("divider");
   registerSection("section", "sbhk", "Soundboard Hotkeys", Settings);

   store.keybinds ??= [];

   for (const keybind of store.keybinds) {
      registerKeybind(keybind.id, keybind.scancodes, keybind.sound);
   }
}

export function onUnload() {
   if (!window.DiscordNative) return;

   for (const keybind of store.keybinds) {
      unregisterKeybind(keybind.id);
   }
}
