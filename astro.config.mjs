// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bandomega.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: "shiki",
    remarkPlugins: [remarkGfm],
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss({})],
  },
});
