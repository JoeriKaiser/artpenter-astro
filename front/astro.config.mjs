import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config

export default defineConfig({
  site: "https://lea-stauder.art/",
  integrations: [
    tailwind(),
    react(),
    mdx({
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
  ],
  output: "server",
  adapter: vercel(),
});
