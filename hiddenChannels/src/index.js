import * as webpack from "@cumcord/modules/webpack"
import * as patcher from "@cumcord/patcher"
import { ChannelTypes, Permissions } from "@cumcord/modules/common/constants"
import injectStyle from "../assets/style.css";
import Notice from "./Notice";
const unpatchList = {};

const getChannel = webpack.findByProps("hasChannel").getChannel;
const getVoiceID = webpack.findByProps("getVoiceStateStats").getChannelId;
const getGuild   = webpack.findByProps("getGuild").getGuild;

const Route = webpack.findByDisplayName("RouteWithImpression", false);
const computePermissions = webpack.findByProps("getChannelPermissions");
const unreadManager = webpack.findByProps("hasUnread");
const fetchMessages = webpack.findByProps("fetchMessages", "sendMessage");
const channelItem   = webpack.findByDisplayName('ChannelItem', false);
const Channel       = webpack.findByPrototypes("isManaged");

const originalCan = computePermissions.can.bind({});

const isVisibile = channel => {
    if(typeof(channel) !== 'object' && !channel?.id) {
        try {
            channel = getChannel(channel);
        } catch { channel = null } // Just in case Discord fucks up permissions again, so it doesn't crash.
    }

    // Exclude DM channels or invalid channels
    if(!channel || [
           ChannelTypes.DM,
           ChannelTypes.GROUP_DM,
           ChannelTypes.GUILD_CATEGORY,
           ChannelTypes.GUILD_STORE,
           ChannelTypes.GUILD_STORE,
           ChannelTypes.GUILD_DIRECTORY
        ].includes(channel.type)
    ) return true;

    return channel.canBeSeen();
}

export default (data) => {
    return {
        onLoad() {
            unpatchList.css = injectStyle();

            unpatchList.Channel = () => {
                delete Channel.prototype.isHidden;
            };
            Channel.prototype.canBeSeen = function () {
                return originalCan(Permissions.VIEW_CHANNEL, this);
            };

            unpatchList.can = patcher.after("can", computePermissions, (originalArgs, previousReturn) => {
                if(originalArgs[0] == Permissions.VIEW_CHANNEL) {
                    return true;
                }
                return previousReturn;
            });

            unpatchList.Route = patcher.after("default", Route, (originalArgs, previousReturn) => {
                const channelId = previousReturn.props?.computedMatch?.params?.channelId;
                const guildId = previousReturn.props?.computedMatch?.params?.guildId;

                let channel;
                try {
                    channel = getChannel(channelId);
                } catch { return previousReturn }

                if (!isVisibile(channel) && guildId && channel?.id != getVoiceID()) {
                    previousReturn.props.render = () => Notice({
                        channel: channel,
                        guild: getGuild(guildId)
                    });
                };

                return previousReturn;
            });

            unpatchList.channelItem = patcher.before("default", channelItem, (originalArgs) => {
                if(!isVisibile(originalArgs[0].channel)) originalArgs[0]["aria-label"] += " hidden";
                return originalArgs;
            });

            unpatchList.hasUnread = patcher.before("hasUnread", unreadManager, (originalArgs) => {
                if(!isVisibile(originalArgs[0])) originalArgs[0] = "";
                return originalArgs;
            });

            unpatchList.hasUnreadPins = patcher.before("hasUnreadPins", unreadManager, (originalArgs) => {
                if(!isVisibile(originalArgs[0])) return ["unread"];
                return originalArgs;
            });

            unpatchList.fetchMessages = patcher.instead("fetchMessages", fetchMessages, (originalArgs, originalFunction) => {
                if(!isVisibile(originalArgs[0].channelId)) return;
                return originalFunction(...originalArgs)
            });

        },
        onUnload() {
            for(let unpatch of Object.values(unpatchList)) unpatch();
        }
    }
}
