import * as React from 'react';

import { Topbar } from '@/components/organisms/fi-topbar/topbar';
import { Navbar } from '@/components/organisms/fi-navbar/navbar';
import { Footer } from '@/components/organisms/fi-footer/footer';

import type { TLayout } from '@/types/app.type';

export const MainLayout = ({ children }: TLayout) => {
  return (
    <div className="relative">
      {/* Top Bar */}
      <Topbar />
      <Navbar />
      <main className="-mt-[92px] flex min-h-screen w-full flex-col">{children}</main>
      <Footer />
    </div>
  );
};
