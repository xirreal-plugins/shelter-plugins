import { metadataTags, mergeTags } from "./autotag.js";

export function filterFavorites(favorites, nativeMatches, query, tagsByUrl, onlyUntagged, aiMetadata = {}) {
   if (!query && !onlyUntagged) return nativeMatches;
   const native = new Set(nativeMatches);
   const words = query.trim().toLowerCase().split(/\s+/);

   return favorites.filter((gif) => {
      const saved = Object.hasOwn(tagsByUrl, gif.url) ? tagsByUrl[gif.url] : [];
      const tags = mergeTags(saved, metadataTags(Object.hasOwn(aiMetadata, gif.url) ? aiMetadata[gif.url] : undefined));
      if (onlyUntagged && tags.length > 0) return false;
      return native.has(gif) || words.every((word) => tags.some((tag) => tag.toLowerCase().includes(word)));
   });
}
