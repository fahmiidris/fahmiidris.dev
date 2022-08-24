const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      colors: {
        code: {
          highlight: 'rgb(125 211 252 / 0.1)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};

module.exports = tailwindConfig;
