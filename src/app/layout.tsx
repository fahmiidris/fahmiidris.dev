import '@/styles/fonts.css';
import '@/styles/main.css';

import * as React from 'react';

import clsxm from '@/utils/clsxm';

import type { TLayoutProps } from '@/types/layout.type';

export default function RootLayout({ children }: TLayoutProps) {
    return (
        <html lang="en" className={clsxm('scroll-smooth [--scroll-mt:9.875rem]', 'lg:[--scroll-mt:6.3125rem]')}>
            <body className="bg-white font-sans text-slate-500 antialiased">{children}</body>
        </html>
    );
}
