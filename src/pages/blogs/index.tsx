import * as React from 'react';

import { Widont } from '@/components/widont';
import { BasicLayout } from '@/layouts/basic-layout';

import type { TNextPageWithLayout } from 'next';

const BlogsPage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="relative mb-20">
        <div className="container flex flex-col space-y-6">
          <header className="pb-16 sm:text-center">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
              My Blogs and Opinions
            </h1>
            <p className="text-base text-slate-700 dark:text-slate-400">
              <Widont>Some personal opinions on technology and my random thoughts.</Widont>
            </p>
            <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
              <h2 className="sr-only">Sign up for our newsletter</h2>
            </section>
          </header>
          <div className="min-h-screen space-y-16">{/* list blog nya disini */}</div>
        </div>
      </div>
    </>
  );
};

BlogsPage.Props = {
  Layout: BasicLayout,
  meta: {
    title: 'Blogs',
    description: 'Some personal opinions on technology and my random thoughts.',
  },
};

export default BlogsPage;
