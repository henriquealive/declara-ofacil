import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// import.meta.env não funciona em arquivos de config — usar process.env ou valor fixo
const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://declaracaofacil.online';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  output: 'static',
});
