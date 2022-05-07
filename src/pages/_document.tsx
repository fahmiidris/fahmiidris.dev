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
        className={clsx('dark scroll-smooth [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]')}
      >
        <Head>
          <Favicons />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
            }}
          />
        </Head>
        <body
          className={clsx('font-sans text-slate-500 antialiased dark:text-slate-400', {
            'bg-white dark:bg-slate-900': !this.props.dangerousAsPath.startsWith('/examples/'),
          })}
        >
          <Main />
          <NextScript />
          <script></script>
        </body>
      </Html>
    );
  }
}
