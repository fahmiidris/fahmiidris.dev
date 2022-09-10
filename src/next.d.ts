import type { NextPage } from 'next';

declare module 'next' {
  type Meta = {
    title: string;
    description?: string;
    url?: string;
    image?: string;
    type?: string;
    robots?: string;
  };

  type NextPageWithLayout<T = {}, TP = T> = NextPage<T, TP> & {
    Props?: {
      meta: Meta;
    };
  };
}
