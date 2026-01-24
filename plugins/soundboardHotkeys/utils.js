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

export function registerListenerElement(id, onChange) {
   return nativeModule.inputCaptureRegisterElement(id, onChange);
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
   const soundboardButton = document.querySelector('[class*="actionButtons"] > span > div > button');

   const soundboardPanel = document.querySelector('[id*="popout"] > div > [class*="picker"]');

   if (!soundboardPanel) {
      soundboardButton.click();
   }

   const stopObserving = observeDom('[id*="popout"] > div > [class*="picker"]', (pickerElement) => {
      stopObserving();

      pickerElement.style.opacity = "0.0";

      const scroller = pickerElement.querySelector('[class*="thin"]');
      let currentScroll = 0;

      const interval = setInterval(() => {
         currentScroll += 300;
         scroller.scroll(0, currentScroll);

         if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight) {
            clearInterval(interval);
         }
      }, 0);

      const stopObservingSound = observeDom(`[id^="sound-${sound}"]`, (element) => {
         stopObservingSound();
         clearInterval(interval);

         element.click();
         soundboardButton.click();
      });

      setTimeout(() => {
         stopObservingSound();
      }, 1000);
   });

   setTimeout(() => {
      stopObserving();
   }, 1500);
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
