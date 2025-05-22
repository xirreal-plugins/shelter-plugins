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
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div></div>`, 2);
const { flux: { subscribe }, observeDom } = shelter.plugin.scoped;
const { flux: { stores: { UserStore } }, ui: { ReactiveRoot }, solid: { onCleanup } } = shelter;
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
function CleanupListener() {
	onCleanup(() => {
		restoreNiterState();
	});
	return (() => {
		const _el$ = (0, import_web$2.getNextElement)(_tmpl$);
		_el$.style.setProperty("display", "none");
		return _el$;
	})();
}
function onLoad() {
	subscribe("TRACK", (e) => {
		if (e.event === "impression_go_live_modal" || e.event == "open_modal" && e.properties.type == "Go Live Modal" || e.event === "impression_call_tile_context_menu") {
			const searchQuery = e.event == "impression_call_tile_context_menu" ? "#stream-context" : "[class^='focusLock'] > div";
			patchNiterState();
			const stopObserving = observeDom(searchQuery, (node) => {
				stopObserving();
				node.parentNode.append((0, import_web$1.createComponent)(ReactiveRoot, { get children() {
					return (0, import_web$1.createComponent)(CleanupListener, {});
				} }));
			});
			setTimeout(stopObserving, 500);
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