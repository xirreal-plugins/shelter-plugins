import { spoofPremium } from "../../lib/premium";

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

const restores = new Set();
const roots = new Set();

function restorePremium(restore) {
   restore?.();
   restores.delete(restore);
}

function CleanupListener(props) {
   onCleanup(props.onCleanup);
   return <div id={CLEANUP_LISTENER_ID} style={{ display: "none" }} />;
}

function injectCleanupListener(node, restore) {
   if (node.querySelector(`#${CLEANUP_LISTENER_ID}`)) {
      restorePremium(restore);
      return;
   }

   const root = (
      <ReactiveRoot>
         <CleanupListener
            onCleanup={() => {
               restorePremium(restore);
               roots.delete(root);
            }}
         />
      </ReactiveRoot>
   );
   roots.add(root);
   node.append(root);
}

export function onLoad() {
   subscribe("TRACK", (e) => {
      const callButtonClicked = e.event === "call_button_clicked";
      const callMenuItemClicked = e.event === "call_menu_item_interacted";
      const streamButtonClicked = callButtonClicked && e.properties?.button_name === "Stream";
      const streamSettingsButtonClicked = callButtonClicked && e.properties?.button_name === "Stream Settings";
      const changeStreamButtonClicked = callMenuItemClicked && e.properties?.menu_name === "ManageStreamsButton";
      const videoLayoutToggled = e.event === "video_layout_toggled";

      if (!streamButtonClicked && !streamSettingsButtonClicked && !changeStreamButtonClicked && !videoLayoutToggled) {
         return;
      }

      const restore = spoofPremium(UserStore);
      restores.add(restore);

      if (videoLayoutToggled) {
         const callContainer = document.querySelector("[class*='callContainer']");
         if (callContainer) injectCleanupListener(callContainer, restore);
         else restorePremium(restore);
         return;
      }

      let injected = false;
      const searchQuery = streamSettingsButtonClicked ? "#manage-streams" : '[role="dialog"]';
      const stopObserving = observeDom(searchQuery, (node) => {
         if (injected || !node.isConnected) return;
         injected = true;
         stopObserving();
         injectCleanupListener(node, restore);
      });
      setTimeout(() => {
         stopObserving();
         if (!injected) restorePremium(restore);
      }, 5000);
   });
}

export function onUnload() {
   for (const root of roots) root.remove();
   roots.clear();
   for (const restore of restores) restore?.();
   restores.clear();
}
