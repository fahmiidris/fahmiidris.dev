import '@/css/fonts.css';
import '@/css/main.css';

import * as React from 'react';
import axios from 'axios';
import NextRouter from "next/router";
import ProgressBar from '@badrap/bar-of-progress';
import { SWRConfig } from 'swr';

import { SEO } from '@/components/seo';
import { MDXComponents } from '@/components/mdx-components';
import { BackToTopSection } from '@/components/back-to-top-section';

import type { AppPropsWithLayoutType } from 'next/app';

const progress = new ProgressBar({
    size: 2,
    color: '#475569',
    className: 'bar-of-progress',
    delay: 100,
});

if (typeof window !== 'undefined') {
    progress.start();
    progress.finish();
}

NextRouter.events.on('routeChangeStart', () => progress.start());
NextRouter.events.on('routeChangeComplete', () => progress.finish());
NextRouter.events.on('routeChangeError', () => progress.finish());

const defaultMeta = {
    title: "Hi, I'm Fahmi Idris",
    description: 'Fahmi Idris Personal Portfolio Website, Blog, Project Showcase, and My Experience History.',
    url: 'https://www.fahmiidris.dev',
    image: 'https://www.fahmiidris.dev/images/default-social-image.jpg',
    type: 'website',
    robots: 'follow, index',
};

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayoutType) => {
    const Layout = Component.Props?.Layout ?? React.Fragment;

    const layoutProps = {
        fm: Component.Props?.fm ?? {},
    };

    return (
        <>
            <SEO meta={Object.assign({}, defaultMeta, Component.Props?.meta ?? {})} router={router} />

            <SWRConfig value={{ fetcher: (url: string) => axios.get(url).then((res) => res.data) }}>
                <Layout {...layoutProps}>
                    <Component {...pageProps} components={MDXComponents} />
                </Layout>
            </SWRConfig>

            <BackToTopSection />
        </>
    );
};

export default MyApp;
