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
//#region plugins/hiddenChannels/assets/style.scss
shelter.plugin.scoped.ui.injectCss(`.ccAoOa_hiddenChannel > div > div > svg > path[d^="M16"][d\$="0Z"], .ccAoOa_hiddenChannel > div > div > svg > path[d^="M18"][d\$="2Z"], .ccAoOa_hiddenChannel > div > div > svg > path[d^="M6"][d\$="14Z"], .ccAoOa_headerBar > svg > path[d^="M16"][d\$="0Z"], .ccAoOa_headerBar > svg > path[d^="M18"][d\$="2Z"] {
  fill: #ed4245 !important;
}

.ccAoOa_divider {
  color: var(--background-mod-strong);
  align-items: center;
  width: 4px;
  height: 4px;
  margin: 0 12px;
}

.ccAoOa_channelTitle {
  color: var(--text-default);
  white-space: nowrap;
  margin-top: 1px;
  font-weight: 500;
}

.ccAoOa_topic {
  font: var(--font-primary);
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  color: var(--text-tertiary);
  cursor: pointer;
  flex: auto;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  position: relative;
  overflow: hidden;
}

.ccAoOa_topicWrapper {
  text-overflow: ellipsis;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
}

.ccAoOa_mainBody {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
}

.ccAoOa_bold {
  color: var(--text-default);
  white-space: nowrap;
  font-weight: 500;
}

.ccAoOa_headerBar {
  border-bottom: 1px solid var(--border-subtle);
  height: calc(var(--custom-channel-header-height)  - 1px);
  max-height: var(--custom-channel-header-height);
  background: var(--bg-overlay-2, var(--background-base-lower));
  width: 100%;
  padding-left: 9px;
  padding-right: var(--space-xs);
  flex-direction: row;
  align-items: center;
  display: flex;
}

.ccAoOa_topicModal {
  white-space: pre-wrap;
  margin-bottom: 20px;
}
`);
var style_default = {
	"hiddenChannel": "ccAoOa_hiddenChannel",
	"channelTitle": "ccAoOa_channelTitle",
	"bold": "ccAoOa_bold",
	"topicWrapper": "ccAoOa_topicWrapper",
	"topicModal": "ccAoOa_topicModal",
	"mainBody": "ccAoOa_mainBody",
	"divider": "ccAoOa_divider",
	"topic": "ccAoOa_topic",
	"headerBar": "ccAoOa_headerBar"
};

//#endregion
//#region plugins/hiddenChannels/assets/LockedChannelIcon.jsx
var import_web$24 = __toESM(require_web(), 1);
var import_web$25 = __toESM(require_web(), 1);
const _tmpl$$4 = /*#__PURE__*/ (0, import_web$24.template)(`<svg width="20" height="20" viewBox="0 0 24 24" style="margin: 0 8px 0 6px; color: var(--channel-icon); min-width: 20px;"><title>NSFW Lock</title><path fill="currentColor" fill-rule="evenodd" d="M18.09 1.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.92 1.92 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"></path><path fill="currentColor" d="M11.45 8c.35 0 .6.35.55.7-.02.2-.02.4 0 .6.04.35-.2.7-.55.7h-1.6l-.67 4h4.97l.26-1.55c.05-.27.31-.45.59-.45h.92c.31 0 .55.28.5.58L16.18 14H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86L8 21.16a1 1 0 0 1-2-.32L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 0 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h1.26Z"></path></svg>`, 8), _tmpl$2$1 = /*#__PURE__*/ (0, import_web$24.template)(`<svg title="Lock" width="20" height="20" viewBox="0 0 24 24" style="margin: 0 8px 0 6px; color: var(--channel-icon); min-width: 20px;"><title>Lock</title><path fill="currentColor" fill-rule="evenodd" d="M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z" clip-rule="evenodd"></path><path fill="currentColor" d="M12.5 8c.28 0 .5.22.5.5V9c0 .1 0 .2.02.31.03.34-.21.69-.56.69H9.85l-.67 4h4.97l.28-1.68c.06-.34.44-.52.77-.43a3 3 0 0 0 .8.11c.27 0 .47.24.43.5l-.25 1.5H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86L8 21.16a1 1 0 0 1-2-.32L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 1 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h2.31Z"></path></svg>`, 8);
function LockedChannelIcon(props) {
	return props.channel.nsfw ? (0, import_web$25.getNextElement)(_tmpl$$4) : (0, import_web$25.getNextElement)(_tmpl$2$1);
}

