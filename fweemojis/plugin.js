(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/fweemojis/index.js
  var fweemojis_exports = {};
  __export(fweemojis_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });

  // plugins/fweemojis/slate.js
  var {
    flux: { stores: { UserStore, SelectedGuildStore, EmojiStore } }
  } = shelter;
  var isInDms = () => !!document.querySelector(
    '[data-list-item-id="guildsnav___home"][class*="selected"]'
  );
  var hasNitro = () => {
    const user = UserStore.getCurrentUser();
    return user && user.premiumType > 0;
  };
  var slate_default = (slateTree) => {
    return slateTree.map((line) => {
      return {
        ...line,
        children: line.children.map((item) => {
          if (item?.type == "customEmoji") {
            const emojiId = item.emoji.emojiId;
            if (hasNitro() || EmojiStore.getCustomEmojiById(emojiId).guildId === SelectedGuildStore.getLastSelectedGuildId() && !item.emoji.animated && !isInDms()) {
              return item;
            }
            return {
              text: `[\uFFF4](https://cdn.discordapp.com/emojis/${emojiId}.webp?size=48&quality=lossless)`
            };
          }
          return item;
        })
      };
    });
  };

  // plugins/fweemojis/index.js
  var {
    flux: { stores: { UserStore: UserStore2, StickersStore } },
    util: { getFiber }
  } = shelter;
  var {
    flux: { subscribe },
    http: { intercept },
    observeDom
  } = shelter.plugin.scoped;
  var originalPremiumType = null;
  function patchNiterState() {
    const user = UserStore2.getCurrentUser();
    const premiumType = user.premiumType || 0;
    if (originalPremiumType === null) {
      originalPremiumType = premiumType;
    }
    user.premiumType = 2;
  }
  function restoreNiterState() {
    const user = UserStore2.getCurrentUser();
    if (originalPremiumType === null) {
      return;
    }
    user.premiumType = originalPremiumType;
    originalPremiumType = null;
  }
  var uninjected = false;
  var extensions = ["lottie", "webp", "png"];
  function onLoad() {
    subscribe("UPDATE_CHANNEL_DIMENSIONS", (e) => {
      restoreNiterState();
    });
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
    subscribe("HOTSPOT_HIDE", (e) => {
      queueMicrotask(() => {
        restoreNiterState();
      });
    });
    const patchMessagebar = (elem) => {
      if (elem.dataset.fweemoji)
        return;
      elem.dataset.fweemoji = "1";
      const fiber = getFiber(elem);
      const editor = fiber.child.pendingProps.editor;
      elem.onkeydown = (k) => {
        if (uninjected) {
          elem.onkeydown = null;
          return;
        }
        if (k.key !== "Enter" || document.querySelector("[class*=autocomplete],[class*=attachedBars]")) {
          return;
        }
        editor.children = slate_default(editor.children);
      };
    };
    observeDom('[class*="slateContainer"]', (e) => {
      patchMessagebar(e);
    });
    intercept("post", /\/channels\/\d+\/messages/, (req, send) => {
      if (req.body.sticker_ids) {
        const id = req.body.sticker_ids.pop();
        const ext = extensions[StickersStore.getStickerById(id)?.format_type];
        if (ext == void 0 || ext == "lottie") {
          return send(req);
        }
        delete req.body.sticker_ids;
        req.body.content = `https://media.discordapp.net/stickers/${id}.${ext}?size=160`;
      }
      return send(req);
    });
  }
  function onUnload() {
    uninjected = true;
  }
  return __toCommonJS(fweemojis_exports);
})();
