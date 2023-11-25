import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.md'],
	layout: './src/lib/components/markdown/Components.svelte',
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
