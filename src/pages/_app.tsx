import '@/css/fonts.css';
import '@/css/main.css';

import * as React from 'react';
import Router from 'next/router';

import ProgressBar from '@/utils/bar-of-progress';

import type { AppProps } from 'next/app';

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

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
