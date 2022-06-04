import * as React from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/navbar/header';
import { Announcement } from '@/components/navbar/announcement';

import type { NextLayoutType } from 'next';

const MainLayout: NextLayoutType = ({ children }) => {
    return (
        <>
            <Announcement href="https://github.com/fahmiidris-labs/fahmiidris.dev" message="Hei!👋🏻 I have a new look! What do you think?" />
            <Header />
            <main className="relative z-10 py-8">{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
