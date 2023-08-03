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
            fontFamily: {
                sans: [['Inter var', ...defaultTheme.fontFamily.sans], { fontFeatureSettings: "'cv02', 'cv03', 'cv04', 'cv11'" }],
            },
            screens: {
                '2xl': '1536px',
            },
        },
    },
    plugins: [tailwindcssForms],
} satisfies Config;

export default tailwindConfig;
