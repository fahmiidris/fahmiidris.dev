import * as React from 'react';

import { RootLayout } from '@/components/templates/root-layout';

import type { TNextPageWithLayout } from '@/types/app.type';

const HomePage: TNextPageWithLayout = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="animated-underline">Hello World!</h1>
      </div>
    </>
  );
};

HomePage.Props = {
  Layout: RootLayout,
  meta: {
    title: "Hi! I'm Fahmi Idris",
    description:
      'Fahmi Idris Portfolio, Blog, Personal Project Showcase, and My Experience History.',
  },
};

export default HomePage;
