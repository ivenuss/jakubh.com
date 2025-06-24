import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = defineConfig({
	extensions: ['.md'],
	layout: join(__dirname, './src/lib/components/markdown/Layout.svelte'),
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
