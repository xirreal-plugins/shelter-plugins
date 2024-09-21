const {
   ui: { Text, focusring },
   flux: {
      stores: { SoundboardStore, EmojiStore },
   },
} = shelter;

import classes from "./style.scss";

export function Preview({ soundId }) {
   const baseUrl = "https://cdn.discordapp.com/soundboard-sounds/";
   let audio;

   return (
      <div class={classes.inline}>
         <audio src={`${baseUrl}${soundId}`} ref={audio} />
         <button
            use:focusring
            class={classes.preview}
            onclick={() => {
               audio.load();
               audio.play();
            }}
            name="preview"
         >
            🔊
         </button>
      </div>
   );
}

export function SoundWithEmoji({ soundId, selected }) {
   const sound = SoundboardStore.getSoundById(soundId);
   if (!sound) {
      return <Text>❌ Sound not found! Please make sure the sound still exists.</Text>;
   }

   if (!sound.emojiName && sound.emojiId) {
      const emoji = EmojiStore.getCustomEmojiById(sound.emojiId);
      const emojiUrl = `https://cdn.discordapp.com/emojis/${sound.emojiId}.${emoji.animated ? "gif" : "png"}?size=16&quality=lossless`;

      return (
         <div
            classList={{
               [classes.flexRow]: true,
               [classes.selected]: selected?.(),
            }}
         >
            <Preview soundId={soundId} />
            <img class={classes.emoji} src={emojiUrl} alt=":3" />
            <Text>{sound.name}</Text>
         </div>
      );
   }

   return (
      <div
         classList={{
            [classes.flexRow]: true,
            [classes.selected]: selected?.(),
         }}
      >
         <Preview soundId={soundId} />
         <Text>{`${sound.emojiName || ""} ${sound.name}`.trim()}</Text>
      </div>
   );
}