//#endregion
//#region plugins/hiddenChannels/assets/ChannelTopic.jsx
var import_web$14 = __toESM(require_web(), 1);
var import_web$15 = __toESM(require_web(), 1);
var import_web$16 = __toESM(require_web(), 1);
var import_web$17 = __toESM(require_web(), 1);
var import_web$18 = __toESM(require_web(), 1);
var import_web$19 = __toESM(require_web(), 1);
var import_web$20 = __toESM(require_web(), 1);
var import_web$21 = __toESM(require_web(), 1);
var import_web$22 = __toESM(require_web(), 1);
var import_web$23 = __toESM(require_web(), 1);
const _tmpl$$3 = /*#__PURE__*/ (0, import_web$14.template)(`<div></div>`, 2), _tmpl$2 = /*#__PURE__*/ (0, import_web$14.template)(`<div><svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 4 4"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg><div></div></div>`, 8);
const { ui: { openModal, ModalBody, ModalRoot, ModalHeader, ModalSizes } } = shelter;
function openTopicModal(props) {
	openModal((mprops) => (0, import_web$23.createComponent)(ModalRoot, {
		get size() {
			return ModalSizes.DYNAMIC;
		},
		get children() {
			return [(0, import_web$23.createComponent)(ModalHeader, {
				get close() {
					return mprops.close;
				},
				get children() {
					return [(0, import_web$23.createComponent)(LockedChannelIcon, { get channel() {
						return props.channel;
					} }), (0, import_web$22.memo)(() => props.channel.name)];
				}
			}), (0, import_web$23.createComponent)(ModalBody, { get children() {
				const _el$ = (0, import_web$20.getNextElement)(_tmpl$$3);
				(0, import_web$21.insert)(_el$, () => props.channel.topic);
				(0, import_web$19.effect)(() => (0, import_web$18.className)(_el$, style_default.topicModal));
				return _el$;
			} })];
		}
	}));
}
function ChannelTopic(props) {
	return props.channel.topic ? (() => {
		const _el$2 = (0, import_web$20.getNextElement)(_tmpl$2), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
		_el$4.$$click = () => openTopicModal(props);
		_el$4.addEventListener("keypress", (e) => {
			if (e.key === "Enter") openTopicModal(props);
		});
		(0, import_web$21.insert)(_el$4, () => props.channel.topic);
		(0, import_web$19.effect)((_p$) => {
			const _v$ = style_default.topicWrapper, _v$2 = style_default.divider, _v$3 = style_default.topic;
			_v$ !== _p$._v$ && (0, import_web$18.className)(_el$2, _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$16.setAttribute)(_el$3, "class", _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && (0, import_web$18.className)(_el$4, _p$._v$3 = _v$3);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined,
			_v$3: undefined
		});
		(0, import_web$17.runHydrationEvents)();
		return _el$2;
	})() : [];
}
(0, import_web$15.delegateEvents)(["click"]);

//#endregion
//#region plugins/hiddenChannels/assets/HeaderBar.jsx
var import_web$9 = __toESM(require_web(), 1);
var import_web$10 = __toESM(require_web(), 1);
var import_web$11 = __toESM(require_web(), 1);
var import_web$12 = __toESM(require_web(), 1);
var import_web$13 = __toESM(require_web(), 1);
const _tmpl$$2 = /*#__PURE__*/ (0, import_web$9.template)(`<div></div>`, 2);
function HeaderBar(props) {
	return (() => {
		const _el$ = (0, import_web$12.getNextElement)(_tmpl$$2);
		(0, import_web$13.insert)(_el$, () => props.children);
		(0, import_web$11.effect)(() => (0, import_web$10.className)(_el$, style_default.headerBar));
		return _el$;
	})();
}

//#endregion
//#region plugins/hiddenChannels/assets/ChestIcon.jsx
var import_web$7 = __toESM(require_web(), 1);
var import_web$8 = __toESM(require_web(), 1);
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$7.template)(`<svg xmlns="http://www.w3.org/2000/svg" height="126" width="323" style="padding: 8px 0 16px 0;"><mask id="a" fill="#fff"><path d="M0 58.125V116h313.999V.249H0z" fill-rule="evenodd"></path></mask><g fill="none" fill-rule="evenodd"><path d="M313.999 47.157c0 25.906-21.001 46.908-46.908 46.908h-31.654c-6.057 0-10.967 4.91-10.967 10.967 0 6.058-4.91 10.968-10.967 10.968H38.33C17.161 116 0 98.84 0 77.67v-.004c0-21.169 17.161-38.33 38.33-38.33h56.557c10.791 0 19.54-8.748 19.54-19.54v-.007c0-10.79 8.748-19.54 19.54-19.54h133.124c25.907 0 46.908 21.002 46.908 46.908" fill="#4f545c" fill-opacity=".3" mask="url(#a)" transform="translate(0 10.082)"></path><path d="m20.157 92.818 13.708-6.559a6.538 6.538 0 0 1 8.424 2.514l3.145 5.155c.855 1.401 2.33 2.25 3.968 2.195A4.527 4.527 0 0 0 53.3 93.8l2.814-4.967c1.648-2.91 5.203-4.12 8.268-2.817l3.764 1.6v-8.18l-6.95-4.818a1.001 1.001 0 0 1-.43-.822v-3.489H38.247v3.49c0 .327-.16.633-.43.821l-10.313 7.148c-3.772 2.615-6.383 6.584-7.348 11.053" fill="#4f545c"></path><path d="M37.703 124.082h15.35v-5.829h-1.61a1 1 0 0 1-1-1v-7.83a1 1 0 0 1 1-1h1.61v-6.829a1 1 0 0 1 1-1h5.525v-6.83a1 1 0 0 1 1-1h7.567v-2.977l-4.546-1.932a4.561 4.561 0 0 0-5.746 1.963l-2.814 4.968a6.507 6.507 0 0 1-5.605 3.337l-.109.001c-2.304 0-4.39-1.173-5.598-3.154l-3.145-5.156a4.547 4.547 0 0 0-5.854-1.75l-14.911 7.135c-.389 4.859 1.167 9.694 4.374 13.374z" fill="#36393e"></path><path d="M242.681 118.253h-11.072v5.829h11.072z" fill="#4f545c"></path><path d="M231.609 116.253h7.157v-5.83h-7.157z" fill="#72767d"></path><g fill="#36393e"><path d="M62.448 124.082v-5.829h-7.396v5.829h6.257zM52.443 116.253h7.396v-5.83h-7.396zM55.053 108.423h7.396v-5.829h-7.396zM61.578 100.593h6.567v-5.829h-6.567z"></path></g><path d="M103.596 124.082h10.831v-5.655h-10.831z" fill="#4f545c"></path><path d="M79.889 92.764h10.963a1 1 0 0 1 1 1v6.83h12.05a1 1 0 0 1 1 1v7.829a1 1 0 0 1-1 1h-4.22v5.83h2.915c.199 0 .374.073.53.174h10.952v-41.15h-34.19zm139.976-34.798v-4.568c0-6.357-5.171-11.528-11.527-11.528h-61.245c-6.356 0-11.527 5.17-11.527 11.528v4.568zm0 29.873V75.276h-20.807c-.057 0-.106-.023-.16-.032v11.9a1 1 0 0 1-1 1v6.48a1 1 0 0 1 1 1v3.707a6.576 6.576 0 0 1-6.568 6.569h-16.703a6.576 6.576 0 0 1-6.567-6.57V74.277h-6.583a1 1 0 0 1-1 1h-25.912v33.147h2.795c1.534-6.214 7.14-10.841 13.821-10.841H157c7.858 0 14.25 6.393 14.25 14.25 0 1.61-.28 3.15-.774 4.595h49.39v-22.76a1 1 0 0 1 1-1v-3.828a1 1 0 0 1-1-1" fill="#36393e"></path><path d="M187.765 85.763a6.637 6.637 0 0 0 3.026-5.574c0-3.67-2.985-6.655-6.655-6.655s-6.656 2.985-6.656 6.655a6.637 6.637 0 0 0 3.026 5.574c.338.22.51.623.437 1.02l-1.37 7.428c.03.186.192.328.387.328h8.351a.392.392 0 0 0 .387-.328l-1.37-7.428a1.002 1.002 0 0 1 .437-1.02" fill="#36393e"></path><path d="M80.717 124.082v-5.829H64.448v5.829h9.483z" fill="#4f545c"></path><path d="M76.803 110.423H61.839v5.83h14.964z" fill="#72767d"></path><path d="M68.407 108.423h13.615v-5.829H64.448v5.829zM70.973 100.593h18.879v-5.829H70.973z" fill="#4f545c"></path><path d="M101.596 124.082v-5.829H82.717v5.829H92.2z" fill="#72767d"></path><path d="M88.286 110.423h-9.483v5.83H97.682v-5.83h-3.176z" fill="#4f545c"></path><path d="M93.506 102.594h-9.483v5.829h18.879v-5.829z" fill="#72767d"></path><path d="M123.822 118.253h-7.396v5.829h7.396zM124.822 116.253h3.437v-5.83h-7.396v5.83z" fill="#36393e"></path><path d="M144.701 124.082v-.145a14.305 14.305 0 0 1-5.224-5.684h-13.655v5.829h9.483zm-14.442-13.66v5.83h8.383a14.181 14.181 0 0 1-.711-4.42c0-.475.026-.945.072-1.41zm9.672 1.41c0 5.68 3.891 10.455 9.144 11.836-3.81-2.561-6.326-6.909-6.326-11.836s2.515-9.275 6.326-11.836c-5.253 1.381-9.144 6.156-9.144 11.836" fill="#4f545c"></path><path d="M157 120.06c-4.538 0-8.228-3.69-8.228-8.229a1 1 0 0 1 2 0c0 3.435 2.793 6.229 6.227 6.229s6.228-2.795 6.228-6.229a6.235 6.235 0 0 0-6.228-6.226 1 1 0 1 1 0-2c4.537 0 8.228 3.69 8.228 8.226 0 4.539-3.69 8.229-8.228 8.229m0-20.479c-6.755 0-12.25 5.497-12.25 12.25 0 6.756 5.495 12.25 12.25 12.25s12.25-5.494 12.25-12.25c0-6.753-5.495-12.25-12.25-12.25" fill="#72767d"></path><path d="M262.324 81.186h2.126a1 1 0 1 1 0 2h-1.126v9.092c0 .183.149.333.333.333h6.56c.184 0 .333-.15.333-.333V82.186a1 1 0 0 1 1-1h9.845a21.25 21.25 0 0 1-.293-2.427 21.126 21.126 0 0 1 .294-4.799h-40.623a.334.334 0 0 0-.334.333v6.56c0 .184.15.333.334.333h6.443a1 1 0 1 1 0 2h-1.95a.974.974 0 0 1 .068.333v8.76c0 .182.149.332.333.332h9.226c.184 0 .333-.15.333-.333V82.186a1 1 0 1 1 2 0h4.098a1 1 0 0 1 1-1m46.457 2.382a8.937 8.937 0 0 1-6.718 3.005c-4.732 0-8.71-3.709-8.981-8.49-.135-2.402.672-4.71 2.273-6.504s3.805-2.856 6.205-2.99a8.937 8.937 0 0 1 6.502 2.271 8.94 8.94 0 0 1 2.99 6.205 8.941 8.941 0 0 1-2.271 6.503m7.459 6.66a18.875 18.875 0 0 0 4.797-13.727 18.87 18.87 0 0 0-6.315-13.1c-3.784-3.379-8.655-5.078-13.727-4.797a18.874 18.874 0 0 0-13.1 6.315 18.872 18.872 0 0 0-4.796 13.727c.592 10.46 9.582 18.48 20.042 17.897a18.876 18.876 0 0 0 13.099-6.316" fill="#4f545c"></path><g fill="#1f2225"><path d="M124.822 102.855a1 1 0 0 0-1 1v2.865a1 1 0 1 0 2 0v-2.865a1 1 0 0 0-1-1m62.943-17.092c-.338.22-.51.623-.437 1.02l1.37 7.428a.392.392 0 0 1-.387.328h-8.35a.392.392 0 0 1-.388-.328l1.37-7.428a1.002 1.002 0 0 0-.437-1.02 6.637 6.637 0 0 1-3.026-5.574c0-3.67 2.986-6.655 6.656-6.655s6.655 2.985 6.655 6.655a6.637 6.637 0 0 1-3.026 5.574m-3.629-14.23c-4.773 0-8.656 3.883-8.656 8.656a8.626 8.626 0 0 0 3.381 6.858l-1.277 6.919a1.017 1.017 0 0 0-.016.182 2.394 2.394 0 0 0 2.392 2.39h8.351a2.394 2.394 0 0 0 2.392-2.39.934.934 0 0 0-.017-.182l-1.275-6.92a8.624 8.624 0 0 0 3.38-6.857c0-4.773-3.883-8.655-8.655-8.655M114.08 53.397v1.568a3 3 0 0 1-3 3h-28.19a3 3 0 0 1-3-3v-1.568c0-6.366 5.16-11.527 11.527-11.527h23.33c.688 0 1.156.674.943 1.33a32.79 32.79 0 0 0-1.61 10.197m-36.19 0v5.568a1 1 0 0 0 1 1h36.19a1 1 0 0 0 1-1v-5.568c0-4.209.832-8.292 2.473-12.135a1.002 1.002 0 0 0-.92-1.392H91.416c-7.46 0-13.527 6.068-13.527 13.527m138.976 4.569h-78.3a3 3 0 0 1-3-3v-1.568c0-6.367 5.162-11.528 11.528-11.528h61.245c6.366 0 11.527 5.16 11.527 11.528v1.568a3 3 0 0 1-3 3m5 1v-5.568c0-7.46-6.068-13.528-13.527-13.528h-61.245c-7.46 0-13.527 6.069-13.527 13.528v5.568a1 1 0 0 0 1 1h86.299a1 1 0 0 0 1-1m-64.866 44.639a1 1 0 1 0 0 2 6.235 6.235 0 0 1 6.228 6.227c0 3.434-2.794 6.228-6.228 6.228s-6.227-2.795-6.227-6.228a1 1 0 1 0-2 0c0 4.538 3.69 8.228 8.227 8.228s8.228-3.69 8.228-8.228c0-4.537-3.69-8.227-8.228-8.227m103.016-69.39h1.51v1.51a1 1 0 1 0 2 0v-1.51h1.51a1 1 0 1 0 0-2h-1.51v-1.51a1 1 0 0 0-2 0v1.51h-1.51a1 1 0 1 0 0 2M247.103 4.183a.997.997 0 0 0 .707-.293l1.184-1.183a1 1 0 0 0-1.414-1.414l-1.184 1.183a1 1 0 0 0 .707 1.707m-5.916 5.917a.997.997 0 0 0 .707-.293l1.183-1.184a.999.999 0 1 0-1.414-1.414l-1.183 1.184a.999.999 0 0 0 .707 1.707m6.623-2.891a.999.999 0 1 0-1.414 1.414l1.184 1.184a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414zm-6.147-3.32a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.413l-1.183-1.183a1 1 0 0 0-1.414 1.414zm45.332 98.575a1 1 0 0 0-1.415 0l-1.183 1.183a1 1 0 1 0 1.414 1.414l1.184-1.183a1 1 0 0 0 0-1.414m-7.331 5.916-1.183 1.184a.999.999 0 1 0 1.414 1.414l1.183-1.184a.999.999 0 1 0-1.414-1.414m6.147 0a.999.999 0 1 0-1.414 1.414l1.184 1.184a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414zm-4.733-4.733-1.183-1.184a1 1 0 0 0-1.414 1.415l1.183 1.182a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.413m-50.47-85.296a1.512 1.512 0 0 1 0 3.021c-.832 0-1.51-.677-1.51-1.51 0-.832.678-1.51 1.51-1.51m0 5.02a3.515 3.515 0 0 0 3.51-3.51 3.515 3.515 0 0 0-3.51-3.51 3.514 3.514 0 0 0-3.51 3.51 3.514 3.514 0 0 0 3.51 3.51"></path><path d="M316.24 90.228a18.874 18.874 0 0 1-13.1 6.315c-10.46.582-19.45-7.438-20.041-17.897a18.876 18.876 0 0 1 4.797-13.727 18.877 18.877 0 0 1 13.099-6.314c5.072-.281 9.943 1.418 13.727 4.797 3.786 3.38 6.029 8.032 6.315 13.099s-1.417 9.941-4.797 13.726zm-75.468-7.041h2.629a.997.997 0 0 0-.067.333v8.759a2.333 2.333 0 0 0 2.333 2.333h9.226a2.334 2.334 0 0 0 2.333-2.334v-.107a18.48 18.48 0 0 1 .525 3.23 18.017 18.017 0 0 1-4.414 13.173l-8.656 9.935v-1.256a1 1 0 0 0-1-1h-2.915v-6.83a1 1 0 0 0-1-1h-8.157V79.707a1 1 0 0 0-2 0v44.375h-65.366a14.338 14.338 0 0 0 5.377-5.655h51.245a1 1 0 0 0 1-1v-23.76a1 1 0 1 0-2 0v22.76h-49.39a14.022 14.022 0 0 0 .31-8.177c-1.655-6.353-7.578-10.668-14.145-10.668h-4.46c-6.68 0-12.285 4.627-13.82 10.84h-2.794V75.278h25.91a1 1 0 1 0 0-2h-26.91a1 1 0 0 0-1 1v34.145h-13.703a1 1 0 0 0-1 1v6.83h-2.784V74.278a1 1 0 0 0-1-1h-36.19a1 1 0 0 0-1 1v18.486h-7.744v-21.14a3 3 0 0 1 3-3h47.678a3 3 0 0 1 3 3v27.723a1 1 0 1 0 2 0V71.624a3 3 0 0 1 3-3h36.237a4 4 0 0 1 4 4v26.709a6.569 6.569 0 0 0 6.569 6.568h16.702a6.569 6.569 0 0 0 6.568-6.569v-3.707a1 1 0 0 0-2 0v2.707a4.569 4.569 0 0 1-4.57 4.567h-16.701a4.568 4.568 0 0 1-4.568-4.566v-28.71a2 2 0 0 1 2-2h21.838a2 2 0 0 1 2 2v17.522a1 1 0 1 0 2 0v-11.9c.055.008.104.032.16.032h20.807v12.562a1 1 0 1 0 2 0V74.276a1 1 0 0 0-1-1h-21.806c-.057 0-.106.023-.16.032v-.686a4 4 0 0 1 4-4h23.71a3 3 0 0 1 3 3v2.942a1 1 0 1 0 2 0v-2.049c0-1.22.989-2.209 2.209-2.209h3.253c1.22 0 2.209.99 2.209 2.21a2.32 2.32 0 0 0-.841 1.777v6.56a2.334 2.334 0 0 0 2.333 2.333zm-9.163 33.066h7.157v-5.83h-7.157zm11.072 7.829h-11.072v-5.83h11.072zm-97.931-12.25c0-6.754 5.495-12.25 12.25-12.25s12.25 5.496 12.25 12.25c0 6.755-5.495 12.25-12.25 12.25s-12.25-5.495-12.25-12.25zm-4.82 0c0-5.68 3.893-10.455 9.145-11.835-3.811 2.56-6.325 6.908-6.325 11.834 0 4.928 2.514 9.277 6.325 11.837-5.252-1.38-9.144-6.157-9.144-11.837zm-1.288 4.42h-8.383v-5.83h7.744c-.046.465-.072.935-.072 1.41 0 1.544.255 3.028.71 4.42zm6.059 7.83h-18.878v-5.83h13.653a14.329 14.329 0 0 0 5.225 5.686zm-23.837-7.83v-5.83h7.395v5.83h-3.436zm2.959 7.83h-7.396v-5.83h7.396zm-20.227 0h10.83v-5.655h-10.83zm-1-7.83h-2.914v-5.83h4.22a1 1 0 0 0 1-1v-7.828a1 1 0 0 0-1-1h-12.05v-6.83a1 1 0 0 0-1-1H79.889V75.277h34.19v41.15h-10.952a.977.977 0 0 0-.531-.174zm-1 7.83H82.717v-5.83h18.879zm-20.878-7.83h-1.915v-5.83H97.682v5.83H81.718zm0 7.83h-16.27v-5.83h16.27zm-18.88-7.83v-5.83H76.803v5.83H63.448zm.61 7.83h-7.395v-5.83h7.395zm-10.005-7.83v-5.83h7.396v5.83h-5.786zm.61 7.83h-13.53c-1.156 0-2.256-.5-3.015-1.372L24.19 108.574a18.092 18.092 0 0 1-4.36-10.267c-.162-1.825.897-3.543 2.55-4.334l12.347-5.908a4.546 4.546 0 0 1 5.855 1.75l3.144 5.155a6.502 6.502 0 0 0 5.598 3.154h.109a6.513 6.513 0 0 0 5.606-3.337l2.813-4.969a4.56 4.56 0 0 1 5.746-1.962l1.808.768a4.498 4.498 0 0 1 2.738 4.14h-7.567a1 1 0 0 0-1 1v6.83h-5.525a1 1 0 0 0-1 1v6.829h-1.61a1 1 0 0 0-1 1v7.83a1 1 0 0 0 1 1h1.61zM27.506 81.766l10.312-7.149c.269-.186.43-.493.43-.822v-.488a3 3 0 0 1 3-3h16.517a3 3 0 0 1 3 3v.489c0 .328.16.635.43.822l6.95 4.817v8.18l-3.763-1.6c-3.066-1.304-6.621-.092-8.27 2.817L53.3 93.8a4.53 4.53 0 0 1-3.898 2.324c-1.638.055-3.113-.794-3.967-2.195l-3.145-5.155a6.539 6.539 0 0 0-8.425-2.514l-13.708 6.559c.966-4.47 3.577-8.44 7.349-11.053zm6.285-16.963a3.475 3.475 0 0 1 3.472-3.471H61.75c1.915 0 3.473 1.556 3.473 3.501a3.477 3.477 0 0 1-3.473 3.474H37.263c-1.915 0-3.472-1.559-3.472-3.504zm28.657 37.79v5.83H55.053v-5.83zm-.87-2h6.567v-5.83h-6.567zm31.928 2h9.396v5.83H84.023v-5.83zm-3.654-2H70.973v-5.83H89.852zm-15.92 2h8.091v5.83H64.447v-5.83zm51.89-47.107c0-11.747 9.523-21.271 21.27-21.271h61.246c11.748 0 21.27 9.524 21.27 21.272v8.135a2 2 0 0 1-2 2h-99.785a2 2 0 0 1-2-2zm105.787 7.846a2 2 0 0 1 2-2h6.656c1.965 0 3.554 1.639 3.469 3.656-.078 1.887-1.757 3.319-3.646 3.319h-6.48a2 2 0 0 1-2-2zm90.735 8.698a19.864 19.864 0 0 0-3.43-7.026c-4.403-5.764-11.047-8.8-18.032-8.395a20.858 20.858 0 0 0-14.477 6.978 20.9 20.9 0 0 0-4.561 8.374H241.28c0-.966.583-1.806 1.445-2.244a5.495 5.495 0 0 0 3.006-5.191c-.14-2.865-2.821-5.194-5.69-5.194h-8.432v-3.846c0-12.852-10.418-23.271-23.27-23.271H97.634a1 1 0 0 0 0 2h33.099c1.852 0 2.75 2.323 1.337 3.52-5.041 4.27-8.247 10.64-8.247 17.75v8.137a2 2 0 0 1-2 2H72.145a2 2 0 0 1-2-2v-8.136c0-11.73 9.542-21.271 21.27-21.271a1 1 0 1 0 0-2c-12.83 0-23.27 10.44-23.27 23.27v19.606a1 1 0 0 1-1.57.823l-3.81-2.643v-1.31c0-.967.583-1.807 1.445-2.244a5.498 5.498 0 0 0 3.006-5.191c-.14-2.866-2.821-5.195-5.69-5.195H37.263c-3.017 0-5.472 2.455-5.472 5.502a5.474 5.474 0 0 0 3.03 4.894c.858.43 1.427 1.272 1.427 2.231v1.313l-9.882 6.85a20.111 20.111 0 0 0-8.477 14.034 20.18 20.18 0 0 0 4.794 15.732l8.036 9.224c1.692 1.941.313 4.97-2.261 4.97h-4.321a1 1 0 0 0 0 2h266.371a1 1 0 1 0 0-2h-43.3a2.528 2.528 0 0 1-2.527-2.528l9.816-11.265c3.568-4.097 5.585-9.4 5.263-14.824a20.136 20.136 0 0 0-2.534-8.646v-4.632a1 1 0 1 0-2 0v10.092a.334.334 0 0 1-.333.333h-9.226a.334.334 0 0 1-.333-.333V83.52a.974.974 0 0 0-.068-.333h1.95a1 1 0 1 0 0-2h-6.443a.334.334 0 0 1-.334-.333v-6.56c0-.183.149-.333.333-.333h40.624a21.126 21.126 0 0 0-.294 4.8c.047.824.155 1.63.293 2.426h-9.845a1 1 0 0 0-1 1v10.092a.334.334 0 0 1-.333.333h-6.56a.334.334 0 0 1-.333-.334v-9.09h1.126a1 1 0 1 0 0-2h-2.126a1 1 0 0 0-1 1v10.091a2.333 2.333 0 0 0 2.333 2.333h6.56a2.334 2.334 0 0 0 2.333-2.334v-9.09h9.295c2.48 8.936 10.682 15.387 20.209 15.386.398 0 .798-.01 1.2-.033a20.86 20.86 0 0 0 14.478-6.98c4.699-5.264 6.467-12.43 4.612-19.53z"></path><path d="M307.289 82.236a6.95 6.95 0 0 1-4.826 2.326c-3.853.2-7.166-2.74-7.384-6.594a6.949 6.949 0 0 1 1.768-5.057 6.948 6.948 0 0 1 5.23-2.337 6.95 6.95 0 0 1 4.653 1.778 6.953 6.953 0 0 1 2.326 4.826 6.955 6.955 0 0 1-1.767 5.058m.773-11.376a8.938 8.938 0 0 0-6.502-2.27 8.938 8.938 0 0 0-6.206 2.99 8.94 8.94 0 0 0-2.272 6.502c.27 4.782 4.249 8.491 8.981 8.491a8.937 8.937 0 0 0 6.718-3.005c1.601-1.793 2.408-4.103 2.272-6.503s-1.198-4.603-2.991-6.205"></path></g></g></svg>`, 56);
function Chest() {
	return (0, import_web$8.getNextElement)(_tmpl$$1);
}

