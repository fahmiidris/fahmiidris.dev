import '@/css/fonts.css';
import '@/css/main.css';

import * as React from 'react';
import Router from 'next/router';

import { Seo } from '@/components/seo';
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
  const meta: TProps['meta'] = { ...defaultMeta, ...customMeta };

  return (
    <>
      <Title suffix="www.fahmiidris.dev">{meta.title}</Title>
      <Seo router={router} />
      <SearchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    </>
  );
};

export default MyApp;
