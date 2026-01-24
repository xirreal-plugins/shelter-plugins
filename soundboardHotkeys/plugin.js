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

//#region plugins/soundboardHotkeys/utils.js
const { observeDom, flux: { intercept } } = shelter.plugin.scoped;
const { stores: { SoundboardStore: SoundboardStore$2, GuildStore }, dispatcher } = shelter.flux;
let nativeModule = null;
function loadNativeModule() {
	if (!nativeModule) nativeModule = window.DiscordNative.nativeModules.requireModule("discord_utils");
}
function registerListenerElement(id, onChange) {
	return nativeModule.inputCaptureRegisterElement(id, onChange);
}
async function loadSounds() {
	return new Promise((resolve) => {
		if (SoundboardStore$2.hasFetchedAllSounds()) resolve();
		dispatcher.dispatch({
			type: "REQUEST_SOUNDBOARD_SOUNDS",
			guildIds: GuildStore.getGuildIds()
		});
		const unsubscribe = intercept((event) => {
			if (event.type === "SOUNDBOARD_SOUNDS_RECEIVED") {
				unsubscribe();
				resolve();
			}
		});
		setTimeout(() => {
			unsubscribe();
			resolve();
		}, 5e3);
	});
}
function playSound$1(sound) {
	const soundboardButton = document.querySelector("[class*=\"actionButtons\"] > span > div > button");
	const soundboardPanel = document.querySelector("[id*=\"popout\"] > div > [class*=\"picker\"]");
	if (!soundboardPanel) soundboardButton.click();
	const stopObserving = observeDom("[id*=\"popout\"] > div > [class*=\"picker\"]", (pickerElement) => {
		stopObserving();
		pickerElement.style.opacity = "0.0";
		const scroller = pickerElement.querySelector("[class*=\"thin\"]");
		let currentScroll = 0;
		const interval = setInterval(() => {
			currentScroll += 300;
			scroller.scroll(0, currentScroll);
			if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight) clearInterval(interval);
		}, 0);
		const stopObservingSound = observeDom(`[id^="sound-${sound}"]`, (element) => {
			stopObservingSound();
			clearInterval(interval);
			element.click();
			soundboardButton.click();
		});
		setTimeout(() => {
			stopObservingSound();
		}, 1e3);
	});
	setTimeout(() => {
		stopObserving();
	}, 1500);
}
function registerKeybind(id, scancodes, sound) {
	if (!nativeModule) return;
	const combinations = scancodes.map((scancode) => [
		0,
		scancode,
		1
	]);
	nativeModule.inputEventRegister(id, combinations, () => playSound$1(sound), {
		focused: true,
		blurred: true,
		keydown: true,
		keyup: false
	});
}
function unregisterKeybind(id) {
	if (!nativeModule) return;
	nativeModule.inputEventUnregister(id);
}

//#endregion
//#region solid-js/web
var require_web = __commonJS({ "solid-js/web"(exports, module) {
	module.exports = shelter.solidWeb;
} });

