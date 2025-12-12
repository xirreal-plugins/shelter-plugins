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
function playSound(sound) {
	const soundboardButton = document.querySelector("[class*=\"actionButtons\"] > span > div > button");
	const soundboardPanel = document.querySelector("[id*=\"popout\"] > div > [class*=\"picker\"]");
	if (soundboardPanel) {
		soundboardPanel.querySelector(`[id^="sound-${sound}"]`).click();
		return;
	}
	soundboardButton.click();
	const stopObserving = observeDom("[id*=\"popout\"] > div > [class*=\"picker\"]", (element) => {
		stopObserving();
		const stopObserving2 = observeDom(`[id^="sound-${sound}"]`, (element$1) => {
			stopObserving2();
			element$1.click();
			soundboardButton.click();
		});
	});
}
function registerKeybind(id, scancodes, sound) {
	if (!nativeModule) return;
	const combinations = scancodes.map((scancode) => [
		0,
		scancode,
		1
	]);
	nativeModule.inputEventRegister(id, combinations, () => playSound(sound), {
		focused: true,
		blurred: true,
		keydown: true,
		keyup: false
	});
}
function unregisterKeybind$1(id) {
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

._6PhcGW_margin {
  margin-top: 16px;
  margin-bottom: 16px;
  display: block;
}

._6PhcGW_marginTop {
  margin-top: 16px;
}

._6PhcGW_flexSpaceBetween {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

._6PhcGW_card {
  box-sizing: border-box;
  text-indent: 0;
  background-color: var(--background-base-low);
  border-radius: 4px;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-width: 160px;
  margin-top: 16px;
  padding: 16px;
  display: flex;
}

._6PhcGW_content {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  display: flex;
  overflow: hidden;
}

._6PhcGW_preview {
  background-color: var(--brand-500);
  cursor: pointer;
  border: 0 solid #0000;
  border-radius: 4px;
  margin-right: 8px;
  transition: all .2s ease-in-out;
  display: inline;
}

._6PhcGW_preview:hover {
  background-color: var(--brand-560);
}

._6PhcGW_emoji {
  image-rendering: crisp-edges;
  margin-right: 8px;
}

._6PhcGW_inline {
  display: inline;
}

._6PhcGW_soundPicker {
  margin-top: 8px;
}

._6PhcGW_flexRow {
  background: var(--background-base-lowest);
  border: 1px solid var(--background-base-low);
  border-radius: 4px;
  justify-content: start;
  align-items: center;
  width: fit-content;
  padding: 8px 10px 8px 8px;
  display: flex;
}

._6PhcGW_keybindButton {
  background: var(--background-base-lowest);
  border: 1px solid var(--background-base-low);
  border-radius: 4px;
  justify-content: start;
  align-items: center;
  width: fit-content;
  min-width: 160px;
  padding: 8px;
  transition: all .2s ease-in-out;
  display: flex;
}

._6PhcGW_noMarginUnselectable {
  user-select: none;
  margin: 0;
}

._6PhcGW_sound {
  cursor: pointer;
  background-color: var(--background-surface-highest);
  border: none;
  margin: 2px;
  padding: 0;
}

._6PhcGW_selected {
  background-color: var(--control-connect-background-default);
}

._6PhcGW_column {
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
}

._6PhcGW_tallerModal {
  height: 680px;
  min-height: 680px;
  max-height: 680px;
}
`);
var style_default = {
	"flexRow": "_6PhcGW_flexRow",
	"selected": "_6PhcGW_selected",
	"content": "_6PhcGW_content",
	"margin": "_6PhcGW_margin",
	"marginTop": "_6PhcGW_marginTop",
	"preview": "_6PhcGW_preview",
	"emoji": "_6PhcGW_emoji",
	"card": "_6PhcGW_card",
	"flexSpaceBetween": "_6PhcGW_flexSpaceBetween",
	"soundPicker": "_6PhcGW_soundPicker",
	"sound": "_6PhcGW_sound",
	"tallerModal": "_6PhcGW_tallerModal",
	"spaced": "_6PhcGW_spaced",
	"inline": "_6PhcGW_inline",
	"column": "_6PhcGW_column",
	"noMarginUnselectable": "_6PhcGW_noMarginUnselectable",
	"keybindButton": "_6PhcGW_keybindButton"
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
var import_web$43 = __toESM(require_web(), 1);
const _tmpl$$3 = /*#__PURE__*/ (0, import_web$33.template)(`<div><!#><!/><button></button></div>`, 6), _tmpl$2$3 = /*#__PURE__*/ (0, import_web$33.template)(`<div></div>`, 2);
const { ui: { Header: Header$2, HeaderTags: HeaderTags$2, focusring: focusring$2 }, solid: { createSignal: createSignal$3, createEffect, onCleanup } } = shelter;
const specialCodes = {
	win32: {
		CTRL: 162,
		RCTRL: 163,
		ALT: 164,
		SHIFT: 160,
		RSHIFT: 161
	},
	linux: {
		CTRL: 37,
		RCTRL: 105,
		ALT: 64,
		SHIFT: 50,
		RSHIFT: 62
	}
};
function KeybindCapture({ keybind, setValid, setKeybind, setScancodes }) {
	const [isCapturing, setIsCapturing] = createSignal$3(false);
	let element;
	const handleKeyDown = (e) => {
		e.preventDefault();
		if (e.repeat) return;
		const modifiers = [];
		const modifiersCode = [];
		if (e.ctrlKey) if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
			modifiers.push("RIGHT CTRL");
			modifiersCode.push(specialCodes[DiscordNative.process.platform].RCTRL);
		} else {
			modifiers.push("CTRL");
			modifiersCode.push(specialCodes[DiscordNative.process.platform].CTRL);
		}
		if (e.altKey) {
			modifiers.push("ALT");
			modifiersCode.push(specialCodes[DiscordNative.process.platform].ALT);
		}
		if (e.shiftKey) if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
			modifiers.push("RIGHT SHIFT");
			modifiersCode.push(specialCodes[DiscordNative.process.platform].RSHIFT);
		} else {
			modifiers.push("SHIFT");
			modifiersCode.push(specialCodes[DiscordNative.process.platform].SHIFT);
		}
		if (e.metaKey) return;
		setValid(false);
		if (modifiers.length === 0 && (e.key === "Escape" || e.key === "Enter")) {
			setIsCapturing(false);
			return;
		}
		const key = e.key.toUpperCase();
		if (!modifiers.includes(key) && key !== "CONTROL" && key !== "ALT" && key !== "SHIFT" && key !== "META") {
			modifiers.push(key);
			modifiersCode.push(e.keyCode);
			setValid(true);
		}
		setKeybind(modifiers.join(" + "));
		setScancodes(modifiersCode);
	};
	createEffect(() => {
		if (isCapturing()) element.addEventListener("keydown", handleKeyDown);
else element.removeEventListener("keydown", handleKeyDown);
		onCleanup(() => {
			element.removeEventListener("keydown", handleKeyDown);
		});
	});
	return (() => {
		const _el$ = (0, import_web$37.getNextElement)(_tmpl$$3), _el$3 = _el$.firstChild, [_el$4, _co$] = (0, import_web$39.getNextMarker)(_el$3.nextSibling), _el$2 = _el$4.nextSibling;
		const _ref$ = element;
		typeof _ref$ === "function" ? (0, import_web$43.use)(_ref$, _el$) : element = _el$;
		(0, import_web$40.insert)(_el$, (0, import_web$41.createComponent)(Header$2, {
			get tag() {
				return HeaderTags$2.EYEBROW;
			},
			get children() {
				return isCapturing() ? "Click again to stop" : "Click to capture keybind";
			}
		}), _el$4, _co$);
		(0, import_web$43.use)(focusring$2, _el$2, () => true);
		_el$2.addEventListener("keypress", (e) => e.key === "Enter" && setIsCapturing(!isCapturing()));
		_el$2.$$mousedown = () => setIsCapturing(!isCapturing());
		(0, import_web$40.insert)(_el$2, (0, import_web$41.createComponent)(Header$2, {
			get tag() {
				return HeaderTags$2.H2;
			},
			get ["class"]() {
				return style_default.noMarginUnselectable;
			},
			get children() {
				return keybind() || "None";
			}
		}));
		(0, import_web$36.effect)(() => (0, import_web$35.className)(_el$2, style_default.keybindButton));
		(0, import_web$38.runHydrationEvents)();
		return _el$;
	})();
}
function KeybindDisplayOnly({ keybind }) {
	return (() => {
		const _el$5 = (0, import_web$37.getNextElement)(_tmpl$2$3);
		(0, import_web$40.insert)(_el$5, (0, import_web$41.createComponent)(Header$2, {
			get tag() {
				return HeaderTags$2.H2;
			},
			get ["class"]() {
				return style_default.noMarginUnselectable;
			},
			children: keybind
		}));
		(0, import_web$36.effect)(() => (0, import_web$35.className)(_el$5, style_default.keybindButton));
		return _el$5;
	})();
}
(0, import_web$34.delegateEvents)(["mousedown"]);

