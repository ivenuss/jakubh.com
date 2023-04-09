const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#dee3ea',
					200: '#a3a8c3',
					300: '#5d7290',
					600: '#323d4d',
					700: '#242c37',
					800: '#151a21',
					900: '#0b0e11'
				},
				accent: '#ff4655',
				'secondary-accent': '#5575e7',
				'secondary-accent-hover': '#879eed'
			},
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
			},
			animation: {
				enter: 'enter 200ms ease-out',
				leave: 'leave 150ms ease-in forwards'
			},
			keyframes: {
				enter: {
					'0%': { transform: 'scale(0.9)', opacity: 0 },
					'100%': { transform: 'scale(1)', opacity: 1 }
				},
				leave: {
					'0%': { transform: 'scale(1)', opacity: 1 },
					'100%': { transform: 'scale(0.9)', opacity: 0 }
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
