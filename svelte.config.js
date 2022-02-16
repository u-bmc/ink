import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { optimizeImports, elements, icons } from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess(), optimizeImports(), elements(), icons()],

	kit: {
		adapter: adapter({
			precompress: true
		}),

		prerender: {
			default: true
		}
	}
};

export default config;
