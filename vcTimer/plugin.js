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

  // plugins/vcTimer/index.jsx
  var vcTimer_exports = {};
  __export(vcTimer_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var import_web3 = __toESM(require_web(), 1);
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<div id="vcTimer" style="font-weight: bold"><br></div>`, 3);
  var {
    flux: {
      dispatcher
    },
    solid: {
      createSignal,
      onCleanup
    }
  } = shelter;
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
    return (() => {
      const _el$ = _tmpl$.cloneNode(true), _el$2 = _el$.firstChild;
      (0, import_web3.insert)(_el$, () => format(elapsed()), _el$2);
      return _el$;
    })();
  }
  function onVoiceJoin(e) {
    if (e.state !== "RTC_CONNECTED")
      return;
    if (document.getElementById("vcTimer"))
      return;
    document.querySelector('[class^="rtcConnectionStatus_"] + a > div').prepend((0, import_web2.createComponent)(Timer, {}));
  }
  function onLoad() {
    dispatcher.subscribe("RTC_CONNECTION_STATE", onVoiceJoin);
  }
  function onUnload() {
    dispatcher.unsubscribe("RTC_CONNECTION_STATE", onVoiceJoin);
    document.getElementById("vcTimer")?.remove();
  }
  return __toCommonJS(vcTimer_exports);
})();