//#endregion
//#region plugins/soundboardHotkeys/components/style.scss
shelter.plugin.scoped.ui.injectCss(`._6PhcGW_spaced {
  margin-top: 8px;
  margin-bottom: 12px;
  display: block;
}

._6PhcGW_marginTop {
  margin-top: 12px;
}

._6PhcGW_label {
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
}

._6PhcGW_flexSpaceBetween {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

._6PhcGW_card {
  box-sizing: border-box;
  background: var(--background-surface-high);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 16px;
  width: 100%;
  margin-top: 12px;
  padding: 16px;
  transition: border-color .15s;
  display: flex;
}

._6PhcGW_card:hover {
  border-color: var(--border-strong);
}

._6PhcGW_cardInfo {
  flex-direction: column;
  flex: 1;
  gap: 12px;
  min-width: 0;
  display: flex;
}

._6PhcGW_cardSection {
  flex-direction: column;
  gap: 4px;
  display: flex;
}

._6PhcGW_cardActions {
  flex-direction: row;
  flex-shrink: 0;
  align-items: flex-start;
  gap: 8px;
  display: flex;
}

._6PhcGW_iconButton {
  min-width: unset !important;
  width: fit-content !important;
  padding: 6px 10px !important;
}

._6PhcGW_preview {
  background-color: var(--control-primary-background-default);
  border: 1px solid var(--control-primary-border-default);
  border-radius: var(--radius-sm);
  cursor: pointer;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  padding: 4px 6px;
  font-size: 14px;
  transition: background-color .15s, border-color .15s, transform .1s;
  display: inline-flex;
}

._6PhcGW_preview:hover {
  background-color: var(--control-primary-background-hover);
  border-color: var(--control-primary-border-hover);
}

._6PhcGW_preview:active {
  background-color: var(--control-primary-background-active);
  border-color: var(--control-primary-border-active);
}

._6PhcGW_preview._6PhcGW_playing {
  background-color: var(--control-critical-primary-background-default);
  border-color: var(--control-critical-primary-border-default);
}

._6PhcGW_preview._6PhcGW_playing:hover {
  background-color: var(--control-critical-primary-background-hover);
  border-color: var(--control-critical-primary-border-hover);
}

._6PhcGW_preview._6PhcGW_playing:active {
  background-color: var(--control-critical-primary-background-active);
  border-color: var(--control-critical-primary-border-active);
}

._6PhcGW_emoji {
  image-rendering: crisp-edges;
  width: 18px;
  height: 18px;
  margin-right: 6px;
}

._6PhcGW_inline {
  align-items: center;
  display: inline-flex;
}

._6PhcGW_soundPicker {
  background: var(--input-background-default);
  border-radius: var(--radius-sm);
  border: 1px solid var(--input-border-default);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 6px;
  max-height: 360px;
  margin-top: 8px;
  padding: 8px;
  display: grid;
  overflow-y: auto;
}

._6PhcGW_soundItem {
  background: var(--input-background-default);
  border: 1px solid var(--input-border-default);
  border-radius: var(--radius-sm);
  color: var(--interactive-text-default);
  align-items: center;
  padding: 8px 10px;
  transition: all .15s;
  display: flex;
  overflow: hidden;
}

._6PhcGW_sound {
  cursor: pointer;
  text-align: left;
  background: none;
  border: none;
  width: 100%;
  padding: 0;
}

._6PhcGW_sound:hover ._6PhcGW_soundItem {
  background: var(--background-surface-high);
  border-color: var(--border-strong);
}

._6PhcGW_sound:active ._6PhcGW_soundItem {
  transform: scale(.98);
}

._6PhcGW_selected {
  background: var(--brand-15a) !important;
  border-color: var(--brand-500) !important;
}

._6PhcGW_soundName {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

._6PhcGW_keybindButton {
  cursor: pointer;
  background-color: var(--input-background-default);
  border: 1px solid;
  border-color: var(--input-border-default);
  border-radius: var(--radius-sm);
  width: fit-content;
  min-width: 120px;
  color: var(--text-strong);
  font-weight: var(--font-weight-semibold);
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  transition: all .15s;
  display: inline-flex;
}

._6PhcGW_keybindButton:hover {
  border-color: var(--status-danger);
}

._6PhcGW_keybindButton._6PhcGW_capturing {
  border-color: var(--status-danger);
  background: color-mix(in srgb, var(--status-danger) 15%, transparent);
  animation: 1.5s ease-in-out infinite _6PhcGW_pulse;
}

@keyframes _6PhcGW_pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--status-danger) 25%, transparent);
  }

  50% {
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--status-danger) 15%, transparent);
  }
}

._6PhcGW_tallerModal {
  height: auto;
  min-height: 580px;
  max-height: 680px;
}

._6PhcGW_emptyState {
  box-sizing: border-box;
  color: var(--text-muted);
  text-align: center;
  background: var(--background-surface-high);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-top: 12px;
  padding: 32px 16px;
  display: flex;
}
`);
var style_default = {
	"marginTop": "_6PhcGW_marginTop",
	"soundPicker": "_6PhcGW_soundPicker",
	"spaced": "_6PhcGW_spaced",
	"emptyState": "_6PhcGW_emptyState",
	"soundItem": "_6PhcGW_soundItem",
	"cardInfo": "_6PhcGW_cardInfo",
	"label": "_6PhcGW_label",
	"cardSection": "_6PhcGW_cardSection",
	"flexSpaceBetween": "_6PhcGW_flexSpaceBetween",
	"iconButton": "_6PhcGW_iconButton",
	"inline": "_6PhcGW_inline",
	"preview": "_6PhcGW_preview",
	"capturing": "_6PhcGW_capturing",
	"keybindButton": "_6PhcGW_keybindButton",
	"emoji": "_6PhcGW_emoji",
	"cardActions": "_6PhcGW_cardActions",
	"selected": "_6PhcGW_selected",
	"sound": "_6PhcGW_sound",
	"soundName": "_6PhcGW_soundName",
	"tallerModal": "_6PhcGW_tallerModal",
	"playing": "_6PhcGW_playing",
	"card": "_6PhcGW_card",
	"pulse": "_6PhcGW_pulse"
};

