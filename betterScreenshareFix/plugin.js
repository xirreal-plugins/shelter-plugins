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
//#region plugins/betterScreenshareFix/index.jsx
var import_web = __toESM(require_web(), 1);
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div id="shelter-bsf-cleanup"></div>`, 2);
const { flux: { subscribe }, observeDom } = shelter.plugin.scoped;
const { flux: { stores: { UserStore } }, ui: { ReactiveRoot }, solid: { onCleanup } } = shelter;
const CLEANUP_LISTENER_ID = "shelter-bsf-cleanup";
let originalPremiumType = null;
let layoutToggleActive = false;
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
function hasCleanupListener(node) {
	return node?.querySelector?.(`#${CLEANUP_LISTENER_ID}`) !== null;
}
function CleanupListener(props) {
	onCleanup(() => {
		if (!props?.isLayoutToggle && layoutToggleActive) return;
		if (props?.isLayoutToggle) layoutToggleActive = false;
		props?.onCleanup?.();
		restoreNiterState();
	});
	props?.onMount?.();
	return (() => {
		const _el$ = (0, import_web$2.getNextElement)(_tmpl$);
		_el$.style.setProperty("display", "none");
		return _el$;
	})();
}
function injectCleanupListener(node, props = {}) {
	if (hasCleanupListener(node)) return false;
	node.append((0, import_web$1.createComponent)(ReactiveRoot, { get children() {
		return (0, import_web$1.createComponent)(CleanupListener, props);
	} }));
	return true;
}
function onLoad() {
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
				if (injectCleanupListener(node)) patchNiterState();
			});
			setTimeout(stopObserving, 500);
		}
		if (videoLayoutToggled) {
			const callContainer = document.querySelector("[class*='callContainer']");
			if (!callContainer) return;
			layoutToggleActive = true;
			if (injectCleanupListener(callContainer, { isLayoutToggle: true })) patchNiterState();
		}
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