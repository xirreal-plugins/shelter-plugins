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

  // plugins/hiddenChannels/index.js
  var hiddenChannels_exports = {};
  __export(hiddenChannels_exports, {
    onLoad: () => onLoad
  });

  // plugins/hiddenChannels/assets/Notice.jsx
  var import_web9 = __toESM(require_web(), 1);
  var import_web10 = __toESM(require_web(), 1);
  var import_web11 = __toESM(require_web(), 1);
  var import_web12 = __toESM(require_web(), 1);
  var import_web13 = __toESM(require_web(), 1);

  // plugins/hiddenChannels/assets/style.scss
  shelter.plugin.scoped.ui.injectCss(`.ccAoOa_hiddenChannel > div > div > svg > path[d^="M21"][d$="5Z"], .ccAoOa_hiddenChannel > div > div > svg > path[d^="M19"][d$="7Z"], .ccAoOa_hiddenChannel > div > div > svg > path[d^="M17"][d$="11Z"], shltr-rroot > svg > path[d^="M21"][d$="5Z"], shltr-rroot > svg > path[d^="M19"][d$="7Z"], .ccAoOa_hiddenChannel > div > div > svg > path[d^="M16"][d$="0Z"], .ccAoOa_hiddenChannel > div > div > svg > path[d^="M18"][d$="2Z"], .ccAoOa_hiddenChannel > div > div > svg > path[d^="M6"][d$="14Z"] {
  fill: #ed4245 !important;
}

.ccAoOa_divider {
  background: var(--background-modifier-accent);
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  width: 1px;
  height: 24px;
  margin: 0 8px;
}

.ccAoOa_topic {
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
  color: var(--header-secondary);
  cursor: pointer;
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
  margin: 0 0 0 8px;
  padding-top: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  position: relative;
  overflow: hidden;
}

.ccAoOa_topicWrapper {
  -webkit-box-flex: 1;
  flex-direction: row;
  -ms-flex: none;
  flex: auto;
  display: flex;
}

.ccAoOa_mainBody:before {
  content: "";
  height: 1px;
  -webkit-box-shadow: var(--elevation-low);
  box-shadow: var(--elevation-low);
  z-index: 1;
  pointer-events: none;
  transform: translate(0, -1px);
}

.ccAoOa_chat {
  -webkit-box-flex: 1;
  -ms-flex: none;
  flex-direction: column;
  flex: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: flex;
}
`);
  var style_default = { "topic": "ccAoOa_topic", "topicWrapper": "ccAoOa_topicWrapper", "mainBody": "ccAoOa_mainBody", "hiddenChannel": "ccAoOa_hiddenChannel", "chat": "ccAoOa_chat", "divider": "ccAoOa_divider" };

  // plugins/hiddenChannels/assets/ChannelTopic.jsx
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var import_web3 = __toESM(require_web(), 1);
  var import_web4 = __toESM(require_web(), 1);
  var import_web5 = __toESM(require_web(), 1);
  var import_web6 = __toESM(require_web(), 1);
  var import_web7 = __toESM(require_web(), 1);
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<div><div></div><div></div></div>`, 6);
  var _tmpl$2 = /* @__PURE__ */ (0, import_web.template)(`<div></div>`, 2);
  var {
    ui: {
      renderSolidInReact,
      openModal,
      ModalBody,
      ModalRoot,
      ModalHeader
    }
  } = shelter;
  function openTopicModal(props) {
    openModal((mprops) => (0, import_web6.createComponent)(ModalRoot, {
      get children() {
        return [(0, import_web6.createComponent)(ModalHeader, {
          get close() {
            return mprops.close;
          },
          get children() {
            return ["#", (0, import_web7.memo)(() => props.channel.name)];
          }
        }), (0, import_web6.createComponent)(ModalBody, {
          get children() {
            return props.channel.topic;
          }
        })];
      }
    }));
  }
  var ChannelTopic = (props) => {
    return props.channel.topic ? (() => {
      const _el$ = _tmpl$.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      _el$3.$$click = () => openTopicModal(props);
      _el$3.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          openTopicModal(props);
        }
      });
      (0, import_web5.insert)(_el$3, () => props.channel.topic);
      (0, import_web4.effect)((_p$) => {
        const _v$ = style_default.topicWrapper, _v$2 = style_default.divider, _v$3 = style_default.topic;
        _v$ !== _p$._v$ && (0, import_web3.className)(_el$, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0, import_web3.className)(_el$2, _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && (0, import_web3.className)(_el$3, _p$._v$3 = _v$3);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0
      });
      return _el$;
    })() : _tmpl$2.cloneNode(true);
  };
  var ChannelTopic_default = (props) => {
    return renderSolidInReact(ChannelTopic, props);
  };
  (0, import_web2.delegateEvents)(["click"]);

  // plugins/hiddenChannels/assets/LockedChannelIcon.jsx
  var import_web8 = __toESM(require_web(), 1);
  var _tmpl$3 = /* @__PURE__ */ (0, import_web8.template)(`<svg width="24" height="24" viewBox="0 0 24 24" style="margin: 0 8px; color: var(--channel-icon);"><title>NSFW Lock</title><path fill="currentColor" d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z"></path><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.8914 3.80204L22.2438 8.55654C22.5726 9.22119 22.0891 9.99999 21.3475 10L16.6179 10C15.8745 10 15.391 9.21769 15.7235 8.55279L18.1007 3.79829C18.4701 3.05951 19.5251 3.06172 19.8914 3.80204ZM18.4998 5H19.4999V7.5H18.4999L18.4998 5ZM18.4998 8.49887C18.4998 8.77589 18.7238 9 18.9998 9C19.2759 9 19.4999 8.77589 19.4999 8.49887C19.4999 8.22224 19.2759 7.99773 18.9998 7.99773C18.7238 7.99773 18.4998 8.22224 18.4998 8.49887Z"></path></svg>`, 8);
  var _tmpl$22 = /* @__PURE__ */ (0, import_web8.template)(`<svg title="Lock" width="24" height="24" viewBox="0 0 24 24" style="margin: 0 8px; color: var(--channel-icon);"><title>Lock</title><path fill="currentColor" d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z"></path><path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"></path></svg>`, 8);
  var {
    ui: {
      renderSolidInReact: renderSolidInReact2
    }
  } = shelter;
  var LockedChannelIconComponent = (props) => {
    return props.channel.nsfw ? _tmpl$3.cloneNode(true) : _tmpl$22.cloneNode(true);
  };
  var LockedChannelIcon_default = (props) => {
    return renderSolidInReact2(LockedChannelIconComponent, props);
  };

  // plugins/hiddenChannels/assets/Notice.jsx
  var _tmpl$4 = /* @__PURE__ */ (0, import_web9.template)(`<div><div><div><div></div></div></div></div>`, 8);
  var {
    ui: {
      ReactInSolidBridge,
      Header,
      HeaderTags
    }
  } = shelter;
  var Notice_default = (props) => {
    return (() => {
      const _el$ = _tmpl$4.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild;
      _el$.style.setProperty("width", "100%");
      _el$.style.setProperty("background", "var(--background-secondary)");
      _el$2.style.setProperty("width", "100%");
      _el$2.style.setProperty("background", "var(--background-primary)");
      (0, import_web12.insert)(_el$2, (0, import_web13.createComponent)(ReactInSolidBridge, {
        get comp() {
          return props.components.headerBar;
        },
        props: {
          className: "hc-header-bar"
        },
        get children() {
          return [(0, import_web13.createComponent)(LockedChannelIcon_default, {
            get channel() {
              return props.channel;
            }
          }), (0, import_web13.createComponent)(props.components.headerBar.Title, {
            get children() {
              return props.channel.name;
            }
          }), (0, import_web13.createComponent)(ChannelTopic_default, {
            get channel() {
              return props.channel;
            }
          })];
        }
      }), _el$3);
      (0, import_web12.insert)(_el$4, (0, import_web13.createComponent)(Header, {
        get tag() {
          return HeaderTags.H2;
        },
        children: "This is a hidden channel."
      }), null);
      (0, import_web12.insert)(_el$4, (0, import_web13.createComponent)(Header, {
        get tag() {
          return HeaderTags.H5;
        },
        children: "You cannot see the contents of this channel. However, you may see its name and topic."
      }), null);
      (0, import_web11.effect)((_p$) => {
        const _v$ = style_default.mainBody, _v$2 = style_default.chat;
        _v$ !== _p$._v$ && (0, import_web10.className)(_el$3, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0, import_web10.className)(_el$4, _p$._v$2 = _v$2);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0
      });
      return _el$;
    })();
  };

  // plugins/hiddenChannels/index.js
  var {
    patcher,
    observeDom,
    flux: { intercept }
  } = shelter.plugin.scoped;
  var {
    flux: {
      dispatcher,
      stores: { PermissionStore, ChannelStore, GuildStore, ReadStateStore }
    },
    ui: { renderSolidInReact: renderSolidInReact3 },
    util: { getFiber, reactFiberWalker }
  } = shelter;
  var Permissions = {
    VIEW_CHANNEL: 1024n
  };
  var ChannelTypes = {
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
    // Beta channel type, check if it works sometime:tm:
  };
  var getChannel = ChannelStore.getChannel;
  var getGuild = GuildStore.getGuild;
  var originalCan = PermissionStore.can.bind({});
  var headerBar = null;
  function canBeSeen(channel) {
    return originalCan(Permissions.VIEW_CHANNEL, channel);
  }
  var isRestrictedChannel = (channel) => {
    return channel?.permissionOverwrites?.length > 0;
  };
  var isVisibile = (originalChannel) => {
    let channel = originalChannel;
    if (typeof channel !== "object" && !channel?.id) {
      try {
        channel = getChannel(channel);
      } catch {
        channel = null;
      }
    }
    if (!channel || [
      ChannelTypes.DM,
      ChannelTypes.GROUP_DM,
      ChannelTypes.GUILD_CATEGORY,
      ChannelTypes.GUILD_STORE,
      ChannelTypes.GUILD_DIRECTORY
    ].includes(channel.type))
      return true;
    return canBeSeen(channel);
  };
  function onLoad() {
    patcher.instead("can", PermissionStore.__proto__, (originalArgs, originalFunction) => {
      if (originalArgs[0] === Permissions.VIEW_CHANNEL && !isRestrictedChannel(originalArgs[1]))
        return true;
      return originalFunction(...originalArgs);
    });
    let patchedChannelItem = false;
    const stopObservingChannelItem = observeDom('[data-list-item-id^="channels___"', (element) => {
      queueMicrotask(() => {
        const channelId = element.dataset.listItemId.split("___")[1];
        if (Number.isNaN(Number.parseInt(channelId)))
          return;
        const component = reactFiberWalker(getFiber(element), "aria-label", true, true)?.type;
        if (!component || typeof component.render !== "function")
          return;
        stopObservingChannelItem();
        if (patchedChannelItem) {
          return;
        }
        patchedChannelItem = true;
        patcher.before("render", component, (originalArgs) => {
          if (!originalArgs[0]["data-list-item-id"])
            return originalArgs;
          const channelId2 = originalArgs[0]["data-list-item-id"].split("___")[1];
          if (!isVisibile(channelId2)) {
            originalArgs[0].className += ` ${style_default.hiddenChannel}`;
          }
          return originalArgs;
        });
        const channelReadState = ReadStateStore.getForDebugging(channelId);
        patcher.after("canTrackUnreads", channelReadState.__proto__, function(_, previousReturn) {
          return previousReturn && isVisibile(this.channelId);
        });
      });
    });
    const stopObservingHeaderBar = observeDom("[class^=title_]", (element) => {
      queueMicrotask(() => {
        const component = reactFiberWalker(getFiber(element), "toolbar", true, true)?.type;
        if (!component || typeof component.Icon !== "function" || headerBar)
          return;
        stopObservingHeaderBar();
        headerBar = component;
      });
    });
    let routePatched = false;
    const stopObservingRoute = observeDom('[class^="chat_"]', (element) => {
      queueMicrotask(() => {
        const component = reactFiberWalker(getFiber(element), "computedMatch", true, true)?.type;
        if (!component || typeof component.prototype.render !== "function")
          return;
        stopObservingRoute();
        if (routePatched)
          return;
        routePatched = true;
        patcher.before("render", component.prototype, function(originalArgs) {
          if (this.props?.path?.length !== 3)
            return originalArgs;
          const channelId = this.props?.computedMatch?.params?.channelId;
          const guildId = this.props?.computedMatch?.params?.guildId;
          if (!isVisibile(channelId) && guildId && headerBar !== null) {
            this.props.render = () => {
              return renderSolidInReact3(Notice_default, {
                channel: getChannel(channelId),
                guild: getGuild(guildId),
                components: {
                  headerBar
                }
              });
            };
          }
          return originalArgs;
        });
      });
    });
    let shouldIgnoreNextMessageFetch = false;
    let _channelId = "";
    intercept((event) => {
      if (event.type === "CHANNEL_SELECT" && !isVisibile(event?.channelId)) {
        shouldIgnoreNextMessageFetch = true;
        _channelId = event.channelId;
      } else if (event.type !== "MESSAGE_FETCH" && shouldIgnoreNextMessageFetch) {
        shouldIgnoreNextMessageFetch = false;
        dispatcher.dispatch({
          type: "LOAD_MESSAGES_FAILURE",
          channelId: _channelId
        });
        return [event, true];
      }
    });
  }
  return __toCommonJS(hiddenChannels_exports);
})();
