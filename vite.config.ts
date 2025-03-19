import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import tailwindcss from '@tailwindcss/vite';

export default {
	plugins: [sveltekit(), tailwindcss(), svg()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};
