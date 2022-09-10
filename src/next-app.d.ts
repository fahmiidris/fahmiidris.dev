import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from 'next';

declare module 'next/app' {
  type AppPropsWithLayout<T = {}> = AppProps<T> & {
    Component: NextPageWithLayout;
  };
}
