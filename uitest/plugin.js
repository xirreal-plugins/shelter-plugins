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
shelter.plugin.scoped.ui.injectCss(`.uIWjSa_section {
  margin-bottom: 32px;
}

.uIWjSa_sectionTitle {
  margin-bottom: 16px;
  padding-bottom: 8px;
}

.uIWjSa_subsection {
  margin-top: 16px;
  margin-bottom: 8px;
}

.uIWjSa_grid {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  align-items: center;
  gap: 12px;
  display: grid;
}

.uIWjSa_row {
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  display: flex;
}

.uIWjSa_col {
  flex-direction: column;
  gap: 12px;
  display: flex;
}

.uIWjSa_demo {
  border-radius: var(--radius-sm);
  background: var(--input-background-default);
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  display: flex;
}

.uIWjSa_inputContainer {
  max-width: 300px;
}

.uIWjSa_textareaContainer {
  max-width: 500px;
}

.uIWjSa_sliderContainer {
  max-width: 400px;
}

.uIWjSa_warning {
  background: var(--yellow-new-45) !important;
}

.uIWjSa_warning:hover {
  background: var(--yellow-new-50) !important;
}

.uIWjSa_warning:active {
  background: var(--yellow-new-60) !important;
}

.uIWjSa_iconGrid {
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  display: flex;
}

.uIWjSa_iconItem {
  border-radius: var(--radius-sm);
  background: var(--input-background-default);
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 80px;
  padding: 12px;
  display: flex;
}

.uIWjSa_iconLabel {
  color: var(--text-muted);
  text-align: center;
  font-size: 10px;
}

.uIWjSa_tooltipDemo {
  flex-wrap: wrap;
  gap: 16px;
  display: flex;
}

.uIWjSa_tooltipTarget {
  background: var(--input-background-default);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--interactive-text-default);
  padding: 12px 24px;
}

.uIWjSa_scrollDemo {
  background: var(--input-background-default);
  border-radius: var(--radius-sm);
  height: 100px;
  padding: 8px;
  overflow: auto;
}

.uIWjSa_crashButton {
  margin-top: 8px;
}
`);
var index_jsx_default = {
	"iconLabel": "uIWjSa_iconLabel",
	"scrollDemo": "uIWjSa_scrollDemo",
	"sliderContainer": "uIWjSa_sliderContainer",
	"iconItem": "uIWjSa_iconItem",
	"tooltipDemo": "uIWjSa_tooltipDemo",
	"crashButton": "uIWjSa_crashButton",
	"subsection": "uIWjSa_subsection",
	"col": "uIWjSa_col",
	"warning": "uIWjSa_warning",
	"section": "uIWjSa_section",
	"tooltipTarget": "uIWjSa_tooltipTarget",
	"sectionTitle": "uIWjSa_sectionTitle",
	"row": "uIWjSa_row",
	"demo": "uIWjSa_demo",
	"textareaContainer": "uIWjSa_textareaContainer",
	"inputContainer": "uIWjSa_inputContainer",
	"grid": "uIWjSa_grid",
	"iconGrid": "uIWjSa_iconGrid"
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
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div><!#><!/><!#><!/></div>`, 6), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<div></div>`, 2), _tmpl$3 = /*#__PURE__*/ (0, import_web.template)(`<div><!#><!/><span></span></div>`, 6), _tmpl$4 = /*#__PURE__*/ (0, import_web.template)(`<div><span>Hover (top)</span><span>Hover (bottom)</span><span>Rich tooltip</span></div>`, 8), _tmpl$5 = /*#__PURE__*/ (0, import_web.template)(`<strong>Rich!</strong>`, 2), _tmpl$6 = /*#__PURE__*/ (0, import_web.template)(`<div>Line <!#><!/></div>`, 4), _tmpl$7 = /*#__PURE__*/ (0, import_web.template)(`<div><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/></div>`, 26);
const { ui: { Button, ButtonColors, ButtonLooks, ButtonSizes, LinkButton, Checkbox, CheckboxItem, Switch, SwitchItem, Header, HeaderTags, HeaderWeights, Text, TextTags, TextWeights, TextBox, TextArea, Slider, openModal, openConfirmationModal, ModalRoot, ModalHeader, ModalBody, ModalFooter, ModalConfirmFooter, ModalSizes, showToast, ToastColors, IconAdd, IconBin, IconClose, IconCog, IconEdit, IconInfo, IconUpdate, IconUpload, ChevronIcon, DevIcon, LocalIcon, SyncIcon, Space, ErrorBoundary, focusring, tooltip, niceScrollbarsClass }, solid: { createSignal, For, Show } } = shelter;
const Section = (props) => (() => {
	const _el$ = (0, import_web$5.getNextElement)(_tmpl$), _el$2 = _el$.firstChild, [_el$3, _co$] = (0, import_web$6.getNextMarker)(_el$2.nextSibling), _el$4 = _el$3.nextSibling, [_el$5, _co$2] = (0, import_web$6.getNextMarker)(_el$4.nextSibling);
	(0, import_web$7.insert)(_el$, (0, import_web$8.createComponent)(Text, {
		get tag() {
			return TextTags.displaySM;
		},
		get ["class"]() {
			return index_jsx_default.sectionTitle;
		},
		get children() {
			return props.title;
		}
	}), _el$3, _co$);
	(0, import_web$7.insert)(_el$, () => props.children, _el$5, _co$2);
	(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$, index_jsx_default.section));
	return _el$;
})();
const SubSection = (props) => [(0, import_web$8.createComponent)(Header, {
	get tag() {
		return HeaderTags.HeadingMD;
	},
	get ["class"]() {
		return index_jsx_default.subsection;
	},
	get children() {
		return props.title;
	}
}), (0, import_web$2.memo)(() => props.children)];
const Row = (props) => (() => {
	const _el$6 = (0, import_web$5.getNextElement)(_tmpl$2);
	(0, import_web$7.insert)(_el$6, () => props.children);
	(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$6, index_jsx_default.row));
	return _el$6;
})();
const Col = (props) => (() => {
	const _el$7 = (0, import_web$5.getNextElement)(_tmpl$2);
	(0, import_web$7.insert)(_el$7, () => props.children);
	(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$7, index_jsx_default.col));
	return _el$7;
})();
const Grid = (props) => (() => {
	const _el$8 = (0, import_web$5.getNextElement)(_tmpl$2);
	(0, import_web$7.insert)(_el$8, () => props.children);
	(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$8, index_jsx_default.grid));
	return _el$8;
})();
const ICONS = [
	{
		Icon: IconAdd,
		name: "IconAdd"
	},
	{
		Icon: IconBin,
		name: "IconBin"
	},
	{
		Icon: IconClose,
		name: "IconClose"
	},
	{
		Icon: IconCog,
		name: "IconCog"
	},
	{
		Icon: IconEdit,
		name: "IconEdit"
	},
	{
		Icon: IconInfo,
		name: "IconInfo"
	},
	{
		Icon: IconUpdate,
		name: "IconUpdate"
	},
	{
		Icon: IconUpload,
		name: "IconUpload"
	},
	{
		Icon: ChevronIcon,
		name: "ChevronIcon"
	},
	{
		Icon: DevIcon,
		name: "DevIcon"
	},
	{
		Icon: LocalIcon,
		name: "LocalIcon"
	},
	{
		Icon: SyncIcon,
		name: "SyncIcon"
	}
];
const BUTTON_COLORS = [
	"PRIMARY",
	"SECONDARY",
	"CRITICAL_PRIMARY",
	"CRITICAL_SECONDARY",
	"ACTIVE",
	"OVERLAY_PRIMARY",
	"OVERLAY_SECONDARY"
];
const BUTTON_SIZES = [
	"TINY",
	"SMALL",
	"MEDIUM",
	"LARGE",
	"XLARGE"
];
function ButtonTests() {
	return (0, import_web$8.createComponent)(Section, {
		title: "Buttons",
		get children() {
			return [
				(0, import_web$8.createComponent)(SubSection, {
					title: "Colors",
					get children() {
						return (0, import_web$8.createComponent)(Grid, { get children() {
							return (0, import_web$8.createComponent)(For, {
								each: BUTTON_COLORS,
								children: (color) => (0, import_web$8.createComponent)(Button, {
									get size() {
										return ButtonSizes.LARGE;
									},
									get color() {
										return ButtonColors[color];
									},
									children: color
								})
							});
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Disabled",
					get children() {
						return (0, import_web$8.createComponent)(Grid, { get children() {
							return (0, import_web$8.createComponent)(For, {
								each: [
									"PRIMARY",
									"SECONDARY",
									"CRITICAL_PRIMARY",
									"ACTIVE"
								],
								children: (color) => (0, import_web$8.createComponent)(Button, {
									get size() {
										return ButtonSizes.LARGE;
									},
									get color() {
										return ButtonColors[color];
									},
									disabled: true,
									children: color
								})
							});
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Sizes",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return (0, import_web$8.createComponent)(For, {
								each: BUTTON_SIZES,
								children: (size) => (0, import_web$8.createComponent)(Button, {
									get size() {
										return ButtonSizes[size];
									},
									children: size
								})
							});
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Special Sizes",
					get children() {
						return (0, import_web$8.createComponent)(Col, { get children() {
							return [
								(0, import_web$8.createComponent)(Text, { children: "MIN - fits content:" }),
								(0, import_web$8.createComponent)(Button, {
									get size() {
										return ButtonSizes.MIN;
									},
									children: "Min Size"
								}),
								(0, import_web$8.createComponent)(Text, { children: "MAX - fills container:" }),
								(() => {
									const _el$9 = (0, import_web$5.getNextElement)(_tmpl$2);
									_el$9.style.setProperty("width", "300px");
									(0, import_web$7.insert)(_el$9, (0, import_web$8.createComponent)(Button, {
										get size() {
											return ButtonSizes.MAX;
										},
										children: "Max Size"
									}));
									return _el$9;
								})(),
								(0, import_web$8.createComponent)(Text, { children: "ICON - icon only:" }),
								(0, import_web$8.createComponent)(Button, {
									get size() {
										return ButtonSizes.ICON;
									},
									get children() {
										return (0, import_web$8.createComponent)(IconCog, {});
									}
								})
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Grow",
					get children() {
						return (0, import_web$8.createComponent)(Row, {
							style: { width: "100%" },
							get children() {
								return [
									(0, import_web$8.createComponent)(Button, {
										grow: true,
										children: "Grow 1"
									}),
									(0, import_web$8.createComponent)(Button, {
										grow: true,
										children: "Grow 2"
									}),
									(0, import_web$8.createComponent)(Button, {
										grow: true,
										children: "Grow 3"
									})
								];
							}
						});
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Tooltips",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [(0, import_web$8.createComponent)(Button, {
								tooltip: "Top tooltip",
								children: "Hover me"
							}), (0, import_web$8.createComponent)(Button, {
								tooltip: [true, "Bottom tooltip"],
								children: "Bottom"
							})];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "LinkButton",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [(0, import_web$8.createComponent)(LinkButton, {
								href: "https://github.com/uwu/shelter",
								children: "GitHub"
							}), (0, import_web$8.createComponent)(LinkButton, {
								href: "https://discord.com",
								tooltip: "Opens Discord",
								children: "Discord"
							})];
						} });
					}
				})
			];
		}
	});
}
function ReactivityTests() {
	const [color, setColor] = createSignal(ButtonColors.PRIMARY);
	const [size, setSize] = createSignal(ButtonSizes.MEDIUM);
	const colors = [
		ButtonColors.PRIMARY,
		ButtonColors.SECONDARY,
		ButtonColors.CRITICAL_PRIMARY,
		ButtonColors.ACTIVE
	];
	const sizes = [
		ButtonSizes.TINY,
		ButtonSizes.SMALL,
		ButtonSizes.MEDIUM,
		ButtonSizes.LARGE
	];
	const cycleColor = () => setColor(colors[(colors.indexOf(color()) + 1) % colors.length]);
	const cycleSize = () => setSize(sizes[(sizes.indexOf(size()) + 1) % sizes.length]);
	return (0, import_web$8.createComponent)(Section, {
		title: "Reactivity",
		get children() {
			const _el$0 = (0, import_web$5.getNextElement)(_tmpl$), _el$1 = _el$0.firstChild, [_el$10, _co$3] = (0, import_web$6.getNextMarker)(_el$1.nextSibling), _el$11 = _el$10.nextSibling, [_el$12, _co$4] = (0, import_web$6.getNextMarker)(_el$11.nextSibling);
			(0, import_web$7.insert)(_el$0, (0, import_web$8.createComponent)(Text, { children: "Click to cycle through colors and sizes:" }), _el$10, _co$3);
			(0, import_web$7.insert)(_el$0, (0, import_web$8.createComponent)(Row, { get children() {
				return [
					(0, import_web$8.createComponent)(Button, {
						get color() {
							return color();
						},
						get size() {
							return size();
						},
						children: "Reactive Button"
					}),
					(0, import_web$8.createComponent)(Button, {
						onClick: cycleColor,
						children: "Cycle Color"
					}),
					(0, import_web$8.createComponent)(Button, {
						onClick: cycleSize,
						children: "Cycle Size"
					})
				];
			} }), _el$12, _co$4);
			(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$0, index_jsx_default.demo));
			return _el$0;
		}
	});
}
function CheckboxTests() {
	const [checked, setChecked] = createSignal(false);
	return (0, import_web$8.createComponent)(Section, {
		title: "Checkboxes",
		get children() {
			return [
				(0, import_web$8.createComponent)(SubSection, {
					title: "Interactive",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [(0, import_web$8.createComponent)(Checkbox, {
								get checked() {
									return checked();
								},
								onChange: setChecked,
								tooltip: "Click to toggle"
							}), (0, import_web$8.createComponent)(Text, { get children() {
								return ["Checked: ", (0, import_web$2.memo)(() => checked() ? "Yes" : "No")];
							} })];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "States",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [
								(0, import_web$8.createComponent)(Checkbox, {
									checked: true,
									tooltip: "Checked"
								}),
								(0, import_web$8.createComponent)(Checkbox, {
									checked: false,
									tooltip: "Unchecked"
								}),
								(0, import_web$8.createComponent)(Checkbox, {
									checked: true,
									disabled: true,
									tooltip: "Disabled checked"
								}),
								(0, import_web$8.createComponent)(Checkbox, {
									checked: false,
									disabled: true,
									tooltip: "Disabled unchecked"
								})
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "CheckboxItem",
					get children() {
						return (0, import_web$8.createComponent)(Col, {
							style: { "max-width": "400px" },
							get children() {
								return [
									(0, import_web$8.createComponent)(CheckboxItem, {
										get checked() {
											return checked();
										},
										onChange: setChecked,
										children: "Interactive"
									}),
									(0, import_web$8.createComponent)(CheckboxItem, {
										checked: true,
										children: "Checked"
									}),
									(0, import_web$8.createComponent)(CheckboxItem, {
										checked: false,
										children: "Unchecked"
									}),
									(0, import_web$8.createComponent)(CheckboxItem, {
										checked: true,
										disabled: true,
										children: "Disabled checked"
									}),
									(0, import_web$8.createComponent)(CheckboxItem, {
										checked: false,
										mt: true,
										children: "With margin-top"
									})
								];
							}
						});
					}
				})
			];
		}
	});
}
function SwitchTests() {
	const [enabled, setEnabled] = createSignal(false);
	return (0, import_web$8.createComponent)(Section, {
		title: "Switches",
		get children() {
			return [
				(0, import_web$8.createComponent)(SubSection, {
					title: "Interactive",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [(0, import_web$8.createComponent)(Switch, {
								get checked() {
									return enabled();
								},
								onChange: setEnabled,
								tooltip: "Click to toggle"
							}), (0, import_web$8.createComponent)(Text, { get children() {
								return ["Enabled: ", (0, import_web$2.memo)(() => enabled() ? "Yes" : "No")];
							} })];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "States",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [
								(0, import_web$8.createComponent)(Switch, {
									checked: true,
									tooltip: "On"
								}),
								(0, import_web$8.createComponent)(Switch, {
									checked: false,
									tooltip: "Off"
								}),
								(0, import_web$8.createComponent)(Switch, {
									checked: true,
									disabled: true,
									tooltip: "Disabled on"
								}),
								(0, import_web$8.createComponent)(Switch, {
									checked: false,
									disabled: true,
									tooltip: "Disabled off"
								})
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "SwitchItem",
					get children() {
						return (0, import_web$8.createComponent)(Col, {
							style: { "max-width": "400px" },
							get children() {
								return [
									(0, import_web$8.createComponent)(SwitchItem, {
										get checked() {
											return enabled();
										},
										onChange: setEnabled,
										note: "With note text",
										children: "Interactive"
									}),
									(0, import_web$8.createComponent)(SwitchItem, {
										checked: true,
										note: "Always on",
										children: "Enabled"
									}),
									(0, import_web$8.createComponent)(SwitchItem, {
										checked: false,
										children: "No note"
									}),
									(0, import_web$8.createComponent)(SwitchItem, {
										checked: true,
										disabled: true,
										note: "Cannot change",
										children: "Disabled"
									}),
									(0, import_web$8.createComponent)(SwitchItem, {
										checked: false,
										hideBorder: true,
										children: "Hidden border"
									})
								];
							}
						});
					}
				})
			];
		}
	});
}
function HeaderTests() {
	return (0, import_web$8.createComponent)(Section, {
		title: "Headers",
		get children() {
			return [
				(0, import_web$8.createComponent)(SubSection, {
					title: "Tags",
					get children() {
						return (0, import_web$8.createComponent)(Col, { get children() {
							return [
								(0, import_web$8.createComponent)(Header, {
									get tag() {
										return HeaderTags.HeadingXXL;
									},
									children: "HeadingXXL"
								}),
								(0, import_web$8.createComponent)(Header, {
									get tag() {
										return HeaderTags.HeadingXL;
									},
									children: "HeadingXL"
								}),
								(0, import_web$8.createComponent)(Header, {
									get tag() {
										return HeaderTags.HeadingLG;
									},
									children: "HeadingLG"
								}),
								(0, import_web$8.createComponent)(Header, {
									get tag() {
										return HeaderTags.HeadingMD;
									},
									children: "HeadingMD"
								}),
								(0, import_web$8.createComponent)(Header, {
									get tag() {
										return HeaderTags.HeadingSM;
									},
									children: "HeadingSM"
								}),
								(0, import_web$8.createComponent)(Header, {
									get tag() {
										return HeaderTags.EYEBROW;
									},
									children: "EYEBROW"
								})
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Weights",
					get children() {
						return (0, import_web$8.createComponent)(Grid, { get children() {
							return (0, import_web$8.createComponent)(For, {
								each: [
									"normal",
									"medium",
									"semibold",
									"bold",
									"extrabold"
								],
								children: (weight) => (0, import_web$8.createComponent)(Header, {
									get tag() {
										return HeaderTags.HeadingMD;
									},
									get weight() {
										return HeaderWeights[weight];
									},
									children: weight
								})
							});
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "No Margin",
					get children() {
						const _el$13 = (0, import_web$5.getNextElement)(_tmpl$), _el$14 = _el$13.firstChild, [_el$15, _co$5] = (0, import_web$6.getNextMarker)(_el$14.nextSibling), _el$16 = _el$15.nextSibling, [_el$17, _co$6] = (0, import_web$6.getNextMarker)(_el$16.nextSibling);
						(0, import_web$7.insert)(_el$13, (0, import_web$8.createComponent)(Header, {
							get tag() {
								return HeaderTags.HeadingMD;
							},
							margin: false,
							children: "No margin"
						}), _el$15, _co$5);
						(0, import_web$7.insert)(_el$13, (0, import_web$8.createComponent)(Text, { children: "Directly below" }), _el$17, _co$6);
						(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$13, index_jsx_default.demo));
						return _el$13;
					}
				})
			];
		}
	});
}
function TextTests() {
	const TEXT_TAGS = [
		"displayLG",
		"displayMD",
		"displaySM",
		"textLG",
		"textMD",
		"textSM",
		"textXS",
		"textXXS",
		"messagePreview",
		"channelTitle"
	];
	return (0, import_web$8.createComponent)(Section, {
		title: "Text",
		get children() {
			return [(0, import_web$8.createComponent)(SubSection, {
				title: "Tags",
				get children() {
					return (0, import_web$8.createComponent)(Col, { get children() {
						return (0, import_web$8.createComponent)(For, {
							each: TEXT_TAGS,
							children: (tag) => (0, import_web$8.createComponent)(Text, {
								get tag() {
									return TextTags[tag];
								},
								children: tag
							})
						});
					} });
				}
			}), (0, import_web$8.createComponent)(SubSection, {
				title: "Weights",
				get children() {
					return (0, import_web$8.createComponent)(Row, { get children() {
						return (0, import_web$8.createComponent)(For, {
							each: [
								"normal",
								"medium",
								"semibold",
								"bold",
								"extrabold"
							],
							children: (weight) => (0, import_web$8.createComponent)(Text, {
								get weight() {
									return TextWeights[weight];
								},
								children: weight
							})
						});
					} });
				}
			})];
		}
	});
}
function InputTests() {
	const [text, setText] = createSignal("");
	const [area, setArea] = createSignal("");
	const [slider, setSlider] = createSignal(50);
	return (0, import_web$8.createComponent)(Section, {
		title: "Inputs",
		get children() {
			return [
				(0, import_web$8.createComponent)(SubSection, {
					title: "TextBox",
					get children() {
						return (0, import_web$8.createComponent)(Col, { get children() {
							return [
								(() => {
									const _el$18 = (0, import_web$5.getNextElement)(_tmpl$2);
									(0, import_web$7.insert)(_el$18, (0, import_web$8.createComponent)(TextBox, {
										get value() {
											return text();
										},
										onInput: setText,
										placeholder: "Type something..."
									}));
									(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$18, index_jsx_default.inputContainer));
									return _el$18;
								})(),
								(0, import_web$8.createComponent)(Text, { get children() {
									return [
										"Value: \"",
										(0, import_web$2.memo)(() => text()),
										"\""
									];
								} }),
								(() => {
									const _el$19 = (0, import_web$5.getNextElement)(_tmpl$2);
									(0, import_web$7.insert)(_el$19, (0, import_web$8.createComponent)(TextBox, {
										get value() {
											return text();
										},
										onInput: setText,
										placeholder: "Max 10 chars",
										maxLength: 10
									}));
									(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$19, index_jsx_default.inputContainer));
									return _el$19;
								})(),
								(() => {
									const _el$20 = (0, import_web$5.getNextElement)(_tmpl$2);
									(0, import_web$7.insert)(_el$20, (0, import_web$8.createComponent)(TextBox, {
										value: "",
										placeholder: "Disabled",
										disabled: true
									}));
									(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$20, index_jsx_default.inputContainer));
									return _el$20;
								})()
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "TextArea",
					get children() {
						return (0, import_web$8.createComponent)(Col, { get children() {
							return [(() => {
								const _el$21 = (0, import_web$5.getNextElement)(_tmpl$2);
								(0, import_web$7.insert)(_el$21, (0, import_web$8.createComponent)(TextArea, {
									get value() {
										return area();
									},
									onInput: setArea,
									placeholder: "Multi-line...",
									"resize-y": true,
									counter: true,
									maxlength: 500
								}));
								(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$21, index_jsx_default.textareaContainer));
								return _el$21;
							})(), (() => {
								const _el$22 = (0, import_web$5.getNextElement)(_tmpl$2);
								(0, import_web$7.insert)(_el$22, (0, import_web$8.createComponent)(TextArea, {
									get value() {
										return area();
									},
									onInput: setArea,
									placeholder: "Monospace",
									mono: true,
									"resize-x": true,
									"resize-y": true
								}));
								(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$22, index_jsx_default.textareaContainer));
								return _el$22;
							})()];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Slider",
					get children() {
						return (0, import_web$8.createComponent)(Col, { get children() {
							return [
								(0, import_web$8.createComponent)(Text, { get children() {
									return ["Value: ", (0, import_web$2.memo)(() => slider())];
								} }),
								(() => {
									const _el$23 = (0, import_web$5.getNextElement)(_tmpl$2);
									(0, import_web$7.insert)(_el$23, (0, import_web$8.createComponent)(Slider, {
										min: 0,
										max: 100,
										get value() {
											return slider();
										},
										onInput: setSlider
									}));
									(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$23, index_jsx_default.sliderContainer));
									return _el$23;
								})(),
								(0, import_web$8.createComponent)(Text, { children: "With ticks:" }),
								(() => {
									const _el$24 = (0, import_web$5.getNextElement)(_tmpl$2);
									(0, import_web$7.insert)(_el$24, (0, import_web$8.createComponent)(Slider, {
										min: 0,
										max: 100,
										step: 10,
										tick: 20,
										get value() {
											return slider();
										},
										onInput: setSlider
									}));
									(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$24, index_jsx_default.sliderContainer));
									return _el$24;
								})()
							];
						} });
					}
				})
			];
		}
	});
}
function ToastTests() {
	const toast = (title, content, color) => () => showToast({
		title,
		content,
		color
	});
	return (0, import_web$8.createComponent)(Section, {
		title: "Toasts",
		get children() {
			return [
				(0, import_web$8.createComponent)(SubSection, {
					title: "Colors",
					get children() {
						return (0, import_web$8.createComponent)(Grid, { get children() {
							return [
								(0, import_web$8.createComponent)(Button, {
									get onClick() {
										return toast("Info", "Informational message", ToastColors.INFO);
									},
									children: "Info"
								}),
								(0, import_web$8.createComponent)(Button, {
									get onClick() {
										return toast("Success", "Operation completed", ToastColors.SUCCESS);
									},
									get color() {
										return ButtonColors.ACTIVE;
									},
									children: "Success"
								}),
								(0, import_web$8.createComponent)(Button, {
									get onClick() {
										return toast("Warning", "Something might be wrong", ToastColors.WARNING);
									},
									get ["class"]() {
										return index_jsx_default.warning;
									},
									children: "Warning"
								}),
								(0, import_web$8.createComponent)(Button, {
									get onClick() {
										return toast("Error", "Something went wrong", ToastColors.CRITICAL);
									},
									get color() {
										return ButtonColors.CRITICAL_PRIMARY;
									},
									children: "Critical"
								})
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Durations",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [
								(0, import_web$8.createComponent)(Button, {
									onClick: () => showToast({
										title: "Quick",
										content: "1 second",
										duration: 1e3
									}),
									children: "1s"
								}),
								(0, import_web$8.createComponent)(Button, {
									onClick: () => showToast({
										title: "Normal",
										content: "3 seconds",
										duration: 3e3
									}),
									children: "3s"
								}),
								(0, import_web$8.createComponent)(Button, {
									onClick: () => showToast({
										title: "Long",
										content: "10 seconds",
										duration: 1e4
									}),
									children: "10s"
								}),
								(0, import_web$8.createComponent)(Button, {
									onClick: () => showToast({
										title: "Persistent",
										content: "Click to dismiss",
										duration: Infinity
									}),
									children: "∞"
								})
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Clickable",
					get children() {
						return (0, import_web$8.createComponent)(Button, {
							onClick: () => showToast({
								title: "Clickable",
								content: "Click me!",
								onClick: () => alert("Clicked!"),
								duration: 5e3
							}),
							children: "Show Clickable Toast"
						});
					}
				})
			];
		}
	});
}
function ModalTests() {
	const openBasic = () => openModal((props) => (0, import_web$8.createComponent)(ModalRoot, { get children() {
		return [
			(0, import_web$8.createComponent)(ModalHeader, {
				get close() {
					return props.close;
				},
				children: "Basic Modal"
			}),
			(0, import_web$8.createComponent)(ModalBody, { get children() {
				return (0, import_web$8.createComponent)(Text, { children: "A basic modal with header, body, and footer." });
			} }),
			(0, import_web$8.createComponent)(ModalFooter, { get children() {
				return (0, import_web$8.createComponent)(Button, {
					get onClick() {
						return props.close;
					},
					children: "Close"
				});
			} })
		];
	} }));
	const openSized = (size, name) => () => openModal((props) => (0, import_web$8.createComponent)(ModalRoot, {
		size,
		get children() {
			return [
				(0, import_web$8.createComponent)(ModalHeader, {
					get close() {
						return props.close;
					},
					children: name
				}),
				(0, import_web$8.createComponent)(ModalBody, { get children() {
					return (0, import_web$8.createComponent)(Text, { get children() {
						return ["ModalSizes.", name];
					} });
				} }),
				(0, import_web$8.createComponent)(ModalFooter, { get children() {
					return (0, import_web$8.createComponent)(Button, {
						get onClick() {
							return props.close;
						},
						children: "Close"
					});
				} })
			];
		}
	}));
	const openNoClose = () => openModal((props) => (0, import_web$8.createComponent)(ModalRoot, { get children() {
		return [
			(0, import_web$8.createComponent)(ModalHeader, {
				get close() {
					return props.close;
				},
				noClose: true,
				children: "No Close Button"
			}),
			(0, import_web$8.createComponent)(ModalBody, { get children() {
				return (0, import_web$8.createComponent)(Text, { children: "Press Escape or click outside to close." });
			} }),
			(0, import_web$8.createComponent)(ModalFooter, { get children() {
				return (0, import_web$8.createComponent)(Button, {
					get onClick() {
						return props.close;
					},
					children: "Manual Close"
				});
			} })
		];
	} }));
	const openConfirm = () => openModal((props) => (0, import_web$8.createComponent)(ModalRoot, { get children() {
		return [
			(0, import_web$8.createComponent)(ModalHeader, {
				get close() {
					return props.close;
				},
				children: "Confirm"
			}),
			(0, import_web$8.createComponent)(ModalBody, { get children() {
				return (0, import_web$8.createComponent)(Text, { children: "Uses ModalConfirmFooter." });
			} }),
			(0, import_web$8.createComponent)(ModalConfirmFooter, {
				get close() {
					return props.close;
				},
				confirmText: "Confirm",
				type: "confirm",
				onConfirm: () => showToast({
					title: "Confirmed!",
					color: ToastColors.SUCCESS
				})
			})
		];
	} }));
	const openDanger = () => openModal((props) => (0, import_web$8.createComponent)(ModalRoot, { get children() {
		return [
			(0, import_web$8.createComponent)(ModalHeader, {
				get close() {
					return props.close;
				},
				children: "Danger"
			}),
			(0, import_web$8.createComponent)(ModalBody, { get children() {
				return (0, import_web$8.createComponent)(Text, { children: "Dangerous action!" });
			} }),
			(0, import_web$8.createComponent)(ModalConfirmFooter, {
				get close() {
					return props.close;
				},
				type: "danger",
				confirmText: "Delete",
				onConfirm: () => {}
			})
		];
	} }));
	const openScrollable = () => openModal((props) => (0, import_web$8.createComponent)(ModalRoot, {
		get size() {
			return ModalSizes.MEDIUM;
		},
		get children() {
			return [
				(0, import_web$8.createComponent)(ModalHeader, {
					get close() {
						return props.close;
					},
					children: "Scrollable"
				}),
				(0, import_web$8.createComponent)(ModalBody, { get children() {
					return (0, import_web$8.createComponent)(For, {
						get each() {
							return Array(20).fill(0);
						},
						children: (_, i) => (0, import_web$8.createComponent)(Text, {
							style: { "margin-bottom": "16px" },
							get children() {
								return [
									"Paragraph ",
									(0, import_web$2.memo)(() => i() + 1),
									". Lorem ipsum dolor sit amet."
								];
							}
						})
					});
				} }),
				(0, import_web$8.createComponent)(ModalFooter, { get children() {
					return (0, import_web$8.createComponent)(Button, {
						get onClick() {
							return props.close;
						},
						children: "Close"
					});
				} })
			];
		}
	}));
	const openNested = () => openModal((props) => (0, import_web$8.createComponent)(ModalRoot, { get children() {
		return [
			(0, import_web$8.createComponent)(ModalHeader, {
				get close() {
					return props.close;
				},
				children: "First Modal"
			}),
			(0, import_web$8.createComponent)(ModalBody, { get children() {
				return (0, import_web$8.createComponent)(Text, { children: "Open another modal on top!" });
			} }),
			(0, import_web$8.createComponent)(ModalFooter, { get children() {
				return (0, import_web$8.createComponent)(Button, {
					onClick: () => openModal((props2) => (0, import_web$8.createComponent)(ModalRoot, { get children() {
						return [
							(0, import_web$8.createComponent)(ModalHeader, {
								get close() {
									return props2.close;
								},
								children: "Nested Modal"
							}),
							(0, import_web$8.createComponent)(ModalBody, { get children() {
								return (0, import_web$8.createComponent)(Text, { children: "This is nested!" });
							} }),
							(0, import_web$8.createComponent)(ModalFooter, { get children() {
								return (0, import_web$8.createComponent)(Button, {
									get onClick() {
										return props2.close;
									},
									children: "Close"
								});
							} })
						];
					} })),
					children: "Open Nested"
				});
			} })
		];
	} }));
	return (0, import_web$8.createComponent)(Section, {
		title: "Modals",
		get children() {
			return [
				(0, import_web$8.createComponent)(SubSection, {
					title: "Basic",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [
								(0, import_web$8.createComponent)(Button, {
									onClick: openBasic,
									children: "Basic"
								}),
								(0, import_web$8.createComponent)(Button, {
									onClick: openNoClose,
									children: "No Close Button"
								}),
								(0, import_web$8.createComponent)(Button, {
									onClick: openScrollable,
									children: "Scrollable"
								}),
								(0, import_web$8.createComponent)(Button, {
									onClick: openNested,
									children: "Nested"
								})
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Sizes",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [
								(0, import_web$8.createComponent)(Button, {
									get onClick() {
										return openSized(ModalSizes.SMALL, "SMALL");
									},
									children: "Small"
								}),
								(0, import_web$8.createComponent)(Button, {
									get onClick() {
										return openSized(ModalSizes.MEDIUM, "MEDIUM");
									},
									children: "Medium"
								}),
								(0, import_web$8.createComponent)(Button, {
									get onClick() {
										return openSized(ModalSizes.LARGE, "LARGE");
									},
									children: "Large"
								}),
								(0, import_web$8.createComponent)(Button, {
									get onClick() {
										return openSized(ModalSizes.DYNAMIC, "DYNAMIC");
									},
									children: "Dynamic"
								})
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Confirm Footer",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [(0, import_web$8.createComponent)(Button, {
								onClick: openConfirm,
								get color() {
									return ButtonColors.ACTIVE;
								},
								children: "Confirm"
							}), (0, import_web$8.createComponent)(Button, {
								onClick: openDanger,
								get color() {
									return ButtonColors.CRITICAL_PRIMARY;
								},
								children: "Danger"
							})];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "openConfirmationModal",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [(0, import_web$8.createComponent)(Button, {
								onClick: () => openConfirmationModal({
									header: () => "Confirm?",
									body: () => "Are you sure?",
									type: "confirm",
									confirmText: "Yes"
								}).then(() => showToast({
									title: "Confirmed!",
									color: ToastColors.SUCCESS
								})),
								children: "Confirm Dialog"
							}), (0, import_web$8.createComponent)(Button, {
								onClick: () => openConfirmationModal({
									header: () => "Delete?",
									body: () => "Cannot be undone.",
									type: "danger",
									confirmText: "Delete"
								}),
								get color() {
									return ButtonColors.CRITICAL_PRIMARY;
								},
								children: "Danger Dialog"
							})];
						} });
					}
				})
			];
		}
	});
}
function IconTests() {
	return (0, import_web$8.createComponent)(Section, {
		title: "Icons",
		get children() {
			return [
				(() => {
					const _el$25 = (0, import_web$5.getNextElement)(_tmpl$2);
					(0, import_web$7.insert)(_el$25, (0, import_web$8.createComponent)(For, {
						each: ICONS,
						children: ({ Icon, name }) => (() => {
							const _el$26 = (0, import_web$5.getNextElement)(_tmpl$3), _el$28 = _el$26.firstChild, [_el$29, _co$7] = (0, import_web$6.getNextMarker)(_el$28.nextSibling), _el$27 = _el$29.nextSibling;
							(0, import_web$7.insert)(_el$26, (0, import_web$8.createComponent)(Icon, {}), _el$29, _co$7);
							(0, import_web$7.insert)(_el$27, name);
							(0, import_web$4.effect)((_p$) => {
								const _v$ = index_jsx_default.iconItem, _v$2 = index_jsx_default.iconLabel;
								_v$ !== _p$._v$ && (0, import_web$3.className)(_el$26, _p$._v$ = _v$);
								_v$2 !== _p$._v$2 && (0, import_web$3.className)(_el$27, _p$._v$2 = _v$2);
								return _p$;
							}, {
								_v$: undefined,
								_v$2: undefined
							});
							return _el$26;
						})()
					}));
					(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$25, index_jsx_default.iconGrid));
					return _el$25;
				})(),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Sizes",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [
								(0, import_web$8.createComponent)(IconCog, {
									width: "16",
									height: "16"
								}),
								(0, import_web$8.createComponent)(IconCog, {
									width: "24",
									height: "24"
								}),
								(0, import_web$8.createComponent)(IconCog, {
									width: "32",
									height: "32"
								}),
								(0, import_web$8.createComponent)(IconCog, {
									width: "48",
									height: "48"
								})
							];
						} });
					}
				}),
				(0, import_web$8.createComponent)(SubSection, {
					title: "Colors",
					get children() {
						return (0, import_web$8.createComponent)(Row, { get children() {
							return [
								(0, import_web$8.createComponent)(IconCog, { style: { color: "var(--text-default)" } }),
								(0, import_web$8.createComponent)(IconCog, { style: { color: "var(--status-positive)" } }),
								(0, import_web$8.createComponent)(IconCog, { style: { color: "var(--status-warning)" } }),
								(0, import_web$8.createComponent)(IconCog, { style: { color: "var(--status-critical)" } }),
								(0, import_web$8.createComponent)(IconCog, { style: { color: "var(--brand-500)" } })
							];
						} });
					}
				})
			];
		}
	});
}
function UtilityTests() {
	return (0, import_web$8.createComponent)(Section, {
		title: "Utilities",
		get children() {
			return [(0, import_web$8.createComponent)(SubSection, {
				title: "Tooltips",
				get children() {
					const _el$30 = (0, import_web$5.getNextElement)(_tmpl$4), _el$31 = _el$30.firstChild, _el$32 = _el$31.nextSibling, _el$33 = _el$32.nextSibling;
					(0, import_web$1.use)(tooltip, _el$31, () => "Top tooltip");
					(0, import_web$1.use)(tooltip, _el$32, () => [true, "Bottom tooltip"]);
					(0, import_web$1.use)(tooltip, _el$33, () => (0, import_web$5.getNextElement)(_tmpl$5));
					(0, import_web$4.effect)((_p$) => {
						const _v$3 = index_jsx_default.tooltipDemo, _v$4 = index_jsx_default.tooltipTarget, _v$5 = index_jsx_default.tooltipTarget, _v$6 = index_jsx_default.tooltipTarget;
						_v$3 !== _p$._v$3 && (0, import_web$3.className)(_el$30, _p$._v$3 = _v$3);
						_v$4 !== _p$._v$4 && (0, import_web$3.className)(_el$31, _p$._v$4 = _v$4);
						_v$5 !== _p$._v$5 && (0, import_web$3.className)(_el$32, _p$._v$5 = _v$5);
						_v$6 !== _p$._v$6 && (0, import_web$3.className)(_el$33, _p$._v$6 = _v$6);
						return _p$;
					}, {
						_v$3: undefined,
						_v$4: undefined,
						_v$5: undefined,
						_v$6: undefined
					});
					return _el$30;
				}
			}), (0, import_web$8.createComponent)(SubSection, {
				title: "Nice Scrollbars",
				get children() {
					const _el$34 = (0, import_web$5.getNextElement)(_tmpl$2);
					(0, import_web$7.insert)(_el$34, (0, import_web$8.createComponent)(For, {
						get each() {
							return Array(20).fill(0);
						},
						children: (_, i) => (() => {
							const _el$36 = (0, import_web$5.getNextElement)(_tmpl$6), _el$37 = _el$36.firstChild, _el$38 = _el$37.nextSibling, [_el$39, _co$8] = (0, import_web$6.getNextMarker)(_el$38.nextSibling);
							(0, import_web$7.insert)(_el$36, () => i() + 1, _el$39, _co$8);
							return _el$36;
						})()
					}));
					(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$34, `${niceScrollbarsClass()} ${index_jsx_default.scrollDemo}`));
					return _el$34;
				}
			})];
		}
	});
}
function CrashingComponent() {
	throw new Error("Intentional crash for testing");
}
function ErrorBoundaryTests() {
	const [showCrash, setShowCrash] = createSignal(false);
	return (0, import_web$8.createComponent)(Section, {
		title: "Error Boundary",
		get children() {
			return [(0, import_web$8.createComponent)(Show, {
				get when() {
					return showCrash();
				},
				get fallback() {
					return (0, import_web$8.createComponent)(Text, { children: "Click to crash component" });
				},
				get children() {
					return (0, import_web$8.createComponent)(CrashingComponent, {});
				}
			}), (0, import_web$8.createComponent)(Button, {
				get ["class"]() {
					return index_jsx_default.crashButton;
				},
				onClick: () => setShowCrash(true),
				get color() {
					return ButtonColors.CRITICAL_PRIMARY;
				},
				children: "Crash"
			})];
		}
	});
}
const settings = () => (() => {
	const _el$40 = (0, import_web$5.getNextElement)(_tmpl$7), _el$41 = _el$40.firstChild, [_el$42, _co$9] = (0, import_web$6.getNextMarker)(_el$41.nextSibling), _el$43 = _el$42.nextSibling, [_el$44, _co$0] = (0, import_web$6.getNextMarker)(_el$43.nextSibling), _el$45 = _el$44.nextSibling, [_el$46, _co$1] = (0, import_web$6.getNextMarker)(_el$45.nextSibling), _el$47 = _el$46.nextSibling, [_el$48, _co$10] = (0, import_web$6.getNextMarker)(_el$47.nextSibling), _el$49 = _el$48.nextSibling, [_el$50, _co$11] = (0, import_web$6.getNextMarker)(_el$49.nextSibling), _el$51 = _el$50.nextSibling, [_el$52, _co$12] = (0, import_web$6.getNextMarker)(_el$51.nextSibling), _el$53 = _el$52.nextSibling, [_el$54, _co$13] = (0, import_web$6.getNextMarker)(_el$53.nextSibling), _el$55 = _el$54.nextSibling, [_el$56, _co$14] = (0, import_web$6.getNextMarker)(_el$55.nextSibling), _el$57 = _el$56.nextSibling, [_el$58, _co$15] = (0, import_web$6.getNextMarker)(_el$57.nextSibling), _el$59 = _el$58.nextSibling, [_el$60, _co$16] = (0, import_web$6.getNextMarker)(_el$59.nextSibling), _el$61 = _el$60.nextSibling, [_el$62, _co$17] = (0, import_web$6.getNextMarker)(_el$61.nextSibling), _el$63 = _el$62.nextSibling, [_el$64, _co$18] = (0, import_web$6.getNextMarker)(_el$63.nextSibling);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(ButtonTests, {}), _el$42, _co$9);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(ReactivityTests, {}), _el$44, _co$0);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(CheckboxTests, {}), _el$46, _co$1);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(SwitchTests, {}), _el$48, _co$10);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(HeaderTests, {}), _el$50, _co$11);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(TextTests, {}), _el$52, _co$12);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(InputTests, {}), _el$54, _co$13);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(ToastTests, {}), _el$56, _co$14);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(ModalTests, {}), _el$58, _co$15);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(IconTests, {}), _el$60, _co$16);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(UtilityTests, {}), _el$62, _co$17);
	(0, import_web$7.insert)(_el$40, (0, import_web$8.createComponent)(ErrorBoundaryTests, {}), _el$64, _co$18);
	return _el$40;
})();

//#endregion
exports.settings = settings
return exports;
})({});