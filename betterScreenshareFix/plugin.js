(function(exports) {

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion

//#region solid-js/web
var require_web = __commonJS({ "solid-js/web"(exports, module) {
	module.exports = shelter.solidWeb;
} });

//#endregion
//#region lib/premium.js
const stateKey = Symbol.for("shelter.xirreal.dev/premium-state");
function spoofPremium(UserStore$1) {
	if (!UserStore$1.getCurrentUser()) return;
	if (!UserStore$1[stateKey]) {
		const users = new WeakMap();
		UserStore$1[stateKey] = {
			leases: new Set(),
			unpatch: shelter.patcher.after("getCurrentUser", UserStore$1, (_, user) => {
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
	const state = UserStore$1[stateKey];
	const lease = {};
	state.leases.add(lease);
	return () => {
		if (!state.leases.delete(lease) || state.leases.size) return;
		state.unpatch();
		delete UserStore$1[stateKey];
	};
}

//#endregion
//#region plugins/betterScreenshareFix/index.jsx
var import_web = __toESM(require_web(), 1);
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div id="shelter-bsf-cleanup"></div>`, 2);
const { flux: { subscribe }, observeDom } = shelter.plugin.scoped;
const { flux: { stores: { UserStore } }, ui: { ReactiveRoot }, solid: { onCleanup } } = shelter;
const CLEANUP_LISTENER_ID = "shelter-bsf-cleanup";
const restores = new Set();
const roots = new Set();
function restorePremium(restore) {
	restore?.();
	restores.delete(restore);
}
function CleanupListener(props) {
	onCleanup(props.onCleanup);
	return (() => {
		const _el$ = (0, import_web$2.getNextElement)(_tmpl$);
		_el$.style.setProperty("display", "none");
		return _el$;
	})();
}
function injectCleanupListener(node, restore) {
	if (node.querySelector(`#${CLEANUP_LISTENER_ID}`)) {
		restorePremium(restore);
		return;
	}
	const root = (0, import_web$1.createComponent)(ReactiveRoot, { get children() {
		return (0, import_web$1.createComponent)(CleanupListener, { onCleanup: () => {
			restorePremium(restore);
			roots.delete(root);
		} });
	} });
	roots.add(root);
	node.append(root);
}
function onLoad() {
	subscribe("TRACK", (e) => {
		const callButtonClicked = e.event === "call_button_clicked";
		const callMenuItemClicked = e.event === "call_menu_item_interacted";
		const streamButtonClicked = callButtonClicked && e.properties?.button_name === "Stream";
		const streamSettingsButtonClicked = callButtonClicked && e.properties?.button_name === "Stream Settings";
		const changeStreamButtonClicked = callMenuItemClicked && e.properties?.menu_name === "ManageStreamsButton";
		const videoLayoutToggled = e.event === "video_layout_toggled";
		if (!streamButtonClicked && !streamSettingsButtonClicked && !changeStreamButtonClicked && !videoLayoutToggled) return;
		const restore = spoofPremium(UserStore);
		restores.add(restore);
		if (videoLayoutToggled) {
			const callContainer = document.querySelector("[class*='callContainer']");
			if (callContainer) injectCleanupListener(callContainer, restore);
else restorePremium(restore);
			return;
		}
		let injected = false;
		const searchQuery = streamSettingsButtonClicked ? "#manage-streams" : "[role=\"dialog\"]";
		const stopObserving = observeDom(searchQuery, (node) => {
			if (injected || !node.isConnected) return;
			injected = true;
			stopObserving();
			injectCleanupListener(node, restore);
		});
		setTimeout(() => {
			stopObserving();
			if (!injected) restorePremium(restore);
		}, 5e3);
	});
}
function onUnload() {
	for (const root of roots) root.remove();
	roots.clear();
	for (const restore of restores) restore?.();
	restores.clear();
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});