//#endregion
//#region plugins/soundboardHotkeys/components/maps.js
const NativeMapLinux = {
	0: 19,
	1: 10,
	2: 11,
	3: 12,
	4: 13,
	5: 14,
	6: 15,
	7: 16,
	8: 17,
	9: 18,
	esc: 9,
	f1: 67,
	f2: 68,
	f3: 69,
	f4: 70,
	f5: 71,
	f6: 72,
	f7: 73,
	f8: 74,
	f9: 75,
	f10: 76,
	f11: 95,
	f12: 96,
	f14: 107,
	f15: 78,
	f16: 127,
	"`": 49,
	"-": 20,
	"=": 21,
	backspace: 22,
	tab: 23,
	q: 24,
	w: 25,
	e: 26,
	r: 27,
	t: 28,
	y: 29,
	u: 30,
	i: 31,
	o: 32,
	p: 33,
	"[": 34,
	"]": 35,
	"\\": 51,
	"caps lock": 66,
	a: 38,
	s: 39,
	d: 40,
	f: 41,
	g: 42,
	h: 43,
	j: 44,
	k: 45,
	l: 46,
	";": 47,
	"'": 48,
	enter: 36,
	shift: 50,
	z: 52,
	x: 53,
	c: 54,
	v: 55,
	b: 56,
	n: 57,
	m: 58,
	",": 59,
	".": 60,
	"/": 61,
	"right shift": 62,
	ctrl: 37,
	alt: 64,
	meta: 133,
	space: 65,
	"right meta": 134,
	"right alt": 108,
	"right ctrl": 105,
	menu: 135,
	"num lock": 77,
	"numpad =": 125,
	"numpad /": 106,
	"numpad *": 63,
	"numpad 7": 79,
	"numpad 8": 80,
	"numpad 9": 81,
	"numpad -": 82,
	"numpad 4": 83,
	"numpad 5": 84,
	"numpad 6": 85,
	"numpad +": 86,
	"numpad 1": 87,
	"numpad 2": 88,
	"numpad 3": 89,
	"numpad enter": 104,
	"numpad 0": 90,
	"numpad .": 91,
	home: 110,
	"page up": 112,
	end: 115,
	"page down": 117,
	insert: 118,
	delete: 119,
	left: 113,
	right: 114,
	down: 116,
	up: 111,
	sleep: 150,
	back: 166,
	forward: 167,
	"home key": 180,
	favorites: 164,
	email: 163,
	play: 172,
	stop: 174,
	"vol down": 122,
	"vol up": 123,
	"track back": 173,
	"track skip": 171
};
const NativeMapMac = {
	0: 39,
	1: 30,
	2: 31,
	3: 32,
	4: 33,
	5: 34,
	6: 35,
	7: 36,
	8: 37,
	9: 38,
	a: 4,
	s: 22,
	d: 7,
	f: 9,
	h: 11,
	g: 10,
	z: 29,
	x: 27,
	c: 6,
	v: 25,
	b: 5,
	q: 20,
	w: 26,
	e: 8,
	r: 21,
	y: 28,
	t: 23,
	"=": 46,
	"-": 45,
	"]": 48,
	o: 18,
	u: 24,
	"[": 47,
	i: 12,
	p: 19,
	l: 15,
	j: 13,
	"'": 52,
	k: 14,
	";": 51,
	"\\": 49,
	",": 54,
	"/": 56,
	n: 17,
	m: 16,
	".": 55,
	"`": 53,
	"numpad .": 99,
	"numpad *": 85,
	"numpad +": 87,
	"numpad clear": 83,
	"numpad /": 84,
	"numpad enter": 88,
	"numpad -": 86,
	"numpad =": 103,
	"numpad 0": 98,
	"numpad 1": 89,
	"numpad 2": 90,
	"numpad 3": 91,
	"numpad 4": 92,
	"numpad 5": 93,
	"numpad 6": 94,
	"numpad 7": 95,
	"numpad 8": 96,
	"numpad 9": 97,
	enter: 40,
	tab: 43,
	space: 44,
	backspace: 42,
	esc: 41,
	meta: 227,
	cmd: 227,
	shift: 225,
	"caps lock": 57,
	alt: 226,
	ctrl: 224,
	"right shift": 229,
	"right alt": 230,
	"right ctrl": 228,
	"right meta": 231,
	f17: 108,
	f18: 109,
	f19: 110,
	f20: 111,
	f21: 112,
	f22: 113,
	f23: 114,
	f24: 115,
	f5: 62,
	f6: 63,
	f7: 64,
	f3: 60,
	f8: 65,
	f9: 66,
	f11: 68,
	f13: 104,
	f16: 107,
	f14: 105,
	f10: 67,
	f12: 69,
	f15: 106,
	home: 74,
	"page up": 75,
	del: 76,
	f4: 61,
	end: 77,
	f2: 59,
	"page down": 78,
	f1: 58,
	left: 80,
	right: 79,
	down: 81,
	up: 82
};
const NativeMapWindows = {
	0: 48,
	1: 49,
	2: 50,
	3: 51,
	4: 52,
	5: 53,
	6: 54,
	7: 55,
	8: 56,
	9: 57,
	a: 65,
	s: 83,
	d: 68,
	f: 70,
	h: 72,
	g: 71,
	z: 90,
	x: 88,
	c: 67,
	v: 86,
	b: 66,
	q: 81,
	w: 87,
	e: 69,
	r: 82,
	y: 89,
	t: 84,
	"=": 187,
	"-": 189,
	"]": 221,
	o: 79,
	u: 85,
	"[": 219,
	i: 73,
	p: 80,
	l: 76,
	j: 74,
	k: 75,
	";": 186,
	",": 188,
	"/": 191,
	n: 78,
	m: 77,
	".": 190,
	"numpad .": 110,
	"numpad *": 106,
	"numpad +": 107,
	"numpad clear": 144,
	"numpad /": 111,
	"numpad -": 109,
	"numpad =": 226,
	"numpad 0": 96,
	"numpad 1": 97,
	"numpad 2": 98,
	"numpad 3": 99,
	"numpad 4": 100,
	"numpad 5": 101,
	"numpad 6": 102,
	"numpad 7": 103,
	"numpad 8": 104,
	"numpad 9": 105,
	enter: 13,
	tab: 9,
	space: 32,
	backspace: 8,
	esc: 27,
	meta: 91,
	shift: 160,
	"caps lock": 20,
	alt: 164,
	ctrl: 162,
	"right shift": 161,
	"right alt": 165,
	"right ctrl": 163,
	"right meta": 93,
	f1: 112,
	f2: 113,
	f3: 114,
	f4: 115,
	f5: 116,
	f6: 117,
	f7: 118,
	f8: 119,
	f9: 120,
	f10: 121,
	f11: 122,
	f12: 123,
	f13: 124,
	f14: 125,
	f15: 126,
	f16: 127,
	f17: 128,
	f18: 129,
	f19: 130,
	f20: 131,
	f21: 132,
	f22: 133,
	f23: 134,
	f24: 135,
	home: 36,
	"page up": 33,
	del: 46,
	end: 35,
	"page down": 34,
	left: 37,
	right: 39,
	down: 40,
	up: 38,
	insert: 45,
	break: 19,
	"scroll lock": 145,
	"print screen": 44,
	rewind: 177,
	play: 179,
	"fast forward": 176,
	"^": 220,
	"§": 220,
	"½": 220,
	plus: 192,
	ž: 192,
	"@": 192,
	"|": 220,
	"#": 222,
	$: 222,
	process: 229,
	"·": 229,
	ذ: 192,
	"`": 192,
	"¬": 223,
	"\\": 220,
	"'": 222
};
const invertMap = (map) => Object.entries(map).reduce((acc, [key, val]) => {
	acc[val] = key;
	return acc;
}, {});
const CodeToName = {
	win32: invertMap(NativeMapWindows),
	linux: invertMap(NativeMapLinux),
	darwin: invertMap(NativeMapMac)
};

