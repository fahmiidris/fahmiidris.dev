import * as React from 'react';

import type { TLayout } from '@/types/app.type';

export const RootLayout = ({ children }: TLayout) => {
  return <div className="flex min-h-screen w-full flex-col">{children}</div>;
};
