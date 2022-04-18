import * as React from 'react';
import clsx from 'clsx';
import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document';

import { Favicons } from '@/components/favicons';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps: DocumentInitialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html
        lang="en"
        className={clsx('scroll-smooth [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]')}
      >
        <Head>
          <Favicons />
          <script></script>
        </Head>
        <body className={clsx('font-sans text-slate-600 antialiased')}>
          <Main />
          <NextScript />
          <script></script>
        </body>
      </Html>
    );
  }
}
