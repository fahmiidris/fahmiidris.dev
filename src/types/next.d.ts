import * as React from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  type TNextLayout<T = {}> = React.ComponentType<T> & {};

  type TProps = {
    Layout: any;
    meta?: {
      title: string;
      description?: string;
      url?: string;
      image?: string;
      type?: string;
      robots?: string;
    };
  };

  type TNextPageWithLayout<T = {}> = NextPage & {
    Props: TProps;
  };
}

declare module 'next/app' {
  type TAppPropsWithLayout<T = {}> = AppProps & {
    Component: TNextPageWithLayout<T>;
  };
}
