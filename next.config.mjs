import nextMDX from '@next/mdx';
import bundleAnalyzer from '@next/bundle-analyzer';

import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

const withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
        recmaPlugins: [],
        rehypePlugins: [],
        remarkPlugins: [remarkGfm, remarkUnwrapImages],
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
