import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHighlighter } from 'shiki';

const theme = 'github-dark';

const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript']
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = defineConfig({
	extensions: ['.md'],
	layout: join(__dirname, './src/lib/components/markdown/Layout.svelte'),
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));

			return `{@html \`${html}\` }`;
		}
	}
});

export default config;
