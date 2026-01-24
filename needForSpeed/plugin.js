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
//#region plugins/needForSpeed/icon.jsx
var import_web$7 = __toESM(require_web(), 1);
var import_web$8 = __toESM(require_web(), 1);
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$7.template)(`<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor"><path d="m426-330 195-125q14-9 14-25t-14-25L426-630q-15-10-30.5-1.5T380-605v250q0 18 15.5 26.5T426-330ZM121-440q17 0 30.5 11t18.5 28q6 23 14.5 43.5T204-317q9 15 7.5 32T198-256q-11 11-27 10t-25-14q-22-31-37-66.5T86-400q-3-16 7.5-28t27.5-12Zm77-264q12 12 13 29t-7 31q-11 20-19.5 41T170-559q-5 17-18.5 28T121-520q-17 0-27.5-12.5T87-561q8-38 23-73.5t36-66.5q9-13 25-13.5t27 10.5Zm56 505q12-13 29.5-14t32.5 8q20 11 40.5 20t42.5 15q17 5 28 18t11 30q0 17-12.5 27T397-88q-38-8-71.5-23T260-146q-14-9-15.5-25t9.5-28Zm186-639q0 17-10.5 30T402-790q-23 6-44 14.5T317-755q-15 9-32.5 7.5T255-761q-12-12-10.5-28.5T260-815q32-20 66.5-34.5T399-872q16-3 28.5 7t12.5 27Zm360 358q0-113-69.5-199.5T553-792q-15-4-24-17t-9-29q0-16 11-26.5t25-7.5q140 28 232 137t92 255q0 146-92 255T556-88q-14 3-25-7.5T520-122q0-16 9-29t24-17q108-26 177.5-112.5T800-480Z"></path></svg>`, 4);
function SpeedIcon() {
	return (0, import_web$8.getNextElement)(_tmpl$$1);
}

//#endregion
//#region plugins/needForSpeed/index.jsx.scss
shelter.plugin.scoped.ui.injectCss(`._4OA9Bq_icon {
  cursor: pointer;
  color: var(--interactive-text-default);
  background: none;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0 6px 0 4px;
  display: flex;
}

._4OA9Bq_icon:hover {
  color: var(--interactive-text-hover);
}

._4OA9Bq_selectorWrapper {
  z-index: 1000;
  padding-bottom: 12px;
  position: absolute;
  bottom: 100%;
  transform: translateX(-25%)translateY(8px);
}

._4OA9Bq_selector {
  background: var(--opacity-black-80);
  border: 1px solid var(--border-subtle);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  min-width: 60px;
  padding: 4px;
  overflow: hidden;
}

._4OA9Bq_item {
  cursor: pointer;
  color: var(--interactive-text-default);
  text-align: center;
  border-radius: 4px;
  align-items: center;
  padding: 6px 12px;
}

._4OA9Bq_item:hover {
  color: var(--interactive-text-hover);
  background-color: var(--border-subtle);
}

._4OA9Bq_item._4OA9Bq_active {
  color: var(--interactive-text-active);
  background: var(--brand-50a);
  font-weight: bold;
}
`);
var index_jsx_default = {
	"active": "_4OA9Bq_active",
	"icon": "_4OA9Bq_icon",
	"selectorWrapper": "_4OA9Bq_selectorWrapper",
	"selector": "_4OA9Bq_selector",
	"item": "_4OA9Bq_item"
};

