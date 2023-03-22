import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
// import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";
<<<<<<< HEAD
import node from "@astrojs/node";

=======
import vercel from "@astrojs/vercel/serverless";
>>>>>>> ea1bf032ae059cc2e0377ca49ff7964aeb8fa601
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
<<<<<<< HEAD
    sitemap(),
=======
    // sitemap({
    //   customPages: [
    //     "https://lea-stauder.art",
    //     "https://lea-stauder.art/contact",
    //   ],
    // }),
>>>>>>> ea1bf032ae059cc2e0377ca49ff7964aeb8fa601
    svelte(),
    react(),
  ],
  output: "server",
  adapter: node({ mode: "standalone" }),
});
