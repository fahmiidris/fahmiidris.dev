const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

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
          remarkPlugins: [...plugins],
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

    return config;
  },
});

module.exports = nextConfig;
