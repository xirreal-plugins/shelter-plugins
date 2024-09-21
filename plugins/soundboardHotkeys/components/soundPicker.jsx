const {
   ui: { Header, HeaderTags, TextBox, Text, focusring },
   flux: {
      stores: { SoundboardStore },
   },
   solid: { For, createSignal },
} = shelter;

import { SoundWithEmoji } from "./soundPreview";
import classes from "./style.scss";

export function search(sounds, query) {
   if (!query) return sounds;
   return sounds.filter((sound) => sound.name.toLowerCase().includes(query.toLowerCase()));
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
      <div>
         <Header tag={HeaderTags.EYEBROW} class={classes.marginTop}>
            Sound
         </Header>
         <TextBox value={""} placeholder={"Search sounds..."} onInput={(e) => setQuery(e)} />
         <div class={classes.soundPicker}>
            <Show when={filteredSounds().length === 0}>
               <Text class={classes.margin}>❌ No sounds found</Text>
            </Show>
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
         </div>
      </div>
   );
}
