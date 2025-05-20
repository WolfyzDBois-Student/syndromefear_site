import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  /* base: '/syndromefear/', */
  site: 'https://wolfyzdbois-student.github.io/syndromefear_site/',
  integrations: [tailwind()],
  outDir: './dist'
});
