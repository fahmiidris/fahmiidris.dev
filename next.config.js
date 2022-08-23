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
});

module.exports = nextConfig;
