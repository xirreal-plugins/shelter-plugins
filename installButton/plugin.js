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

  // plugins/installButton/index.jsx
  var installButton_exports = {};
  __export(installButton_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });
  var import_web4 = __toESM(require_web(), 1);
  var import_web5 = __toESM(require_web(), 1);
  var import_web6 = __toESM(require_web(), 1);
  var import_web7 = __toESM(require_web(), 1);
  var import_web8 = __toESM(require_web(), 1);
  var import_web9 = __toESM(require_web(), 1);
  var import_web10 = __toESM(require_web(), 1);

  // plugins/installButton/index.jsx.scss
  shelter.plugin.scoped.ui.injectCss(`.eeurUa_card {
  box-sizing: border-box;
  text-indent: 0;
  background-color: var(--background-secondary);
  border-radius: 4px;
  flex-direction: column;
  gap: 16px;
  min-width: 160px;
  max-width: 432px;
  padding: 16px;
  display: flex;
}

.eeurUa_header {
  text-transform: uppercase;
  font-family: var(--text-normal);
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  display: flex;
}

.eeurUa_author {
  font-weight: 700;
}

.eeurUa_icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  display: block;
}

.eeurUa_copied {
  color: var(--text-positive);
}

.eeurUa_copyLink:hover {
  color: #fff;
}

.eeurUa_copyLink:before {
  content: "";
  pointer-events: none;
  background-color: var(--primary-560);
  width: 1px;
  height: 12px;
  margin-right: 8px;
  display: block;
  position: absolute;
  top: 2px;
  left: -8px;
}

.eeurUa_copyLink {
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  padding-right: 8px;
  font-weight: 600;
  display: flex;
  position: relative;
}

.eeurUa_content {
  flex-direction: row;
  align-items: center;
  gap: 16px;
  display: flex;
  overflow: hidden;
}

.eeurUa_title {
  white-space: wrap;
  text-overflow: ellipsis;
  font-family: var(--font-primary);
  color: var(--text-normal);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
}

.eeurUa_alignRight {
  margin-left: auto;
  margin-right: 12px;
}

.eeurUa_description {
  white-space: wrap;
  text-overflow: ellipsis;
  color: var(--text-primary);
  margin-top: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}
`);
  var index_jsx_default = { "content": "eeurUa_content", "alignRight": "eeurUa_alignRight", "header": "eeurUa_header", "copyLink": "eeurUa_copyLink", "title": "eeurUa_title", "card": "eeurUa_card", "icon": "eeurUa_icon", "copied": "eeurUa_copied", "author": "eeurUa_author", "description": "eeurUa_description" };

  // plugins/installButton/icons.jsx
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var import_web3 = __toESM(require_web(), 1);
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><title>Copy</title><path fill="currentColor" d="M16.3 14.7a1 1 0 0 1 0-1.4l2.5-2.5a3.95 3.95 0 1 0-5.6-5.6l-2.5 2.5a1 1 0 1 1-1.4-1.4l2.5-2.5a5.95 5.95 0 1 1 8.4 8.4l-2.5 2.5a1 1 0 0 1-1.4 0ZM7.7 9.3a1 1 0 0 1 0 1.4l-2.5 2.5a3.95 3.95 0 0 0 5.6 5.6l2.5-2.5a1 1 0 1 1 1.4 1.4l-2.5 2.5a5.95 5.95 0 0 1-8.4-8.4l2.5-2.5a1 1 0 0 1 1.4 0Z"></path><path fill="currentColor" d="M14.7 10.7a1 1 0 1 0-1.4-1.4l-4 4a1 1 0 0 0 1.4 1.4l4-4Z"></path></svg>`, 8);
  var _tmpl$2 = /* @__PURE__ */ (0, import_web.template)(`<svg width="57" height="40" viewBox="0 0 57 40" fill="none" style="display: block; flex: 0 0 auto;"><title>Content</title><path d="M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z" style="fill: var(--primary-500);"></path><path d="M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z" style="fill: var(--primary-400);"></path><path d="M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z" style="fill: var(--primary-560);"></path><path d="M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z" style="fill: var(--primary-400);"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z" style="fill: var(--primary-200);"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z" style="fill: var(--primary-200);"></path></svg>`, 16);
  function CopyIcon(props) {
    return (() => {
      const _el$ = _tmpl$.cloneNode(true);
      (0, import_web3.effect)(() => (0, import_web2.setAttribute)(_el$, "class", props.class));
      return _el$;
    })();
  }
  function ContentIcon() {
    return _tmpl$2.cloneNode(true);
  }

  // plugins/installButton/index.jsx
  var _tmpl$3 = /* @__PURE__ */ (0, import_web4.template)(`<div><div><div></div><div><div></div></div></div><div><div><div></div><div></div></div></div></div>`, 18);
  var _tmpl$22 = /* @__PURE__ */ (0, import_web4.template)(`<p>Are you sure you want to install <strong></strong> by <strong></strong>?</p>`, 6);
  var _tmpl$32 = /* @__PURE__ */ (0, import_web4.template)(`<p><i></i></p>`, 4);
  var {
    observeDom
  } = shelter.plugin.scoped;
  var {
    flux: {
      dispatcher,
      stores: {
        SelectedChannelStore
      }
    },
    plugins,
    ui: {
      showToast,
      Button,
      ButtonColors,
      ButtonSizes,
      openModal,
      ModalRoot,
      ModalHeader,
      ModalBody,
      ModalConfirmFooter
    },
    solid: {
      createSignal
    }
  } = shelter;
  var trustedUrls = [];
  function copyToClipboard(text) {
    if (window.DiscordNative) {
      DiscordNative.clipboard.copy(text);
      return;
    }
    navigator.clipboard.writeText(text).catch(() => {
      const copyArea = document.createElement("textarea");
      copyArea.style.visibility = "hidden";
      copyArea.style.position = "fixed";
      copyArea.style.top = "0";
      copyArea.style.left = "0";
      document.body.appendChild(copyArea);
      copyArea.focus();
      copyArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error(err);
      }
      document.body.removeChild(copyArea);
    });
  }
  function Card(props) {
    const pluginId = props.url.replace("https://", "").replace("http://", "");
    const isInstalled = () => {
      return pluginId in plugins.installedPlugins();
    };
    const [copied, update] = createSignal(0);
    let timer = null;
    const doCopy = () => {
      if (copied()) {
        clearTimeout(timer);
      }
      copyToClipboard(props.url);
      update(true);
      timer = setTimeout(() => {
        update(false);
      }, 2e3);
    };
    const copyText = () => {
      return copied() ? "Link copied!" : "Copy link";
    };
    const copiedClass = () => {
      return copied() ? index_jsx_default.copied : "";
    };
    return (() => {
      const _el$ = _tmpl$3.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$2.nextSibling, _el$7 = _el$6.firstChild, _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling;
      (0, import_web10.insert)(_el$3, () => props.json.author);
      _el$4.$$mousedown = doCopy;
      (0, import_web10.insert)(_el$4, (0, import_web9.createComponent)(CopyIcon, {
        get ["class"]() {
          return index_jsx_default.icon;
        }
      }), _el$5);
      (0, import_web10.insert)(_el$5, copyText);
      (0, import_web10.insert)(_el$6, (0, import_web9.createComponent)(ContentIcon, {}), _el$7);
      (0, import_web10.insert)(_el$8, () => props.json.name);
      (0, import_web10.insert)(_el$9, () => props.json.description);
      (0, import_web10.insert)(_el$6, (0, import_web9.createComponent)(Button, {
        get color() {
          return isInstalled() ? ButtonColors.SECONDARY : ButtonColors.GREEN;
        },
        get disabled() {
          return isInstalled();
        },
        get ["class"]() {
          return index_jsx_default.alignRight;
        },
        get size() {
          return ButtonSizes.MEDIUM;
        },
        onClick: async () => {
          if (!isInstalled()) {
            await plugins.addRemotePlugin(pluginId, props.url);
            plugins.startPlugin(pluginId);
            showToast({
              title: props.json.name,
              content: "has been installed."
            });
          }
        },
        get children() {
          return isInstalled() ? "Installed" : "Install";
        }
      }), null);
      (0, import_web7.effect)((_p$) => {
        const _v$ = index_jsx_default.card, _v$2 = index_jsx_default.header, _v$3 = index_jsx_default.author, _v$4 = `${index_jsx_default.copyLink} ${copiedClass()}`, _v$5 = index_jsx_default.content, _v$6 = index_jsx_default.title, _v$7 = index_jsx_default.description;
        _v$ !== _p$._v$ && (0, import_web6.className)(_el$, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0, import_web6.className)(_el$2, _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && (0, import_web6.className)(_el$3, _p$._v$3 = _v$3);
        _v$4 !== _p$._v$4 && (0, import_web6.className)(_el$4, _p$._v$4 = _v$4);
        _v$5 !== _p$._v$5 && (0, import_web6.className)(_el$6, _p$._v$5 = _v$5);
        _v$6 !== _p$._v$6 && (0, import_web6.className)(_el$8, _p$._v$6 = _v$6);
        _v$7 !== _p$._v$7 && (0, import_web6.className)(_el$9, _p$._v$7 = _v$7);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0,
        _v$5: void 0,
        _v$6: void 0,
        _v$7: void 0
      });
      return _el$;
    })();
  }
  function handleDispatch(payload) {
    if ((payload.type === "MESSAGE_CREATE" || payload.type === "MESSAGE_UPDATE") && payload.message.channel_id !== SelectedChannelStore.getChannelId())
      return;
    const unobs = observeDom("[class*=messageContent_] [class^=anchor_]:not([data-instbtn])", async (element) => {
      element.dataset.instbtn = 1;
      unobs();
      if (element.textContent !== element.href) {
        return;
      }
      let url = element.href.endsWith("/") ? element.href : `${element.href}/`;
      if (url.endsWith("plugin.json/")) {
        url = url.slice(0, -12);
      }
      if (!trustedUrls.some((trustedUrl) => url.startsWith(trustedUrl))) {
        return;
      }
      element.onclick = (e) => {
        e.preventDefault();
      };
      try {
        const response = await fetch(`${url}plugin.json`);
        if (!response.ok)
          return;
        const json = await response.json();
        const card = (0, import_web9.createComponent)(Card, {
          get json() {
            return {
              name: json.name,
              description: json.description,
              author: json.author
            };
          },
          url
        });
        element.className = "";
        element.style.all = "unset";
        element.style.display = "contents";
        element.replaceChildren(card);
      } catch (e) {
        console.error(e);
      }
    });
    setTimeout(unobs, 200);
  }
  function InstallationModal(props) {
    const {
      closeModal,
      json,
      url,
      pluginId
    } = props;
    return (0, import_web9.createComponent)(ModalRoot, {
      get children() {
        return [(0, import_web9.createComponent)(ModalHeader, {
          children: "Install Plugin"
        }), (0, import_web9.createComponent)(ModalBody, {
          get children() {
            return [(() => {
              const _el$10 = _tmpl$22.cloneNode(true), _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling;
              (0, import_web10.insert)(_el$12, () => json.name);
              (0, import_web10.insert)(_el$14, () => json.author);
              return _el$10;
            })(), (() => {
              const _el$15 = _tmpl$32.cloneNode(true), _el$16 = _el$15.firstChild;
              (0, import_web10.insert)(_el$16, () => json.description);
              return _el$15;
            })()];
          }
        }), (0, import_web9.createComponent)(ModalConfirmFooter, {
          close: closeModal,
          type: "danger",
          confirmText: "Install",
          onConfirm: async () => {
            await plugins.addRemotePlugin(pluginId, url);
            plugins.startPlugin(pluginId);
            showToast({
              title: json.name,
              content: "has been installed."
            });
          }
        })];
      }
    });
  }
  async function handleInstall(_, originalUrl) {
    if (window.InstallButtonEnabled === false)
      return;
    DiscordNative.window.focus();
    let url = originalUrl.substring(1);
    url = url.endsWith("/") ? url : `${url}/`;
    if (!trustedUrls.find((trustedUrl) => url.startsWith(trustedUrl))) {
      showToast({
        title: "Plugin Installation",
        content: "This plugin is not trusted."
      });
      return;
    }
    const response = await fetch(`${url}plugin.json`);
    if (!response.ok)
      return;
    const json = await response.json();
    const pluginId = url.replace("https://", "").replace("http://", "");
    if (pluginId in plugins.installedPlugins()) {
      showToast({
        title: json.name,
        content: "is already installed."
      });
      return;
    }
    openModal((modal) => InstallationModal({
      closeModal: modal.close,
      json,
      url,
      pluginId
    }));
    return true;
  }
  var TRIGGERS = ["MESSAGE_CREATE", "MESSAGE_UPDATE", "UPDATE_CHANNEL_DIMENSIONS"];
  function onLoad() {
    fetch("https://shindex.uwu.network/data").then((body) => body.json().then((repos) => repos.forEach((repo) => trustedUrls.push(repo.url))));
    for (const t of TRIGGERS)
      dispatcher.subscribe(t, handleDispatch);
    window.InstallButtonEnabled = true;
    if (window.DiscordNative && !window.InstallButtonInjected) {
      window.DiscordNative.ipc.on("DISCORD_MAIN_WINDOW_PATH", handleInstall);
      window.InstallButtonInjected = true;
    }
  }
  function onUnload() {
    trustedUrls.length = 0;
    for (const element of document.querySelectorAll("[class*=messageContent_] [class^=anchor_][data-instbtn]")) {
      element.removeAttribute("data-instbtn");
      element.onclick = null;
    }
    window.InstallButtonEnabled = false;
  }
  (0, import_web5.delegateEvents)(["mousedown"]);
  return __toCommonJS(installButton_exports);
})();
