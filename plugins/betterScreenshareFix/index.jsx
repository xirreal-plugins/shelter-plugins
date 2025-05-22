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

let originalPremiumType = null;

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

function CleanupListener() {
   onCleanup(() => {
      restoreNiterState();
   });

   return <div style={{ display: "none" }} />;
}

export function onLoad() {
   subscribe("TRACK", (e) => {
      if (
         e.event === "impression_go_live_modal" ||
         (e.event == "open_modal" && e.properties.type == "Go Live Modal") ||
         e.event === "impression_call_tile_context_menu"
      ) {
         const searchQuery =
            e.event == "impression_call_tile_context_menu" ? "#stream-context" : "[class^='focusLock'] > div";
         patchNiterState();
         const stopObserving = observeDom(searchQuery, (node) => {
            stopObserving();
            node.parentNode.append(
               <ReactiveRoot>
                  <CleanupListener />
               </ReactiveRoot>,
            );
         });
         setTimeout(stopObserving, 500);
      }
   });
}

export function onUnload() {
   restoreNiterState();
}
