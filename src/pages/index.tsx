import * as React from 'react';

import { Header } from '@/components/home/header';
import { Summary } from '@/components/home/summary';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Header />

      <div className="space-y-24 overflow-hidden py-24">
        <Summary />
      </div>
    </>
  );
};

export default HomePage;
