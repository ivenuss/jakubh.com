import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';

export default {
	plugins: [sveltekit(), svg()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};
