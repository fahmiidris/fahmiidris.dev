import * as React from 'react';

import { Footer } from '@/components/organisms/fi-footer/footer';

import type { TLayout } from '@/types/app.type';

export const RootLayout = ({ children }: TLayout) => {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col">{children}</main>
      <Footer />
    </>
  );
};