//#endregion
//#region plugins/hiddenChannels/assets/Notice.jsx
var import_web = __toESM(require_web(), 1);
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
var import_web$3 = __toESM(require_web(), 1);
var import_web$4 = __toESM(require_web(), 1);
var import_web$5 = __toESM(require_web(), 1);
var import_web$6 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div><!#><!/><div><!#><!/><!#><!/><!#><!/></div></div>`, 12);
const { ui: { Header, HeaderTags, Text, TextTags } } = shelter;
var Notice_default = (props) => {
	return (() => {
		const _el$ = (0, import_web$3.getNextElement)(_tmpl$), _el$9 = _el$.firstChild, [_el$10, _co$4] = (0, import_web$4.getNextMarker)(_el$9.nextSibling), _el$2 = _el$10.nextSibling, _el$3 = _el$2.firstChild, [_el$4, _co$] = (0, import_web$4.getNextMarker)(_el$3.nextSibling), _el$5 = _el$4.nextSibling, [_el$6, _co$2] = (0, import_web$4.getNextMarker)(_el$5.nextSibling), _el$7 = _el$6.nextSibling, [_el$8, _co$3] = (0, import_web$4.getNextMarker)(_el$7.nextSibling);
		_el$.style.setProperty("min-width", "100%");
		_el$.style.setProperty("width", "100%");
		_el$.style.setProperty("overflow", "hidden");
		_el$.style.setProperty("border-top", "1px solid var(--app-border-frame)");
		_el$.style.setProperty("background", "var(--bg-overlay-chat, var(--background-base-lower))");
		(0, import_web$5.insert)(_el$, (0, import_web$6.createComponent)(HeaderBar, { get children() {
			return [
				(0, import_web$6.createComponent)(LockedChannelIcon, { get channel() {
					return props.channel;
				} }),
				(0, import_web$6.createComponent)(Text, {
					get tag() {
						return TextTags.channelTitle;
					},
					get ["class"]() {
						return style_default.channelTitle;
					},
					get children() {
						return props.channel.name;
					}
				}),
				(0, import_web$6.createComponent)(ChannelTopic, { get channel() {
					return props.channel;
				} })
			];
		} }), _el$10, _co$4);
		(0, import_web$5.insert)(_el$2, (0, import_web$6.createComponent)(Header, {
			get tag() {
				return HeaderTags.H2;
			},
			get ["class"]() {
				return style_default.bold;
			},
			children: "This is a hidden channel."
		}), _el$4, _co$);
		(0, import_web$5.insert)(_el$2, (0, import_web$6.createComponent)(Chest, {}), _el$6, _co$2);
		(0, import_web$5.insert)(_el$2, (0, import_web$6.createComponent)(Header, {
			get tag() {
				return HeaderTags.H5;
			},
			style: {
				color: "var(--text-secondary)",
				"margin-top": "12px"
			},
			children: "You cannot see the contents of this channel. However, you may see its name and topic."
		}), _el$8, _co$3);
		(0, import_web$2.effect)(() => (0, import_web$1.className)(_el$2, style_default.mainBody));
		return _el$;
	})();
};

