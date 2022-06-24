import * as React from 'react';
import Head from 'next/head';

import { Title } from '@/components/title';

import type { MetaType } from 'next';
import type { Router } from 'next/router';

type SEOType = {
    meta: MetaType;
    router: Router;
};

export const SEO = ({ meta, router }: SEOType) => {
    return (
        <>
            <Title suffix="Fahmi Idris Portfolio">{meta.title}</Title>

            <Head>
                <meta name="robots" content={meta.robots} />
                <meta name="description" content={meta.description} />

                {/* Open Graph */}
                <meta name="title" property="og:title" content={meta.title} />
                <meta name="description" property="og:description" content={meta.description} />
                <meta name="url" property="og:url" content={`${meta.url}${router.asPath}`} />
                <meta name="type" property="og:type" content={meta.type} />
                <meta name="site_name" property="og:site_name" content={meta.title} />
                <meta name="image" property="og:image" content={meta.image} />

                {/* Twitter */}
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FahmiIdrisA" />
                <meta name="twitter:creator" content="@FahmiIdrisA" />

                <link rel="canonical" href={`${meta.url}${router.asPath}`} />
            </Head>
        </>
    );
};
