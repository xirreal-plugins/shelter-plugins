const {
  flux: { dispatcher },
  solid: { createSignal, onCleanup },
  ui: { Text, TextTags, TextWeights },
} = shelter;

function format(milliseconds) {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);

  return `${hours > 0 ? `${hours.toString().padStart(2, "0")}:` : ""}${minutes
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
    <Text tag={TextTags.textXS} weight={TextWeights.bold}>
      {format(elapsed())}
    </Text>
  );
}

function onVoiceJoin(e) {
  if (e.state !== "RTC_CONNECTED") return;

  const container = document.querySelector('[class*="labelWrapper"]');
  if (container.dataset.timerAdded) return;
  container.dataset.timerAdded = true;

  container.parentElement.style.height = "unset";
  container.parentElement.parentElement.parentElement.style.height = "unset";
  container.parentElement.parentElement.parentElement.parentElement.style.height =
    "unset";
  container.insertBefore(<Timer />, container.lastChild);
}

export function onLoad() {
  dispatcher.subscribe("RTC_CONNECTION_STATE", onVoiceJoin);
}

export function onUnload() {
  dispatcher.unsubscribe("RTC_CONNECTION_STATE", onVoiceJoin);
  document.getElementById("vcTimer")?.remove();
}
