import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import svg from '@poppanator/sveltekit-svg';

export default {
	plugins: [sveltekit(), svg(), enhancedImages()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};
