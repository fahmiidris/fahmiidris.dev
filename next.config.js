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

  webpack: (config, option) => {
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

    return config;
  },
});

module.exports = nextConfig;
