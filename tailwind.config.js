const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
        sans: ['IBM Plex Sans', ...fontFamily.sans]
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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.secondary.200'),
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            strong: theme('colors.primary.100'),
            thead: {
              borderBottomColor: theme('colors.secondary.200')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.primary.200'),
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            thead: {
              th: {
                color: theme('colors.primary.100')
              },
              borderBottomColor: theme('colors.primary.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.primary.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
};
