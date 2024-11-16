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

  // plugins/favoriteSearch/index.jsx
  var favoriteSearch_exports = {};
  __export(favoriteSearch_exports, {
    onLoad: () => onLoad
  });
  var import_web5 = __toESM(require_web(), 1);

  // plugins/favoriteSearch/modal.jsx
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var import_web3 = __toESM(require_web(), 1);
  var import_web4 = __toESM(require_web(), 1);
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<div><video autoplay loop muted></video></div>`, 4);
  var {
    ui: {
      ModalRoot,
      ModalHeader,
      ModalBody,
      ModalConfirmFooter,
      ModalSizes,
      TextArea
    },
    solid: {
      createSignal
    },
    plugin: {
      store
    }
  } = shelter;
  function AddTagModal(closeModal, gifData) {
    const [tags, setTags] = createSignal("");
    let tagsArray = store.gifs[gifData.url] || [];
    setTags(tagsArray.join(", "));
    return (0, import_web4.createComponent)(ModalRoot, {
      get size() {
        return ModalSizes.MEDIUM;
      },
      get children() {
        return [(0, import_web4.createComponent)(ModalHeader, {
          close: closeModal,
          children: "Adding tags to GIF"
        }), (0, import_web4.createComponent)(ModalBody, {
          get children() {
            return [(() => {
              const _el$ = _tmpl$.cloneNode(true), _el$2 = _el$.firstChild;
              _el$.style.setProperty("display", "flex");
              _el$.style.setProperty("justify-content", "center");
              _el$.style.setProperty("align-items", "center");
              _el$.style.setProperty("margin-bottom", "16px");
              _el$2.style.setProperty("width", "300px");
              _el$2.style.setProperty("height", "300px");
              _el$2.style.setProperty("object-fit", "stretch");
              _el$2.style.setProperty("border-radius", "8px");
              (0, import_web3.effect)(() => (0, import_web2.setAttribute)(_el$2, "src", gifData.src));
              return _el$;
            })(), (0, import_web4.createComponent)(TextArea, {
              placeholder: "Enter tags separated by commas",
              get value() {
                return tags();
              },
              onInput: (text) => setTags(text)
            })];
          }
        }), (0, import_web4.createComponent)(ModalConfirmFooter, {
          close: closeModal,
          confirmText: "Save",
          onConfirm: () => {
            tagsArray = tags().split(",").map((tag) => tag.trim());
            store.gifs[gifData.url] = tagsArray;
            closeModal();
          }
        })];
      }
    });
  }

  // plugins/favoriteSearch/index.jsx
  var {
    flux: {
      subscribe
    },
    observeDom
  } = shelter.plugin.scoped;
  var {
    ui: {
      TextBox,
      openModal
    },
    util: {
      getFiberOwner,
      getFiber,
      reactFiberWalker
    },
    plugin: {
      store: store2
    }
  } = shelter;
  function addClickHandlerToFavoritesGifPicker() {
    const stopObserving = observeDom("#gif-picker-tab-panel > div:last-child > div:first-child > div > div > div:first-child", (container) => {
      stopObserving();
      if (container.dataset.clickHandlerAdded)
        return;
      container.dataset.clickHandler = "true";
      container.addEventListener("click", handleClick);
    });
    setTimeout(stopObserving, 500);
  }
  var stopObservingResults = null;
  function handleClick() {
    const stopObserving = observeDom("#gif-picker-tab-panel > div:first-child", (header) => {
      stopObserving();
      const searchBox = (0, import_web5.createComponent)(TextBox, {
        id: "gif-searchbox",
        style: {
          "margin-top": "8px"
        },
        placeholder: "Search favorite GIFs...",
        onInput: (text) => handleSearch(text)
      });
      header.appendChild(searchBox);
      stopObservingResults = observeDom("[class^='content'] > div > [class^='result']", (card) => {
        if (card.dataset.addedRightClick)
          return;
        card.dataset.addedRightClick = "true";
        addRightClickHandler(card);
      });
    });
    setTimeout(stopObserving, 500);
  }
  function handleBack() {
    document.getElementById("gif-searchbox")?.remove();
    if (stopObservingResults) {
      stopObservingResults();
      stopObservingResults = null;
    }
    addClickHandlerToFavoritesGifPicker();
  }
  function handleSearch(text) {
    const container = document.querySelector("#gif-picker-tab-panel");
    const fiber = getFiberOwner(container);
    if (!fiber.props.__favorites) {
      fiber.props.__favorites = fiber.props.favorites;
    }
    fiber.props.favorites = fiber.props.__favorites.filter((gif) => {
      for (const tag of store2.gifs[gif.url] ?? []) {
        if (tag.toLowerCase().includes(text.toLowerCase())) {
          return true;
        }
      }
      return gif.url.toLowerCase().includes(text.toLowerCase());
    });
    fiber.forceUpdate();
  }
  function addRightClickHandler(container) {
    container.addEventListener("contextmenu", (e) => {
      openModal((p) => AddTagModal(p.close, reactFiberWalker(getFiber(e.target.parentNode), "item", true).memoizedProps.item));
    });
  }
  function onLoad() {
    subscribe("GIF_PICKER_INITIALIZE", (e) => {
      addClickHandlerToFavoritesGifPicker();
    });
    subscribe("GIF_PICKER_QUERY", (e) => {
      handleBack();
    });
    store2.gifs ??= {};
  }
  return __toCommonJS(favoriteSearch_exports);
})();
