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
//#region plugins/uitest/index.jsx.scss
shelter.plugin.scoped.ui.injectCss(`.uIWjSa_warning {
  background: var(--yellow-new-45) !important;
}

.uIWjSa_warning:hover {
  background: var(--yellow-new-50) !important;
}

button.uIWjSa_fuck.uIWjSa_you.uIWjSa_warning:active {
  background: var(--yellow-new-60) !important;
}

.uIWjSa_footer {
  justify-content: flex-end;
  gap: .5rem;
  display: flex;
}
`);
var index_jsx_default = {
	"footer": "uIWjSa_footer",
	"warning": "uIWjSa_warning",
	"fuck": "uIWjSa_fuck",
	"you": "uIWjSa_you"
};

//#endregion
//#region plugins/uitest/index.jsx
var import_web = __toESM(require_web(), 1);
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
var import_web$3 = __toESM(require_web(), 1);
var import_web$4 = __toESM(require_web(), 1);
var import_web$5 = __toESM(require_web(), 1);
var import_web$6 = __toESM(require_web(), 1);
var import_web$7 = __toESM(require_web(), 1);
var import_web$8 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div><!#><!/><!#><!/></div>`, 6), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<div id="test-ui"><!#><!/><div><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/></div><!#><!/><div></div><div><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/></div><!#><!/><div></div><div><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/></div><!#><!/><div><!#><!/><!#><!/><!#><!/><!#><!/></div><div><!#><!/><!#><!/><!#><!/><!#><!/></div><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/></div>`, 154), _tmpl$3 = /*#__PURE__*/ (0, import_web.template)(`<div>My modal content!<!#><!/><!#><!/></div>`, 6);
const { ui: { Button, ButtonColors, ButtonLooks, ButtonSizes, Checkbox, CheckboxItem, Header, HeaderTags, Switch, SwitchItem, showToast, openModal, ToastColors, TextBox, TextArea, ModalRoot, ModalHeader, ModalBody, ModalFooter, ModalSizes, Slider }, solid: { createSignal } } = shelter;
function TestUI() {
	const [pos, setPos] = createSignal({
		x: 0,
		y: 0
	});
	const [dragging, setDragging] = createSignal(false);
	const [offset, setOffset] = createSignal({
		x: 0,
		y: 0
	});
	const onMouseDown = (e) => {
		if (e.target.id !== "test-ui") return;
		e.preventDefault();
		e.stopPropagation();
		setDragging(true);
		setOffset({
			x: e.clientX - pos().x,
			y: e.clientY - pos().y
		});
	};
	const onMouseMove = (e) => {
		if (dragging()) setPos({
			x: e.clientX - offset().x,
			y: e.clientY - offset().y
		});
	};
	const onMouseUp = () => {
		setDragging(false);
	};
	const onMouseLeave = () => {
		setDragging(false);
	};
	const [checked, setChecked] = createSignal(false);
	const onCheckboxChange = () => {
		setChecked(!checked());
	};
	const [slider, setSlider] = createSignal(50);
	const onSliderChange = (value) => {
		setSlider(value);
	};
	return (() => {
		const _el$6 = (0, import_web$5.getNextElement)(_tmpl$2), _el$132 = _el$6.firstChild, [_el$133, _co$62] = (0, import_web$6.getNextMarker)(_el$132.nextSibling), _el$7 = _el$133.nextSibling, _el$8 = _el$7.firstChild, [_el$9, _co$3] = (0, import_web$6.getNextMarker)(_el$8.nextSibling), _el$10 = _el$9.nextSibling, [_el$11, _co$4] = (0, import_web$6.getNextMarker)(_el$10.nextSibling), _el$12 = _el$11.nextSibling, [_el$13, _co$5] = (0, import_web$6.getNextMarker)(_el$12.nextSibling), _el$14 = _el$13.nextSibling, [_el$15, _co$6] = (0, import_web$6.getNextMarker)(_el$14.nextSibling), _el$16 = _el$15.nextSibling, [_el$17, _co$7] = (0, import_web$6.getNextMarker)(_el$16.nextSibling), _el$18 = _el$17.nextSibling, [_el$19, _co$8] = (0, import_web$6.getNextMarker)(_el$18.nextSibling), _el$20 = _el$19.nextSibling, [_el$21, _co$9] = (0, import_web$6.getNextMarker)(_el$20.nextSibling), _el$22 = _el$21.nextSibling, [_el$23, _co$10] = (0, import_web$6.getNextMarker)(_el$22.nextSibling), _el$24 = _el$23.nextSibling, [_el$25, _co$11] = (0, import_web$6.getNextMarker)(_el$24.nextSibling), _el$26 = _el$25.nextSibling, [_el$27, _co$12] = (0, import_web$6.getNextMarker)(_el$26.nextSibling), _el$28 = _el$27.nextSibling, [_el$29, _co$13] = (0, import_web$6.getNextMarker)(_el$28.nextSibling), _el$30 = _el$29.nextSibling, [_el$31, _co$14] = (0, import_web$6.getNextMarker)(_el$30.nextSibling), _el$32 = _el$31.nextSibling, [_el$33, _co$15] = (0, import_web$6.getNextMarker)(_el$32.nextSibling), _el$34 = _el$33.nextSibling, [_el$35, _co$16] = (0, import_web$6.getNextMarker)(_el$34.nextSibling), _el$36 = _el$35.nextSibling, [_el$37, _co$17] = (0, import_web$6.getNextMarker)(_el$36.nextSibling), _el$38 = _el$37.nextSibling, [_el$39, _co$18] = (0, import_web$6.getNextMarker)(_el$38.nextSibling), _el$40 = _el$39.nextSibling, [_el$41, _co$19] = (0, import_web$6.getNextMarker)(_el$40.nextSibling), _el$42 = _el$41.nextSibling, [_el$43, _co$20] = (0, import_web$6.getNextMarker)(_el$42.nextSibling), _el$44 = _el$43.nextSibling, [_el$45, _co$21] = (0, import_web$6.getNextMarker)(_el$44.nextSibling), _el$46 = _el$45.nextSibling, [_el$47, _co$22] = (0, import_web$6.getNextMarker)(_el$46.nextSibling), _el$48 = _el$47.nextSibling, [_el$49, _co$23] = (0, import_web$6.getNextMarker)(_el$48.nextSibling), _el$50 = _el$49.nextSibling, [_el$51, _co$24] = (0, import_web$6.getNextMarker)(_el$50.nextSibling), _el$52 = _el$51.nextSibling, [_el$53, _co$25] = (0, import_web$6.getNextMarker)(_el$52.nextSibling), _el$54 = _el$53.nextSibling, [_el$55, _co$26] = (0, import_web$6.getNextMarker)(_el$54.nextSibling), _el$56 = _el$55.nextSibling, [_el$57, _co$27] = (0, import_web$6.getNextMarker)(_el$56.nextSibling), _el$58 = _el$57.nextSibling, [_el$59, _co$28] = (0, import_web$6.getNextMarker)(_el$58.nextSibling), _el$60 = _el$59.nextSibling, [_el$61, _co$29] = (0, import_web$6.getNextMarker)(_el$60.nextSibling), _el$62 = _el$61.nextSibling, [_el$63, _co$30] = (0, import_web$6.getNextMarker)(_el$62.nextSibling), _el$64 = _el$63.nextSibling, [_el$65, _co$31] = (0, import_web$6.getNextMarker)(_el$64.nextSibling), _el$66 = _el$65.nextSibling, [_el$67, _co$32] = (0, import_web$6.getNextMarker)(_el$66.nextSibling), _el$68 = _el$67.nextSibling, [_el$69, _co$33] = (0, import_web$6.getNextMarker)(_el$68.nextSibling), _el$70 = _el$69.nextSibling, [_el$71, _co$34] = (0, import_web$6.getNextMarker)(_el$70.nextSibling), _el$72 = _el$71.nextSibling, [_el$73, _co$35] = (0, import_web$6.getNextMarker)(_el$72.nextSibling), _el$74 = _el$73.nextSibling, [_el$75, _co$36] = (0, import_web$6.getNextMarker)(_el$74.nextSibling), _el$76 = _el$75.nextSibling, [_el$77, _co$37] = (0, import_web$6.getNextMarker)(_el$76.nextSibling), _el$134 = _el$7.nextSibling, [_el$135, _co$63] = (0, import_web$6.getNextMarker)(_el$134.nextSibling), _el$78 = _el$135.nextSibling, _el$79 = _el$78.nextSibling, _el$80 = _el$79.firstChild, [_el$81, _co$38] = (0, import_web$6.getNextMarker)(_el$80.nextSibling), _el$82 = _el$81.nextSibling, [_el$83, _co$39] = (0, import_web$6.getNextMarker)(_el$82.nextSibling), _el$84 = _el$83.nextSibling, [_el$85, _co$40] = (0, import_web$6.getNextMarker)(_el$84.nextSibling), _el$86 = _el$85.nextSibling, [_el$87, _co$41] = (0, import_web$6.getNextMarker)(_el$86.nextSibling), _el$88 = _el$87.nextSibling, [_el$89, _co$42] = (0, import_web$6.getNextMarker)(_el$88.nextSibling), _el$90 = _el$89.nextSibling, [_el$91, _co$43] = (0, import_web$6.getNextMarker)(_el$90.nextSibling), _el$92 = _el$91.nextSibling, [_el$93, _co$44] = (0, import_web$6.getNextMarker)(_el$92.nextSibling), _el$94 = _el$93.nextSibling, [_el$95, _co$45] = (0, import_web$6.getNextMarker)(_el$94.nextSibling), _el$136 = _el$79.nextSibling, [_el$137, _co$64] = (0, import_web$6.getNextMarker)(_el$136.nextSibling), _el$96 = _el$137.nextSibling, _el$97 = _el$96.nextSibling, _el$98 = _el$97.firstChild, [_el$99, _co$46] = (0, import_web$6.getNextMarker)(_el$98.nextSibling), _el$100 = _el$99.nextSibling, [_el$101, _co$47] = (0, import_web$6.getNextMarker)(_el$100.nextSibling), _el$102 = _el$101.nextSibling, [_el$103, _co$48] = (0, import_web$6.getNextMarker)(_el$102.nextSibling), _el$104 = _el$103.nextSibling, [_el$105, _co$49] = (0, import_web$6.getNextMarker)(_el$104.nextSibling), _el$106 = _el$105.nextSibling, [_el$107, _co$50] = (0, import_web$6.getNextMarker)(_el$106.nextSibling), _el$108 = _el$107.nextSibling, [_el$109, _co$51] = (0, import_web$6.getNextMarker)(_el$108.nextSibling), _el$110 = _el$109.nextSibling, [_el$111, _co$52] = (0, import_web$6.getNextMarker)(_el$110.nextSibling), _el$112 = _el$111.nextSibling, [_el$113, _co$53] = (0, import_web$6.getNextMarker)(_el$112.nextSibling), _el$138 = _el$97.nextSibling, [_el$139, _co$65] = (0, import_web$6.getNextMarker)(_el$138.nextSibling), _el$114 = _el$139.nextSibling, _el$115 = _el$114.firstChild, [_el$116, _co$54] = (0, import_web$6.getNextMarker)(_el$115.nextSibling), _el$117 = _el$116.nextSibling, [_el$118, _co$55] = (0, import_web$6.getNextMarker)(_el$117.nextSibling), _el$119 = _el$118.nextSibling, [_el$120, _co$56] = (0, import_web$6.getNextMarker)(_el$119.nextSibling), _el$121 = _el$120.nextSibling, [_el$122, _co$57] = (0, import_web$6.getNextMarker)(_el$121.nextSibling), _el$123 = _el$114.nextSibling, _el$124 = _el$123.firstChild, [_el$125, _co$58] = (0, import_web$6.getNextMarker)(_el$124.nextSibling), _el$126 = _el$125.nextSibling, [_el$127, _co$59] = (0, import_web$6.getNextMarker)(_el$126.nextSibling), _el$128 = _el$127.nextSibling, [_el$129, _co$60] = (0, import_web$6.getNextMarker)(_el$128.nextSibling), _el$130 = _el$129.nextSibling, [_el$131, _co$61] = (0, import_web$6.getNextMarker)(_el$130.nextSibling), _el$140 = _el$123.nextSibling, [_el$141, _co$66] = (0, import_web$6.getNextMarker)(_el$140.nextSibling), _el$142 = _el$141.nextSibling, [_el$143, _co$67] = (0, import_web$6.getNextMarker)(_el$142.nextSibling), _el$144 = _el$143.nextSibling, [_el$145, _co$68] = (0, import_web$6.getNextMarker)(_el$144.nextSibling), _el$146 = _el$145.nextSibling, [_el$147, _co$69] = (0, import_web$6.getNextMarker)(_el$146.nextSibling), _el$148 = _el$147.nextSibling, [_el$149, _co$70] = (0, import_web$6.getNextMarker)(_el$148.nextSibling), _el$150 = _el$149.nextSibling, [_el$151, _co$71] = (0, import_web$6.getNextMarker)(_el$150.nextSibling);
		_el$6.addEventListener("mouseleave", onMouseLeave);
		_el$6.$$mouseup = onMouseUp;
		_el$6.$$mousemove = onMouseMove;
		_el$6.$$mousedown = onMouseDown;
		_el$6.style.setProperty("position", "absolute");
		_el$6.style.setProperty("cursor", "move");
		_el$6.style.setProperty("padding", "48px 128px");
		_el$6.style.setProperty("border", "1px solid var(--opacity-8)");
		_el$6.style.setProperty("border-radius", "8px");
		_el$6.style.setProperty("display", "flex");
		_el$6.style.setProperty("z-index", "10000");
		_el$6.style.setProperty("background", "var(--background-primary)");
		_el$6.style.setProperty("display", "flex");
		_el$6.style.setProperty("flex-direction", "column");
		_el$6.style.setProperty("align-items", "center");
		_el$6.style.setProperty("justify-content", "center");
		_el$6.style.setProperty("gap", "16px");
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(Header, {
			get tag() {
				return HeaderTags.H2;
			},
			children: "Buttons"
		}), _el$133, _co$62);
		_el$7.style.setProperty("display", "grid");
		_el$7.style.setProperty("grid-template-rows", "repeat(5, 1fr)");
		_el$7.style.setProperty("grid-auto-flow", "column");
		_el$7.style.setProperty("grid-gap", "10px");
		_el$7.style.setProperty("align-items", "center");
		_el$7.style.setProperty("justify-items", "center");
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.BRAND;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Brand - Filled"
		}), _el$9, _co$3);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.BRAND;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			disabled: true,
			children: "Brand - Disabled"
		}), _el$11, _co$4);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.BRAND;
			},
			get look() {
				return ButtonLooks.INVERTED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Brand - Inverted"
		}), _el$13, _co$5);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.BRAND;
			},
			get look() {
				return ButtonLooks.OUTLINED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Brand - Outlined"
		}), _el$15, _co$6);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.BRAND;
			},
			get look() {
				return ButtonLooks.LINK;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Brand - Link"
		}), _el$17, _co$7);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.RED;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Red - Filled"
		}), _el$19, _co$8);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.RED;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			disabled: true,
			children: "Red - Disabled"
		}), _el$21, _co$9);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.RED;
			},
			get look() {
				return ButtonLooks.INVERTED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Red - Inverted"
		}), _el$23, _co$10);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.RED;
			},
			get look() {
				return ButtonLooks.OUTLINED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Red - Outlined"
		}), _el$25, _co$11);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.RED;
			},
			get look() {
				return ButtonLooks.LINK;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Red - Link"
		}), _el$27, _co$12);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.GREEN;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Green - Filled"
		}), _el$29, _co$13);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.GREEN;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			disabled: true,
			children: "Green - Disabled"
		}), _el$31, _co$14);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.GREEN;
			},
			get look() {
				return ButtonLooks.INVERTED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Green - Inverted"
		}), _el$33, _co$15);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.GREEN;
			},
			get look() {
				return ButtonLooks.OUTLINED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Green - Outlined"
		}), _el$35, _co$16);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.GREEN;
			},
			get look() {
				return ButtonLooks.LINK;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Green - Link"
		}), _el$37, _co$17);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.SECONDARY;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Primary - Filled"
		}), _el$39, _co$18);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.SECONDARY;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			disabled: true,
			children: "Primary - Disabled"
		}), _el$41, _co$19);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.SECONDARY;
			},
			get look() {
				return ButtonLooks.INVERTED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Primary - Inverted"
		}), _el$43, _co$20);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.SECONDARY;
			},
			get look() {
				return ButtonLooks.OUTLINED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Primary - Outlined"
		}), _el$45, _co$21);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.SECONDARY;
			},
			get look() {
				return ButtonLooks.LINK;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Primary - Link"
		}), _el$47, _co$22);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.LINK;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Link - Filled"
		}), _el$49, _co$23);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.LINK;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			disabled: true,
			children: "Link - Disabled"
		}), _el$51, _co$24);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.LINK;
			},
			get look() {
				return ButtonLooks.INVERTED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Link - Inverted"
		}), _el$53, _co$25);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.LINK;
			},
			get look() {
				return ButtonLooks.OUTLINED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Link - Outlined"
		}), _el$55, _co$26);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.LINK;
			},
			get look() {
				return ButtonLooks.LINK;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Link - Link"
		}), _el$57, _co$27);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.WHITE;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "White - Filled"
		}), _el$59, _co$28);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.WHITE;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			disabled: true,
			children: "White - Disabled"
		}), _el$61, _co$29);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.WHITE;
			},
			get look() {
				return ButtonLooks.INVERTED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "White - Inverted"
		}), _el$63, _co$30);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.WHITE;
			},
			get look() {
				return ButtonLooks.OUTLINED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "White - Outlined"
		}), _el$65, _co$31);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.WHITE;
			},
			get look() {
				return ButtonLooks.LINK;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "White - Link"
		}), _el$67, _co$32);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.TRANSPARENT;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Transparent - Filled"
		}), _el$69, _co$33);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.TRANSPARENT;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			disabled: true,
			children: "Transparent - Disabled"
		}), _el$71, _co$34);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.TRANSPARENT;
			},
			get look() {
				return ButtonLooks.INVERTED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Transparent - Inverted"
		}), _el$73, _co$35);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.TRANSPARENT;
			},
			get look() {
				return ButtonLooks.OUTLINED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Transparent - Outlined"
		}), _el$75, _co$36);
		(0, import_web$7.insert)(_el$7, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.TRANSPARENT;
			},
			get look() {
				return ButtonLooks.LINK;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			children: "Transparent - Link"
		}), _el$77, _co$37);
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(Header, {
			get tag() {
				return HeaderTags.H2;
			},
			children: "Checkboxes"
		}), _el$135, _co$63);
		_el$78.style.setProperty("width", "100%");
		(0, import_web$7.insert)(_el$78, (0, import_web$8.createComponent)(CheckboxItem, {
			tooltip: "Interactive Checkbox",
			get checked() {
				return checked();
			},
			onChange: onCheckboxChange,
			children: "Interactive Checkbox"
		}));
		_el$79.style.setProperty("display", "grid");
		_el$79.style.setProperty("grid-template-columns", "repeat(2, 1fr)");
		_el$79.style.setProperty("grid-template-rows", "repeat(4, 1fr)");
		_el$79.style.setProperty("grid-auto-flow", "column");
		_el$79.style.setProperty("grid-gap", "10px");
		_el$79.style.setProperty("grid-template-areas", "\n                  \"checkbox checkbox checkbox checkbox\"\n                  \"checkbox-item checkbox-item checkbox-item checkbox-item\"\n               ");
		(0, import_web$7.insert)(_el$79, (0, import_web$8.createComponent)(Checkbox, {
			tooltip: "Checked Checkbox",
			checked: true
		}), _el$81, _co$38);
		(0, import_web$7.insert)(_el$79, (0, import_web$8.createComponent)(Checkbox, {
			tooltip: "Unchecked Checkbox",
			checked: false
		}), _el$83, _co$39);
		(0, import_web$7.insert)(_el$79, (0, import_web$8.createComponent)(Checkbox, {
			tooltip: "Disabled Checked Checkbox",
			checked: true,
			disabled: true
		}), _el$85, _co$40);
		(0, import_web$7.insert)(_el$79, (0, import_web$8.createComponent)(Checkbox, {
			tooltip: "Disabled Unchecked Checkbox",
			checked: false,
			disabled: true
		}), _el$87, _co$41);
		(0, import_web$7.insert)(_el$79, (0, import_web$8.createComponent)(CheckboxItem, {
			tooltip: "Checked Checkbox",
			checked: true,
			children: "Checked Checkbox"
		}), _el$89, _co$42);
		(0, import_web$7.insert)(_el$79, (0, import_web$8.createComponent)(CheckboxItem, {
			tooltip: "Unchecked Checkbox",
			checked: false,
			children: "Unchecked Checkbox"
		}), _el$91, _co$43);
		(0, import_web$7.insert)(_el$79, (0, import_web$8.createComponent)(CheckboxItem, {
			tooltip: "Disabled Checked Checkbox",
			checked: true,
			disabled: true,
			children: "Disabled Checked Checkbox"
		}), _el$93, _co$44);
		(0, import_web$7.insert)(_el$79, (0, import_web$8.createComponent)(CheckboxItem, {
			tooltip: "Disabled Unchecked Checkbox",
			checked: false,
			disabled: true,
			children: "Disabled Unchecked Checkbox"
		}), _el$95, _co$45);
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(Header, {
			get tag() {
				return HeaderTags.H2;
			},
			children: "Switches"
		}), _el$137, _co$64);
		_el$96.style.setProperty("width", "100%");
		(0, import_web$7.insert)(_el$96, (0, import_web$8.createComponent)(SwitchItem, {
			tooltip: "Interactive Switch",
			get value() {
				return checked();
			},
			onChange: onCheckboxChange,
			hideBorder: true,
			children: "Interactive Switch"
		}));
		_el$97.style.setProperty("display", "grid");
		_el$97.style.setProperty("grid-template-columns", "repeat(2, 1fr)");
		_el$97.style.setProperty("grid-template-rows", "repeat(4, 1fr)");
		_el$97.style.setProperty("grid-auto-flow", "column");
		_el$97.style.setProperty("grid-gap", "10px");
		_el$97.style.setProperty("grid-template-areas", "\n                  \"checkbox checkbox checkbox checkbox\"\n                  \"checkbox-item checkbox-item checkbox-item checkbox-item\"\n               ");
		(0, import_web$7.insert)(_el$97, (0, import_web$8.createComponent)(Switch, {
			tooltip: "Checked Switch",
			checked: true
		}), _el$99, _co$46);
		(0, import_web$7.insert)(_el$97, (0, import_web$8.createComponent)(Switch, {
			tooltip: "Unchecked Switch",
			checked: false
		}), _el$101, _co$47);
		(0, import_web$7.insert)(_el$97, (0, import_web$8.createComponent)(Switch, {
			tooltip: "Disabled Checked Switch",
			checked: true,
			disabled: true
		}), _el$103, _co$48);
		(0, import_web$7.insert)(_el$97, (0, import_web$8.createComponent)(Switch, {
			tooltip: "Disabled Unchecked Switch",
			checked: false,
			disabled: true
		}), _el$105, _co$49);
		(0, import_web$7.insert)(_el$97, (0, import_web$8.createComponent)(SwitchItem, {
			tooltip: "Checked Switch",
			checked: true,
			children: "Checked Switch"
		}), _el$107, _co$50);
		(0, import_web$7.insert)(_el$97, (0, import_web$8.createComponent)(SwitchItem, {
			tooltip: "Unchecked Switch",
			checked: false,
			children: "Unchecked Switch"
		}), _el$109, _co$51);
		(0, import_web$7.insert)(_el$97, (0, import_web$8.createComponent)(SwitchItem, {
			tooltip: "Disabled Checked Switch",
			checked: true,
			disabled: true,
			children: "Disabled Checked Switch"
		}), _el$111, _co$52);
		(0, import_web$7.insert)(_el$97, (0, import_web$8.createComponent)(SwitchItem, {
			tooltip: "Disabled Unchecked Switch",
			checked: false,
			disabled: true,
			children: "Disabled Unchecked Switch"
		}), _el$113, _co$53);
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(Header, {
			get tag() {
				return HeaderTags.H2;
			},
			children: "Modals and toasts"
		}), _el$139, _co$65);
		_el$114.style.setProperty("display", "flex");
		_el$114.style.setProperty("flex-direction", "row");
		_el$114.style.setProperty("gap", "16px");
		(0, import_web$7.insert)(_el$114, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.PRIMARY;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			onClick: () => {
				showToast({
					title: "Neutral",
					content: "This is a toast",
					color: ToastColors.INFO
				});
			},
			children: "Neutral"
		}), _el$116, _co$54);
		(0, import_web$7.insert)(_el$114, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.GREEN;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			onClick: () => {
				showToast({
					title: "Positive",
					content: "Use this for success",
					color: ToastColors.SUCCESS
				});
			},
			children: "Positive"
		}), _el$118, _co$55);
		(0, import_web$7.insert)(_el$114, (0, import_web$8.createComponent)(Button, {
			get ["class"]() {
				return `${index_jsx_default.warning} ${index_jsx_default.fuck} ${index_jsx_default.you}`;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			onClick: () => {
				showToast({
					title: "Warning",
					content: "Use this for warnings",
					color: ToastColors.WARNING
				});
			},
			children: "Warning"
		}), _el$120, _co$56);
		(0, import_web$7.insert)(_el$114, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.RED;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			onClick: () => {
				showToast({
					title: "Negative",
					content: "Use this for errors",
					color: ToastColors.CRITICAL
				});
			},
			children: "Critical"
		}), _el$122, _co$57);
		_el$123.style.setProperty("display", "flex");
		_el$123.style.setProperty("flex-direction", "row");
		_el$123.style.setProperty("gap", "16px");
		(0, import_web$7.insert)(_el$123, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.PRIMARY;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			onClick: () => {
				showToast({
					title: "1s",
					content: "Goodbye!",
					color: ToastColors.INFO,
					duration: 1e3
				});
			},
			children: "1s"
		}), _el$125, _co$58);
		(0, import_web$7.insert)(_el$123, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.PRIMARY;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			onClick: () => {
				showToast({
					title: "5s",
					content: "Goodbye!",
					color: ToastColors.INFO,
					duration: 5e3
				});
			},
			children: "5s"
		}), _el$127, _co$59);
		(0, import_web$7.insert)(_el$123, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.PRIMARY;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			onClick: () => {
				showToast({
					title: "10s",
					content: "Goodbye!",
					color: ToastColors.INFO,
					duration: 1e4
				});
			},
			children: "10s"
		}), _el$129, _co$60);
		(0, import_web$7.insert)(_el$123, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.PRIMARY;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			onClick: () => {
				showToast({
					title: "Infinite",
					content: "I'm gonna stick around yo!",
					color: ToastColors.INFO,
					duration: Number.POSITIVE_INFINITY
				});
			},
			children: "Infinite"
		}), _el$131, _co$61);
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(Button, {
			get color() {
				return ButtonColors.LINK;
			},
			get look() {
				return ButtonLooks.FILLED;
			},
			get size() {
				return ButtonSizes.LARGE;
			},
			onClick: () => {
				openModal((mprops) => (0, import_web$8.createComponent)(ModalRoot, {
					get size() {
						return ModalSizes.LARGE;
					},
					get children() {
						return [
							(0, import_web$8.createComponent)(ModalHeader, {
								get close() {
									return mprops.close;
								},
								children: "My modal header"
							}),
							(0, import_web$8.createComponent)(ModalBody, { get children() {
								const _el$152 = (0, import_web$5.getNextElement)(_tmpl$3), _el$153 = _el$152.firstChild, _el$154 = _el$153.nextSibling, [_el$155, _co$72] = (0, import_web$6.getNextMarker)(_el$154.nextSibling), _el$156 = _el$155.nextSibling, [_el$157, _co$73] = (0, import_web$6.getNextMarker)(_el$156.nextSibling);
								_el$152.style.setProperty("display", "flex");
								_el$152.style.setProperty("flex-direction", "column");
								_el$152.style.setProperty("gap", "8px");
								(0, import_web$7.insert)(_el$152, (0, import_web$8.createComponent)(Button, {
									get size() {
										return ButtonSizes.SMALL;
									},
									get color() {
										return ButtonColors.GREEN;
									},
									children: "Smol"
								}), _el$155, _co$72);
								(0, import_web$7.insert)(_el$152, (0, import_web$8.createComponent)(TextBox, {
									placeholder: "Type something here, for no reason!",
									value: ""
								}), _el$157, _co$73);
								return _el$152;
							} }),
							(0, import_web$8.createComponent)(ModalFooter, { get children() {
								const _el$158 = (0, import_web$5.getNextElement)(_tmpl$), _el$159 = _el$158.firstChild, [_el$160, _co$74] = (0, import_web$6.getNextMarker)(_el$159.nextSibling), _el$161 = _el$160.nextSibling, [_el$162, _co$75] = (0, import_web$6.getNextMarker)(_el$161.nextSibling);
								(0, import_web$7.insert)(_el$158, (0, import_web$8.createComponent)(Button, {
									get color() {
										return ButtonColors.RED;
									},
									get look() {
										return ButtonLooks.FILLED;
									},
									get size() {
										return ButtonSizes.MEDIUM;
									},
									onClick: () => {
										mprops.close();
										showToast({
											title: "Modal closed",
											content: "You closed the modal!",
											color: ToastColors.INFO
										});
									},
									children: "Cancel"
								}), _el$160, _co$74);
								(0, import_web$7.insert)(_el$158, (0, import_web$8.createComponent)(Button, {
									get color() {
										return ButtonColors.BRAND;
									},
									get look() {
										return ButtonLooks.FILLED;
									},
									get size() {
										return ButtonSizes.MEDIUM;
									},
									onClick: () => {
										mprops.close();
										showToast({
											title: "Modal closed",
											content: "You closed the modal!",
											color: ToastColors.INFO
										});
									},
									children: "Done"
								}), _el$162, _co$75);
								(0, import_web$3.effect)(() => (0, import_web$2.className)(_el$158, index_jsx_default.footer));
								return _el$158;
							} })
						];
					}
				}));
			},
			children: "Open Modal"
		}), _el$141, _co$66);
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(Header, {
			get tag() {
				return HeaderTags.H2;
			},
			children: "Inputs"
		}), _el$143, _co$67);
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(TextBox, { placeholder: "Search for love..." }), _el$145, _co$68);
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(TextArea, {
			placeholder: "Can this have multiple lines?\nYes it can!",
			counter: true
		}), _el$147, _co$69);
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(Slider, {
			min: 0,
			max: 100,
			step: 10,
			tick: 10,
			get value() {
				return slider();
			},
			onInput: onSliderChange
		}), _el$149, _co$70);
		(0, import_web$7.insert)(_el$6, (0, import_web$8.createComponent)(Slider, {
			min: 0,
			max: 100,
			get value() {
				return slider();
			},
			onInput: onSliderChange
		}), _el$151, _co$71);
		(0, import_web$3.effect)((_p$) => {
			const _v$ = `${pos().y}px`, _v$2 = `${pos().x}px`;
			_v$ !== _p$._v$ && _el$6.style.setProperty("top", _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && _el$6.style.setProperty("left", _p$._v$2 = _v$2);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined
		});
		(0, import_web$4.runHydrationEvents)();
		return _el$6;
	})();
}
function onLoad() {
	document.body.appendChild((0, import_web$8.createComponent)(TestUI, {}));
}
function onUnload() {
	const testUI = document.getElementById("test-ui");
	if (testUI) testUI.remove();
}
const settings = () => {
	throw new Error("nyaboom");
};
(0, import_web$1.delegateEvents)([
	"mousedown",
	"mousemove",
	"mouseup"
]);

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
exports.settings = settings
return exports;
})({});