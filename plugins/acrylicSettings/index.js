const {
  plugin: { store },
  ui: { injectCss },
} = shelter;

import { css } from "./settings.jsx.scss";

export function toggleAcrylic(newValue) {
  store.acrylic = newValue;
  newValue ? window.acrylic.enable() : window.acrylic.disable();
}

export function toggleCSS(newValue) {
  store.css = newValue;
  newValue ? window.acrylic.css.enable() : window.acrylic.css.disable();
}

export function setAcrylicType(newValue) {
  store.type = newValue;
  window.acrylic.setType(newValue);
}

export function openEditor() {
  store.css = true;
  window.acrylic.css.openEditor();
}

export function syncSettings() {
  
  if(window.acrylic == undefined) {
    setTimeout(syncSettings(), 500);
    return;
  }
  
  const acrylicSettings = window.acrylic.internal.getSettings();
  store.acrylic = acrylicSettings.acrylic;
  store.css = acrylicSettings.css;
  store.type = acrylicSettings.type;
}

let injectedCss = null;

export function onLoad() {
  if (!injectedCss) {
    injectedCss = injectCss(css);
  }

  syncSettings();
}

export function onUnload() {
  injectedCss?.();
}

export { default as settings } from "./settings";
