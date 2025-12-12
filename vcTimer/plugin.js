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
//#region plugins/vcTimer/index.jsx
var import_web = __toESM(require_web(), 1);
const { flux: { dispatcher }, solid: { createSignal, onCleanup }, ui: { Text, TextTags, TextWeights } } = shelter;
function format(milliseconds) {
	const hours = Math.floor(milliseconds / 36e5);
	const minutes = Math.floor(milliseconds % 36e5 / 6e4);
	const seconds = Math.floor(milliseconds % 6e4 / 1e3);
	return `${hours > 0 ? `${hours.toString().padStart(2, "0")}:` : ""}${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
function Timer() {
	const startTime = Date.now();
	const [elapsed, update] = createSignal(0);
	const timer = setInterval(() => {
		update(Date.now() - startTime);
	}, 1e3);
	onCleanup(() => clearInterval(timer));
	return (0, import_web.createComponent)(Text, {
		get tag() {
			return TextTags.textXS;
		},
		get weight() {
			return TextWeights.bold;
		},
		get children() {
			return format(elapsed());
		}
	});
}
function onVoiceJoin(e) {
	if (e.state !== "RTC_CONNECTED") return;
	const container = document.querySelector("[class*=\"labelWrapper\"]");
	if (container.dataset.timerAdded) return;
	container.dataset.timerAdded = true;
	container.parentElement.style.height = "unset";
	container.parentElement.parentElement.parentElement.style.height = "unset";
	container.parentElement.parentElement.parentElement.parentElement.style.height = "unset";
	container.insertBefore((0, import_web.createComponent)(Timer, {}), container.lastChild);
}
function onLoad() {
	dispatcher.subscribe("RTC_CONNECTION_STATE", onVoiceJoin);
}
function onUnload() {
	dispatcher.unsubscribe("RTC_CONNECTION_STATE", onVoiceJoin);
	document.getElementById("vcTimer")?.remove();
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});