import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: './src/lib/components/markdown/Components.svelte',
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
