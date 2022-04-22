import * as React from 'react';

import { Topbar } from '@/components/topbar';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Announcement } from '@/components/announcement';

import type { TNextLayout } from 'next';

type TBasicLayout = {
  children: React.ReactNode;
};

export const BasicLayout: TNextLayout<TBasicLayout> = ({ children }): JSX.Element => {
  return (
    <>
      <Announcement message="Hei!👋🏻 I have a new look! What do you think?" />
      <Topbar />
      <Navbar />
      <main className="relative pt-8">{children}</main>
      <Footer />
    </>
  );
};
