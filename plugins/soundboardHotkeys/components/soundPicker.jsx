const {
   ui: { TextBox, Text, focusring },
   flux: {
      stores: { SoundboardStore },
   },
   solid: { For, Show, createSignal },
} = shelter;

import { SoundWithEmoji } from "./soundPreview";
import classes from "./style.scss";

export function search(sounds, query) {
   if (!query) return sounds;
   const lowerQuery = query.toLowerCase();
   return sounds.filter((sound) => sound.name.toLowerCase().includes(lowerQuery));
}

export function SoundPicker(props) {
   const sounds = () => {
      return [...SoundboardStore.getSounds()]
         .map((x) => x[1])
         .flat()
         .sort((a, b) => SoundboardStore.isFavoriteSound(b.soundId) - SoundboardStore.isFavoriteSound(a.soundId));
   };

   const [query, setQuery] = createSignal("");

   const filteredSounds = () => search(sounds(), query());

   return (
      <div class={classes.marginTop}>
         <div class={classes.label}>Sound</div>
         <TextBox value={query()} placeholder="Search sounds..." onInput={(e) => setQuery(e)} />
         <div class={classes.soundPicker}>
            <Show
               when={filteredSounds().length > 0}
               fallback={
                  <div class={classes.emptyState}>
                     <Text>No sounds found</Text>
                     <Text>Try a different search term</Text>
                  </div>
               }
            >
               <For each={filteredSounds()}>
                  {(sound) => (
                     <button
                        class={classes.sound}
                        onKeyPress={(e) =>
                           e.key === "Enter" && e.target.name !== "preview" && props.setSoundId(sound.soundId)
                        }
                        onClick={(e) => e.target.name !== "preview" && props.setSoundId(sound.soundId)}
                        use:focusring
                     >
                        <SoundWithEmoji soundId={sound.soundId} selected={() => sound.soundId === props.soundId()} />
                     </button>
                  )}
               </For>
            </Show>
         </div>
      </div>
   );
}
