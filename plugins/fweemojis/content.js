import { getPremiumType } from "../../lib/premium.js";

const {
   flux: {
      stores: { UserStore, EmojiStore },
   },
} = shelter;

export default (content, guildId) => {
   if (getPremiumType(UserStore.getCurrentUser()) > 0) return content;

   return content.replace(/(`+)[\s\S]*?(?:\1(?!`)|$)|\\[\s\S]|<(a?):\w+:(\d+)>/g, (match, code, animated, id) => {
      if (!id || (guildId && EmojiStore.getCustomEmojiById(id)?.guildId === guildId && !animated)) return match;

      return `[￴](https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "webp"}?size=48&quality=lossless)`;
   });
};
