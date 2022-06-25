const path = require('path');
const minimatch = require('minimatch');

const { createLoader } = require('simple-functional-loader');

const fallbackDefaultExports = {
    'src/pages/blog/**/*': ['@/layouts/blog-post-layout', 'BlogPostLayout'],
    'src/pages/experiences/**/*': ['@/layouts/experience-post-layout', 'ExperiencePostLayout'],
    'src/pages/snippets/**/*': ['@/layouts/snippet-post-layout', 'SnippetPostLayout'],
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
    swcMinify: true,
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

    images: {
        domains: ['i.scdn.co', 'ui-avatars.com'],
    },

    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/i,
            type: 'asset',
            resourceQuery: /url/,
        });

        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.(jsx?|tsx?|mdx)$/,
            resourceQuery: { not: [/url/] },
            use: [
                {
                    loader: '@svgr/webpack',
                    options: { svgoConfig: { plugins: [{ name: 'removeViewBox', active: false }] } },
                },
            ],
        });

        let mdx = (plugins = []) => [
            {
                loader: '@mdx-js/loader',
                options: {
                    remarkPlugins: [...plugins],
                    rehypePlugins: [],
                },
            }
        ];

        config.module.rules.push({
            test: { and: [/\.mdx$/, /examples/] },
            resourceQuery: { not: [/rss/, /preview/] },
            use: [
                options.defaultLoaders.babel,
                {
                    loader: '@mdx-js/loader',
                    options: {
                        remarkPlugins: [],
                        rehypePlugins: [],
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.mdx$/,
            resourceQuery: /rss/,
            use: [options.defaultLoaders.babel, ...mdx()],
        });

        config.module.rules.push({
            test: /\.mdx$/,
            resourceQuery: /preview/,
            use: [
                options.defaultLoaders.babel,
                ...mdx([
                    () => (tree) => {
                        let firstParagraphIndex = tree.children.findIndex((child) => child.type === 'paragraph');

                        if (firstParagraphIndex > -1) {
                            tree.children = tree.children.filter((_, index) => {
                                return index <= firstParagraphIndex;
                            });
                        }
                    },
                ]),
            ],
        });

        config.module.rules.push({
            test: { and: [/\.mdx$/], not: [/examples/] },
            resourceQuery: { not: [/rss/, /preview/] },
            use: [
                options.defaultLoaders.babel,
                createLoader(function (source) {
                    return source + `\nMDXContent.Props = { Layout, meta, fm: meta }\n`;
                }),
                ...mdx(),
                createLoader(function (source) {
                    let extra = [];
                    let resourcePath = path.relative(__dirname, this.resourcePath);

                    if (!/^\s*export\s+default\s+/m.test(source.replace(/```(.*?)```/gs, ''))) {
                        for (let glob in fallbackDefaultExports) {
                            if (minimatch(resourcePath, glob)) {
                                extra.push(`import { ${fallbackDefaultExports[glob][1]} as Layout } from '${fallbackDefaultExports[glob][0]}'`);
                                break;
                            }
                        }
                    }

                    return [...extra, source].filter(Boolean).join('\n\n');
                })
            ],
        });

        return config;
    },
});

module.exports = nextConfig;
