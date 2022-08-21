import '@/css/fonts.css';
import '@/css/main.css';

import * as React from 'react';
import Router from 'next/router';

import ProgressBar from '@/utils/progress-bar';

import type { AppProps } from 'next/app';

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

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
