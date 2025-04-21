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
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
var import_web$3 = __toESM(require_web(), 1);
var import_web$4 = __toESM(require_web(), 1);
var import_web$5 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web$1.template)(`<div><video autoplay loop muted></video></div>`, 4);
const { ui: { ModalRoot, ModalHeader, ModalBody, ModalConfirmFooter, ModalSizes, TextArea }, solid: { createSignal }, plugin: { store: store$1 } } = shelter;
function AddTagModal(closeModal, gifData) {
	const [tags, setTags] = createSignal("");
	let tagsArray = store$1[gifData.url] || [];
	setTags(tagsArray.join(", "));
	return (0, import_web$5.createComponent)(ModalRoot, {
		get size() {
			return ModalSizes.MEDIUM;
		},
		get children() {
			return [
				(0, import_web$5.createComponent)(ModalHeader, {
					close: closeModal,
					children: "Adding tags to GIF"
				}),
				(0, import_web$5.createComponent)(ModalBody, { get children() {
					return [(() => {
						const _el$ = (0, import_web$4.getNextElement)(_tmpl$), _el$2 = _el$.firstChild;
						_el$.style.setProperty("display", "flex");
						_el$.style.setProperty("justify-content", "center");
						_el$.style.setProperty("align-items", "center");
						_el$.style.setProperty("margin-bottom", "16px");
						_el$2.style.setProperty("width", "300px");
						_el$2.style.setProperty("height", "300px");
						_el$2.style.setProperty("object-fit", "stretch");
						_el$2.style.setProperty("border-radius", "8px");
						(0, import_web$3.effect)(() => (0, import_web$2.setAttribute)(_el$2, "src", gifData.src));
						return _el$;
					})(), (0, import_web$5.createComponent)(TextArea, {
						placeholder: "Enter tags separated by commas",
						get value() {
							return tags();
						},
						onInput: (text) => setTags(text)
					})];
				} }),
				(0, import_web$5.createComponent)(ModalConfirmFooter, {
					close: closeModal,
					confirmText: "Save",
					onConfirm: () => {
						tagsArray = tags().split(",").map((tag) => tag.trim());
						store$1[gifData.url] = tagsArray;
						closeModal();
					}
				})
			];
		}
	});
}

//#endregion
//#region plugins/favoriteSearch/index.jsx
var import_web = __toESM(require_web(), 1);
const { flux: { subscribe }, observeDom } = shelter.plugin.scoped;
const { ui: { TextBox, openModal }, util: { getFiberOwner, getFiber, reactFiberWalker }, plugin: { store } } = shelter;
function addClickHandlerToFavoritesGifPicker() {
	const stopObserving = observeDom("#gif-picker-tab-panel > div:last-child > div:first-child > div > div > div:first-child", (container) => {
		stopObserving();
		if (container.dataset.clickHandlerAdded) return;
		container.dataset.clickHandler = "true";
		container.addEventListener("click", handleClick);
	});
	setTimeout(stopObserving, 500);
}
let stopObservingResults = null;
function handleClick() {
	const stopObserving = observeDom("#gif-picker-tab-panel > div:first-child", (header) => {
		stopObserving();
		const searchBox = (0, import_web.createComponent)(TextBox, {
			id: "gif-searchbox",
			style: { "margin-top": "8px" },
			placeholder: "Search favorite GIFs...",
			onInput: (text) => handleSearch(text)
		});
		header.appendChild(searchBox);
		stopObservingResults = observeDom("[class^='content'] > div > [class^='result']", (card) => {
			if (card.dataset.addedRightClick) return;
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
	if (!fiber.props.__favorites) fiber.props.__favorites = fiber.props.favorites;
	fiber.props.favorites = fiber.props.__favorites.filter((gif) => {
		for (const tag of store[gif.url] ?? []) if (tag.toLowerCase().includes(text.toLowerCase())) return true;
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
}

//#endregion
exports.onLoad = onLoad
return exports;
})({});