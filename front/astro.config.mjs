import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://lea-stauder.art/",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx({
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
    sitemap({
      customPages: [
        "https://lea-stauder.art",
        "https://lea-stauder.art/contact",
      ],
    }),
    svelte(),
    react(),
  ],
  output: "server",
  adapter: vercel(),
});
