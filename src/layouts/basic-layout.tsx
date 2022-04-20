import * as React from 'react';

import type { TNextLayout } from 'next';

type TBasicLayout = {
  children: React.ReactNode;
};

export const BasicLayout: TNextLayout<TBasicLayout> = ({ children }): JSX.Element => {
  return (
    <>
      <main className="relative pt-10">{children}</main>
    </>
  );
};
