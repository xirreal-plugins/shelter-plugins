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
    onUnload: () => onUnload,
    registerKeybind: () => registerKeybind,
    unregisterKeybind: () => unregisterKeybind
  });

  // plugins/soundboardHotkeys/components.jsx
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var import_web3 = __toESM(require_web(), 1);
  var import_web4 = __toESM(require_web(), 1);
  var import_web5 = __toESM(require_web(), 1);
  var import_web6 = __toESM(require_web(), 1);
  var import_web7 = __toESM(require_web(), 1);
  var import_web8 = __toESM(require_web(), 1);
  var import_web9 = __toESM(require_web(), 1);
  var import_web10 = __toESM(require_web(), 1);

  // plugins/soundboardHotkeys/style.scss
  shelter.plugin.scoped.ui.injectCss(`._spaced_6bdhr_1{margin-top:8px;margin-bottom:12px;display:block}._margin_6bdhr_1{margin-top:16px;margin-bottom:16px;display:block}._marginTop_6bdhr_1{margin-top:16px}._flexSpaceBetween_6bdhr_1{display:flex;justify-content:space-between;align-items:center}._card_6bdhr_1{box-sizing:border-box;border-radius:4px;padding:16px;width:100%;min-width:160px;display:flex;flex-direction:column;gap:16px;text-indent:0;background-color:var(--background-secondary);margin-top:16px}._content_6bdhr_1{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:16px;overflow:hidden}._preview_6bdhr_1{background:var(--brand-500);border:0px solid rgba(0,0,0,0);border-radius:4px;cursor:pointer;display:inline;margin-right:8px;transition:all .2s ease-in-out}._preview_6bdhr_1:hover{background:var(--brand-540)}._emoji_6bdhr_1{image-rendering:crisp-edges;margin-right:8px}._inline_6bdhr_1{display:inline}._flexRow_6bdhr_1{display:flex;justify-content:start;align-items:center;padding:4px 8px 4px 4px;background:var(--background-tertiary);border:1px solid var(--background-secondary);border-radius:4px}._keybindButton_6bdhr_1{display:flex;padding:8px;justify-content:start;align-items:center;background:var(--background-tertiary);border:1px solid var(--background-secondary);min-width:50%;border-radius:4px;cursor:pointer;transition:all .2s ease-in-out}._noMarginUnselectable_6bdhr_1{margin:0;user-select:none}._sound_6bdhr_1{cursor:pointer}._selected_6bdhr_1{background-color:var(--button-positive-background)}._center_6bdhr_1{display:flex;justify-content:center;align-items:center}`);
  var style_default = {
    "spaced": "_spaced_6bdhr_1",
    "margin": "_margin_6bdhr_1",
    "marginTop": "_marginTop_6bdhr_1",
    "flexSpaceBetween": "_flexSpaceBetween_6bdhr_1",
    "card": "_card_6bdhr_1",
    "content": "_content_6bdhr_1",
    "preview": "_preview_6bdhr_1",
    "emoji": "_emoji_6bdhr_1",
    "inline": "_inline_6bdhr_1",
    "flexRow": "_flexRow_6bdhr_1",
    "keybindButton": "_keybindButton_6bdhr_1",
    "noMarginUnselectable": "_noMarginUnselectable_6bdhr_1",
    "sound": "_sound_6bdhr_1",
    "selected": "_selected_6bdhr_1",
    "center": "_center_6bdhr_1"
  };

  // plugins/soundboardHotkeys/components.jsx
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<div><button></button></div>`, 4);
  var _tmpl$2 = /* @__PURE__ */ (0, import_web.template)(`<div><div></div></div>`, 4);
  var _tmpl$3 = /* @__PURE__ */ (0, import_web.template)(`<div></div>`, 2);
  var _tmpl$4 = /* @__PURE__ */ (0, import_web.template)(`<div><audio></audio><button>\u{1F50A}</button></div>`, 6);
  var _tmpl$5 = /* @__PURE__ */ (0, import_web.template)(`<div><img></div>`, 3);
  var _tmpl$6 = /* @__PURE__ */ (0, import_web.template)(`<div><div><div></div></div></div>`, 6);
  var {
    ui: {
      Header,
      HeaderTags,
      Text,
      Divider,
      Button,
      ButtonSizes,
      ModalRoot,
      ModalHeader,
      ModalBody,
      ModalConfirmFooter,
      ModalSizes,
      openModal,
      ButtonColors,
      ReactiveRoot,
      showToast
    },
    flux: {
      dispatcher,
      stores: {
        SoundboardStore,
        EmojiStore,
        GuildStore
      }
    },
    solid: {
      createSignal,
      createEffect,
      onCleanup,
      For,
      Show
    },
    plugin: {
      store
    }
  } = shelter;
  function loadSounds() {
    dispatcher.dispatch({
      type: "REQUEST_SOUNDBOARD_SOUNDS",
      guildIds: GuildStore.getGuildIds()
    });
  }
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
        modifiers.push("CTRL");
        modifiersCode.push(17);
      }
      if (e.altKey) {
        modifiers.push("ALT");
        modifiersCode.push(18);
      }
      if (e.shiftKey) {
        modifiers.push("SHIFT");
        modifiersCode.push(16);
      }
      if (e.metaKey) {
        modifiers.push("META");
        modifiersCode.push(91);
      }
      setValid(false);
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
      typeof _ref$ === "function" ? (0, import_web10.use)(_ref$, _el$) : element = _el$;
      (0, import_web7.insert)(_el$, (0, import_web8.createComponent)(Header, {
        get tag() {
          return HeaderTags.EYEBROW;
        },
        get children() {
          return isCapturing() ? "Click again to stop" : "Click to capture keybind";
        }
      }), _el$2);
      _el$2.$$mousedown = () => setIsCapturing(!isCapturing());
      (0, import_web7.insert)(_el$2, (0, import_web8.createComponent)(Header, {
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
      (0, import_web6.effect)(() => (0, import_web5.className)(_el$2, style_default.keybindButton));
      return _el$;
    })();
  }
  function SoundPicker(props) {
    const sounds = () => {
      return [...SoundboardStore.getFavorites()];
    };
    return (() => {
      const _el$3 = _tmpl$2.cloneNode(true), _el$4 = _el$3.firstChild;
      (0, import_web7.insert)(_el$3, (0, import_web8.createComponent)(Header, {
        get tag() {
          return HeaderTags.EYEBROW;
        },
        get ["class"]() {
          return style_default.marginTop;
        },
        children: "Sound"
      }), _el$4);
      (0, import_web7.insert)(_el$4, (0, import_web8.createComponent)(For, {
        get each() {
          return sounds();
        },
        children: (soundId) => (() => {
          const _el$5 = _tmpl$3.cloneNode(true);
          _el$5.$$click = () => props.setSoundId(soundId);
          (0, import_web7.insert)(_el$5, (0, import_web8.createComponent)(SoundWithEmoji, {
            soundId,
            selected: () => soundId == props.soundId()
          }));
          (0, import_web6.effect)(() => (0, import_web5.className)(_el$5, style_default.sound));
          return _el$5;
        })()
      }));
      (0, import_web7.insert)(_el$3, (0, import_web8.createComponent)(Text, {
        get ["class"]() {
          return style_default.margin;
        },
        children: "Can't find the sound you want? Add it to favorites."
      }), null);
      (0, import_web6.effect)(() => (0, import_web5.className)(_el$4, style_default.soundPicker));
      return _el$3;
    })();
  }
  function AddKeybindModal(closeModal, initialState) {
    const [keybindValid, setKeybindValid] = createSignal(false);
    const [keybind, setKeybind] = createSignal("");
    const [soundId, setSoundId] = createSignal("");
    const [scancodes, setScancodes] = createSignal([]);
    if (initialState) {
      setKeybind(initialState.text);
      setSoundId(initialState.sound);
      setScancodes(initialState.scancodes);
    }
    return (0, import_web8.createComponent)(ModalRoot, {
      get size() {
        return ModalSizes.SMALL;
      },
      get children() {
        return [(0, import_web8.createComponent)(ModalHeader, {
          close: closeModal,
          children: "Adding keybind"
        }), (0, import_web8.createComponent)(ModalBody, {
          get children() {
            return [(0, import_web8.createComponent)(KeybindCapture, {
              keybind,
              setValid: setKeybindValid,
              setKeybind,
              setScancodes
            }), (0, import_web8.createComponent)(SoundPicker, {
              soundId,
              setSoundId
            }), (0, import_web8.createComponent)(Show, {
              get when() {
                return !!initialState?.id;
              },
              get children() {
                const _el$6 = _tmpl$3.cloneNode(true);
                (0, import_web7.insert)(_el$6, (0, import_web8.createComponent)(Button, {
                  get ["class"]() {
                    return style_default.margin;
                  },
                  get size() {
                    return ButtonSizes.LARGE;
                  },
                  get color() {
                    return ButtonColors.RED;
                  },
                  onClick: () => {
                    store.keybinds = store.keybinds.filter((k) => k.id !== initialState.id);
                    unregisterKeybind(initialState.id);
                    closeModal();
                  },
                  children: "Remove keybind"
                }));
                (0, import_web6.effect)(() => (0, import_web5.className)(_el$6, style_default.center));
                return _el$6;
              }
            })];
          }
        }), (0, import_web8.createComponent)(ModalConfirmFooter, {
          close: closeModal,
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
  function Preview({
    soundId
  }) {
    const baseUrl = "https://cdn.discordapp.com/soundboard-sounds/";
    let audio;
    return (() => {
      const _el$7 = _tmpl$4.cloneNode(true), _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling;
      const _ref$2 = audio;
      typeof _ref$2 === "function" ? (0, import_web10.use)(_ref$2, _el$8) : audio = _el$8;
      (0, import_web4.setAttribute)(_el$8, "src", `${baseUrl}${soundId}`);
      _el$9.$$click = () => {
        audio.load();
        audio.play();
      };
      (0, import_web6.effect)((_p$) => {
        const _v$ = style_default.inline, _v$2 = style_default.preview;
        _v$ !== _p$._v$ && (0, import_web5.className)(_el$7, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0, import_web5.className)(_el$9, _p$._v$2 = _v$2);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0
      });
      return _el$7;
    })();
  }
  function SoundWithEmoji({
    soundId,
    selected
  }) {
    const sound = SoundboardStore.getSoundById(soundId);
    if (!sound) {
      return (0, import_web8.createComponent)(Text, {
        children: "\u274C Sound not found! Please make sure the sound still exists."
      });
    }
    if (!sound.emojiName && sound.emojiId) {
      const emoji = EmojiStore.getCustomEmojiById(sound.emojiId);
      const emojiUrl = `https://cdn.discordapp.com/emojis/${sound.emojiId}.${emoji.animated ? "gif" : "png"}?size=16&quality=lossless`;
      return (() => {
        const _el$10 = _tmpl$5.cloneNode(true), _el$11 = _el$10.firstChild;
        (0, import_web7.insert)(_el$10, (0, import_web8.createComponent)(Preview, {
          soundId
        }), _el$11);
        (0, import_web4.setAttribute)(_el$11, "src", emojiUrl);
        (0, import_web7.insert)(_el$10, (0, import_web8.createComponent)(Text, {
          get children() {
            return sound.name;
          }
        }), null);
        (0, import_web6.effect)((_p$) => {
          const _v$3 = {
            [style_default.flexRow]: true,
            [style_default.selected]: selected?.()
          }, _v$4 = style_default.emoji;
          _p$._v$3 = (0, import_web3.classList)(_el$10, _v$3, _p$._v$3);
          _v$4 !== _p$._v$4 && (0, import_web5.className)(_el$11, _p$._v$4 = _v$4);
          return _p$;
        }, {
          _v$3: void 0,
          _v$4: void 0
        });
        return _el$10;
      })();
    }
    return (() => {
      const _el$12 = _tmpl$3.cloneNode(true);
      (0, import_web7.insert)(_el$12, (0, import_web8.createComponent)(Preview, {
        soundId
      }), null);
      (0, import_web7.insert)(_el$12, (0, import_web8.createComponent)(Text, {
        get children() {
          return `${sound.emojiName || ""} ${sound.name}`.trim();
        }
      }), null);
      (0, import_web6.effect)((_$p) => (0, import_web3.classList)(_el$12, {
        [style_default.flexRow]: true,
        [style_default.selected]: selected?.()
      }, _$p));
      return _el$12;
    })();
  }
  function Keybind({
    keybind
  }) {
    return (() => {
      const _el$13 = _tmpl$6.cloneNode(true), _el$14 = _el$13.firstChild, _el$15 = _el$14.firstChild;
      (0, import_web7.insert)(_el$15, (0, import_web8.createComponent)(Header, {
        get tag() {
          return HeaderTags.EYEBROW;
        },
        children: "Keybind"
      }), null);
      (0, import_web7.insert)(_el$15, (0, import_web8.createComponent)(Text, {
        get children() {
          return keybind.text;
        }
      }), null);
      (0, import_web7.insert)(_el$15, (0, import_web8.createComponent)(Header, {
        get tag() {
          return HeaderTags.EYEBROW;
        },
        get ["class"]() {
          return style_default.marginTop;
        },
        children: "Sound"
      }), null);
      (0, import_web7.insert)(_el$15, (0, import_web8.createComponent)(SoundWithEmoji, {
        get soundId() {
          return keybind.sound;
        }
      }), null);
      (0, import_web7.insert)(_el$14, (0, import_web8.createComponent)(Button, {
        onclick: () => openModal((p) => AddKeybindModal(p.close, keybind)),
        children: "Edit"
      }), null);
      (0, import_web6.effect)((_p$) => {
        const _v$5 = style_default.card, _v$6 = style_default.content;
        _v$5 !== _p$._v$5 && (0, import_web5.className)(_el$13, _p$._v$5 = _v$5);
        _v$6 !== _p$._v$6 && (0, import_web5.className)(_el$14, _p$._v$6 = _v$6);
        return _p$;
      }, {
        _v$5: void 0,
        _v$6: void 0
      });
      return _el$13;
    })();
  }
  function Settings() {
    if (!SoundboardStore.hasFetchedAllSounds()) {
      loadSounds();
    }
    return (0, import_web8.createComponent)(ReactiveRoot, {
      get children() {
        return [(0, import_web8.createComponent)(Header, {
          get tag() {
            return HeaderTags.H1;
          },
          children: "Soundboard Hotkeys"
        }), (0, import_web8.createComponent)(Text, {
          get ["class"]() {
            return style_default.spaced;
          },
          children: "Customize your soundboard hotkeys."
        }), (0, import_web8.createComponent)(Divider, {}), (() => {
          const _el$16 = _tmpl$3.cloneNode(true);
          (0, import_web7.insert)(_el$16, (0, import_web8.createComponent)(Header, {
            get tag() {
              return HeaderTags.H3;
            },
            children: "Keybinds"
          }), null);
          (0, import_web7.insert)(_el$16, (0, import_web8.createComponent)(Button, {
            get ["class"]() {
              return style_default.margin;
            },
            get size() {
              return ButtonSizes.LARGE;
            },
            onclick: () => {
              openModal((p) => AddKeybindModal(p.close));
            },
            children: "Add keybind"
          }), null);
          (0, import_web6.effect)(() => (0, import_web5.className)(_el$16, style_default.flexSpaceBetween));
          return _el$16;
        })(), (() => {
          const _el$17 = _tmpl$3.cloneNode(true);
          (0, import_web7.insert)(_el$17, (0, import_web8.createComponent)(For, {
            get each() {
              return store.keybinds;
            },
            children: (keybind) => (0, import_web8.createComponent)(Keybind, {
              keybind
            })
          }));
          return _el$17;
        })()];
      }
    });
  }
  (0, import_web2.delegateEvents)(["mousedown", "click"]);

  // plugins/soundboardHotkeys/index.jsx
  var {
    observeDom,
    ui: {
      showToast: showToast2
    },
    settings: {
      registerSection
    }
  } = shelter.plugin.scoped;
  var {
    store: store2
  } = shelter.plugin;
  function playSound(sound) {
    const soundboardButton = document.querySelector('[class^="actionButtons"] > :last-child > :first-child');
    const soundboardPanel = document.querySelector('[class^="picker"]');
    if (soundboardPanel) {
      soundboardPanel.querySelector(`[id^="sound-${sound}"]`).click();
      return;
    } else {
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
  }
  function registerKeybind(id, scancodes, sound) {
    const combinations = scancodes.map((scancode) => [0, scancode, 1]);
    nativeModule.inputEventRegister(id, combinations, () => playSound(sound), {
      focused: true,
      blurred: true,
      keydown: true,
      keyup: false
    });
  }
  function unregisterKeybind(id) {
    nativeModule.inputEventUnregister(id);
  }
  var nativeModule = null;
  function onLoad() {
    if (!window.DiscordNative) {
      showToast2({
        title: "Soundboard Hotkeys",
        content: "This plugin only works on the desktop client."
      });
      return;
    }
    if (!nativeModule) {
      nativeModule = window.DiscordNative.nativeModules.requireModule("discord_utils");
    }
    registerSection("divider");
    registerSection("section", "sbhk", "Soundboard Hotkeys", Settings);
    store2.keybinds ??= [];
    store2.keybinds.forEach(({
      id,
      scancodes,
      sound
    }) => {
      registerKeybind(id, scancodes, sound);
    });
  }
  function onUnload() {
  }
  return __toCommonJS(soundboardHotkeys_exports);
})();
