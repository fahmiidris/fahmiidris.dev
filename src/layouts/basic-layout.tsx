import * as React from 'react';
import { Footer } from '@/components/footer';

import type { TNextLayout } from 'next';

type TBasicLayout = {
  children: React.ReactNode;
};

export const BasicLayout: TNextLayout<TBasicLayout> = ({ children }): JSX.Element => {
  return (
    <>
      <main className="relative pt-8">{children}</main>
      <Footer />
    </>
  );
};
