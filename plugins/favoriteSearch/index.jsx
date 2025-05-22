const {
  flux: { subscribe },
  observeDom,
} = shelter.plugin.scoped;

const {
  ui: { TextBox, openModal },
  util: { getFiberOwner, getFiber, reactFiberWalker },
  plugin: { store },
} = shelter;

import { AddTagModal } from "./modal";

function addClickHandlerToFavoritesGifPicker() {
  const stopObserving = observeDom(
    "[class^='result'] > [class^='categoryFadeBlurple']",
    (container) => {
      stopObserving();
      if (container.parentElement.dataset.clickHandlerAdded) return;

      container.parentElement.dataset.clickHandler = "true";
      container.parentElement.addEventListener("click", handleClick);
    }
  );
  setTimeout(stopObserving, 500);
}

let stopObservingResults = null;
function handleClick() {
  requestAnimationFrame(() => {
    const header = document.querySelector(
      "#gif-picker-tab-panel > div:first-child"
    );
    if (!header) return;
    const searchBox = (
      <TextBox
        id="gif-searchbox"
        style={{ "margin-top": "8px" }}
        placeholder="Search favorite GIFs..."
        onInput={(text) => handleSearch(text)}
      />
    );
    header.appendChild(searchBox);

    stopObservingResults = observeDom(
      "[class^='content'] > div > [class^='result_']",
      (card) => {
        if (card.dataset.addedRightClick) return;
        card.dataset.addedRightClick = "true";

        addRightClickHandler(card);
      }
    );
  });
}

function handleBack() {
  document.getElementById("gif-searchbox")?.remove();
  if (stopObservingResults) {
    stopObservingResults();
    stopObservingResults = null;
  }
  addClickHandlerToFavoritesGifPicker();
}

function handleSearch(text) {
  const container = document.querySelector("#gif-picker-tab-panel");
  const fiber = getFiberOwner(container);
  if (!fiber.props.__favorites) {
    fiber.props.__favorites = fiber.props.favorites;
  }

  fiber.props.favorites = fiber.props.__favorites.filter((gif) => {
    for (const tag of store[gif.url] ?? []) {
      if (tag.toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
    }

    return gif.url.toLowerCase().includes(text.toLowerCase());
  });

  fiber.forceUpdate();
}

function addRightClickHandler(container) {
  container.addEventListener("contextmenu", (e) => {
    console.log(
      reactFiberWalker(getFiber(e.target.parentNode), "item", true)
        .memoizedProps
    );
    openModal((p) =>
      AddTagModal(
        p.close,
        reactFiberWalker(getFiber(e.target.parentNode), "item", true)
          .memoizedProps.item
      )
    );
  });
}

export function onLoad() {
  subscribe("GIF_PICKER_INITIALIZE", (e) => {
    addClickHandlerToFavoritesGifPicker();
  });

  subscribe("GIF_PICKER_QUERY", (e) => {
    handleBack();
  });
}