//#endregion
//#region plugins/soundboardHotkeys/components/soundPreview.jsx
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
const _tmpl$$2 = /*#__PURE__*/ (0, import_web$21.template)(`<div><audio></audio><button name="preview">🔊</button></div>`, 6), _tmpl$2$2 = /*#__PURE__*/ (0, import_web$21.template)(`<div><!#><!/><!#><!/></div>`, 6), _tmpl$3$1 = /*#__PURE__*/ (0, import_web$21.template)(`<div><!#><!/><img alt=":3"><!#><!/></div>`, 7);
const { ui: { Text: Text$2, focusring: focusring$1 }, flux: { stores: { SoundboardStore: SoundboardStore$1, EmojiStore } } } = shelter;
function Preview({ soundId }) {
	const baseUrl = "https://cdn.discordapp.com/soundboard-sounds/";
	let audio;
	return (() => {
		const _el$ = (0, import_web$29.getNextElement)(_tmpl$$2), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
		const _ref$ = audio;
		typeof _ref$ === "function" ? (0, import_web$31.use)(_ref$, _el$2) : audio = _el$2;
		(0, import_web$32.setAttribute)(_el$2, "src", `${baseUrl}${soundId}`);
		_el$3.$$click = () => {
			audio.load();
			audio.play();
		};
		(0, import_web$31.use)(focusring$1, _el$3, () => true);
		(0, import_web$28.effect)((_p$) => {
			const _v$ = style_default.inline, _v$2 = style_default.preview;
			_v$ !== _p$._v$ && (0, import_web$27.className)(_el$, _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$27.className)(_el$3, _p$._v$2 = _v$2);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined
		});
		(0, import_web$30.runHydrationEvents)();
		return _el$;
	})();
}
function SoundWithEmoji({ soundId, selected }) {
	const sound = SoundboardStore$1.getSoundById(soundId);
	if (!sound) return (0, import_web$26.createComponent)(Text$2, { children: "❌ Sound not found! Please make sure the sound still exists." });
	if (!sound.emojiName && sound.emojiId) {
		const emoji = EmojiStore.getCustomEmojiById(sound.emojiId);
		if (!emoji) return (() => {
			const _el$4 = (0, import_web$29.getNextElement)(_tmpl$2$2), _el$5 = _el$4.firstChild, [_el$6, _co$] = (0, import_web$24.getNextMarker)(_el$5.nextSibling), _el$7 = _el$6.nextSibling, [_el$8, _co$2] = (0, import_web$24.getNextMarker)(_el$7.nextSibling);
			(0, import_web$25.insert)(_el$4, (0, import_web$26.createComponent)(Preview, { soundId }), _el$6, _co$);
			(0, import_web$25.insert)(_el$4, (0, import_web$26.createComponent)(Text$2, { get children() {
				return `${sound.emojiName || ""} ${sound.name}`.trim();
			} }), _el$8, _co$2);
			(0, import_web$28.effect)((_$p) => (0, import_web$23.classList)(_el$4, {
				[style_default.flexRow]: true,
				[style_default.selected]: selected?.()
			}, _$p));
			return _el$4;
		})();
		const emojiUrl = `https://cdn.discordapp.com/emojis/${sound.emojiId}.${emoji.animated ? "gif" : "png"}?size=16&quality=lossless`;
		return (() => {
			const _el$9 = (0, import_web$29.getNextElement)(_tmpl$3$1), _el$11 = _el$9.firstChild, [_el$12, _co$3] = (0, import_web$24.getNextMarker)(_el$11.nextSibling), _el$10 = _el$12.nextSibling, _el$13 = _el$10.nextSibling, [_el$14, _co$4] = (0, import_web$24.getNextMarker)(_el$13.nextSibling);
			(0, import_web$25.insert)(_el$9, (0, import_web$26.createComponent)(Preview, { soundId }), _el$12, _co$3);
			(0, import_web$32.setAttribute)(_el$10, "src", emojiUrl);
			(0, import_web$25.insert)(_el$9, (0, import_web$26.createComponent)(Text$2, { get children() {
				return sound.name;
			} }), _el$14, _co$4);
			(0, import_web$28.effect)((_p$) => {
				const _v$3 = {
					[style_default.flexRow]: true,
					[style_default.selected]: selected?.()
				}, _v$4 = style_default.emoji;
				_p$._v$3 = (0, import_web$23.classList)(_el$9, _v$3, _p$._v$3);
				_v$4 !== _p$._v$4 && (0, import_web$27.className)(_el$10, _p$._v$4 = _v$4);
				return _p$;
			}, {
				_v$3: undefined,
				_v$4: undefined
			});
			return _el$9;
		})();
	}
	return (() => {
		const _el$15 = (0, import_web$29.getNextElement)(_tmpl$2$2), _el$16 = _el$15.firstChild, [_el$17, _co$5] = (0, import_web$24.getNextMarker)(_el$16.nextSibling), _el$18 = _el$17.nextSibling, [_el$19, _co$6] = (0, import_web$24.getNextMarker)(_el$18.nextSibling);
		(0, import_web$25.insert)(_el$15, (0, import_web$26.createComponent)(Preview, { soundId }), _el$17, _co$5);
		(0, import_web$25.insert)(_el$15, (0, import_web$26.createComponent)(Text$2, { get children() {
			return `${sound.emojiName || ""} ${sound.name}`.trim();
		} }), _el$19, _co$6);
		(0, import_web$28.effect)((_$p) => (0, import_web$23.classList)(_el$15, {
			[style_default.flexRow]: true,
			[style_default.selected]: selected?.()
		}, _$p));
		return _el$15;
	})();
}
(0, import_web$22.delegateEvents)(["click"]);

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
var import_web$20 = __toESM(require_web(), 1);
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$10.template)(`<div><!#><!/><!#><!/><div><!#><!/><!#><!/></div></div>`, 12), _tmpl$2$1 = /*#__PURE__*/ (0, import_web$10.template)(`<button></button>`, 2);
const { ui: { Header: Header$1, HeaderTags: HeaderTags$1, TextBox, Text: Text$1, focusring }, flux: { stores: { SoundboardStore } }, solid: { For: For$1, createSignal: createSignal$2 } } = shelter;
function search(sounds, query) {
	if (!query) return sounds;
	return sounds.filter((sound) => sound.name.toLowerCase().includes(query.toLowerCase()));
}
function SoundPicker(props) {
	const sounds = () => {
		return [...SoundboardStore.getSounds()].map((x) => x[1]).flat().sort((a, b) => SoundboardStore.isFavoriteSound(b.soundId) - SoundboardStore.isFavoriteSound(a.soundId));
	};
	const [query, setQuery] = createSignal$2("");
	const filteredSounds = () => search(sounds(), query());
	return (() => {
		const _el$ = (0, import_web$16.getNextElement)(_tmpl$$1), _el$7 = _el$.firstChild, [_el$8, _co$3] = (0, import_web$17.getNextMarker)(_el$7.nextSibling), _el$9 = _el$8.nextSibling, [_el$10, _co$4] = (0, import_web$17.getNextMarker)(_el$9.nextSibling), _el$2 = _el$10.nextSibling, _el$3 = _el$2.firstChild, [_el$4, _co$] = (0, import_web$17.getNextMarker)(_el$3.nextSibling), _el$5 = _el$4.nextSibling, [_el$6, _co$2] = (0, import_web$17.getNextMarker)(_el$5.nextSibling);
		(0, import_web$18.insert)(_el$, (0, import_web$20.createComponent)(Header$1, {
			get tag() {
				return HeaderTags$1.EYEBROW;
			},
			get ["class"]() {
				return style_default.marginTop;
			},
			children: "Sound"
		}), _el$8, _co$3);
		(0, import_web$18.insert)(_el$, (0, import_web$20.createComponent)(TextBox, {
			value: "",
			placeholder: "Search sounds...",
			onInput: (e) => setQuery(e)
		}), _el$10, _co$4);
		(0, import_web$18.insert)(_el$2, (0, import_web$20.createComponent)(import_web$19.Show, {
			get when() {
				return filteredSounds().length === 0;
			},
			get children() {
				return (0, import_web$20.createComponent)(Text$1, {
					get ["class"]() {
						return style_default.margin;
					},
					children: "❌ No sounds found"
				});
			}
		}), _el$4, _co$);
		(0, import_web$18.insert)(_el$2, (0, import_web$20.createComponent)(For$1, {
			get each() {
				return filteredSounds();
			},
			children: (sound) => (() => {
				const _el$11 = (0, import_web$16.getNextElement)(_tmpl$2$1);
				(0, import_web$13.use)(focusring, _el$11, () => true);
				_el$11.$$click = (e) => e.target.name !== "preview" && props.setSoundId(sound.soundId);
				_el$11.addEventListener("keypress", (e) => e.key === "Enter" && e.target.name !== "preview" && props.setSoundId(sound.soundId));
				(0, import_web$18.insert)(_el$11, (0, import_web$20.createComponent)(SoundWithEmoji, {
					get soundId() {
						return sound.soundId;
					},
					selected: () => sound.soundId === props.soundId()
				}));
				(0, import_web$15.effect)(() => (0, import_web$14.className)(_el$11, style_default.sound));
				(0, import_web$12.runHydrationEvents)();
				return _el$11;
			})()
		}), _el$6, _co$2);
		(0, import_web$15.effect)(() => (0, import_web$14.className)(_el$2, style_default.soundPicker));
		return _el$;
	})();
}
(0, import_web$11.delegateEvents)(["click"]);

