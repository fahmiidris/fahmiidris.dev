import * as React from 'react';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import type { TLayoutProps } from '@/types/layout.type';

export default function Layout({ children }: TLayoutProps) {
    return (
        <>
            <Navbar />

            <main className="relative">{children}</main>

            <Footer />
        </>
    );
}
