export class Cache {
    servers = new Map();

    has = (guildId) => { this.servers.has(guildId) }
    add = (guildId, data) => { this.servers.set(guildId, data) }
    update = (guildId, data) => { this.servers.set(guildId, data) }
    remove = (guildId) => { this.servers.delete(guildId) }
    reset = () => { this.servers.clear() }
    get = (guildId) => { return this.servers.get(guildId) }

    constructor () {};
}

export class CacheEntry {
    channelAmount = null;
    hiddenChannels = new Map();

    addChannel = (channelId, channelData) => { this.hiddenChannels.set(channelId, channelData) };
    updateChannel = (channelId, channelData) => { this.hiddenChannels.set(channelId, channelData) };
    removeChannel = (channelId) => { this.hiddenChannels.delete(channelId) };
    setChannelAmount = (amount) => { this.channelAmount = amount };

    constructor () {};
}