//#endregion
//#region plugins/soundboardHotkeys/components/keybinds.jsx
var import_web$33 = __toESM(require_web(), 1);
var import_web$34 = __toESM(require_web(), 1);
var import_web$35 = __toESM(require_web(), 1);
var import_web$36 = __toESM(require_web(), 1);
var import_web$37 = __toESM(require_web(), 1);
var import_web$38 = __toESM(require_web(), 1);
var import_web$39 = __toESM(require_web(), 1);
var import_web$40 = __toESM(require_web(), 1);
var import_web$41 = __toESM(require_web(), 1);
var import_web$42 = __toESM(require_web(), 1);
const _tmpl$$3 = /*#__PURE__*/ (0, import_web$33.template)(`<div><div></div><div><input type="text" readonly><span></span></div></div>`, 9), _tmpl$2$3 = /*#__PURE__*/ (0, import_web$33.template)(`<div></div>`, 2);
const { ui: { focusring: focusring$2 }, solid: { createSignal: createSignal$4, createEffect, onCleanup: onCleanup$2, createUniqueId, onMount } } = shelter;
const getDisplayFromCodes = (codes) => {
	const platform = DiscordNative.process.platform;
	const map = CodeToName[platform] || CodeToName.linux;
	const isMac = platform === "darwin";
	return codes.map((code) => {
		let name = map[code];
		if (!name) return `Unknown(${code})`;
		name = name.toUpperCase();
		if (isMac) {
			const symbolMatch = MacSymbols.find(([text]) => text === name || text === name.replace(" ", ""));
			if (symbolMatch) return symbolMatch[1];
		} else {
			if (name === "META") return "Win";
			if (name === "RIGHT META") return "Right Win";
			if (name.length > 1) {
				name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
				name = name.replace(/\b\w/g, (l) => l.toUpperCase());
			}
		}
		return name;
	}).join(" + ");
};
function KeybindCapture({ keybind, setValid, setKeybind, setScancodes }) {
	const [isCapturing, setIsCapturing] = createSignal$4(false);
	const inputId = createUniqueId();
	let inputRef;
	const handleNativeChange = (rawCombo) => {
		if (!isCapturing()) return;
		const codes = rawCombo.map((item) => item[1]);
		if (codes && codes.length > 0) {
			const displayString = getDisplayFromCodes(codes);
			setScancodes(codes);
			setKeybind(displayString);
			setValid(true);
			setIsCapturing(false);
		}
	};
	onMount(() => {
		if (inputRef) {
			const unregister = registerListenerElement(inputId, handleNativeChange);
			onCleanup$2(() => {
				if (unregister) unregister();
			});
		}
	});
	createEffect(() => {
		if (isCapturing()) inputRef?.focus();
else inputRef?.blur();
	});
	const handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsCapturing(!isCapturing());
	};
	const handleBlur = () => {
		setIsCapturing(false);
	};
	return (() => {
		const _el$ = (0, import_web$36.getNextElement)(_tmpl$$3), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling;
		(0, import_web$41.insert)(_el$2, () => isCapturing() ? "Press keys to record" : "Keybind");
		_el$3.$$click = handleClick;
		_el$4.addEventListener("blur", handleBlur);
		const _ref$ = inputRef;
		typeof _ref$ === "function" ? (0, import_web$39.use)(_ref$, _el$4) : inputRef = _el$4;
		(0, import_web$40.setAttribute)(_el$4, "id", inputId);
		_el$4.style.setProperty("position", "absolute");
		_el$4.style.setProperty("opacity", "0");
		_el$4.style.setProperty("width", "1px");
		_el$4.style.setProperty("height", "1px");
		_el$4.style.setProperty("cursor", "none");
		_el$4.style.setProperty("pointer-events", "auto");
		(0, import_web$41.insert)(_el$5, () => keybind() || (isCapturing() ? "Waiting for input..." : "Click to set"));
		(0, import_web$38.effect)((_p$) => {
			const _v$ = style_default.container, _v$2 = style_default.label, _v$3 = `${style_default.keybindButton} ${isCapturing() ? style_default.capturing : ""}`, _v$4 = isCapturing() ? "Waiting for input..." : "Click to set";
			_v$ !== _p$._v$ && (0, import_web$35.className)(_el$, _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$35.className)(_el$2, _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && (0, import_web$35.className)(_el$3, _p$._v$3 = _v$3);
			_v$4 !== _p$._v$4 && (0, import_web$40.setAttribute)(_el$4, "placeholder", _p$._v$4 = _v$4);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined,
			_v$3: undefined,
			_v$4: undefined
		});
		(0, import_web$38.effect)(() => _el$4.value = keybind() || "");
		(0, import_web$37.runHydrationEvents)();
		return _el$;
	})();
}
function KeybindDisplayOnly({ keybind }) {
	return (() => {
		const _el$6 = (0, import_web$36.getNextElement)(_tmpl$2$3);
		_el$6.style.setProperty("cursor", "default");
		(0, import_web$41.insert)(_el$6, keybind);
		(0, import_web$38.effect)(() => (0, import_web$35.className)(_el$6, style_default.keybindButton));
		return _el$6;
	})();
}
(0, import_web$34.delegateEvents)(["click"]);

