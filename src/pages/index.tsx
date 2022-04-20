import * as React from 'react';

import { BasicLayout } from '@/layouts/basic-layout';

import type { TNextPageWithLayout } from 'next';

const HomePage: TNextPageWithLayout = () => {
  return <></>;
};

HomePage.Props = {
  Layout: BasicLayout,
  meta: {
    title: "Hi, I'm Fahmi Idris - www.fahmiidris.dev",
  },
};

export default HomePage;
