const {
   observeDom,
   flux: { intercept },
} = shelter.plugin.scoped;
const {
   stores: { SoundboardStore, GuildStore },
   dispatcher,
} = shelter.flux;

let nativeModule = null;

export function loadNativeModule() {
   if (!nativeModule) {
      nativeModule = window.DiscordNative.nativeModules.requireModule("discord_utils");
   }
}

export async function loadSounds() {
   return new Promise((resolve) => {
      if (SoundboardStore.hasFetchedAllSounds()) {
         resolve();
      }

      dispatcher.dispatch({
         type: "REQUEST_SOUNDBOARD_SOUNDS",
         guildIds: GuildStore.getGuildIds(),
      });

      const unsubscribe = intercept((event) => {
         if (event.type === "SOUNDBOARD_SOUNDS_RECEIVED") {
            unsubscribe();
            resolve();
         }
      });

      setTimeout(() => {
         unsubscribe();
         resolve();
      }, 5000);
   });
}

export function playSound(sound) {
   const soundboardButton = document.querySelector('[class^="actionButtons"] > :last-child > :first-child');

   const soundboardPanel = document.querySelector('[class^="picker"]');
   if (soundboardPanel) {
      soundboardPanel.querySelector(`[id^="sound-${sound}"]`).click();
      return;
   }
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

export function registerKeybind(id, scancodes, sound) {
   if (!nativeModule) return;
   const combinations = scancodes.map((scancode) => [0, scancode, 1]);
   nativeModule.inputEventRegister(id, combinations, () => playSound(sound), {
      focused: true,
      blurred: true,
      keydown: true,
      keyup: false,
   });
}

export function unregisterKeybind(id) {
   if (!nativeModule) return;
   nativeModule.inputEventUnregister(id);
}
