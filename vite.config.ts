import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import path from 'node:path';
import crypto from 'node:crypto';

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: ['.svelte', ...(mdsvexConfig.extensions ?? [])],
			preprocess: [mdsvex(mdsvexConfig)],
			adapter: adapter()
		}),
		tailwindcss(),
		svg({
			svgoOptions: {
				plugins: [
					{
						name: 'prefixIds',
						params: {
							prefix: (_, info) => {
								const assetIdentifier = info.path
									? // use the relative path from repository root as the asset identifier
										path.relative(import.meta.dirname, info.path ?? '')
									: // the info.path field is theoretically optional - use a random number as a fallback
										Math.floor(Math.random() * 1_000).toString();

								return crypto
									.createHash('shake256', { outputLength: 2 })
									.update(assetIdentifier)
									.digest('hex');
							}
						}
					}
				]
			}
		})
	]
});
