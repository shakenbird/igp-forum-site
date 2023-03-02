import { defineConfig } from 'astro/config';
import unocss from "unocss/astro";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [mdx(), unocss(), react()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    },
  },
});
