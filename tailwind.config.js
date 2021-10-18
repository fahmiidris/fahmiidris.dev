const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',

    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],

    darkMode: 'class', // 'media' or 'class' or false

    theme: {
        extend: {
            fontFamily: {
                pop: ['Poppins', ...defaultTheme.fontFamily.sans],
                sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                red: colors.rose,
                blue: colors.sky,
                gray: colors.coolGray,
                teal: colors.teal,
                dark: colors.coolGray[700],
                light: colors.white,
                orange: colors.orange,
                violet: colors.violet,
                emerald: colors.emerald,
                fuchsia: colors.fuchsia,
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-45deg)' },
                    '50%': { transform: 'rotate(45deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in infinite',
            }
        },
        container: {
            center: true,
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            typography: ["dark"],
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}