(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shltr-res-ns:solid-js/web
  var require_web = __commonJS({
    "shltr-res-ns:solid-js/web"(exports, module) {
      module.exports = shelter.solidWeb;
    }
  });

  // plugins/soundboardHotkeys/index.jsx
  var soundboardHotkeys_exports = {};
  __export(soundboardHotkeys_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });

  // plugins/soundboardHotkeys/utils.js
  var {
    observeDom,
    flux: { intercept }
  } = shelter.plugin.scoped;
  var {
    stores: { SoundboardStore, GuildStore },
    dispatcher
  } = shelter.flux;
  var nativeModule = null;
  function loadNativeModule() {
    if (!nativeModule) {
      nativeModule = window.DiscordNative.nativeModules.requireModule("discord_utils");
    }
  }
  async function loadSounds() {
    return new Promise((resolve) => {
      if (SoundboardStore.hasFetchedAllSounds()) {
        resolve();
      }
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
    const soundboardButton = document.querySelector('[class^="actionButtons"] > :last-child > :first-child');
    const soundboardPanel = document.querySelector('[class^="picker"]');
    if (soundboardPanel) {
      soundboardPanel.querySelector(`[id^="sound-${sound}"]`).click();
      return;
    }
    soundboardButton.click();
    const stopObserving = observeDom('[class^="picker"]', (element) => {
      stopObserving();
      const stopObserving2 = observeDom(`[id^="sound-${sound}"]`, (element2) => {
        stopObserving2();
        element2.click();
        soundboardButton.click();
      });
    });
  }
  function registerKeybind(id, scancodes, sound) {
    if (!nativeModule)
      return;
    const combinations = scancodes.map((scancode) => [0, scancode, 1]);
    nativeModule.inputEventRegister(id, combinations, () => playSound(sound), {
      focused: true,
      blurred: true,
      keydown: true,
      keyup: false
    });
  }
  function unregisterKeybind2(id) {
    if (!nativeModule)
      return;
    nativeModule.inputEventUnregister(id);
  }

  // plugins/soundboardHotkeys/components/settings.jsx
  var import_web28 = __toESM(require_web(), 1);
  var import_web29 = __toESM(require_web(), 1);
  var import_web30 = __toESM(require_web(), 1);
  var import_web31 = __toESM(require_web(), 1);
  var import_web32 = __toESM(require_web(), 1);
  var import_web33 = __toESM(require_web(), 1);

  // plugins/soundboardHotkeys/components/style.scss
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
  background-color: var(--background-secondary);
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
  background: var(--background-tertiary);
  border: 1px solid var(--background-secondary);
  border-radius: 4px;
  justify-content: start;
  align-items: center;
  width: fit-content;
  padding: 8px 10px 8px 8px;
  display: flex;
}

._6PhcGW_keybindButton {
  background: var(--background-tertiary);
  border: 1px solid var(--background-secondary);
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
  background-color: var(--background-transparent);
  border: none;
  margin: 2px;
  padding: 0;
}

._6PhcGW_selected {
  background-color: var(--button-positive-background);
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
  var style_default = { "inline": "_6PhcGW_inline", "tallerModal": "_6PhcGW_tallerModal", "noMarginUnselectable": "_6PhcGW_noMarginUnselectable", "marginTop": "_6PhcGW_marginTop", "content": "_6PhcGW_content", "column": "_6PhcGW_column", "card": "_6PhcGW_card", "margin": "_6PhcGW_margin", "preview": "_6PhcGW_preview", "keybindButton": "_6PhcGW_keybindButton", "sound": "_6PhcGW_sound", "soundPicker": "_6PhcGW_soundPicker", "flexSpaceBetween": "_6PhcGW_flexSpaceBetween", "flexRow": "_6PhcGW_flexRow", "emoji": "_6PhcGW_emoji", "spaced": "_6PhcGW_spaced", "selected": "_6PhcGW_selected" };

  // plugins/soundboardHotkeys/components/addModal.jsx
  var import_web26 = __toESM(require_web(), 1);
  var import_web27 = __toESM(require_web(), 1);

  // plugins/soundboardHotkeys/components/keybinds.jsx
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var import_web3 = __toESM(require_web(), 1);
  var import_web4 = __toESM(require_web(), 1);
  var import_web5 = __toESM(require_web(), 1);
  var import_web6 = __toESM(require_web(), 1);
  var import_web7 = __toESM(require_web(), 1);
  var import_web8 = __toESM(require_web(), 1);
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<div><button></button></div>`, 4);
  var _tmpl$2 = /* @__PURE__ */ (0, import_web.template)(`<div></div>`, 2);
  var {
    ui: {
      Header,
      HeaderTags,
      focusring
    },
    solid: {
      createSignal,
      createEffect,
      onCleanup
    }
  } = shelter;
  var specialCodes = {
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
  function KeybindCapture({
    keybind,
    setValid,
    setKeybind,
    setScancodes
  }) {
    const [isCapturing, setIsCapturing] = createSignal(false);
    let element;
    const handleKeyDown = (e) => {
      e.preventDefault();
      if (e.repeat)
        return;
      const modifiers = [];
      const modifiersCode = [];
      if (e.ctrlKey) {
        if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
          modifiers.push("RIGHT CTRL");
          modifiersCode.push(specialCodes[DiscordNative.process.platform].RCTRL);
        } else {
          modifiers.push("CTRL");
          modifiersCode.push(specialCodes[DiscordNative.process.platform].CTRL);
        }
      }
      if (e.altKey) {
        modifiers.push("ALT");
        modifiersCode.push(specialCodes[DiscordNative.process.platform].ALT);
      }
      if (e.shiftKey) {
        if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
          modifiers.push("RIGHT SHIFT");
          modifiersCode.push(specialCodes[DiscordNative.process.platform].RSHIFT);
        } else {
          modifiers.push("SHIFT");
          modifiersCode.push(specialCodes[DiscordNative.process.platform].SHIFT);
        }
      }
      if (e.metaKey) {
        return;
      }
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
      if (isCapturing()) {
        element.addEventListener("keydown", handleKeyDown);
      } else {
        element.removeEventListener("keydown", handleKeyDown);
      }
      onCleanup(() => {
        element.removeEventListener("keydown", handleKeyDown);
      });
    });
    return (() => {
      const _el$ = _tmpl$.cloneNode(true), _el$2 = _el$.firstChild;
      const _ref$ = element;
      typeof _ref$ === "function" ? (0, import_web8.use)(_ref$, _el$) : element = _el$;
      (0, import_web5.insert)(_el$, (0, import_web6.createComponent)(Header, {
        get tag() {
          return HeaderTags.EYEBROW;
        },
        get children() {
          return isCapturing() ? "Click again to stop" : "Click to capture keybind";
        }
      }), _el$2);
      (0, import_web8.use)(focusring, _el$2, () => true);
      _el$2.addEventListener("keypress", (e) => e.key === "Enter" && setIsCapturing(!isCapturing()));
      _el$2.$$mousedown = () => setIsCapturing(!isCapturing());
      (0, import_web5.insert)(_el$2, (0, import_web6.createComponent)(Header, {
        get tag() {
          return HeaderTags.H2;
        },
        get ["class"]() {
          return style_default.noMarginUnselectable;
        },
        get children() {
          return keybind() || "None";
        }
      }));
      (0, import_web4.effect)(() => (0, import_web3.className)(_el$2, style_default.keybindButton));
      return _el$;
    })();
  }
  function KeybindDisplayOnly({
    keybind
  }) {
    return (() => {
      const _el$3 = _tmpl$2.cloneNode(true);
      (0, import_web5.insert)(_el$3, (0, import_web6.createComponent)(Header, {
        get tag() {
          return HeaderTags.H2;
        },
        get ["class"]() {
          return style_default.noMarginUnselectable;
        },
        children: keybind
      }));
      (0, import_web4.effect)(() => (0, import_web3.className)(_el$3, style_default.keybindButton));
      return _el$3;
    })();
  }
  (0, import_web2.delegateEvents)(["mousedown"]);

  // plugins/soundboardHotkeys/components/soundPicker.jsx
  var import_web18 = __toESM(require_web(), 1);
  var import_web19 = __toESM(require_web(), 1);
  var import_web20 = __toESM(require_web(), 1);
  var import_web21 = __toESM(require_web(), 1);
  var import_web22 = __toESM(require_web(), 1);
  var import_web23 = __toESM(require_web(), 1);
  var import_web24 = __toESM(require_web(), 1);
  var import_web25 = __toESM(require_web(), 1);

  // plugins/soundboardHotkeys/components/soundPreview.jsx
  var import_web9 = __toESM(require_web(), 1);
  var import_web10 = __toESM(require_web(), 1);
  var import_web11 = __toESM(require_web(), 1);
  var import_web12 = __toESM(require_web(), 1);
  var import_web13 = __toESM(require_web(), 1);
  var import_web14 = __toESM(require_web(), 1);
  var import_web15 = __toESM(require_web(), 1);
  var import_web16 = __toESM(require_web(), 1);
  var import_web17 = __toESM(require_web(), 1);
  var _tmpl$3 = /* @__PURE__ */ (0, import_web9.template)(`<div><audio></audio><button name="preview">\u{1F50A}</button></div>`, 6);
  var _tmpl$22 = /* @__PURE__ */ (0, import_web9.template)(`<div></div>`, 2);
  var _tmpl$32 = /* @__PURE__ */ (0, import_web9.template)(`<div><img alt=":3"></div>`, 3);
  var {
    ui: {
      Text,
      focusring: focusring2
    },
    flux: {
      stores: {
        SoundboardStore: SoundboardStore2,
        EmojiStore
      }
    }
  } = shelter;
  function Preview({
    soundId
  }) {
    const baseUrl = "https://cdn.discordapp.com/soundboard-sounds/";
    let audio;
    return (() => {
      const _el$ = _tmpl$3.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      const _ref$ = audio;
      typeof _ref$ === "function" ? (0, import_web16.use)(_ref$, _el$2) : audio = _el$2;
      (0, import_web17.setAttribute)(_el$2, "src", `${baseUrl}${soundId}`);
      _el$3.$$click = () => {
        audio.load();
        audio.play();
      };
      (0, import_web16.use)(focusring2, _el$3, () => true);
      (0, import_web15.effect)((_p$) => {
        const _v$ = style_default.inline, _v$2 = style_default.preview;
        _v$ !== _p$._v$ && (0, import_web14.className)(_el$, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0, import_web14.className)(_el$3, _p$._v$2 = _v$2);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0
      });
      return _el$;
    })();
  }
  function SoundWithEmoji({
    soundId,
    selected
  }) {
    const sound = SoundboardStore2.getSoundById(soundId);
    if (!sound) {
      return (0, import_web13.createComponent)(Text, {
        children: "\u274C Sound not found! Please make sure the sound still exists."
      });
    }
    if (!sound.emojiName && sound.emojiId) {
      const emoji = EmojiStore.getCustomEmojiById(sound.emojiId);
      if (!emoji) {
        return (() => {
          const _el$4 = _tmpl$22.cloneNode(true);
          (0, import_web12.insert)(_el$4, (0, import_web13.createComponent)(Preview, {
            soundId
          }), null);
          (0, import_web12.insert)(_el$4, (0, import_web13.createComponent)(Text, {
            get children() {
              return `${sound.emojiName || ""} ${sound.name}`.trim();
            }
          }), null);
          (0, import_web15.effect)((_$p) => (0, import_web11.classList)(_el$4, {
            [style_default.flexRow]: true,
            [style_default.selected]: selected?.()
          }, _$p));
          return _el$4;
        })();
      }
      const emojiUrl = `https://cdn.discordapp.com/emojis/${sound.emojiId}.${emoji.animated ? "gif" : "png"}?size=16&quality=lossless`;
      return (() => {
        const _el$5 = _tmpl$32.cloneNode(true), _el$6 = _el$5.firstChild;
        (0, import_web12.insert)(_el$5, (0, import_web13.createComponent)(Preview, {
          soundId
        }), _el$6);
        (0, import_web17.setAttribute)(_el$6, "src", emojiUrl);
        (0, import_web12.insert)(_el$5, (0, import_web13.createComponent)(Text, {
          get children() {
            return sound.name;
          }
        }), null);
        (0, import_web15.effect)((_p$) => {
          const _v$3 = {
            [style_default.flexRow]: true,
            [style_default.selected]: selected?.()
          }, _v$4 = style_default.emoji;
          _p$._v$3 = (0, import_web11.classList)(_el$5, _v$3, _p$._v$3);
          _v$4 !== _p$._v$4 && (0, import_web14.className)(_el$6, _p$._v$4 = _v$4);
          return _p$;
        }, {
          _v$3: void 0,
          _v$4: void 0
        });
        return _el$5;
      })();
    }
    return (() => {
      const _el$7 = _tmpl$22.cloneNode(true);
      (0, import_web12.insert)(_el$7, (0, import_web13.createComponent)(Preview, {
        soundId
      }), null);
      (0, import_web12.insert)(_el$7, (0, import_web13.createComponent)(Text, {
        get children() {
          return `${sound.emojiName || ""} ${sound.name}`.trim();
        }
      }), null);
      (0, import_web15.effect)((_$p) => (0, import_web11.classList)(_el$7, {
        [style_default.flexRow]: true,
        [style_default.selected]: selected?.()
      }, _$p));
      return _el$7;
    })();
  }
  (0, import_web10.delegateEvents)(["click"]);

  // plugins/soundboardHotkeys/components/soundPicker.jsx
  var _tmpl$4 = /* @__PURE__ */ (0, import_web18.template)(`<div><div></div></div>`, 4);
  var _tmpl$23 = /* @__PURE__ */ (0, import_web18.template)(`<button></button>`, 2);
  var {
    ui: {
      Header: Header2,
      HeaderTags: HeaderTags2,
      TextBox,
      Text: Text2,
      focusring: focusring3
    },
    flux: {
      stores: {
        SoundboardStore: SoundboardStore3
      }
    },
    solid: {
      For,
      createSignal: createSignal2
    }
  } = shelter;
  function search(sounds, query) {
    if (!query)
      return sounds;
    return sounds.filter((sound) => sound.name.toLowerCase().includes(query.toLowerCase()));
  }
  function SoundPicker(props) {
    const sounds = () => {
      return [...SoundboardStore3.getSounds()].map((x) => x[1]).flat().sort((a, b) => SoundboardStore3.isFavoriteSound(b.soundId) - SoundboardStore3.isFavoriteSound(a.soundId));
    };
    const [query, setQuery] = createSignal2("");
    const filteredSounds = () => search(sounds(), query());
    return (() => {
      const _el$ = _tmpl$4.cloneNode(true), _el$2 = _el$.firstChild;
      (0, import_web23.insert)(_el$, (0, import_web25.createComponent)(Header2, {
        get tag() {
          return HeaderTags2.EYEBROW;
        },
        get ["class"]() {
          return style_default.marginTop;
        },
        children: "Sound"
      }), _el$2);
      (0, import_web23.insert)(_el$, (0, import_web25.createComponent)(TextBox, {
        value: "",
        placeholder: "Search sounds...",
        onInput: (e) => setQuery(e)
      }), _el$2);
      (0, import_web23.insert)(_el$2, (0, import_web25.createComponent)(import_web24.Show, {
        get when() {
          return filteredSounds().length === 0;
        },
        get children() {
          return (0, import_web25.createComponent)(Text2, {
            get ["class"]() {
              return style_default.margin;
            },
            children: "\u274C No sounds found"
          });
        }
      }), null);
      (0, import_web23.insert)(_el$2, (0, import_web25.createComponent)(For, {
        get each() {
          return filteredSounds();
        },
        children: (sound) => (() => {
          const _el$3 = _tmpl$23.cloneNode(true);
          (0, import_web20.use)(focusring3, _el$3, () => true);
          _el$3.$$click = (e) => e.target.name !== "preview" && props.setSoundId(sound.soundId);
          _el$3.addEventListener("keypress", (e) => e.key === "Enter" && e.target.name !== "preview" && props.setSoundId(sound.soundId));
          (0, import_web23.insert)(_el$3, (0, import_web25.createComponent)(SoundWithEmoji, {
            get soundId() {
              return sound.soundId;
            },
            selected: () => sound.soundId === props.soundId()
          }));
          (0, import_web22.effect)(() => (0, import_web21.className)(_el$3, style_default.sound));
          return _el$3;
        })()
      }), null);
      (0, import_web22.effect)(() => (0, import_web21.className)(_el$2, style_default.soundPicker));
      return _el$;
    })();
  }
  (0, import_web19.delegateEvents)(["click"]);

  // plugins/soundboardHotkeys/components/addModal.jsx
  var {
    ui: {
      ModalRoot,
      ModalHeader,
      ModalBody,
      ModalConfirmFooter,
      ModalSizes
    },
    solid: {
      createSignal: createSignal3
    },
    plugin: {
      store
    }
  } = shelter;
  function AddKeybindModal(closeModal2, initialState) {
    const [keybindValid, setKeybindValid] = createSignal3(false);
    const [keybind, setKeybind] = createSignal3("");
    const [soundId, setSoundId] = createSignal3("");
    const [scancodes, setScancodes] = createSignal3([]);
    if (initialState) {
      setKeybind(initialState.text);
      setSoundId(initialState.sound);
      setScancodes(initialState.scancodes);
    }
    return (0, import_web27.createComponent)(ModalRoot, {
      get size() {
        return ModalSizes.MEDIUM;
      },
      get ["class"]() {
        return style_default.tallerModal;
      },
      get children() {
        return [(0, import_web27.createComponent)(ModalHeader, {
          close: closeModal2,
          children: "Adding keybind"
        }), (0, import_web27.createComponent)(ModalBody, {
          get children() {
            return [(0, import_web27.createComponent)(KeybindCapture, {
              keybind,
              setValid: setKeybindValid,
              setKeybind,
              setScancodes
            }), (0, import_web27.createComponent)(SoundPicker, {
              soundId,
              setSoundId
            })];
          }
        }), (0, import_web27.createComponent)(ModalConfirmFooter, {
          close: closeModal2,
          confirmText: "Save",
          get disabled() {
            return !keybindValid() || soundId() === "";
          },
          onConfirm: async () => {
            const nextId = initialState?.id || store.keybinds[store.keybinds.length - 1]?.id - 1 || -1;
            if (initialState?.id && store.keybinds.find((k) => k.id === initialState.id)) {
              store.keybinds = store.keybinds.map((k) => k.id === initialState.id ? {
                id: initialState.id,
                scancodes: scancodes(),
                text: keybind(),
                sound: soundId()
              } : k);
            } else {
              store.keybinds = [...store.keybinds, {
                id: nextId,
                scancodes: scancodes(),
                text: keybind(),
                sound: soundId()
              }];
            }
            registerKeybind(nextId, scancodes(), soundId());
          }
        })];
      }
    });
  }

  // plugins/soundboardHotkeys/components/settings.jsx
  var _tmpl$5 = /* @__PURE__ */ (0, import_web28.template)(`<div><div><div></div><div></div></div></div>`, 8);
  var _tmpl$24 = /* @__PURE__ */ (0, import_web28.template)(`<div></div>`, 2);
  var {
    ui: {
      Header: Header3,
      HeaderTags: HeaderTags3,
      Text: Text3,
      Divider,
      Button,
      openModal,
      ReactiveRoot,
      ButtonColors,
      ButtonSizes
    },
    solid: {
      For: For2,
      Show,
      createSignal: createSignal4
    },
    plugin: {
      store: store2
    }
  } = shelter;
  function KeybindCard({
    keybind
  }) {
    return (() => {
      const _el$ = _tmpl$5.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
      (0, import_web32.insert)(_el$3, (0, import_web33.createComponent)(Header3, {
        get tag() {
          return HeaderTags3.EYEBROW;
        },
        children: "Keybind"
      }), null);
      (0, import_web32.insert)(_el$3, (0, import_web33.createComponent)(KeybindDisplayOnly, {
        get keybind() {
          return keybind.text;
        }
      }), null);
      (0, import_web32.insert)(_el$3, (0, import_web33.createComponent)(Header3, {
        get tag() {
          return HeaderTags3.EYEBROW;
        },
        get ["class"]() {
          return style_default.marginTop;
        },
        children: "Sound"
      }), null);
      (0, import_web32.insert)(_el$3, (0, import_web33.createComponent)(SoundWithEmoji, {
        get soundId() {
          return keybind.sound;
        }
      }), null);
      (0, import_web32.insert)(_el$4, (0, import_web33.createComponent)(Button, {
        get size() {
          return ButtonSizes.MEDIUM;
        },
        onclick: () => openModal((p) => AddKeybindModal(p.close, keybind)),
        children: "Edit"
      }), null);
      (0, import_web32.insert)(_el$4, (0, import_web33.createComponent)(Button, {
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
          store2.keybinds = store2.keybinds.filter((k) => k.id !== keybind.id);
          unregisterKeybind(keybind.id);
          closeModal();
        },
        children: "Delete"
      }), null);
      (0, import_web31.effect)((_p$) => {
        const _v$ = style_default.card, _v$2 = style_default.content, _v$3 = style_default.fullWidth, _v$4 = style_default.column;
        _v$ !== _p$._v$ && (0, import_web30.className)(_el$, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0, import_web30.className)(_el$2, _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && (0, import_web30.className)(_el$3, _p$._v$3 = _v$3);
        _v$4 !== _p$._v$4 && (0, import_web30.className)(_el$4, _p$._v$4 = _v$4);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      });
      return _el$;
    })();
  }
  function Settings() {
    const [done, setDone] = createSignal4(false);
    loadSounds().then(() => setDone(true));
    return (0, import_web33.createComponent)(ReactiveRoot, {
      get children() {
        return [(0, import_web33.createComponent)(Header3, {
          get tag() {
            return HeaderTags3.H1;
          },
          children: "Soundboard Hotkeys"
        }), (0, import_web33.createComponent)(Text3, {
          get ["class"]() {
            return style_default.spaced;
          },
          children: "Customize your soundboard hotkeys."
        }), (0, import_web33.createComponent)(Divider, {}), (() => {
          const _el$5 = _tmpl$24.cloneNode(true);
          (0, import_web32.insert)(_el$5, (0, import_web33.createComponent)(Header3, {
            get tag() {
              return HeaderTags3.H3;
            },
            get children() {
              return done() ? "Keybinds" : "Loading sounds...";
            }
          }), null);
          (0, import_web32.insert)(_el$5, (0, import_web33.createComponent)(Button, {
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
          }), null);
          (0, import_web31.effect)(() => (0, import_web30.className)(_el$5, style_default.flexSpaceBetween));
          return _el$5;
        })(), (0, import_web33.createComponent)(Show, {
          get when() {
            return done();
          },
          get children() {
            const _el$6 = _tmpl$24.cloneNode(true);
            (0, import_web32.insert)(_el$6, (0, import_web33.createComponent)(For2, {
              get each() {
                return store2.keybinds;
              },
              children: (keybind) => (0, import_web33.createComponent)(KeybindCard, {
                keybind
              })
            }));
            return _el$6;
          }
        })];
      }
    });
  }

  // plugins/soundboardHotkeys/index.jsx
  var {
    ui: {
      showToast
    },
    settings: {
      registerSection
    }
  } = shelter.plugin.scoped;
  var {
    store: store3
  } = shelter.plugin;
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
    store3.keybinds ??= [];
    for (const keybind of store3.keybinds) {
      registerKeybind(keybind.id, keybind.scancodes, keybind.sound);
    }
  }
  function onUnload() {
    if (!window.DiscordNative)
      return;
    for (const keybind of store3.keybinds) {
      unregisterKeybind2(keybind.id);
    }
  }
  return __toCommonJS(soundboardHotkeys_exports);
})();
