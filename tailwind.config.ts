import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			},
			fontWeight: {
				bold: '600'
			},
			screens: {
				xs: '580px',
				sm: '620px',
				md: '768px',
				lg: '1024px',
				xl: '1280px'
			}
		}
	},
	plugins: [typography]
} satisfies Config;

export default config;
