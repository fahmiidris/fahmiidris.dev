import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import bundleAnalyzer from '@next/bundle-analyzer';

const withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
        recmaPlugins: [],
        rehypePlugins: [],
        remarkPlugins: [remarkGfm],
    },
});

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
    reactStrictMode: true,

    pageExtensions: ['tsx', 'mdx'],

    images: {
        domains: ['i.scdn.co'],
    },
});

export default withBundleAnalyzer(nextConfig);
