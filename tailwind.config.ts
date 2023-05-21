import { fontFamily } from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

const tailwindConfig = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            screens: {
                '2xl': '1536px',
            },
            fontFamily: {
                sans: ['Inter var', ...fontFamily.sans],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;

export default tailwindConfig;