//#endregion
//#region plugins/needForSpeed/index.jsx
var import_web = __toESM(require_web(), 1);
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
var import_web$3 = __toESM(require_web(), 1);
var import_web$4 = __toESM(require_web(), 1);
var import_web$5 = __toESM(require_web(), 1);
var import_web$6 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div><div></div></div>`, 4), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<div class="nfs-speed-control"><button></button><!#><!/></div>`, 6), _tmpl$3 = /*#__PURE__*/ (0, import_web.template)(`<div><!#><!/>x</div>`, 4);
const { plugin: { scoped: { observeDom } }, solid: { createSignal, Show } } = shelter;
const CONTROLS_QUERY = `[class*=videoControls]:not([data-nfs])`;
const CONTROLS_QUERY_UNLOAD = `[class*=videoControls][data-nfs]`;
function SpeedControlComponent({ videoRef }) {
	const [speed, setSpeed] = createSignal(videoRef?.playbackRate || 1);
	const [showMenu, setShowMenu] = createSignal(false);
	const speeds = [
		.5,
		.75,
		1,
		1.25,
		1.5,
		2
	];
	const selectSpeed = (newSpeed) => {
		setSpeed(newSpeed);
		if (videoRef) videoRef.playbackRate = newSpeed;
		setShowMenu(false);
	};
	return (() => {
		const _el$ = (0, import_web$4.getNextElement)(_tmpl$2), _el$2 = _el$.firstChild, _el$5 = _el$2.nextSibling, [_el$6, _co$] = (0, import_web$1.getNextMarker)(_el$5.nextSibling);
		_el$.addEventListener("mouseenter", () => setShowMenu(true));
		_el$.addEventListener("mouseleave", () => setShowMenu(false));
		(0, import_web$5.insert)(_el$2, (0, import_web$6.createComponent)(SpeedIcon, {}));
		(0, import_web$5.insert)(_el$, (0, import_web$6.createComponent)(Show, {
			get when() {
				return showMenu();
			},
			get children() {
				const _el$3 = (0, import_web$4.getNextElement)(_tmpl$), _el$4 = _el$3.firstChild;
				(0, import_web$5.insert)(_el$4, () => speeds.map((s) => (() => {
					const _el$7 = (0, import_web$4.getNextElement)(_tmpl$3), _el$9 = _el$7.firstChild, [_el$0, _co$2] = (0, import_web$1.getNextMarker)(_el$9.nextSibling), _el$8 = _el$0.nextSibling;
					_el$7.addEventListener("click", () => selectSpeed(s));
					(0, import_web$5.insert)(_el$7, s, _el$0, _co$2);
					(0, import_web$3.effect)(() => (0, import_web$2.className)(_el$7, `${index_jsx_default.item} ${s === speed() ? index_jsx_default.active : ""}`));
					return _el$7;
				})()));
				(0, import_web$3.effect)((_p$) => {
					const _v$ = index_jsx_default.selectorWrapper, _v$2 = index_jsx_default.selector;
					_v$ !== _p$._v$ && (0, import_web$2.className)(_el$3, _p$._v$ = _v$);
					_v$2 !== _p$._v$2 && (0, import_web$2.className)(_el$4, _p$._v$2 = _v$2);
					return _p$;
				}, {
					_v$: undefined,
					_v$2: undefined
				});
				return _el$3;
			}
		}), _el$6, _co$);
		(0, import_web$3.effect)(() => (0, import_web$2.className)(_el$2, index_jsx_default.icon));
		return _el$;
	})();
}
function patchVideoControls(element) {
	if (element.dataset.nfs) return;
	element.dataset.nfs = true;
	const volumeButton = element.querySelector("[class*=volumeButton]").parentElement.parentElement;
	const videoElement = element.parentElement.parentElement.querySelector("video");
	const speedControl = (0, import_web$6.createComponent)(SpeedControlComponent, { videoRef: videoElement });
	element.insertBefore(speedControl, volumeButton);
}
function onLoad() {
	document.querySelectorAll(CONTROLS_QUERY).forEach(patchVideoControls);
	observeDom(CONTROLS_QUERY, patchVideoControls);
}
function onUnload() {
	document.querySelectorAll(CONTROLS_QUERY_UNLOAD).forEach((element) => {
		element.removeAttribute("data-nfs");
	});
	document.querySelectorAll(".nfs-speed-control").forEach((element) => {
		element.remove();
	});
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});