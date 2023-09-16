import * as React from 'react';

import Logo from '@/components/logo';
import Link from '@/components/link';
import Button from '@/components/button';
import Navigation from '@/components/navbar/navigation';

import clsxm from '@/utils/clsxm';

export type TNavigation = typeof navigation;

const navigation = {
    pages: [
        { name: 'Home', href: '/' },
        { name: 'Experiences', href: '/experiences' },
        { name: 'About', href: '/about' },
    ],
};

export default function Navbar() {
    return (
        <>
            <div className="bg-white">
                <div className="container flex items-center justify-end py-2">
                    <div className="flex items-center gap-x-2">
                        <Button.Link href="/resume" openNewTab={true} variant="outline" size="xs">
                            Resume
                        </Button.Link>
                    </div>
                </div>
            </div>

            <header className="sticky inset-x-0 top-0 z-40 border-y border-slate-200 bg-white">
                <nav aria-label="Top" className="container">
                    <div className={clsxm('pb-14', 'sm:pb-0')}>
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex flex-1">
                                <Link href="/" className={clsxm('mr-3 w-[2.25rem] flex-none overflow-hidden', 'lg:w-auto')}>
                                    <span className="sr-only">Logo</span>
                                    <Logo className="h-6 w-auto" />
                                </Link>
                            </div>

                            <Navigation {...{ navigation }} />

                            <div className="flex flex-1 items-center justify-end">
                                <div className="flex items-center justify-end gap-x-4"></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
