import * as React from 'react';
import Head from 'next/head';

import { Logo } from '@/components/logo';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hi, I&apos;m Fahmi Idris - www.fahmiidris.dev</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Logo className="h-10 w-auto" />
        <div className="flex flex-col items-center pt-4">
          <h1 className="text-lg font-semibold">Hello Next.js</h1>
          <p>Hi, I&apos;m Fahmi Idris, a frontend engineer based in West Java - Indonesia.</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
