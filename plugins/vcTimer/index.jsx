const {
   flux: { dispatcher },
   solid: { createSignal, onCleanup },
} = shelter;

function format(milliseconds) {
   const hours = Math.floor(milliseconds / 3600000);
   const minutes = Math.floor((milliseconds % 3600000) / 60000);
   const seconds = Math.floor((milliseconds % 60000) / 1000);

   return `${hours > 0 ? hours.toString().padStart(2, "0") + ":" : ""}${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function Timer() {
   const startTime = Date.now();
   const [elapsed, update] = createSignal(0);

   const timer = setInterval(() => {
      update(Date.now() - startTime);
   }, 1000);

   onCleanup(() => clearInterval(timer));

   return (
      <div id="vcTimer" style={"font-weight: bold"}>
         {format(elapsed())}
         <br />
      </div>
   );
}

function onVoiceJoin(e) {
   if (e.state != "RTC_CONNECTED") return;

   if (document.querySelector("#vcTimer")) return;

   document
      .querySelector('[class^="rtcConnectionStatus-"] + a > div')
      .prepend(<Timer />);
}

export function onLoad() {
   dispatcher.subscribe("RTC_CONNECTION_STATE", onVoiceJoin);
}

export function onUnload() {
   dispatcher.unsubscribe("RTC_CONNECTION_STATE", onVoiceJoin);
}
