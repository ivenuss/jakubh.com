import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'rolldown-vite';
import path from 'path';
import crypto from 'crypto';

export default defineConfig({
	plugins: [
		sveltekit(),
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
										path.relative(__dirname, info.path ?? '')
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
