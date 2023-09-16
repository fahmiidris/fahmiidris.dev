import nextMDX from '@next/mdx';
import bundleAnalyzer from '@next/bundle-analyzer';

import redirects from './tools/next/redirects.mjs';

import { remarkPlugins } from './tools/mdx/remark.mjs';
import { rehypePlugins } from './tools/mdx/rehype.mjs';
import { recmaPlugins } from './tools/mdx/recma.mjs';

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

    redirects: async () => {
        return redirects;
    },
});

export default withBundleAnalyzer(nextConfig);
