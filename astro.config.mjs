// astro.config.mjs

import { defineConfig } from 'astro';

// Import remark-math and rehype-katex plugins
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
