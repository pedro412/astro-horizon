// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bluehorizonmexico.com',
  adapter: vercel(),
  output: 'server',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwind()],
  },
});
