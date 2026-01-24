const {
   ui: { Text, focusring },
   solid: { createSignal },
   flux: {
      stores: { SoundboardStore, EmojiStore },
   },
} = shelter;

import classes from "./style.scss";

const baseUrl = "https://cdn.discordapp.com/soundboard-sounds/";

let sharedAudio = null;

function getSharedAudio() {
   if (!sharedAudio) {
      sharedAudio = new Audio();
   }
   return sharedAudio;
}

export function stopPreviewSound() {
   if (sharedAudio) {
      sharedAudio.pause();
      sharedAudio.currentTime = 0;
   }
}

let currentPlayingSetter = null;

function playSound(soundId, setIsPlaying) {
   const audio = getSharedAudio();

   // Stop any currently playing sound and reset its state
   if (currentPlayingSetter && currentPlayingSetter !== setIsPlaying) {
      currentPlayingSetter(false);
   }

   audio.pause();
   audio.currentTime = 0;
   audio.src = `${baseUrl}${soundId}`;
   audio.load();
   audio.play();

   currentPlayingSetter = setIsPlaying;
   setIsPlaying(true);

   audio.onended = () => {
      setIsPlaying(false);
      currentPlayingSetter = null;
   };
}

export function stopSound(setIsPlaying) {
   if (sharedAudio) {
      sharedAudio.pause();
      sharedAudio.currentTime = 0;
   }
   setIsPlaying?.(false);
   currentPlayingSetter = null;
}

function PlayIcon() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
         <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
      </svg>
   );
}

function StopIcon() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
         <path d="M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" />
      </svg>
   );
}

export function Preview({ soundId }) {
   const [isPlaying, setIsPlaying] = createSignal(false);

   return (
      <span class={classes.inline}>
         <button
            use:focusring
            classList={{
               [classes.preview]: true,
               [classes.playing]: isPlaying(),
            }}
            onclick={(e) => {
               e.stopPropagation();
               if (isPlaying()) {
                  stopSound(setIsPlaying);
               } else {
                  playSound(soundId, setIsPlaying);
               }
            }}
            name="preview"
            title={isPlaying() ? "Stop sound" : "Preview sound"}
         >
            {isPlaying() ? <StopIcon /> : <PlayIcon />}
         </button>
      </span>
   );
}

export function SoundWithEmoji({ soundId, selected }) {
   const sound = SoundboardStore.getSoundById(soundId);

   if (!sound) {
      return (
         <div class={classes.soundItem}>
            <Text>❌ Sound not found</Text>
         </div>
      );
   }

   const getEmojiUrl = () => {
      if (!sound.emojiId) return null;
      const emoji = EmojiStore.getCustomEmojiById(sound.emojiId);
      if (!emoji) return null;
      return `https://cdn.discordapp.com/emojis/${sound.emojiId}.${emoji.animated ? "gif" : "png"}?size=20&quality=lossless`;
   };

   const emojiUrl = getEmojiUrl();

   return (
      <div
         classList={{
            [classes.soundItem]: true,
            [classes.selected]: selected?.(),
         }}
      >
         <Preview soundId={soundId} />
         {emojiUrl ? (
            <img class={classes.emoji} src={emojiUrl} alt="" loading="lazy" />
         ) : sound.emojiName ? (
            <span class={classes.emoji}>{sound.emojiName}</span>
         ) : null}
         <span class={classes.soundName}>{sound.name}</span>
      </div>
   );
}
