import { log, warn, error } from "@cumcord/utils/logger"
import { webpack, common } from "@cumcord/modules"
import { patcher } from "@cumcord"
import injectStyle from "../assets/style.css";
import { Cache, CacheEntry } from "./cache.js"
const unpatchList = {};

// Webpack modules 
const {
    getChannel: fetchChannel, 
    getMutableGuildChannelsByGuild: getAllChannelsByGuild 
} = webpack.findByProps("getMutableGuildChannels");

const { ChannelTypes, Permissions } = common.constants;
const checkPermission = webpack.findByProps("computePermissions").can;
const currentUser     = webpack.findByProps("getCurrentUser").getCurrentUser();

// Stuff to patch
const getCategories   = webpack.findByProps("getCategories", "initialize");
const unreadManager   = webpack.findByProps("hasUnread");
const fetchMessages   = webpack.findByProps("fetchMessages", "sendMessage");
const channelItem     = webpack.findByDisplayName('ChannelItem', false);

const SERVER_CACHE = new Cache();

const isVisibile = channel => {
    if(typeof(channel) !== 'object' && !channel.id) {
        try {
            channel = fetchChannel(channel);
        } catch { }
    }

    // Exclude DM channels or invalid channels
    if(!channel ||
       [ChannelTypes.DM, ChannelTypes.GROUP_DM, ChannelTypes.GUILD_CATEGORY].includes(channel.type)
    ) return true;

    let hasCorrectType = [ 
        ChannelTypes.GUILD_TEXT, 
        ChannelTypes.GUILD_VOICE, 
        ChannelTypes.GUILD_STAGE_VOICE, 
        ChannelTypes.GUILD_ANNOUNCEMENT, 
        ChannelTypes.ANNOUNCEMENT_THREAD, 
        ChannelTypes.PRIVATE_THREAD, 
        ChannelTypes.PUBLIC_THREAD
    ].includes(channel.type);

    let canBeSeen = checkPermission(Permissions.VIEW_CHANNEL, currentUser, channel);

    return hasCorrectType && canBeSeen;
}

const cacheAll = () => {
    const guilds = getAllChannelsByGuild();
    for(let [ guildId, channels ] of Object.entries(guilds)) {
        const newEntry = new CacheEntry();
        channels = Object.values(channels);
        newEntry.setChannelAmount(channels.length);
        for(let channel of channels) {
            if(!isVisibile(channel)) 
                newEntry.addChannel(channel.id, channel);
        }
        SERVER_CACHE.add(guildId, newEntry);
    };
}

const cacheNewServer = (guildId) => {
    const channels = Object.values(getAllChannelsByGuild()[guildId]);
    if(channels?.length == 0) return;
    const newEntry = new CacheEntry();
    newEntry.setChannelAmount(channels.length);
    for(let channel of channels) {
        if(!isVisibile(channel)) 
            newEntry.addChannel(channel.id, channel);
    }
    SERVER_CACHE.add(guildId, newEntry);
}

const appendHiddenChannelNotice = () => {
    const messagesWrapper = document.querySelector(`.${webpack.findByProps("messagesWrapper").messagesWrapper}`);
    if (!messagesWrapper) return;

    messagesWrapper.firstChild.style.display = "none";
    if(messagesWrapper.firstChild.nextSibling) messagesWrapper.firstChild.nextSibling.style.display = "none";
        messagesWrapper.parentElement.children[1].style.display = "none";
        messagesWrapper.parentElement.parentElement.children[1].style.display = "none";

    const toolbar = document.querySelector(`.${webpack.findByProps("toolbar", "selected").toolbar}`);

    toolbar.style.display = "none";

    const newMessage = document.createElement("div");
    const txt = webpack.findByProps("h5");
    const flex = webpack.findByProps("flex", "directionColumn", "alignCenter");

    newMessage.className = flex.flexCenter;
    newMessage.style.width = "100%";

    newMessage.innerHTML = `
        <div class="${flex.flex} ${flex.directionColumn} ${flex.alignCenter}">
        <h2 class="${txt.h2} ${txt.defaultColor}">This is a hidden channel.</h2>
        <h5 class="${txt.h5} ${txt.defaultColor}">You cannot see the contents of this channel. However, you may see its name and topic.</h5>
        </div>`;

    messagesWrapper.appendChild(newMessage);
}

const handleChannelChange = data => {
    if(!isVisibile(data?.channelId)) setImmediate(appendHiddenChannelNotice);
}

export default (data) => {
    return {
        onLoad() {
            unpatchList.css = injectStyle();
            cacheAll();

            unpatchList.getCategories = patcher.after("getCategories", getCategories, (originalArgs, previousReturn) => {
                if(!SERVER_CACHE.has(originalArgs[0])) {
                    cacheNewServer(originalArgs[0]);
                };

                for(let [id, channel] of SERVER_CACHE.get(originalArgs[0]).hiddenChannels) {
                    if(!channel) return previousReturn;
                    const channelsInCategory = previousReturn[channel.parent_id || "null"];
                    if (channelsInCategory.filter((item) => item?.channel?.id === channel.id).length) return previousReturn;
                    channelsInCategory.push({ channel: channel, index: 0 });
                };

                return previousReturn;
            });

            unpatchList.channelSelect = () => {common.FluxDispatcher.unsubscribe("CHANNEL_SELECT", handleChannelChange)};
            common.FluxDispatcher.subscribe("CHANNEL_SELECT", handleChannelChange);
            
            unpatchList.channelItem = patcher.before("default", channelItem, (originalArgs) => {
                if(!isVisibile(originalArgs[0].channel.id)) originalArgs[0]["aria-label"] += " hidden";
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
            })

        },
        onUnload() {
            for(let unpatch of Object.values(unpatchList)) unpatch();
        }
    }
}