//#endregion
//#region plugins/soundboardHotkeys/components/addModal.jsx
var import_web$8 = __toESM(require_web(), 1);
var import_web$9 = __toESM(require_web(), 1);
const { ui: { ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter, ModalSizes }, solid: { createSignal: createSignal$1 }, plugin: { store: store$2 } } = shelter;
function AddKeybindModal(closeModal$1, initialState) {
	const [keybindValid, setKeybindValid] = createSignal$1(false);
	const [keybind, setKeybind] = createSignal$1("");
	const [soundId, setSoundId] = createSignal$1("");
	const [scancodes, setScancodes] = createSignal$1([]);
	if (initialState) {
		setKeybind(initialState.text);
		setSoundId(initialState.sound);
		setScancodes(initialState.scancodes);
	}
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
					close: closeModal$1,
					children: "Adding keybind"
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
					close: closeModal$1,
					confirmText: "Save",
					get disabled() {
						return !keybindValid() || soundId() === "";
					},
					onConfirm: async () => {
						const nextId = initialState?.id || store$2.keybinds[store$2.keybinds.length - 1]?.id - 1 || -1;
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
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div><div><div><!#><!/><!#><!/><!#><!/><!#><!/></div><div><!#><!/><!#><!/></div></div></div>`, 20), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<div><!#><!/><!#><!/></div>`, 6), _tmpl$3 = /*#__PURE__*/ (0, import_web.template)(`<div></div>`, 2);
const { ui: { Header, HeaderTags, Text, Divider, Button, openModal, ReactiveRoot, ButtonColors, ButtonSizes }, solid: { For, Show, createSignal }, plugin: { store: store$1 } } = shelter;
function KeybindCard({ keybind }) {
	return (() => {
		const _el$ = (0, import_web$4.getNextElement)(_tmpl$), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, [_el$5, _co$] = (0, import_web$5.getNextMarker)(_el$4.nextSibling), _el$6 = _el$5.nextSibling, [_el$7, _co$2] = (0, import_web$5.getNextMarker)(_el$6.nextSibling), _el$8 = _el$7.nextSibling, [_el$9, _co$3] = (0, import_web$5.getNextMarker)(_el$8.nextSibling), _el$10 = _el$9.nextSibling, [_el$11, _co$4] = (0, import_web$5.getNextMarker)(_el$10.nextSibling), _el$12 = _el$3.nextSibling, _el$13 = _el$12.firstChild, [_el$14, _co$5] = (0, import_web$5.getNextMarker)(_el$13.nextSibling), _el$15 = _el$14.nextSibling, [_el$16, _co$6] = (0, import_web$5.getNextMarker)(_el$15.nextSibling);
		(0, import_web$6.insert)(_el$3, (0, import_web$7.createComponent)(Header, {
			get tag() {
				return HeaderTags.EYEBROW;
			},
			children: "Keybind"
		}), _el$5, _co$);
		(0, import_web$6.insert)(_el$3, (0, import_web$7.createComponent)(KeybindDisplayOnly, { get keybind() {
			return keybind.text;
		} }), _el$7, _co$2);
		(0, import_web$6.insert)(_el$3, (0, import_web$7.createComponent)(Header, {
			get tag() {
				return HeaderTags.EYEBROW;
			},
			get ["class"]() {
				return style_default.marginTop;
			},
			children: "Sound"
		}), _el$9, _co$3);
		(0, import_web$6.insert)(_el$3, (0, import_web$7.createComponent)(SoundWithEmoji, { get soundId() {
			return keybind.sound;
		} }), _el$11, _co$4);
		(0, import_web$6.insert)(_el$12, (0, import_web$7.createComponent)(Button, {
			get size() {
				return ButtonSizes.MEDIUM;
			},
			onclick: () => openModal((p) => AddKeybindModal(p.close, keybind)),
			children: "Edit"
		}), _el$14, _co$5);
		(0, import_web$6.insert)(_el$12, (0, import_web$7.createComponent)(Button, {
			get color() {
				return ButtonColors.RED;
			},
			get size() {
				return ButtonSizes.MEDIUM;
			},
			get ["class"]() {
				return style_default.marginTop;
			},
			onClick: () => {
				store$1.keybinds = store$1.keybinds.filter((k) => k.id !== keybind.id);
				unregisterKeybind(keybind.id);
				closeModal();
			},
			children: "Delete"
		}), _el$16, _co$6);
		(0, import_web$3.effect)((_p$) => {
			const _v$ = style_default.card, _v$2 = style_default.content, _v$3 = style_default.fullWidth, _v$4 = style_default.column;
			_v$ !== _p$._v$ && (0, import_web$2.className)(_el$, _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$2.className)(_el$2, _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && (0, import_web$2.className)(_el$3, _p$._v$3 = _v$3);
			_v$4 !== _p$._v$4 && (0, import_web$2.className)(_el$12, _p$._v$4 = _v$4);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined,
			_v$3: undefined,
			_v$4: undefined
		});
		return _el$;
	})();
}
function Settings() {
	const [done, setDone] = createSignal(false);
	loadSounds().then(() => setDone(true));
	return (0, import_web$7.createComponent)(ReactiveRoot, { get children() {
		return [
			(0, import_web$7.createComponent)(Header, {
				get tag() {
					return HeaderTags.H1;
				},
				children: "Soundboard Hotkeys"
			}),
			(0, import_web$7.createComponent)(Text, {
				get ["class"]() {
					return style_default.spaced;
				},
				children: "Customize your soundboard hotkeys."
			}),
			(0, import_web$7.createComponent)(Divider, {}),
			(() => {
				const _el$17 = (0, import_web$4.getNextElement)(_tmpl$2), _el$18 = _el$17.firstChild, [_el$19, _co$7] = (0, import_web$5.getNextMarker)(_el$18.nextSibling), _el$20 = _el$19.nextSibling, [_el$21, _co$8] = (0, import_web$5.getNextMarker)(_el$20.nextSibling);
				(0, import_web$6.insert)(_el$17, (0, import_web$7.createComponent)(Header, {
					get tag() {
						return HeaderTags.H3;
					},
					get children() {
						return done() ? "Keybinds" : "Loading sounds...";
					}
				}), _el$19, _co$7);
				(0, import_web$6.insert)(_el$17, (0, import_web$7.createComponent)(Button, {
					get ["class"]() {
						return style_default.margin;
					},
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
				}), _el$21, _co$8);
				(0, import_web$3.effect)(() => (0, import_web$2.className)(_el$17, style_default.flexSpaceBetween));
				return _el$17;
			})(),
			(0, import_web$7.createComponent)(Show, {
				get when() {
					return done();
				},
				get children() {
					const _el$22 = (0, import_web$4.getNextElement)(_tmpl$3);
					(0, import_web$6.insert)(_el$22, (0, import_web$7.createComponent)(For, {
						get each() {
							return store$1.keybinds;
						},
						children: (keybind) => (0, import_web$7.createComponent)(KeybindCard, { keybind })
					}));
					return _el$22;
				}
			})
		];
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
	for (const keybind of store.keybinds) unregisterKeybind$1(keybind.id);
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});