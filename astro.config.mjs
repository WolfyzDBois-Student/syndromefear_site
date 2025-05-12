import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/syndromefear/', // très important pour le bon routage
  site: 'https://wolfyzdbois-student.github.io/syndromefear_site/',
  integrations: [tailwind()],
  outDir: './dist'
});
