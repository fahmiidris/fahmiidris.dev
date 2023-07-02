import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssForms from '@tailwindcss/forms';

import type { Config } from 'tailwindcss';

const tailwindConfig = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                },
            },
            colors: {
                primary: colors.cyan,
                secondary: colors.slate,
                tertiary: colors.amber,
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                '2xl': '1536px',
            },
        },
    },
    plugins: [tailwindcssForms],
} satisfies Config;

export default tailwindConfig;
