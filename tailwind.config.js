const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',

    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],

    darkMode: 'class', // 'media' or 'class' or false

    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
                pop: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gray: colors.coolGray,
                red: colors.rose,
                orange: colors.orange,
                emerald: colors.emerald,
                teal: colors.teal,
                blue: colors.sky,
                violet: colors.violet,
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
            typography: ["dark"]
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}