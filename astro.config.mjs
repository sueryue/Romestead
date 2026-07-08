import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sueryue.github.io/romestead-guides',
  base: '/romestead-guides',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'es', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  server: { port: 4321, host: '127.0.0.1' },
});
