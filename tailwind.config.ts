/* eslint-disable @typescript-eslint/no-explicit-any */

import defaultTheme from 'tailwindcss/defaultTheme';

import tailwindcssForms from '@tailwindcss/forms';
import tailwindcssTypography from '@tailwindcss/typography';

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
            typography: ({ theme }: any) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.slate.600'),
                        '--tw-prose-headings': theme('colors.slate.700'),
                        '--tw-prose-links': theme('colors.cyan.500'),
                        '--tw-prose-links-hover': theme('colors.cyan.600'),
                        '--tw-prose-underline': theme('colors.cyan.500 / 0.2'),
                        '--tw-prose-underline-hover': theme('colors.cyan.500'),
                        '--tw-prose-bold': theme('colors.slate.700'),
                        '--tw-prose-counters': theme('colors.slate.700'),
                        '--tw-prose-bullets': theme('colors.slate.700'),
                        '--tw-prose-hr': theme('colors.slate.200'),
                        '--tw-prose-quote-borders': theme('colors.slate.200'),
                        '--tw-prose-captions': theme('colors.slate.400'),
                        '--tw-prose-code': theme('colors.slate.700'),
                        '--tw-prose-code-bg': theme('colors.slate.300 / 0.2'),
                        '--tw-prose-pre-code': theme('colors.slate.100'),
                        '--tw-prose-pre-bg': theme('colors.slate.700'),
                        '--tw-prose-pre-border': 'transparent',
                        '--tw-prose-th-borders': theme('colors.slate.200'),
                        '--tw-prose-td-borders': theme('colors.slate.100'),

                        '--tw-prose-invert-body': theme('colors.slate.400'),
                        '--tw-prose-invert-headings': theme('colors.slate.200'),
                        '--tw-prose-invert-links': theme('colors.cyan.400'),
                        '--tw-prose-invert-links-hover': theme('colors.cyan.400'),
                        '--tw-prose-invert-underline': theme('colors.cyan.400 / 0.3'),
                        '--tw-prose-invert-underline-hover': theme('colors.cyan.400'),
                        '--tw-prose-invert-bold': theme('colors.slate.200'),
                        '--tw-prose-invert-counters': theme('colors.slate.200'),
                        '--tw-prose-invert-bullets': theme('colors.slate.200'),
                        '--tw-prose-invert-hr': theme('colors.slate.700 / 0.4'),
                        '--tw-prose-invert-quote-borders': theme('colors.slate.500'),
                        '--tw-prose-invert-captions': theme('colors.slate.500'),
                        '--tw-prose-invert-code': theme('colors.slate.300'),
                        '--tw-prose-invert-code-bg': theme('colors.slate.200 / 0.05'),
                        '--tw-prose-invert-pre-code': theme('colors.slate.100'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 0.4)',
                        '--tw-prose-invert-pre-border': theme('colors.slate.200 / 0.1'),
                        '--tw-prose-invert-th-borders': theme('colors.slate.700'),
                        '--tw-prose-invert-td-borders': theme('colors.slate.800'),

                        color: 'var(--tw-prose-body)',
                        lineHeight: theme('lineHeight.7'),
                        '> *': {
                            marginTop: theme('spacing.8'),
                            marginBottom: theme('spacing.8'),
                        },
                        p: {
                            marginTop: theme('spacing.7'),
                            marginBottom: theme('spacing.7'),
                        },

                        'h2, h3': {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: theme('fontWeight.semibold'),
                        },
                        h2: {
                            fontSize: theme('fontSize.xl')[0],
                            lineHeight: theme('lineHeight.7'),
                            marginTop: theme('spacing.20'),
                            marginBottom: theme('spacing.4'),
                        },
                        h3: {
                            fontSize: theme('fontSize.base')[0],
                            lineHeight: theme('lineHeight.7'),
                            marginTop: theme('spacing.16'),
                            marginBottom: theme('spacing.4'),
                        },
                        ':is(h2, h3) + *': {
                            marginTop: 0,
                        },

                        img: {
                            borderRadius: theme('borderRadius.3xl'),
                        },

                        a: {
                            color: 'var(--tw-prose-links)',
                            fontWeight: theme('fontWeight.semibold'),
                            textDecoration: 'underline',
                            textDecorationColor: 'var(--tw-prose-underline)',
                            transitionProperty: 'color, text-decoration-color',
                            transitionDuration: theme('transitionDuration.150'),
                            transitionTimingFunction: theme('transitionTimingFunction.in-out'),
                        },
                        'a:hover': {
                            color: 'var(--tw-prose-links-hover)',
                            textDecorationColor: 'var(--tw-prose-underline-hover)',
                        },
                        strong: {
                            color: 'var(--tw-prose-bold)',
                            fontWeight: theme('fontWeight.semibold'),
                        },
                        code: {
                            display: 'inline-block',
                            color: 'var(--tw-prose-code)',
                            fontSize: theme('fontSize.sm')[0],
                            fontWeight: theme('fontWeight.semibold'),
                            backgroundColor: 'var(--tw-prose-code-bg)',
                            borderRadius: theme('borderRadius.lg'),
                            paddingLeft: theme('spacing.1'),
                            paddingRight: theme('spacing.1'),
                        },
                        'a code': {
                            color: 'inherit',
                        },
                        ':is(h2, h3) code': {
                            fontWeight: theme('fontWeight.bold'),
                        },

                        blockquote: {
                            paddingLeft: theme('spacing.6'),
                            borderLeftWidth: theme('borderWidth.2'),
                            borderLeftColor: 'var(--tw-prose-quote-borders)',
                            fontStyle: 'italic',
                        },

                        figcaption: {
                            color: 'var(--tw-prose-captions)',
                            fontSize: theme('fontSize.sm')[0],
                            lineHeight: theme('lineHeight.6'),
                            marginTop: theme('spacing.3'),
                        },
                        'figcaption > p': {
                            margin: 0,
                        },

                        ul: {
                            listStyleType: 'disc',
                        },
                        ol: {
                            listStyleType: 'decimal',
                        },
                        'ul, ol': {
                            paddingLeft: theme('spacing.4'),
                        },
                        li: {
                            marginTop: theme('spacing.4'),
                            marginBottom: theme('spacing.4'),
                            paddingLeft: theme('spacing[3.5]'),
                        },
                        'li::marker': {
                            fontSize: theme('fontSize.sm')[0],
                            fontWeight: theme('fontWeight.semibold'),
                            marginLeft: '100px',
                        },
                        'ol > li::marker': {
                            color: 'var(--tw-prose-counters)',
                        },
                        'ul > li::marker': {
                            color: 'var(--tw-prose-bullets)',
                        },
                        'li :is(ol, ul)': {
                            marginTop: theme('spacing.4'),
                            marginBottom: theme('spacing.4'),
                        },
                        'li :is(li, p)': {
                            marginTop: theme('spacing.3'),
                            marginBottom: theme('spacing.3'),
                        },

                        pre: {
                            color: 'var(--tw-prose-pre-code)',
                            fontSize: theme('fontSize.sm')[0],
                            fontWeight: theme('fontWeight.medium'),
                            backgroundColor: 'var(--tw-prose-pre-bg)',
                            borderRadius: theme('borderRadius.3xl'),
                            padding: theme('spacing.8'),
                            overflowX: 'auto',
                            border: '1px solid',
                            borderColor: 'var(--tw-prose-pre-border)',
                        },
                        'pre code': {
                            display: 'inline',
                            color: 'inherit',
                            fontSize: 'inherit',
                            fontWeight: 'inherit',
                            backgroundColor: 'transparent',
                            borderRadius: 0,
                            padding: 0,
                        },

                        hr: {
                            marginTop: theme('spacing.20'),
                            marginBottom: theme('spacing.20'),
                            borderTopWidth: '1px',
                            borderColor: 'var(--tw-prose-hr)',
                        },

                        table: {
                            width: '100%',
                            tableLayout: 'auto',
                            textAlign: 'left',
                            fontSize: theme('fontSize.sm')[0],
                        },
                        thead: {
                            borderBottomWidth: '1px',
                            borderBottomColor: 'var(--tw-prose-th-borders)',
                        },
                        'thead th': {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: theme('fontWeight.semibold'),
                            verticalAlign: 'bottom',
                            paddingBottom: theme('spacing.2'),
                        },
                        'thead th:not(:first-child)': {
                            paddingLeft: theme('spacing.2'),
                        },
                        'thead th:not(:last-child)': {
                            paddingRight: theme('spacing.2'),
                        },
                        'tbody tr': {
                            borderBottomWidth: '1px',
                            borderBottomColor: 'var(--tw-prose-td-borders)',
                        },
                        'tbody tr:last-child': {
                            borderBottomWidth: 0,
                        },
                        'tbody td': {
                            verticalAlign: 'baseline',
                        },
                        tfoot: {
                            borderTopWidth: '1px',
                            borderTopColor: 'var(--tw-prose-th-borders)',
                        },
                        'tfoot td': {
                            verticalAlign: 'top',
                        },
                        ':is(tbody, tfoot) td': {
                            paddingTop: theme('spacing.2'),
                            paddingBottom: theme('spacing.2'),
                        },
                        ':is(tbody, tfoot) td:not(:first-child)': {
                            paddingLeft: theme('spacing.2'),
                        },
                        ':is(tbody, tfoot) td:not(:last-child)': {
                            paddingRight: theme('spacing.2'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [tailwindcssForms, tailwindcssTypography],
} satisfies Config;

export default tailwindConfig;
