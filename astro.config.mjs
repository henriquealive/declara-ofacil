import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: import.meta.env.PUBLIC_SITE_URL ?? 'https://declarafacil.online',
  integrations: [sitemap()],
  output: 'static',
});
