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
var import_web$8 = __toESM(require_web(), 1);
var import_web$9 = __toESM(require_web(), 1);
var import_web$10 = __toESM(require_web(), 1);
var import_web$11 = __toESM(require_web(), 1);
var import_web$12 = __toESM(require_web(), 1);
var import_web$13 = __toESM(require_web(), 1);
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$8.template)(`<div></div>`, 2), _tmpl$2$1 = /*#__PURE__*/ (0, import_web$8.template)(`<video autoplay loop muted></video>`, 2), _tmpl$3 = /*#__PURE__*/ (0, import_web$8.template)(`<img>`, 1);
const { ui: { ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter, ModalSizes, TextArea }, solid: { createSignal: createSignal$1 }, plugin: { store: store$1 } } = shelter;
function AddTagModal(closeModal, gifData) {
	const [tags, setTags] = createSignal$1("");
	let tagsArray = store$1[gifData.url] || [];
	setTags(tagsArray.join(", "));
	const isMP4 = gifData.src.endsWith(".mp4");
	return (0, import_web$13.createComponent)(ModalRoot, {
		get size() {
			return ModalSizes.MEDIUM;
		},
		get children() {
			return [
				(0, import_web$13.createComponent)(ModalHeader, {
					close: closeModal,
					children: "Adding tags to GIF"
				}),
				(0, import_web$13.createComponent)(ModalBody, { get children() {
					return [(() => {
						const _el$ = (0, import_web$11.getNextElement)(_tmpl$$1);
						_el$.style.setProperty("display", "flex");
						_el$.style.setProperty("justify-content", "center");
						_el$.style.setProperty("align-items", "center");
						_el$.style.setProperty("margin-bottom", "16px");
						(0, import_web$12.insert)(_el$, isMP4 ? (() => {
							const _el$2 = (0, import_web$11.getNextElement)(_tmpl$2$1);
							_el$2.style.setProperty("max-width", "100%");
							_el$2.style.setProperty("max-height", "300px");
							_el$2.style.setProperty("border-radius", "8px");
							(0, import_web$10.effect)(() => (0, import_web$9.setAttribute)(_el$2, "src", gifData.src));
							return _el$2;
						})() : (() => {
							const _el$3 = (0, import_web$11.getNextElement)(_tmpl$3);
							_el$3.style.setProperty("max-width", "100%");
							_el$3.style.setProperty("max-height", "300px");
							_el$3.style.setProperty("border-radius", "8px");
							(0, import_web$10.effect)(() => (0, import_web$9.setAttribute)(_el$3, "src", gifData.src));
							return _el$3;
						})());
						return _el$;
					})(), (0, import_web$13.createComponent)(TextArea, {
						placeholder: "Enter tags separated by commas",
						get value() {
							return tags();
						},
						onInput: (text) => setTags(text)
					})];
				} }),
				(0, import_web$13.createComponent)(ModalConfirmFooter, {
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
`);
var index_jsx_default = {
	"align": "AgMsVW_align",
	"barContainer": "AgMsVW_barContainer",
	"searchBar": "AgMsVW_searchBar",
	"counter": "AgMsVW_counter"
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
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div><div><!#><!/><div aria-hidden="true"><!#><!/>/<!#><!/></div></div><div></div></div>`, 14), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<div id="shltr-gifsearch-container"></div>`, 2);
const { flux: { subscribe }, observeDom } = shelter.plugin.scoped;
const { ui: { TextBox, openModal, CheckboxItem, ReactiveRoot }, solid: { createSignal, createEffect, onCleanup }, util: { getFiberOwner, getFiber, reactFiberWalker }, plugin: { store } } = shelter;
function addClickHandlerToFavoritesGifPicker() {
	const stopObserving = observeDom("[class^='result'] > [class^='categoryFadeBlurple']", (container) => {
		stopObserving();
		if (container.parentElement.dataset.clickHandlerAdded) return;
		container.parentElement.dataset.clickHandler = "true";
		container.parentElement.addEventListener("click", handleClick);
	});
	setTimeout(stopObserving, 500);
}
function SearchBar() {
	const [text, setText] = createSignal("");
	const [showUntagged, setShowUntagged] = createSignal(false);
	const container = document.querySelector("#gif-picker-tab-panel");
	const fiber = getFiberOwner(container);
	const [counter, setCounter] = createSignal(fiber.props.favorites.length.toString());
	const total = fiber.props.favorites.length;
	if (!fiber.props.__favorites) {
		Object.defineProperty(fiber.props, "__favorites", {
			get: () => fiber.props.favorites,
			set: (value) => {
				console.log("Favorites updated:", value);
				fiber.props.favorites = value;
			}
		});
		fiber.props.__favorites = fiber.props.favorites;
		console.log("Initialized __favorites with current favorites.");
	}
	function update() {
		console.log(fiber.props.__favorites);
		if (!fiber.props.__favorites) fiber.props.__favorites = fiber.props.favorites;
		fiber.props.favorites = fiber.props.__favorites.filter((gif) => {
			const tags = store[gif.url] || [];
			if (showUntagged() && tags.length > 0) return false;
			if (text().length === 0) return true;
			if (gif.url.toLowerCase().includes(text().toLowerCase())) return true;
			return tags.some((tag) => tag?.toLowerCase().includes(text().toLowerCase()));
		});
		setCounter(fiber.props.favorites.length.toString());
		fiber.forceUpdate();
	}
	createEffect(update);
	const stopObserving = observeDom("#gif-picker-tab-panel", () => {
		setTimeout(update, 100);
	});
	onCleanup(() => {
		stopObserving();
	});
	return (() => {
		const _el$ = (0, import_web$4.getNextElement)(_tmpl$), _el$2 = _el$.firstChild, _el$9 = _el$2.firstChild, [_el$10, _co$3] = (0, import_web$5.getNextMarker)(_el$9.nextSibling), _el$3 = _el$10.nextSibling, _el$5 = _el$3.firstChild, [_el$6, _co$] = (0, import_web$5.getNextMarker)(_el$5.nextSibling), _el$4 = _el$6.nextSibling, _el$7 = _el$4.nextSibling, [_el$8, _co$2] = (0, import_web$5.getNextMarker)(_el$7.nextSibling), _el$11 = _el$2.nextSibling;
		(0, import_web$6.insert)(_el$2, (0, import_web$7.createComponent)(TextBox, {
			placeholder: "Search favorite GIFs...",
			get value() {
				return text();
			},
			onInput: (value) => {
				setText(value);
			}
		}), _el$10, _co$3);
		(0, import_web$6.insert)(_el$3, counter, _el$6, _co$);
		(0, import_web$6.insert)(_el$3, total, _el$8, _co$2);
		(0, import_web$6.insert)(_el$11, (0, import_web$7.createComponent)(CheckboxItem, {
			get checked() {
				return showUntagged();
			},
			onchange: () => setShowUntagged(!showUntagged()),
			children: "Show only untagged GIFs"
		}));
		(0, import_web$3.effect)((_p$) => {
			const _v$ = index_jsx_default.searchBar, _v$2 = index_jsx_default.barContainer, _v$3 = index_jsx_default.counter, _v$4 = index_jsx_default.align;
			_v$ !== _p$._v$ && (0, import_web$2.setAttribute)(_el$, "id", _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$1.className)(_el$2, _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && (0, import_web$1.className)(_el$3, _p$._v$3 = _v$3);
			_v$4 !== _p$._v$4 && (0, import_web$1.className)(_el$11, _p$._v$4 = _v$4);
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
			const _el$12 = (0, import_web$4.getNextElement)(_tmpl$2);
			(0, import_web$6.insert)(_el$12, (0, import_web$7.createComponent)(ReactiveRoot, { get children() {
				return (0, import_web$7.createComponent)(SearchBar, {});
			} }));
			return _el$12;
		})());
		stopObservingResults = observeDom("[class^='content'] > div > [class^='result_']", (card) => {
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

//#endregion
exports.onLoad = onLoad
return exports;
})({});