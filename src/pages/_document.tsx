import * as React from 'react';
import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document';

import { Favicon } from '@/components/favicon';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps: DocumentInitialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className={`scroll-smooth [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]`}>
        <Head>
          <Favicon />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white font-sans text-gray-700 antialiased dark:bg-gray-700">
          <Main />
          <NextScript />
          <script></script>
        </body>
      </Html>
    );
  }
}
