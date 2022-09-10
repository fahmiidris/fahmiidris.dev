import remarkGfm from 'remark-gfm';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx'],
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['i.scdn.co'],
  },

  webpack: (config, options) => {
    const mdx = (plugins = []) => [
      {
        loader: '@mdx-js/loader',
        options: {
          remarkPlugins: [...plugins, remarkGfm],
          rehypePlugins: [],
        },
      },
    ];

    config.module.rules.push({
      test: /\.mdx$/,
      resourceQuery: /preview/,
      use: [
        options.defaultLoaders.babel,
        ...mdx([
          () => (tree) => {
            const firstParagraphIndex = tree.children.findIndex((child) => child.type === 'paragraph');

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
      test: { and: [/\.mdx$/] },
      resourceQuery: { not: [/preview/] },
      use: [options.defaultLoaders.babel, ...mdx()],
    });

    return config;
  },
});

export default nextConfig;
