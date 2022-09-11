import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { optimizeImports, elements, icons } from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess(), optimizeImports(), elements(), icons()],

	kit: {
		adapter: adapter({
			precompress: true
		})
	}
};

export default config;