//#endregion
//#region plugins/hiddenChannels/index.js
const { patcher, observeDom, http: { intercept } } = shelter.plugin.scoped;
const { flux: { stores: { PermissionStore, ChannelStore, GuildStore, ReadStateStore } }, ui: { renderSolidInReact }, util: { getFiber, reactFiberWalker } } = shelter;
const Permissions = { VIEW_CHANNEL: 1024n };
const ChannelTypes = {
	GUILD_TEXT: 0,
	DM: 1,
	GUILD_VOICE: 2,
	GROUP_DM: 3,
	GUILD_CATEGORY: 4,
	GUILD_ANNOUNCEMENT: 5,
	ANNOUNCEMENT_THREAD: 10,
	PUBLIC_THREAD: 11,
	PRIVATE_THREAD: 12,
	GUILD_STAGE_VOICE: 13,
	GUILD_DIRECTORY: 14,
	GUILD_FORUM: 15,
	GUILD_MEDIA: 16
};
const getChannel = ChannelStore.getChannel;
const getGuild = GuildStore.getGuild;
const originalCan = PermissionStore.can.bind({});
function canBeSeen(channel) {
	return originalCan(Permissions.VIEW_CHANNEL, channel);
}
const isRestrictedChannel = (channel) => {
	return channel?.permissionOverwrites?.length > 0;
};
const isVisibile = (originalChannel) => {
	let channel = originalChannel;
	if (typeof channel !== "object" && !channel?.id) try {
		channel = getChannel(channel);
	} catch {
		channel = null;
	}
	if (!channel || [
		ChannelTypes.DM,
		ChannelTypes.GROUP_DM,
		ChannelTypes.GUILD_CATEGORY,
		ChannelTypes.GUILD_STORE,
		ChannelTypes.GUILD_DIRECTORY
	].includes(channel.type)) return true;
	return canBeSeen(channel);
};
function onLoad() {
	patcher.instead("can", PermissionStore.__proto__, (originalArgs, originalFunction) => {
		if (originalArgs[0] === Permissions.VIEW_CHANNEL && !isRestrictedChannel(originalArgs[1])) return true;
		return originalFunction(...originalArgs);
	});
	let patchedChannelItem = false;
	const stopObservingChannelItem = observeDom("[data-list-item-id^=\"channels___\"", (element) => {
		queueMicrotask(() => {
			const channelId = element.dataset.listItemId.split("___")[1];
			if (Number.isNaN(Number.parseInt(channelId))) return;
			const component = reactFiberWalker(getFiber(element), "aria-label", true, true)?.type;
			if (!component || typeof component.render !== "function") return;
			stopObservingChannelItem();
			if (patchedChannelItem) return;
			patchedChannelItem = true;
			patcher.before("render", component, (originalArgs) => {
				if (!originalArgs[0]["data-list-item-id"]) return originalArgs;
				const channelId$1 = originalArgs[0]["data-list-item-id"].split("___")[1];
				if (!isVisibile(channelId$1)) originalArgs[0].className += ` ${style_default.hiddenChannel}`;
				return originalArgs;
			});
			const channelReadState = ReadStateStore.getForDebugging(channelId);
			patcher.after("canTrackUnreads", channelReadState.__proto__, function(_, previousReturn) {
				return previousReturn && isVisibile(this.channelId);
			});
		});
	});
	let routePatched = false;
	const stopObservingRoute = observeDom("[class^=\"chat_\"]", (element) => {
		queueMicrotask(() => {
			const component = reactFiberWalker(getFiber(element), "computedMatch", true, true)?.type;
			if (!component || typeof component.prototype.render !== "function") return;
			stopObservingRoute();
			if (routePatched) return;
			routePatched = true;
			patcher.before("render", component.prototype, function(originalArgs) {
				if (this.props?.path?.length !== 3) return originalArgs;
				const channelId = this.props?.computedMatch?.params?.channelId;
				const guildId = this.props?.computedMatch?.params?.guildId;
				if (!isVisibile(channelId) && guildId) this.props.render = () => {
					return renderSolidInReact(Notice_default, {
						channel: getChannel(channelId),
						guild: getGuild(guildId)
					});
				};
				return originalArgs;
			});
		});
	});
	intercept("GET", /\/channels\/\d+\/messages/, (req, send) => {
		const channelId = req.url.split("/")[2];
		if (!isVisibile(channelId)) return Promise.resolve({
			status: 200,
			body: JSON.stringify({
				messages: [],
				hasMore: false
			})
		});
		return send(req);
	});
}

//#endregion
exports.onLoad = onLoad
return exports;
})({});