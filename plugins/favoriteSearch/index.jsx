const {
   flux: { subscribe },
   observeDom,
} = shelter.plugin.scoped;

const {
   ui: { TextBox, openModal, CheckboxItem, ReactiveRoot },
   solid: { createSignal, createEffect },
   util: { getFiberOwner, getFiber, reactFiberWalker },
   plugin: { store },
} = shelter;

import { AddTagModal } from "./modal";
import classes from "./index.jsx.scss";

function addClickHandlerToFavoritesGifPicker() {
   const stopObserving = observeDom("[class^='result'] > [class^='categoryFadeBlurple']", (container) => {
      stopObserving();
      if (container.parentElement.dataset.clickHandlerAdded) return;

      container.parentElement.dataset.clickHandler = "true";
      container.parentElement.addEventListener("click", handleClick);
   });
   setTimeout(stopObserving, 500);
}

function SearchBar() {
   const [text, setText] = createSignal("");
   const [showUntagged, setShowUntagged] = createSignal(false);
   const container = document.querySelector("#gif-picker-tab-panel");
   const fiber = getFiberOwner(container);
   const [counter, setCounter] = createSignal(fiber.props.favorites.length.toString());
   const total = fiber.props.favorites.length;

   createEffect(() => {
      if (!fiber.props.__favorites) {
         fiber.props.__favorites = fiber.props.favorites;
      }

      fiber.props.favorites = fiber.props.__favorites.filter((gif) => {
         const tags = store[gif.url] || [];
         if (showUntagged() && tags.length > 0) {
            return false;
         }

         if (text().length === 0) {
            return true;
         }

         if (gif.url.toLowerCase().includes(text().toLowerCase())) {
            return true;
         }

         return tags.some((tag) => tag?.toLowerCase().includes(text().toLowerCase()));
      });

      setCounter(fiber.props.favorites.length.toString());

      fiber.forceUpdate();
   });

   return (
      <div id={classes.searchBar}>
         <div class={classes.barContainer}>
            <TextBox
               placeholder="Search favorite GIFs..."
               value={text()}
               onInput={(value) => {
                  setText(value);
               }}
            />
            <div class={classes.counter} aria-hidden="true">
               {counter()}/{total}
            </div>
         </div>
         <div class={classes.align}>
            <CheckboxItem checked={showUntagged()} onchange={() => setShowUntagged(!showUntagged())}>
               Show only untagged GIFs
            </CheckboxItem>
         </div>
      </div>
   );
}

let stopObservingResults = null;
function handleClick() {
   requestAnimationFrame(() => {
      const header = document.querySelector("#gif-picker-tab-panel > div:first-child");
      if (!header) return;
      header.appendChild(<SearchBar />);

      stopObservingResults = observeDom("[class^='content'] > div > [class^='result_']", (card) => {
         if (card.dataset.addedRightClick) return;
         card.dataset.addedRightClick = "true";

         addRightClickHandler(card);
      });
   });
}

function handleBack() {
   document.getElementById(classes.searchBar)?.remove();
   if (stopObservingResults) {
      stopObservingResults();
      stopObservingResults = null;
   }
   addClickHandlerToFavoritesGifPicker();
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
