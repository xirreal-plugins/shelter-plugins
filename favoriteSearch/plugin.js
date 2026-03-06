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
//#region plugins/favoriteSearch/modal.jsx
var import_web$9 = __toESM(require_web(), 1);
var import_web$10 = __toESM(require_web(), 1);
var import_web$11 = __toESM(require_web(), 1);
var import_web$12 = __toESM(require_web(), 1);
var import_web$13 = __toESM(require_web(), 1);
var import_web$14 = __toESM(require_web(), 1);
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$9.template)(`<div></div>`, 2), _tmpl$2$1 = /*#__PURE__*/ (0, import_web$9.template)(`<video autoplay loop muted></video>`, 2), _tmpl$3$1 = /*#__PURE__*/ (0, import_web$9.template)(`<img>`, 1);
const { ui: { ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter, ModalSizes, TextArea }, solid: { createSignal: createSignal$1 }, plugin: { store: store$1 } } = shelter;
function AddTagModal(closeModal, gifData) {
	const [tags, setTags] = createSignal$1("");
	let tagsArray = store$1[gifData.url] || [];
	setTags(tagsArray.join(", "));
	const isMP4 = gifData.src.endsWith(".mp4");
	return (0, import_web$14.createComponent)(ModalRoot, {
		get size() {
			return ModalSizes.MEDIUM;
		},
		get children() {
			return [
				(0, import_web$14.createComponent)(ModalHeader, {
					close: closeModal,
					children: "Adding tags to GIF"
				}),
				(0, import_web$14.createComponent)(ModalBody, { get children() {
					return [(() => {
						const _el$ = (0, import_web$12.getNextElement)(_tmpl$$1);
						_el$.style.setProperty("display", "flex");
						_el$.style.setProperty("justify-content", "center");
						_el$.style.setProperty("align-items", "center");
						_el$.style.setProperty("margin-bottom", "16px");
						(0, import_web$13.insert)(_el$, isMP4 ? (() => {
							const _el$2 = (0, import_web$12.getNextElement)(_tmpl$2$1);
							_el$2.style.setProperty("max-width", "100%");
							_el$2.style.setProperty("max-height", "300px");
							_el$2.style.setProperty("border-radius", "8px");
							(0, import_web$11.effect)(() => (0, import_web$10.setAttribute)(_el$2, "src", gifData.src));
							return _el$2;
						})() : (() => {
							const _el$3 = (0, import_web$12.getNextElement)(_tmpl$3$1);
							_el$3.style.setProperty("max-width", "100%");
							_el$3.style.setProperty("max-height", "300px");
							_el$3.style.setProperty("border-radius", "8px");
							(0, import_web$11.effect)(() => (0, import_web$10.setAttribute)(_el$3, "src", gifData.src));
							return _el$3;
						})());
						return _el$;
					})(), (0, import_web$14.createComponent)(TextArea, {
						placeholder: "Enter tags separated by commas",
						get value() {
							return tags();
						},
						onInput: (text) => setTags(text)
					})];
				} }),
				(0, import_web$14.createComponent)(ModalConfirmFooter, {
					close: closeModal,
					confirmText: "Save",
					onConfirm: () => {
						tagsArray = tags().split(",").map((tag) => tag.trim()).filter((tag) => tag.length > 0);
						store$1[gifData.url] = tagsArray;
						closeModal();
					}
				})
			];
		}
	});
}

