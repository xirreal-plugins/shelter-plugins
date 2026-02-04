const {
   flux: { subscribe },
   observeDom,
} = shelter.plugin.scoped;

const {
   flux: {
      stores: { UserStore },
   },
   ui: { ReactiveRoot },
   solid: { onCleanup },
} = shelter;

const CLEANUP_LISTENER_ID = "shelter-bsf-cleanup";

let originalPremiumType = null;
let layoutToggleActive = false;

function patchNiterState() {
   const user = UserStore.getCurrentUser();
   const premiumType = user.premiumType || 0;
   if (originalPremiumType === null) {
      originalPremiumType = premiumType;
   }
   user.premiumType = 2;
}

function restoreNiterState() {
   const user = UserStore.getCurrentUser();
   if (originalPremiumType === null) {
      return;
   }
   user.premiumType = originalPremiumType === 0 ? null : originalPremiumType;
   originalPremiumType = null;
}

function hasCleanupListener(node) {
   return node?.querySelector?.(`#${CLEANUP_LISTENER_ID}`) !== null;
}

function CleanupListener(props) {
   onCleanup(() => {
      if (!props?.isLayoutToggle && layoutToggleActive) {
         return;
      }
      if (props?.isLayoutToggle) {
         layoutToggleActive = false;
      }
      props?.onCleanup?.();
      restoreNiterState();
   });

   props?.onMount?.();

   return <div id={CLEANUP_LISTENER_ID} style={{ display: "none" }} />;
}

function injectCleanupListener(node, props = {}) {
   if (hasCleanupListener(node)) {
      return false;
   }
   node.append(
      <ReactiveRoot>
         <CleanupListener {...props} />
      </ReactiveRoot>,
   );
   return true;
}

export function onLoad() {
   subscribe("TRACK", (e) => {
      const callButtonClicked = e.event === "call_button_clicked";
      const callMenuItemClicked = e.event === "call_menu_item_interacted";
      const streamButtonClicked = callButtonClicked && e.properties.button_name === "Stream";
      const streamSettingsButtonClicked = callButtonClicked && e.properties.button_name === "Stream Settings";
      const changeStreamButtonClicked = callMenuItemClicked && e.properties.menu_name === "ManageStreamsButton";
      const videoLayoutToggled = e.event === "video_layout_toggled";

      if (streamButtonClicked || streamSettingsButtonClicked || changeStreamButtonClicked) {
         const searchQuery = streamSettingsButtonClicked ? "#manage-streams" : "[class*='scrim']";
         const stopObserving = observeDom(searchQuery, (node) => {
            stopObserving();
            if (injectCleanupListener(node)) {
               patchNiterState();
            }
         });
         setTimeout(stopObserving, 500);
      }

      if (videoLayoutToggled) {
         const callContainer = document.querySelector("[class*='callContainer']");
         if (!callContainer) {
            return;
         }

         layoutToggleActive = true;
         if (injectCleanupListener(callContainer, { isLayoutToggle: true })) {
            patchNiterState();
         }
      }
   });
}

export function onUnload() {
   restoreNiterState();
}
