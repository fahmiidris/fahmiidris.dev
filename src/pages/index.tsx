import * as React from 'react';

import { Header } from '@/components/home/header';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Header />

      <div className="overflow-hidden py-12"></div>
    </>
  );
};

export default HomePage;
