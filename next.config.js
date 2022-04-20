/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ui-avatars.com'],
  },
  webpack: (config) => {
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
};

module.exports = nextConfig;