//#endregion
//#region plugins/favoriteSearch/index.jsx.scss
shelter.plugin.scoped.ui.injectCss(`#AgMsVW_searchBar {
  margin-top: 8px;
}

.AgMsVW_barContainer {
  margin-bottom: 10px;
}

.AgMsVW_align {
  margin-left: 1px;
}

.AgMsVW_counter {
  height: 100%;
  color: var(--text-muted);
  font-size: 12px;
  font-family: var(--font-code);
  pointer-events: none;
  direction: rtl;
  border-radius: 8px;
  padding: 4px 8px;
  position: absolute;
  top: 38%;
  right: 24px;
}

.AgMsVW_buttonRow {
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  margin-left: 1px;
  display: flex;
}

.AgMsVW_importStatus {
  color: var(--text-muted);
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 4px;
  font-size: 12px;
  overflow: hidden;
}
`);
var index_jsx_default = {
	"importStatus": "AgMsVW_importStatus",
	"align": "AgMsVW_align",
	"searchBar": "AgMsVW_searchBar",
	"barContainer": "AgMsVW_barContainer",
	"counter": "AgMsVW_counter",
	"buttonRow": "AgMsVW_buttonRow"
};

//#endregion
//#region plugins/favoriteSearch/index.jsx
var import_web = __toESM(require_web(), 1);
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
var import_web$3 = __toESM(require_web(), 1);
var import_web$4 = __toESM(require_web(), 1);
var import_web$5 = __toESM(require_web(), 1);
var import_web$6 = __toESM(require_web(), 1);
var import_web$7 = __toESM(require_web(), 1);
var import_web$8 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div><div><!#><!/><div aria-hidden="true"><!#><!/>/<!#><!/></div></div><div></div></div>`, 14), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<div id="shltr-gifsearch-container"></div>`, 2), _tmpl$3 = /*#__PURE__*/ (0, import_web.template)(`<div><div><!#><!/><!#><!/></div><!#><!/></div>`, 10), _tmpl$4 = /*#__PURE__*/ (0, import_web.template)(`<span></span>`, 2);
const { flux: { subscribe }, observeDom } = shelter.plugin.scoped;
const { ui: { TextBox, openModal, CheckboxItem, ReactiveRoot, Button, ButtonSizes, ButtonColors }, solid: { createSignal, createEffect, onCleanup }, util: { getFiberOwner, getFiber, reactFiberWalker }, plugin: { store }, flux: { stores: { UserSettingsProtoStore } } } = shelter;
function addClickHandlerToFavoritesGifPicker() {
	const stopObserving = observeDom("[class*='result'] > [class*='categoryFadeBlurple']", (container) => {
		stopObserving();
		if (container.parentElement.dataset.clickHandlerAdded) return;
		container.parentElement.dataset.clickHandler = "true";
		container.parentElement.addEventListener("click", handleClick);
	});
	setTimeout(stopObserving, 500);
}
function exportTags() {
	const gifs = UserSettingsProtoStore.__proto__.frecencyWithoutFetchingLatest.favoriteGifs.gifs;
	const data = {};
	for (const [url$1, gif] of Object.entries(gifs)) data[url$1] = {
		src: gif.src || url$1,
		tags: store[url$1] || []
	};
	const json = JSON.stringify(data, null, 2);
	const blob = new Blob([json], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "gif-tags.json";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
function importTags() {
	return new Promise((resolve) => {
		const input = document.createElement("input");
		input.type = "file";
		input.accept = ".json";
		input.onchange = async (e) => {
			const file = e.target.files[0];
			if (!file) return resolve(0);
			try {
				const text = await file.text();
				const data = JSON.parse(text);
				let count = 0;
				for (const [url, value] of Object.entries(data)) {
					const tags = Array.isArray(value) ? value : Array.isArray(value?.tags) ? value.tags : [];
					if (tags.length > 0) {
						const existing = store[url] || [];
						const existingSet = new Set(existing.map((t) => t.toLowerCase()));
						const newTags = tags.filter((t) => typeof t === "string" && t.trim().length > 0 && !existingSet.has(t.trim().toLowerCase()));
						if (newTags.length > 0) {
							store[url] = [...existing, ...newTags.map((t) => t.trim())];
							count++;
						}
					}
				}
				resolve(count);
			} catch {
				resolve(-1);
			}
		};
		input.click();
	});
}
function setupFiberProps(fiber) {
	if (!Object.getOwnPropertyDescriptor(fiber.props, "__favorites")) {
		let original = [...fiber.props.favorites || []];
		let internalUpdate = false;
		Object.defineProperty(fiber.props, "__favorites", {
			configurable: true,
			get() {
				return [...original];
			},
			set(value) {
				original = [...value || []];
			}
		});
		Object.defineProperty(fiber.props, "favorites", {
			configurable: true,
			get() {
				return this.__current ?? original;
			},
			set(value) {
				if (!internalUpdate) original = [...value || []];
				this.__current = [...value || []];
			}
		});
		fiber.props.__applyFilter = (filtered) => {
			internalUpdate = true;
			fiber.props.favorites = filtered;
			internalUpdate = false;
		};
	}
}
function getFreshFiber() {
	const container = document.querySelector("#gif-picker-tab-panel");
	if (!container) return null;
	const fiber = getFiberOwner(container);
	if (!fiber?.props?.favorites) return null;
	setupFiberProps(fiber);
	return fiber;
}
function SearchBar() {
	const [text, setText] = createSignal("");
	const [showUntagged, setShowUntagged] = createSignal(false);
	const container = document.querySelector("#gif-picker-tab-panel");
	let fiber = getFiberOwner(container);
	const [counter, setCounter] = createSignal(fiber.props.favorites.length.toString());
	const total = fiber.props.favorites.length;
	setupFiberProps(fiber);
	function update$1() {
		const freshFiber = getFreshFiber();
		if (freshFiber) fiber = freshFiber;
		const favorites = fiber.props.__favorites;
		if (!favorites) return;
		const searchText = text();
		const onlyUntagged = showUntagged();
		const filtered = favorites.filter((gif) => {
			const tags = store[gif.url] || [];
			if (onlyUntagged && tags.length > 0) return false;
			if (!searchText) return true;
			const lowerSearch = searchText.toLowerCase();
			if (gif.url.toLowerCase().includes(lowerSearch)) return true;
			return tags.some((tag) => tag?.toLowerCase().includes(lowerSearch));
		});
		fiber.props.__applyFilter(filtered);
		setCounter(filtered.length.toString());
		fiber.forceUpdate();
	}
	createEffect(update$1);
	const stopObserving = observeDom("#gif-picker-tab-panel", () => {
		setTimeout(update$1, 100);
	});
	onCleanup(() => {
		stopObserving();
	});
	return (() => {
		const _el$ = (0, import_web$5.getNextElement)(_tmpl$), _el$2 = _el$.firstChild, _el$9 = _el$2.firstChild, [_el$0, _co$3] = (0, import_web$6.getNextMarker)(_el$9.nextSibling), _el$3 = _el$0.nextSibling, _el$5 = _el$3.firstChild, [_el$6, _co$] = (0, import_web$6.getNextMarker)(_el$5.nextSibling), _el$4 = _el$6.nextSibling, _el$7 = _el$4.nextSibling, [_el$8, _co$2] = (0, import_web$6.getNextMarker)(_el$7.nextSibling), _el$1 = _el$2.nextSibling;
		(0, import_web$7.insert)(_el$2, (0, import_web$8.createComponent)(TextBox, {
			placeholder: "Search favorite GIFs...",
			get value() {
				return text();
			},
			onInput: (value) => {
				setText(value ?? "");
			}
		}), _el$0, _co$3);
		(0, import_web$7.insert)(_el$3, counter, _el$6, _co$);
		(0, import_web$7.insert)(_el$3, total, _el$8, _co$2);
		(0, import_web$7.insert)(_el$1, (0, import_web$8.createComponent)(CheckboxItem, {
			get checked() {
				return showUntagged();
			},
			onchange: () => setShowUntagged(!showUntagged()),
			children: "Show only untagged GIFs"
		}));
		(0, import_web$4.effect)((_p$) => {
			const _v$ = index_jsx_default.searchBar, _v$2 = index_jsx_default.barContainer, _v$3 = index_jsx_default.counter, _v$4 = index_jsx_default.align;
			_v$ !== _p$._v$ && (0, import_web$3.setAttribute)(_el$, "id", _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$2.className)(_el$2, _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && (0, import_web$2.className)(_el$3, _p$._v$3 = _v$3);
			_v$4 !== _p$._v$4 && (0, import_web$2.className)(_el$1, _p$._v$4 = _v$4);
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
let stopObservingResults = null;
function handleClick() {
	requestAnimationFrame(() => {
		const header = document.querySelector("#gif-picker-tab-panel > div:first-child");
		if (!header) return;
		header.appendChild((() => {
			const _el$10 = (0, import_web$5.getNextElement)(_tmpl$2);
			(0, import_web$7.insert)(_el$10, (0, import_web$8.createComponent)(ReactiveRoot, { get children() {
				return (0, import_web$8.createComponent)(SearchBar, {});
			} }));
			return _el$10;
		})());
		stopObservingResults = observeDom("[class*='results'] > [class*='content'] > div > [class*='result']", (card) => {
			if (card.dataset.addedRightClick) return;
			card.dataset.addedRightClick = "true";
			addRightClickHandler(card);
		});
	});
}
function handleBack() {
	document.getElementById("shltr-gifsearch-container")?.remove();
	if (stopObservingResults) {
		stopObservingResults();
		stopObservingResults = null;
	}
	addClickHandlerToFavoritesGifPicker();
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
}
function settings() {
	const [importStatus, setImportStatus] = createSignal("");
	async function handleImport() {
		setImportStatus("Selecting file...");
		const result = await importTags();
		if (result === -1) setImportStatus("Import failed: invalid JSON file.");
else if (result === 0) setImportStatus("No new tags to import.");
else {
			setImportStatus(`Imported tags for ${result} GIF(s).`);
			update();
		}
		setTimeout(() => setImportStatus(""), 4e3);
	}
	return (() => {
		const _el$11 = (0, import_web$5.getNextElement)(_tmpl$3), _el$12 = _el$11.firstChild, _el$13 = _el$12.firstChild, [_el$14, _co$4] = (0, import_web$6.getNextMarker)(_el$13.nextSibling), _el$15 = _el$14.nextSibling, [_el$16, _co$5] = (0, import_web$6.getNextMarker)(_el$15.nextSibling), _el$17 = _el$12.nextSibling, [_el$18, _co$6] = (0, import_web$6.getNextMarker)(_el$17.nextSibling);
		_el$11.style.setProperty("display", "flex");
		_el$11.style.setProperty("flex-direction", "column");
		_el$11.style.setProperty("gap", "16px");
		(0, import_web$7.insert)(_el$12, (0, import_web$8.createComponent)(Button, {
			get size() {
				return ButtonSizes.MEDIUM;
			},
			get color() {
				return ButtonColors.SECONDARY;
			},
			onClick: () => exportTags(),
			children: "Export tags"
		}), _el$14, _co$4);
		(0, import_web$7.insert)(_el$12, (0, import_web$8.createComponent)(Button, {
			get size() {
				return ButtonSizes.MEDIUM;
			},
			get color() {
				return ButtonColors.PRIMARY;
			},
			onClick: handleImport,
			children: "Import tags"
		}), _el$16, _co$5);
		(0, import_web$7.insert)(_el$11, (() => {
			const _c$ = (0, import_web$1.memo)(() => !!importStatus());
			return () => _c$() && (() => {
				const _el$19 = (0, import_web$5.getNextElement)(_tmpl$4);
				(0, import_web$7.insert)(_el$19, importStatus);
				(0, import_web$4.effect)(() => (0, import_web$2.className)(_el$19, index_jsx_default.importStatus));
				return _el$19;
			})();
		})(), _el$18, _co$6);
		(0, import_web$4.effect)(() => (0, import_web$2.className)(_el$12, index_jsx_default.buttonRow));
		return _el$11;
	})();
}

//#endregion
exports.onLoad = onLoad
exports.settings = settings
return exports;
})({});