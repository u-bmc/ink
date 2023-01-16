import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { optimizeImports, elements, icons } from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), optimizeImports(), elements(), icons()],

  kit: {
    adapter: adapter({
      fallback: 'index.html',
      pages: 'build',
      precompress: true,
      strict: true
    })
  }
};

export default config;
