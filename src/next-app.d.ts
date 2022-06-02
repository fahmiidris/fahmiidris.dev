import type { AppProps } from 'next/app';
import type { NextPageWithLayoutType } from 'next';

declare module 'next/app' {
  type AppPropsWithLayoutType<T = {}> = AppProps<T> & {
    Component: NextPageWithLayoutType;
  };
}
