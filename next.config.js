const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgoConfig: { plugins: [{ name: 'removeViewBox', active: false }] } },
        },
        {
          loader: 'file-loader',
          options: { publicPath: '/_next', name: 'static/media/[name].[hash].[ext]' },
        },
      ],
    });

    return config;
  },
});

module.exports = nextConfig;
