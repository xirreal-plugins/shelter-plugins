(function(exports) {

"use strict";

//#region plugins/fweemojis/slate.js
const { flux: { stores: { UserStore: UserStore$1, SelectedGuildStore, EmojiStore } } } = shelter;
const isInDms = () => !!document.querySelector("[data-list-item-id=\"guildsnav___home\"][class*=\"selected\"]");
const hasNitro = () => {
	const user = UserStore$1.getCurrentUser();
	return user && user.premiumType > 0;
};
const extension = (animated) => animated ? "gif" : "webp";
var slate_default = (slateTree) => {
	return slateTree.map((line) => {
		return {
			...line,
			children: line.children.map((item) => {
				if (item?.type === "customEmoji") {
					const emojiId = item.emoji.emojiId;
					if (hasNitro() || EmojiStore.getCustomEmojiById(emojiId).guildId === SelectedGuildStore.getLastSelectedGuildId() && !item.emoji.animated && !isInDms()) return item;
					return { text: `[￴](https://cdn.discordapp.com/emojis/${emojiId}.${extension(item.emoji.animated)}?size=48&quality=lossless)` };
				}
				return item;
			})
		};
	});
};

//#endregion
//#region plugins/fweemojis/index.js
const { flux: { stores: { UserStore, StickersStore } }, util: { getFiber } } = shelter;
const { flux: { subscribe }, http: { intercept }, observeDom } = shelter.plugin.scoped;
let originalPremiumType = null;
function patchNiterState() {
	const user = UserStore.getCurrentUser();
	const premiumType = user.premiumType || 0;
	if (originalPremiumType === null) originalPremiumType = premiumType;
	user.premiumType = 2;
}
function restoreNiterState() {
	const user = UserStore.getCurrentUser();
	if (originalPremiumType === null) return;
	user.premiumType = originalPremiumType === 0 ? null : originalPremiumType;
	originalPremiumType = null;
}
let uninjected = false;
const extensions = [
	"lottie",
	"webp",
	"png"
];
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
		if (elem.dataset.fweemoji) return;
		elem.dataset.fweemoji = "1";
		const fiber = getFiber(elem);
		const editor = fiber.child.pendingProps.editor;
		elem.onkeydown = (k) => {
			if (uninjected) {
				elem.onkeydown = null;
				return;
			}
			if (k.key !== "Enter" || document.querySelector("[class*=autocomplete],[class*=attachedBars]")) return;
			editor.children = slate_default(editor.children);
		};
	};
	observeDom("[class*=\"slateContainer\"]", (e) => {
		patchMessagebar(e);
	});
	intercept("post", /\/channels\/\d+\/messages/, (req, send) => {
		if (req.body.sticker_ids) {
			const id = req.body.sticker_ids.pop();
			const ext = extensions[StickersStore.getStickerById(id)?.format_type];
			if (ext === undefined || ext === "lottie") return send(req);
			req.body.sticker_ids = undefined;
			req.body.content = `https://media.discordapp.net/stickers/${id}.${ext}?size=160`;
		}
		return send(req);
	});
}
function onUnload() {
	uninjected = true;
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});