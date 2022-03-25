import * as React from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import type { TMeta } from '../types/meta.type';

export type TLayout = {
  children: React.ReactNode;
};

export type TProps = {
  Layout: ({ children }: TLayout) => JSX.Element;
  meta?: TMeta;
};

export type TNextPageWithLayout = NextPage & {
  Props: TProps;
};

export type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout;
};
