// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark',
      },
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, {
          behavior: 'append',
          properties: {
            class: 'heading-anchor',
            ariaLabel: 'Link to heading',
          },
        }],
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: ["c5c6-106-215-93-107.ngrok-free.app", "localhost"],
  },
});
