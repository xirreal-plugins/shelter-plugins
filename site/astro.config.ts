// @ts-check
import { defineConfig } from "astro/config";

import UnoCSS from "unocss/astro";

export default defineConfig({
   integrations: [
      UnoCSS({
         injectReset: true,
      }),
   ],
   site: "https://shelter.xirreal.dev",
});
