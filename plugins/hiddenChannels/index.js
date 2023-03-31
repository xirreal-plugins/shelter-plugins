const {
	patcher,
	observeDom,
	flux: {
		intercept,
		dispatcher,
		stores: {
			PermissionStore,
			ChannelStore,
			VoiceStateStore,
			GuildStore,
			ReadStateStore,
		},
	},
	ui: { injectCss, renderSolidInReact },
	util: { getFiber, reactFiberWalker },
} = shelter;

const Permissions = {
	VIEW_CHANNEL: 1024n,
};

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
};

const getChannel = ChannelStore.getChannel;
const getVoiceID = VoiceStateStore.getCurrentClientVoiceChannelId;
const isInVoice = VoiceStateStore.isCurrentClientInVoiceChannel;
const getGuild = GuildStore.getGuild;

const originalCan = PermissionStore.can.bind({});

import { css } from "./assets/style.scss";
import { default as Notice } from "./assets/Notice.jsx";

const unpatchList = {};
let headerBar = null;

function canBeSeen(channel) {
	return originalCan(Permissions.VIEW_CHANNEL, channel);
}

const isRestrictedChannel = (channel) => {
	return channel?.permissionOverwrites?.length > 0;
};

const isVisibile = (channel) => {
	if (typeof channel !== "object" && !channel?.id) {
		try {
			channel = getChannel(channel);
		} catch {
			channel = null;
		} // Just in case Discord fucks up permissions again, so it doesn't crash.
	}

	// Exclude DM channels or invalid channels
	if (
		!channel ||
		[
			ChannelTypes.DM,
			ChannelTypes.GROUP_DM,
			ChannelTypes.GUILD_CATEGORY,
			ChannelTypes.GUILD_STORE,
			ChannelTypes.GUILD_DIRECTORY,
		].includes(channel.type)
	)
		return true;

	return canBeSeen(channel);
};

export function onLoad() {
	unpatchList.css = injectCss(css);

	unpatchList.can = patcher.instead(
		"can",
		PermissionStore.__proto__,
		(originalArgs, originalFunction) => {
			if (
				originalArgs[0] == Permissions.VIEW_CHANNEL &&
				!isRestrictedChannel(originalArgs[1])
			)
				return true;

			return originalFunction(...originalArgs);
		}
	);

	let stopObservingChannelItem = observeDom(
		'[data-list-item-id^="channels___"',
		(element) => {
			queueMicrotask(() => {
				const channelId = element.dataset.listItemId.split("___")[1];
				if (isNaN(parseInt(channelId))) return;
				const component = reactFiberWalker(
					getFiber(element),
					"aria-label",
					true,
					true
				)?.type;
				if (!component || typeof component.render !== "function") return;

				stopObservingChannelItem();

				if (unpatchList.channelItem) {
					return;
				}

				unpatchList.channelItem = patcher.before(
					"render",
					component,
					(originalArgs) => {
						// Find if the element has a child with the channel prop
						for (let i = 0; i < originalArgs[0].children.length; i++) {
							if (
								!isVisibile(originalArgs[0].children[i]?.props?.channel)
							) {
								originalArgs[0]["aria-label"] += " hidden";
								break;
							}
						}

						return originalArgs;
					}
				);

				const channelReadState = ReadStateStore.getForDebugging(channelId);
				unpatchList.unreadStateManager = patcher.after(
					"canTrackUnreads",
					channelReadState.__proto__,
					function (_, previousReturn) {
						return previousReturn && isVisibile(this.channelId);
					}
				);
			});
		}
	);

	let stopObservingHeaderBar = observeDom("[class^=title-]", (element) => {
		queueMicrotask(() => {
			const component = reactFiberWalker(
				getFiber(element),
				"toolbar",
				true,
				true
			)?.type;
			if (!component || typeof component.Icon !== "function" || headerBar)
				return;
			stopObservingHeaderBar();
			headerBar = component;
		});
	});

	let stopObservingRoute = observeDom('[class^="chat-"]', (element) => {
		queueMicrotask(() => {
			const component = reactFiberWalker(
				getFiber(element),
				"computedMatch",
				true,
				true
			)?.type;
			if (!component || typeof component.prototype.render !== "function")
				return;

			stopObservingRoute();

			if (unpatchList.Route) return;

			unpatchList.Route = patcher.before(
				"render",
				component.prototype,
				function (originalArgs) {
					if (this.props?.path?.length !== 3) return originalArgs;

					const channelId = this.props?.computedMatch?.params?.channelId;
					const guildId = this.props?.computedMatch?.params?.guildId;

					if (
						!isVisibile(channelId) &&
						guildId &&
						headerBar !== null
						// && (isInVoice() ? channelId != getVoiceID(guildId) : true) TODO: Actually fix!!!
					) {
						this.props.render = () => {
							return renderSolidInReact(Notice, {
								channel: getChannel(channelId),
								guild: getGuild(guildId),
								components: {
									headerBar,
								},
							});
						};
					}

					return originalArgs;
				}
			);
		});
	});

	let shouldIgnoreNextMessageFetch = false;
	let _channelId = "";
	unpatchList.intercept = intercept((event) => {
		if (event.type === "CHANNEL_SELECT" && !isVisibile(event?.channelId)) {
			shouldIgnoreNextMessageFetch = true;
			_channelId = event.channelId;
		} else if (
			event.type !== "MESSAGE_FETCH" &&
			shouldIgnoreNextMessageFetch
		) {
			shouldIgnoreNextMessageFetch = false;
			dispatcher.dispatch({
				type: "LOAD_MESSAGES_FAILURE",
				channelId: _channelId,
			});
			return [event, true];
		}
	});
}

export function onUnload() {
	for (let unpatch of Object.values(unpatchList)) unpatch();
}
