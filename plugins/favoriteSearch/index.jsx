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
      "#gif-picker-tab-panel > div:last-child > div:first-child > div > div > div:first-child",
      (container) => {
         stopObserving();
         if (container.dataset.clickHandlerAdded) return;

         container.dataset.clickHandler = "true";
         container.addEventListener("click", handleClick);
      },
   );
   setTimeout(stopObserving, 500);
}

let stopObservingResults = null;
function handleClick() {
   const stopObserving = observeDom("#gif-picker-tab-panel > div:first-child", (header) => {
      stopObserving();
      const searchBox = (
         <TextBox
            id="gif-searchbox"
            style={{ "margin-top": "8px" }}
            placeholder="Search favorite GIFs..."
            onInput={(text) => handleSearch(text)}
         />
      );
      header.appendChild(searchBox);

      stopObservingResults = observeDom("[class^='content'] > div > [class^='result']", (card) => {
         if (card.dataset.addedRightClick) return;
         card.dataset.addedRightClick = "true";

         addRightClickHandler(card);
      });
   });
   setTimeout(stopObserving, 500);
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
      openModal((p) =>
         AddTagModal(p.close, reactFiberWalker(getFiber(e.target.parentNode), "item", true).memoizedProps.item),
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
