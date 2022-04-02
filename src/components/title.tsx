import * as React from 'react';
import Head from 'next/head';

type TTitle = {
  suffix?: string;
  children?: string;
};

export const Title = ({ suffix, children }: TTitle) => {
  let title: string = children + (suffix ? ` - ${suffix}` : '');

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Head>
  );
};
