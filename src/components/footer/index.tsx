import * as React from 'react';

import Navigation from '@/components/footer/navigation';

export type TNavigation = typeof navigation;

const navigation = {
    Apps: [{ name: 'Bangjeff', href: 'https://www.bangjeff.com' }],
    Supports: [
        { name: 'Saweria', href: 'https://www.saweria.co/fahmiidris' },
        { name: 'Trakteer', href: 'https://www.trakteer.id/fahmiidris/tip' },
        { name: 'GitHub Sponsor', href: 'https://github.com/sponsors/fahmiidris' },
    ],
    Works: [{ name: 'Contacts', href: 'mailto:fahmiidris.dev@gmail.com' }],
    Others: [{ name: 'Source Code', href: 'https://www.github.com/fahmiidris/fahmiidris.dev' }],
};

export default function Footer() {
    return (
        <footer className="bg-white">
            <h2 className="sr-only">Footer</h2>

            <div className="border-y border-slate-200">
                <Navigation {...{ navigation }} />
            </div>

            <div className="container py-6">
                <p className="text-sm/7 font-medium">&copy; {new Date().getFullYear()} - Fahmi Idris. All rights reserved.</p>
            </div>
        </footer>
    );
}
