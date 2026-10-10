import { getPremiumType, spoofPremium } from "../../lib/premium";
import processContent from "./content";

const {
   flux: {
      stores: { UserStore, StickersStore },
   },
   util: { getFiber, reactFiberWalker },
} = shelter;

const {
   flux: { subscribe },
   http: { intercept },
   patcher: { before },
   observeDom,
} = shelter.plugin.scoped;

let restorePremium;

function patchNiterState() {
   restorePremium ??= spoofPremium(UserStore);
}

function restoreNiterState() {
   restorePremium?.();
   restorePremium = undefined;
}

const extensions = { 1: "png", 2: "png", 4: "gif" };
const patchedSenders = new WeakSet();

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
      const sender = reactFiberWalker(
         getFiber(elem),
         (fiber) => typeof fiber.stateNode?.handleSendMessage === "function",
         true,
      )?.stateNode;
      if (!sender || patchedSenders.has(sender)) return;
      patchedSenders.add(sender);

      before("handleSendMessage", sender, ([message]) => {
         if (message.command == null) {
            message.value = processContent(message.value, sender.props.channel.getGuildId());
         }
      });

      sender.forceUpdate();
   };

   document.querySelectorAll('[class*="slateContainer"]').forEach(patchMessagebar);
   observeDom('[class*="slateContainer"]', patchMessagebar);

   intercept("post", /\/channels\/\d+\/messages/, (req, send) => {
      if (req.body.sticker_ids?.length && !(getPremiumType(UserStore.getCurrentUser()) > 0)) {
         const id = req.body.sticker_ids[0];
         const ext = extensions[StickersStore.getStickerById(id)?.format_type];

         if (ext === undefined) {
            return send(req);
         }

         req.body.sticker_ids = req.body.sticker_ids.length > 1 ? req.body.sticker_ids.slice(1) : undefined;
         req.body.content = [req.body.content, `https://media.discordapp.net/stickers/${id}.${ext}?size=160`]
            .filter(Boolean)
            .join(" ");
      }
      return send(req);
   });
}

export function onUnload() {
   restoreNiterState();
}
