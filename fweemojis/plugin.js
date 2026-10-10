(function(exports) {

"use strict";

//#region lib/premium.js
const stateKey = Symbol.for("shelter.xirreal.dev/premium-state");
function getPremiumType(user) {
	return (user?.[stateKey] ?? user)?.premiumType;
}
function spoofPremium(UserStore$2) {
	if (!UserStore$2.getCurrentUser()) return;
	if (!UserStore$2[stateKey]) {
		const users = new WeakMap();
		UserStore$2[stateKey] = {
			leases: new Set(),
			unpatch: shelter.patcher.after("getCurrentUser", UserStore$2, (_, user) => {
				if (!user) return user;
				if (!users.has(user)) users.set(user, new Proxy(user, { get(target, key, receiver) {
					if (key === "premiumType") return 2;
					if (key === "perks") return null;
					if (key === stateKey) return target;
					return Reflect.get(target, key, receiver);
				} }));
				return users.get(user);
			})
		};
	}
	const state = UserStore$2[stateKey];
	const lease = {};
	state.leases.add(lease);
	return () => {
		if (!state.leases.delete(lease) || state.leases.size) return;
		state.unpatch();
		delete UserStore$2[stateKey];
	};
}

//#endregion
//#region plugins/fweemojis/content.js
const { flux: { stores: { UserStore: UserStore$1, EmojiStore } } } = shelter;
var content_default = (content, guildId) => {
	if (getPremiumType(UserStore$1.getCurrentUser()) > 0) return content;
	return content.replace(/(`+)[\s\S]*?(?:\1(?!`)|$)|\\[\s\S]|<(a?):\w+:(\d+)>/g, (match, code, animated, id) => {
		if (!id || guildId && EmojiStore.getCustomEmojiById(id)?.guildId === guildId && !animated) return match;
		return `[￴](https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "webp"}?size=48&quality=lossless)`;
	});
};

//#endregion
//#region plugins/fweemojis/index.js
const { flux: { stores: { UserStore, StickersStore } }, util: { getFiber, reactFiberWalker } } = shelter;
const { flux: { subscribe }, http: { intercept }, patcher: { before }, observeDom } = shelter.plugin.scoped;
let restorePremium;
function patchNiterState() {
	restorePremium ??= spoofPremium(UserStore);
}
function restoreNiterState() {
	restorePremium?.();
	restorePremium = undefined;
}
const extensions = {
	1: "png",
	2: "png",
	4: "gif"
};
const patchedSenders = new WeakSet();
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
		const sender = reactFiberWalker(getFiber(elem), (fiber) => typeof fiber.stateNode?.handleSendMessage === "function", true)?.stateNode;
		if (!sender || patchedSenders.has(sender)) return;
		patchedSenders.add(sender);
		before("handleSendMessage", sender, ([message]) => {
			if (message.command == null) message.value = content_default(message.value, sender.props.channel.getGuildId());
		});
		sender.forceUpdate();
	};
	document.querySelectorAll("[class*=\"slateContainer\"]").forEach(patchMessagebar);
	observeDom("[class*=\"slateContainer\"]", patchMessagebar);
	intercept("post", /\/channels\/\d+\/messages/, (req, send) => {
		if (req.body.sticker_ids?.length && !(getPremiumType(UserStore.getCurrentUser()) > 0)) {
			const id = req.body.sticker_ids[0];
			const ext = extensions[StickersStore.getStickerById(id)?.format_type];
			if (ext === undefined) return send(req);
			req.body.sticker_ids = req.body.sticker_ids.length > 1 ? req.body.sticker_ids.slice(1) : undefined;
			req.body.content = [req.body.content, `https://media.discordapp.net/stickers/${id}.${ext}?size=160`].filter(Boolean).join(" ");
		}
		return send(req);
	});
}
function onUnload() {
	restoreNiterState();
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});