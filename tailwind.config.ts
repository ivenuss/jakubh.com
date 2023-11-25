import { fontFamily } from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist', ...fontFamily.sans]
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
