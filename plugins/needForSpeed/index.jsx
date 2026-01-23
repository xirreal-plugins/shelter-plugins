const {
   plugin: {
      scoped: { observeDom },
   },
   solid: { createSignal, Show, onCleanup },
} = shelter;

import SpeedIcon from "./icon";

import classes from "./index.jsx.scss";

const CONTROLS_QUERY = `[class*=videoControls]:not([data-nfs])`;
const CONTROLS_QUERY_UNLOAD = `[class*=videoControls][data-nfs]`;

function SpeedControlComponent({ videoRef }) {
   const [speed, setSpeed] = createSignal(videoRef?.playbackRate || 1);
   const [showMenu, setShowMenu] = createSignal(false);
   const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

   const selectSpeed = (newSpeed) => {
      setSpeed(newSpeed);
      if (videoRef) videoRef.playbackRate = newSpeed;
      setShowMenu(false);
   };

   return (
      <div class="nfs-speed-control" on:mouseenter={() => setShowMenu(true)} on:mouseleave={() => setShowMenu(false)}>
         <button class={classes.icon}>
            <SpeedIcon />
         </button>
         <Show when={showMenu()}>
            <div class={classes.selectorWrapper}>
               <div class={classes.selector}>
                  {speeds.map((s) => (
                     <div on:click={() => selectSpeed(s)} class={`${classes.item} ${s === speed() ? classes.active : ""}`}>
                        {s}x
                     </div>
                  ))}
               </div>
            </div>
         </Show>
      </div>
   );
}

function patchVideoControls(element) {
   if (element.dataset.nfs) return;

   element.dataset.nfs = true;
   const volumeButton = element.querySelector("[class*=volumeButton]").parentElement.parentElement;
   const videoElement = element.parentElement.parentElement.querySelector("video");
   const speedControl = <SpeedControlComponent videoRef={videoElement} />;
   element.insertBefore(speedControl, volumeButton);
}

export function onLoad() {
   document.querySelectorAll(CONTROLS_QUERY).forEach(patchVideoControls);
   observeDom(CONTROLS_QUERY, patchVideoControls);
}

export function onUnload() {
   document.querySelectorAll(CONTROLS_QUERY_UNLOAD).forEach((element) => {
      element.removeAttribute("data-nfs");
   });
   document.querySelectorAll(".nfs-speed-control").forEach((element) => {
      element.remove();
   });
}
