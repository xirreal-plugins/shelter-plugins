const {
   ui: { Header, HeaderTags, Text },
   flux: {
      stores: { SoundboardStore },
   },
   solid: { For },
} = shelter;

import { SoundWithEmoji } from "./soundPreview";
import classes from "./style.scss";

export function SoundPicker(props) {
   const sounds = () => {
      return [...SoundboardStore.getSounds()]
         .map((x) => x[1])
         .flat()
         .sort((a, b) => SoundboardStore.isFavoriteSound(b.soundId) - SoundboardStore.isFavoriteSound(a.soundId));
   };

   return (
      <div>
         <Header tag={HeaderTags.EYEBROW} class={classes.marginTop}>
            Sound
         </Header>
         <div class={classes.soundPicker}>
            <For each={sounds()}>
               {(sound) => (
                  <div
                     class={classes.sound}
                     onKeyPress={(e) => e.key === "Enter" && props.setSoundId(sound.soundId)}
                     onClick={() => props.setSoundId(sound.soundId)}
                  >
                     <SoundWithEmoji soundId={sound.soundId} selected={() => sound.soundId === props.soundId()} />
                  </div>
               )}
            </For>
         </div>
         <Text class={classes.margin}>
            Can't find the sound you want? Open the soundboard manually to sort favorites before others.
         </Text>
      </div>
   );
}
