import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'rolldown-vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), svg()]
});