//#endregion
//#region plugins/soundboardHotkeys/components/soundPreview.jsx
var import_web$20 = __toESM(require_web(), 1);
var import_web$21 = __toESM(require_web(), 1);
var import_web$22 = __toESM(require_web(), 1);
var import_web$23 = __toESM(require_web(), 1);
var import_web$24 = __toESM(require_web(), 1);
var import_web$25 = __toESM(require_web(), 1);
var import_web$26 = __toESM(require_web(), 1);
var import_web$27 = __toESM(require_web(), 1);
var import_web$28 = __toESM(require_web(), 1);
var import_web$29 = __toESM(require_web(), 1);
var import_web$30 = __toESM(require_web(), 1);
var import_web$31 = __toESM(require_web(), 1);
var import_web$32 = __toESM(require_web(), 1);
const _tmpl$$2 = /*#__PURE__*/ (0, import_web$20.template)(`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path></svg>`, 4), _tmpl$2$2 = /*#__PURE__*/ (0, import_web$20.template)(`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"></path></svg>`, 4), _tmpl$3$2 = /*#__PURE__*/ (0, import_web$20.template)(`<span><button name="preview"></button></span>`, 4), _tmpl$4$1 = /*#__PURE__*/ (0, import_web$20.template)(`<div></div>`, 2), _tmpl$5 = /*#__PURE__*/ (0, import_web$20.template)(`<div><!#><!/><!#><!/><span></span></div>`, 8), _tmpl$6 = /*#__PURE__*/ (0, import_web$20.template)(`<img alt="" loading="lazy">`, 1), _tmpl$7 = /*#__PURE__*/ (0, import_web$20.template)(`<span></span>`, 2);
const { ui: { Text: Text$2, focusring: focusring$1 }, solid: { createSignal: createSignal$3 }, flux: { stores: { SoundboardStore: SoundboardStore$1, EmojiStore } } } = shelter;
const baseUrl = "https://cdn.discordapp.com/soundboard-sounds/";
let sharedAudio = null;
function getSharedAudio() {
	if (!sharedAudio) sharedAudio = new Audio();
	return sharedAudio;
}
function stopPreviewSound() {
	if (sharedAudio) {
		sharedAudio.pause();
		sharedAudio.currentTime = 0;
	}
}
let currentPlayingSetter = null;
function playSound(soundId, setIsPlaying) {
	const audio = getSharedAudio();
	if (currentPlayingSetter && currentPlayingSetter !== setIsPlaying) currentPlayingSetter(false);
	audio.pause();
	audio.currentTime = 0;
	audio.src = `${baseUrl}${soundId}`;
	audio.load();
	audio.play();
	currentPlayingSetter = setIsPlaying;
	setIsPlaying(true);
	audio.onended = () => {
		setIsPlaying(false);
		currentPlayingSetter = null;
	};
}
function stopSound(setIsPlaying) {
	if (sharedAudio) {
		sharedAudio.pause();
		sharedAudio.currentTime = 0;
	}
	setIsPlaying?.(false);
	currentPlayingSetter = null;
}
function PlayIcon() {
	return (0, import_web$32.getNextElement)(_tmpl$$2);
}
function StopIcon() {
	return (0, import_web$32.getNextElement)(_tmpl$2$2);
}
function Preview({ soundId }) {
	const [isPlaying, setIsPlaying] = createSignal$3(false);
	return (() => {
		const _el$3 = (0, import_web$32.getNextElement)(_tmpl$3$2), _el$4 = _el$3.firstChild;
		_el$4.$$click = (e) => {
			e.stopPropagation();
			if (isPlaying()) stopSound(setIsPlaying);
else playSound(soundId, setIsPlaying);
		};
		(0, import_web$31.use)(focusring$1, _el$4, () => true);
		(0, import_web$29.insert)(_el$4, (() => {
			const _c$ = (0, import_web$30.memo)(() => !!isPlaying());
			return () => _c$() ? (0, import_web$23.createComponent)(StopIcon, {}) : (0, import_web$23.createComponent)(PlayIcon, {});
		})());
		(0, import_web$27.effect)((_p$) => {
			const _v$ = style_default.inline, _v$2 = {
				[style_default.preview]: true,
				[style_default.playing]: isPlaying()
			}, _v$3 = isPlaying() ? "Stop sound" : "Preview sound";
			_v$ !== _p$._v$ && (0, import_web$26.className)(_el$3, _p$._v$ = _v$);
			_p$._v$2 = (0, import_web$25.classList)(_el$4, _v$2, _p$._v$2);
			_v$3 !== _p$._v$3 && (0, import_web$24.setAttribute)(_el$4, "title", _p$._v$3 = _v$3);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined,
			_v$3: undefined
		});
		(0, import_web$28.runHydrationEvents)();
		return _el$3;
	})();
}
function SoundWithEmoji({ soundId, selected }) {
	const sound = SoundboardStore$1.getSoundById(soundId);
	if (!sound) return (() => {
		const _el$5 = (0, import_web$32.getNextElement)(_tmpl$4$1);
		(0, import_web$29.insert)(_el$5, (0, import_web$23.createComponent)(Text$2, { children: "❌ Sound not found" }));
		(0, import_web$27.effect)(() => (0, import_web$26.className)(_el$5, style_default.soundItem));
		return _el$5;
	})();
	const getEmojiUrl = () => {
		if (!sound.emojiId) return null;
		const emoji = EmojiStore.getCustomEmojiById(sound.emojiId);
		if (!emoji) return null;
		return `https://cdn.discordapp.com/emojis/${sound.emojiId}.${emoji.animated ? "gif" : "png"}?size=20&quality=lossless`;
	};
	const emojiUrl = getEmojiUrl();
	return (() => {
		const _el$6 = (0, import_web$32.getNextElement)(_tmpl$5), _el$8 = _el$6.firstChild, [_el$9, _co$] = (0, import_web$22.getNextMarker)(_el$8.nextSibling), _el$0 = _el$9.nextSibling, [_el$1, _co$2] = (0, import_web$22.getNextMarker)(_el$0.nextSibling), _el$7 = _el$1.nextSibling;
		(0, import_web$29.insert)(_el$6, (0, import_web$23.createComponent)(Preview, { soundId }), _el$9, _co$);
		(0, import_web$29.insert)(_el$6, () => emojiUrl ? (() => {
			const _el$10 = (0, import_web$32.getNextElement)(_tmpl$6);
			(0, import_web$24.setAttribute)(_el$10, "src", emojiUrl);
			(0, import_web$27.effect)(() => (0, import_web$26.className)(_el$10, style_default.emoji));
			return _el$10;
		})() : sound.emojiName ? (() => {
			const _el$11 = (0, import_web$32.getNextElement)(_tmpl$7);
			(0, import_web$29.insert)(_el$11, () => sound.emojiName);
			(0, import_web$27.effect)(() => (0, import_web$26.className)(_el$11, style_default.emoji));
			return _el$11;
		})() : null, _el$1, _co$2);
		(0, import_web$29.insert)(_el$7, () => sound.name);
		(0, import_web$27.effect)((_p$) => {
			const _v$4 = {
				[style_default.soundItem]: true,
				[style_default.selected]: selected?.()
			}, _v$5 = style_default.soundName;
			_p$._v$4 = (0, import_web$25.classList)(_el$6, _v$4, _p$._v$4);
			_v$5 !== _p$._v$5 && (0, import_web$26.className)(_el$7, _p$._v$5 = _v$5);
			return _p$;
		}, {
			_v$4: undefined,
			_v$5: undefined
		});
		return _el$6;
	})();
}
(0, import_web$21.delegateEvents)(["click"]);

