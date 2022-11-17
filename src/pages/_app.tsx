import '@/css/fonts.css';
import '@/css/main.css';

import * as React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { Title } from '@/components/title';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Announcement } from '@/components/navbar/announcement';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';

import ProgressBar from '@/utils/progress-bar';

import type { AppPropsWithLayout } from 'next/app';

const progress = new ProgressBar({
  size: 2,
  color: '#475569',
  className: 'progress-bar',
  delay: 100,
});

if (typeof window !== 'undefined') {
  progress.start();
  progress.finish();
}

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

const defaultMeta = {
  title: "Hi, I'm Fahmi Idris",
  description: 'Fahmi Idris Personal Portfolio Website, Article, Project Showcase, and My Experience History.',
  url: 'https://www.fahmiidris.dev',
  image: 'https://www.fahmiidris.dev/images/default-og.png',
  type: 'website',
  robots: 'follow, index',
};

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  const customMeta = Component.Props?.meta ?? {};
  const meta = Object.assign({}, defaultMeta, customMeta);

  return (
    <>
      <Title suffix="Fahmi Idris Portfolio">{meta.title}</Title>

      <Head>
        <meta name="robots" content={meta.robots} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="fahmi,idris,fahmi idris,fahmiidris" />

        {/* Open Graph */}
        <meta name="type" property="og:type" content={meta.type} />
        <meta name="image" property="og:image" content={meta.image} />
        <meta name="site_name" property="og:site_name" content={meta.title} />
        <meta name="url" property="og:url" content={`${meta.url}${router.pathname}`} />
        <meta name="description" property="og:description" content={meta.description} />

        {/* Twitter */}
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:site" content="@fahmiidris_dev" />
        <meta name="twitter:creator" content="@fahmiidris_dev" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href={`${meta.url}${router.pathname}`} />
      </Head>

      {/* <Announcement
        href="https://www.github.com/fahmiidris-labs/fahmiidris.dev"
        message="Hey! I have a new User Interface and it already supports MDX 2!"
      /> */}
      <Navbar />
      <main className="relative">
        <Component {...pageProps} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default MyApp;
