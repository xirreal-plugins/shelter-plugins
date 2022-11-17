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

  // plugins/acrylicSettings/index.js
  var acrylicSettings_exports = {};
  __export(acrylicSettings_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload,
    openEditor: () => openEditor,
    setAcrylicType: () => setAcrylicType,
    settings: () => settings_default,
    syncSettings: () => syncSettings,
    toggleAcrylic: () => toggleAcrylic,
    toggleCSS: () => toggleCSS
  });

  // plugins/acrylicSettings/settings.jsx.scss
  var css = `._row_duff3_1{display:flex;flex-direction:column;margin-bottom:20px}._rowItem_duff3_1{display:flex;width:100%;align-items:center}._label_duff3_1{color:var(--header-primary);line-height:24px;font-weight:500;flex:1}._alignRightFlex_duff3_1{flex:0 0 auto}`;
  var classes = {
    "row": "_row_duff3_1",
    "rowItem": "_rowItem_duff3_1",
    "label": "_label_duff3_1",
    "alignRightFlex": "_alignRightFlex_duff3_1"
  };

  // plugins/acrylicSettings/settings.jsx
  var import_web = __toESM(require_web());
  var import_web2 = __toESM(require_web());
  var import_web3 = __toESM(require_web());
  var import_web4 = __toESM(require_web());
  var import_web5 = __toESM(require_web());
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<div><div><label>Open CSS Editor</label></div></div>`, 6);
  var _tmpl$2 = /* @__PURE__ */ (0, import_web.template)(`<div><div><label>Blur type</label></div></div>`, 6);
  var {
    plugin: {
      store
    },
    ui: {
      SwitchItem,
      Button,
      ButtonSizes,
      Space
    }
  } = shelter;
  var types = ["Mica (Windows 11)", "Acrylic", "Blur "];
  var settings_default = () => (syncSettings(), [(0, import_web5.createComponent)(SwitchItem, {
    hideBorder: true,
    get value() {
      return store.acrylic;
    },
    onChange: (v) => toggleAcrylic(v),
    children: "Acrylic effect"
  }), (0, import_web5.createComponent)(SwitchItem, {
    hideBorder: true,
    get value() {
      return store.css;
    },
    onChange: (v) => toggleCSS(v),
    children: "Theme injector"
  }), (() => {
    const _el$ = _tmpl$.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
    (0, import_web4.insert)(_el$2, (0, import_web5.createComponent)(Button, {
      get classes() {
        return `${classes.alignRightFlex}`;
      },
      get size() {
        return ButtonSizes.MEDIUM;
      },
      onClick: openEditor,
      children: "Open"
    }), null);
    (0, import_web3.effect)((_p$) => {
      const _v$ = `${classes.row}`, _v$2 = `${classes.rowItem}`, _v$3 = `${classes.label}`;
      _v$ !== _p$._v$ && (0, import_web2.className)(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && (0, import_web2.className)(_el$2, _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && (0, import_web2.className)(_el$3, _p$._v$3 = _v$3);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    });
    return _el$;
  })(), (0, import_web5.createComponent)(Space, {}), (() => {
    const _el$4 = _tmpl$2.cloneNode(true), _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild;
    (0, import_web4.insert)(_el$5, (0, import_web5.createComponent)(Button, {
      get classes() {
        return `${classes.alignRightFlex}`;
      },
      get size() {
        return ButtonSizes.MEDIUM;
      },
      grow: true,
      onClick: () => {
        setAcrylicType((store.type + 1) % 3);
      },
      get children() {
        return types[store.type];
      }
    }), null);
    (0, import_web3.effect)((_p$) => {
      const _v$4 = `${classes.row}`, _v$5 = `${classes.rowItem}`, _v$6 = `${classes.label}`;
      _v$4 !== _p$._v$4 && (0, import_web2.className)(_el$4, _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && (0, import_web2.className)(_el$5, _p$._v$5 = _v$5);
      _v$6 !== _p$._v$6 && (0, import_web2.className)(_el$6, _p$._v$6 = _v$6);
      return _p$;
    }, {
      _v$4: void 0,
      _v$5: void 0,
      _v$6: void 0
    });
    return _el$4;
  })()]);

  // plugins/acrylicSettings/index.js
  var {
    plugin: { store: store2 },
    ui: { injectCss }
  } = shelter;
  function toggleAcrylic(newValue) {
    store2.acrylic = newValue;
    newValue ? window.acrylic.enable() : window.acrylic.disable();
  }
  function toggleCSS(newValue) {
    store2.css = newValue;
    newValue ? window.acrylic.css.enable() : window.acrylic.css.disable();
  }
  function setAcrylicType(newValue) {
    store2.type = newValue;
    window.acrylic.setType(newValue);
  }
  function openEditor() {
    store2.css = true;
    window.acrylic.css.openEditor();
  }
  function syncSettings() {
    const acrylicSettings = window.acrylic.internal.getSettings();
    store2.acrylic = acrylicSettings.acrylic;
    store2.css = acrylicSettings.css;
    store2.type = acrylicSettings.type;
  }
  var injectedCss = null;
  function onLoad() {
    if (!injectedCss) {
      injectedCss = injectCss(css);
    }
    syncSettings();
  }
  function onUnload() {
    injectedCss?.();
  }
  return __toCommonJS(acrylicSettings_exports);
})();
