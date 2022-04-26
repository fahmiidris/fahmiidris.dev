import '@/css/fonts.css';
import '@/css/main.css';

import * as React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { Title } from '@/components/title';
import { SearchProvider } from '@/components/search';

import ProgressBar from '@/utils/bar-of-progress';

import type { TProps } from 'next';
import type { TAppPropsWithLayout } from 'next/app';

const progress: ProgressBar = new ProgressBar({
  size: 2,
  color: '#22d3ee',
  className: 'bar-of-progress',
  delay: 100,
});

if (typeof window !== 'undefined') {
  progress.start();
  progress.finish();
}

Router.events.on('routeChangeStart', (): void => progress.start());
Router.events.on('routeChangeComplete', (): void => progress.finish());
Router.events.on('routeChangeError', (): void => progress.finish());

const defaultMeta: TProps['meta'] = {
  title: "Hi, I'm Fahmi Idris",
  description:
    'Fahmi Idris Personal Portfolio Website, Blog, Project Showcase, and My Experience History.',
  url: 'https://www.fahmiidris.dev',
  image: 'https://www.fahmiidris.dev/images/default-social-image.jpg',
  type: 'website',
  robots: 'follow, index',
};

const MyApp = ({ Component, pageProps, router }: TAppPropsWithLayout): JSX.Element => {
  const { Layout, meta: customMeta }: TProps = Component.Props;
  const meta: TProps['meta'] & {
    date?: string;
  } = { ...defaultMeta, ...customMeta };

  return (
    <>
      <Title suffix="www.fahmiidris.dev">{meta.title}</Title>
      <Head>
        <meta name="robots" content={meta.robots} />
        <meta name="description" content={meta.description} />

        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FahmiIdrisA" />
        <meta name="twitter:creator" content="@FahmiIdrisA" />

        <link rel="canonical" href={`${meta.url}${router.asPath}`} />

        {meta.date && (
          <>
            <meta name="author" property="article:author" content="Theodorus Clarence" />
            <meta name="published_time" property="article:published_time" content={meta.date} />
            <meta name="publish_date" property="og:publish_date" content={meta.date} />
          </>
        )}
      </Head>
      <SearchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    </>
  );
};

export default MyApp;