//#endregion
//#region plugins/soundboardHotkeys/components/soundPicker.jsx
var import_web$10 = __toESM(require_web(), 1);
var import_web$11 = __toESM(require_web(), 1);
var import_web$12 = __toESM(require_web(), 1);
var import_web$13 = __toESM(require_web(), 1);
var import_web$14 = __toESM(require_web(), 1);
var import_web$15 = __toESM(require_web(), 1);
var import_web$16 = __toESM(require_web(), 1);
var import_web$17 = __toESM(require_web(), 1);
var import_web$18 = __toESM(require_web(), 1);
var import_web$19 = __toESM(require_web(), 1);
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$10.template)(`<div><div>Sound</div><!#><!/><div></div></div>`, 8), _tmpl$2$1 = /*#__PURE__*/ (0, import_web$10.template)(`<div><!#><!/><!#><!/></div>`, 6), _tmpl$3$1 = /*#__PURE__*/ (0, import_web$10.template)(`<button></button>`, 2);
const { ui: { TextBox, Text: Text$1, focusring }, flux: { stores: { SoundboardStore } }, solid: { For: For$1, Show: Show$1, createSignal: createSignal$2 } } = shelter;
function search(sounds, query) {
	if (!query) return sounds;
	const lowerQuery = query.toLowerCase();
	return sounds.filter((sound) => sound.name.toLowerCase().includes(lowerQuery));
}
function SoundPicker(props) {
	const sounds = () => {
		return [...SoundboardStore.getSounds()].map((x) => x[1]).flat().sort((a, b) => SoundboardStore.isFavoriteSound(b.soundId) - SoundboardStore.isFavoriteSound(a.soundId));
	};
	const [query, setQuery] = createSignal$2("");
	const filteredSounds = () => search(sounds(), query());
	return (() => {
		const _el$ = (0, import_web$16.getNextElement)(_tmpl$$1), _el$2 = _el$.firstChild, _el$4 = _el$2.nextSibling, [_el$5, _co$] = (0, import_web$17.getNextMarker)(_el$4.nextSibling), _el$3 = _el$5.nextSibling;
		(0, import_web$18.insert)(_el$, (0, import_web$19.createComponent)(TextBox, {
			get value() {
				return query();
			},
			placeholder: "Search sounds...",
			onInput: (e) => setQuery(e)
		}), _el$5, _co$);
		(0, import_web$18.insert)(_el$3, (0, import_web$19.createComponent)(Show$1, {
			get when() {
				return filteredSounds().length > 0;
			},
			get fallback() {
				return (() => {
					const _el$6 = (0, import_web$16.getNextElement)(_tmpl$2$1), _el$7 = _el$6.firstChild, [_el$8, _co$2] = (0, import_web$17.getNextMarker)(_el$7.nextSibling), _el$9 = _el$8.nextSibling, [_el$0, _co$3] = (0, import_web$17.getNextMarker)(_el$9.nextSibling);
					(0, import_web$18.insert)(_el$6, (0, import_web$19.createComponent)(Text$1, { children: "No sounds found" }), _el$8, _co$2);
					(0, import_web$18.insert)(_el$6, (0, import_web$19.createComponent)(Text$1, { children: "Try a different search term" }), _el$0, _co$3);
					(0, import_web$15.effect)(() => (0, import_web$14.className)(_el$6, style_default.emptyState));
					return _el$6;
				})();
			},
			get children() {
				return (0, import_web$19.createComponent)(For$1, {
					get each() {
						return filteredSounds();
					},
					children: (sound) => (() => {
						const _el$1 = (0, import_web$16.getNextElement)(_tmpl$3$1);
						(0, import_web$13.use)(focusring, _el$1, () => true);
						_el$1.$$click = (e) => e.target.name !== "preview" && props.setSoundId(sound.soundId);
						_el$1.addEventListener("keypress", (e) => e.key === "Enter" && e.target.name !== "preview" && props.setSoundId(sound.soundId));
						(0, import_web$18.insert)(_el$1, (0, import_web$19.createComponent)(SoundWithEmoji, {
							get soundId() {
								return sound.soundId;
							},
							selected: () => sound.soundId === props.soundId()
						}));
						(0, import_web$15.effect)(() => (0, import_web$14.className)(_el$1, style_default.sound));
						(0, import_web$12.runHydrationEvents)();
						return _el$1;
					})()
				});
			}
		}));
		(0, import_web$15.effect)((_p$) => {
			const _v$ = style_default.marginTop, _v$2 = style_default.label, _v$3 = style_default.soundPicker;
			_v$ !== _p$._v$ && (0, import_web$14.className)(_el$, _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$14.className)(_el$2, _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && (0, import_web$14.className)(_el$3, _p$._v$3 = _v$3);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined,
			_v$3: undefined
		});
		return _el$;
	})();
}
(0, import_web$11.delegateEvents)(["click"]);

//#endregion
//#region plugins/soundboardHotkeys/components/addModal.jsx
var import_web$8 = __toESM(require_web(), 1);
var import_web$9 = __toESM(require_web(), 1);
const { ui: { ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter, ModalSizes }, solid: { createSignal: createSignal$1, onCleanup: onCleanup$1 }, plugin: { store: store$2 } } = shelter;
function AddKeybindModal(closeModal, initialState) {
	const [keybindValid, setKeybindValid] = createSignal$1(!!initialState);
	const [keybind, setKeybind] = createSignal$1(initialState?.text || "");
	const [soundId, setSoundId] = createSignal$1(initialState?.sound || "");
	const [scancodes, setScancodes] = createSignal$1(initialState?.scancodes || []);
	const isEditing = !!initialState;
	const modalTitle = isEditing ? "Edit Keybind" : "Add New Keybind";
	onCleanup$1(() => {
		stopPreviewSound();
	});
	return (0, import_web$9.createComponent)(ModalRoot, {
		get size() {
			return ModalSizes.MEDIUM;
		},
		get ["class"]() {
			return style_default.tallerModal;
		},
		get children() {
			return [
				(0, import_web$9.createComponent)(ModalHeader, {
					close: closeModal,
					children: modalTitle
				}),
				(0, import_web$9.createComponent)(ModalBody, { get children() {
					return [(0, import_web$9.createComponent)(KeybindCapture, {
						keybind,
						setValid: setKeybindValid,
						setKeybind,
						setScancodes
					}), (0, import_web$9.createComponent)(SoundPicker, {
						soundId,
						setSoundId
					})];
				} }),
				(0, import_web$9.createComponent)(ModalConfirmFooter, {
					close: closeModal,
					confirmText: isEditing ? "Save Changes" : "Add Keybind",
					get disabled() {
						return !keybindValid() || soundId() === "";
					},
					onConfirm: async () => {
						const nextId = initialState?.id ?? (store$2.keybinds[store$2.keybinds.length - 1]?.id - 1 || -1);
						if (initialState?.id && store$2.keybinds.find((k) => k.id === initialState.id)) store$2.keybinds = store$2.keybinds.map((k) => k.id === initialState.id ? {
							id: initialState.id,
							scancodes: scancodes(),
							text: keybind(),
							sound: soundId()
						} : k);
else store$2.keybinds = [...store$2.keybinds, {
							id: nextId,
							scancodes: scancodes(),
							text: keybind(),
							sound: soundId()
						}];
						registerKeybind(nextId, scancodes(), soundId());
					}
				})
			];
		}
	});
}

//#endregion
//#region plugins/soundboardHotkeys/components/settings.jsx
var import_web = __toESM(require_web(), 1);
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
var import_web$3 = __toESM(require_web(), 1);
var import_web$4 = __toESM(require_web(), 1);
var import_web$5 = __toESM(require_web(), 1);
var import_web$6 = __toESM(require_web(), 1);
var import_web$7 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z"></path><path fill="currentColor" fill-rule="evenodd" d="M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path></svg>`, 6), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<div><div><div><div>Keybind</div><!#><!/></div><div><div>Sound</div><!#><!/></div></div><div><!#><!/><!#><!/></div></div>`, 22), _tmpl$3 = /*#__PURE__*/ (0, import_web.template)(`<div><!#><!/><!#><!/></div>`, 6), _tmpl$4 = /*#__PURE__*/ (0, import_web.template)(`<div></div>`, 2);
const { ui: { Header, HeaderTags, Text, Button, openModal, ReactiveRoot, ButtonColors, ButtonSizes }, solid: { For, Show, createSignal, onCleanup }, plugin: { store: store$1 } } = shelter;
function TrashIcon() {
	return (0, import_web$7.getNextElement)(_tmpl$);
}
function KeybindCard({ keybind }) {
	return (() => {
		const _el$2 = (0, import_web$7.getNextElement)(_tmpl$2), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, [_el$7, _co$] = (0, import_web$4.getNextMarker)(_el$6.nextSibling), _el$8 = _el$4.nextSibling, _el$9 = _el$8.firstChild, _el$0 = _el$9.nextSibling, [_el$1, _co$2] = (0, import_web$4.getNextMarker)(_el$0.nextSibling), _el$10 = _el$3.nextSibling, _el$11 = _el$10.firstChild, [_el$12, _co$3] = (0, import_web$4.getNextMarker)(_el$11.nextSibling), _el$13 = _el$12.nextSibling, [_el$14, _co$4] = (0, import_web$4.getNextMarker)(_el$13.nextSibling);
		(0, import_web$5.insert)(_el$4, (0, import_web$6.createComponent)(KeybindDisplayOnly, { get keybind() {
			return keybind.text;
		} }), _el$7, _co$);
		(0, import_web$5.insert)(_el$8, (0, import_web$6.createComponent)(SoundWithEmoji, { get soundId() {
			return keybind.sound;
		} }), _el$1, _co$2);
		(0, import_web$5.insert)(_el$10, (0, import_web$6.createComponent)(Button, {
			get color() {
				return ButtonColors.RED;
			},
			get size() {
				return ButtonSizes.MEDIUM;
			},
			get ["class"]() {
				return style_default.iconButton;
			},
			onClick: () => {
				store$1.keybinds = store$1.keybinds.filter((k) => k.id !== keybind.id);
				unregisterKeybind(keybind.id);
			},
			get children() {
				return (0, import_web$6.createComponent)(TrashIcon, {});
			}
		}), _el$12, _co$3);
		(0, import_web$5.insert)(_el$10, (0, import_web$6.createComponent)(Button, {
			get color() {
				return ButtonColors.SECONDARY;
			},
			get size() {
				return ButtonSizes.MEDIUM;
			},
			onclick: () => openModal((p) => AddKeybindModal(p.close, keybind)),
			children: "Edit"
		}), _el$14, _co$4);
		(0, import_web$3.effect)((_p$) => {
			const _v$ = style_default.card, _v$2 = style_default.cardInfo, _v$3 = style_default.cardSection, _v$4 = style_default.label, _v$5 = style_default.cardSection, _v$6 = style_default.label, _v$7 = style_default.cardActions;
			_v$ !== _p$._v$ && (0, import_web$2.className)(_el$2, _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$2.className)(_el$3, _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && (0, import_web$2.className)(_el$4, _p$._v$3 = _v$3);
			_v$4 !== _p$._v$4 && (0, import_web$2.className)(_el$5, _p$._v$4 = _v$4);
			_v$5 !== _p$._v$5 && (0, import_web$2.className)(_el$8, _p$._v$5 = _v$5);
			_v$6 !== _p$._v$6 && (0, import_web$2.className)(_el$9, _p$._v$6 = _v$6);
			_v$7 !== _p$._v$7 && (0, import_web$2.className)(_el$10, _p$._v$7 = _v$7);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined,
			_v$3: undefined,
			_v$4: undefined,
			_v$5: undefined,
			_v$6: undefined,
			_v$7: undefined
		});
		return _el$2;
	})();
}
function Settings() {
	const [done, setDone] = createSignal(false);
	loadSounds().then(() => setDone(true));
	onCleanup(() => {
		stopSound();
	});
	return (0, import_web$6.createComponent)(ReactiveRoot, { get children() {
		return [(() => {
			const _el$15 = (0, import_web$7.getNextElement)(_tmpl$3), _el$16 = _el$15.firstChild, [_el$17, _co$5] = (0, import_web$4.getNextMarker)(_el$16.nextSibling), _el$18 = _el$17.nextSibling, [_el$19, _co$6] = (0, import_web$4.getNextMarker)(_el$18.nextSibling);
			(0, import_web$5.insert)(_el$15, (0, import_web$6.createComponent)(Header, {
				get tag() {
					return HeaderTags.H3;
				},
				margin: false,
				get children() {
					return (0, import_web$6.createComponent)(Show, {
						get when() {
							return done();
						},
						fallback: "Loading sounds...",
						get children() {
							return [
								"Keybinds (",
								(0, import_web$1.memo)(() => store$1.keybinds?.length || 0),
								")"
							];
						}
					});
				}
			}), _el$17, _co$5);
			(0, import_web$5.insert)(_el$15, (0, import_web$6.createComponent)(Button, {
				get size() {
					return ButtonSizes.LARGE;
				},
				get disabled() {
					return !done();
				},
				onclick: () => {
					openModal((p) => AddKeybindModal(p.close));
				},
				children: "Add keybind"
			}), _el$19, _co$6);
			(0, import_web$3.effect)(() => (0, import_web$2.className)(_el$15, style_default.flexSpaceBetween));
			return _el$15;
		})(), (0, import_web$6.createComponent)(Show, {
			get when() {
				return done();
			},
			get children() {
				return (0, import_web$6.createComponent)(Show, {
					get when() {
						return store$1.keybinds?.length > 0;
					},
					get fallback() {
						return (() => {
							const _el$21 = (0, import_web$7.getNextElement)(_tmpl$3), _el$22 = _el$21.firstChild, [_el$23, _co$7] = (0, import_web$4.getNextMarker)(_el$22.nextSibling), _el$24 = _el$23.nextSibling, [_el$25, _co$8] = (0, import_web$4.getNextMarker)(_el$24.nextSibling);
							(0, import_web$5.insert)(_el$21, (0, import_web$6.createComponent)(Text, { children: "No keybinds configured yet." }), _el$23, _co$7);
							(0, import_web$5.insert)(_el$21, (0, import_web$6.createComponent)(Text, { children: "Click \"Add keybind\" to get started!" }), _el$25, _co$8);
							(0, import_web$3.effect)(() => (0, import_web$2.className)(_el$21, style_default.emptyState));
							return _el$21;
						})();
					},
					get children() {
						const _el$20 = (0, import_web$7.getNextElement)(_tmpl$4);
						(0, import_web$5.insert)(_el$20, (0, import_web$6.createComponent)(For, {
							get each() {
								return store$1.keybinds;
							},
							children: (keybind) => (0, import_web$6.createComponent)(KeybindCard, { keybind })
						}));
						return _el$20;
					}
				});
			}
		})];
	} });
}

//#endregion
//#region plugins/soundboardHotkeys/index.jsx
const { ui: { showToast }, settings: { registerSection } } = shelter.plugin.scoped;
const { store } = shelter.plugin;
function onLoad() {
	if (!window.DiscordNative) {
		showToast({
			title: "Soundboard Hotkeys",
			content: "This plugin only works on the desktop client."
		});
		return;
	}
	loadNativeModule();
	registerSection("section", "sbhk", "Soundboard Hotkeys", Settings);
	store.keybinds ??= [];
	for (const keybind of store.keybinds) registerKeybind(keybind.id, keybind.scancodes, keybind.sound);
}
function onUnload() {
	if (!window.DiscordNative) return;
	for (const keybind of store.keybinds) unregisterKeybind(keybind.id);
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});