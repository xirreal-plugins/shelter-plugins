import processTree from "./slate";

const {
   flux: {
      stores: { UserStore, StickersStore },
   },
   util: { getFiber },
} = shelter;

const {
   flux: { subscribe },
   http: { intercept },
   observeDom,
} = shelter.plugin.scoped;

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
   user.premiumType = originalPremiumType;
   originalPremiumType = null;
}

let uninjected = false;
const extensions = ["lottie", "webp", "png"];

export function onLoad() {
   // I have no clue why this fires when you click off the autocomplete.
   subscribe("UPDATE_CHANNEL_DIMENSIONS", (e) => {
      restoreNiterState();
   });

   // Various events are tracked
   // - autocomplete_selected is for the :emoji: autocomplete ending by selecting an emoji (via tab or click)
   // - channel_autocomplete_open is when the channel autocomplete is opened
   // - expression_picker_opened is when the picker is opened (both moji and stickers)
   // - expression_picker_tab_clicked is when the picker is switched between moji and stickers
   subscribe("TRACK", (e) => {
      switch (e.event) {
         case "channel_autocomplete_selected":
            restoreNiterState();
            return;
         case "expression_picker_opened":
         case "expression_picker_tab_clicked":
         case "channel_autocomplete_open":
            patchNiterState();
            return;
      }
   });

   // Hotspot hide, probably clicked off picker
   subscribe("HOTSPOT_HIDE", (e) => {
      queueMicrotask(() => {
         // Waits for the click to finish registering
         restoreNiterState();
      });
   });

   const patchMessagebar = (elem) => {
      if (elem.dataset.fweemoji) return;
      elem.dataset.fweemoji = "1";

      const fiber = getFiber(elem);
      const editor = fiber.child.pendingProps.editor;

      elem.onkeydown = (k) => {
         if (uninjected) {
            elem.onkeydown = null;
            return;
         }

         if (
            k.key !== "Enter" ||
            document.querySelector(
               "[class*=autocomplete],[class*=attachedBars]",
            )
         ) {
            return;
         }

         // evil twisted and fucked up (replaces customEmoji with text)
         editor.children = processTree(editor.children);
      };
   };

   observeDom('[class*="slateContainer"]', (e) => {
      patchMessagebar(e);
   });

   intercept("post", /\/channels\/\d+\/messages/, (req, send) => {
      if (req.body.sticker_ids) {
         const id = req.body.sticker_ids.pop();
         const ext = extensions[StickersStore.getStickerById(id)?.format_type];

         if (ext == undefined || ext == "lottie") {
            return send(req);
         }

         delete req.body.sticker_ids;
         req.body.content = `https://media.discordapp.net/stickers/${id}.${ext}?size=160`;
      }
      return send(req);
   });
}

export function onUnload() {
   uninjected = true;
}
