
const {
    flux: { stores: { UserStore, SelectedGuildStore, EmojiStore } },
 } = shelter;

const isInDms = () =>
	!!document.querySelector(
		'[data-list-item-id="guildsnav___home"][class*="selected"]',
);

const hasNitro = () => {
    const user = UserStore.getCurrentUser();
    return user && user.premiumType > 0;
}

export default (slateTree) => {
    return slateTree.map((line) => {
        return {
            ...line,
            children: line.children.map((item) => {
                if(item?.type == "customEmoji") {
                    const emojiId = item.emoji.emojiId;

                    if(
                        hasNitro() || (
                        EmojiStore.getCustomEmojiById(emojiId).guildId === SelectedGuildStore.getLastSelectedGuildId() &&
                        !item.emoji.animated &&
                        !isInDms())
                    ) {
                        return item;
                    }

                    return {
                        text: `[￴](https://cdn.discordapp.com/emojis/${emojiId}.webp?size=48&quality=lossless)`
                    }
                }
                return item;
            })
        };
    });
}