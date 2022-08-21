import '@/css/fonts.css';
import '@/css/main.css';

import * as React from 'react';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
