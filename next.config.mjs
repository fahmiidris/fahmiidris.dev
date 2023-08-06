import nextMDX from '@next/mdx';
import bundleAnalyzer from '@next/bundle-analyzer';

import { remarkPlugins } from './mdx/remark.mjs';
import { rehypePlugins } from './mdx/rehype.mjs';
import { recmaPlugins } from './mdx/recma.mjs';

const withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
        remarkPlugins,
        rehypePlugins,
        recmaPlugins,
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

    experimental: {},
});

export default withBundleAnalyzer(nextConfig);
