// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://mood.com.co",

  i18n: {
      defaultLocale: "es",
      locales: ["es", "en"],
      routing: {
          prefixDefaultLocale: false,
      },
	},

  adapter: node({
    mode: "standalone",
  }),
});