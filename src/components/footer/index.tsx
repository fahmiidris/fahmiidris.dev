import * as React from 'react';

import Navigation from '@/components/footer/navigation';

export type TNavigation = typeof navigation;

const navigation = {
    Apps: [
        { name: 'Starter Templates', href: 'https://templates.fahmiidris.dev' },
        { name: 'Fahmi Idris Store', href: 'https://store.fahmiidris.dev' },
        { name: 'Naqimart', href: 'https://www.naqimart.com' },
        { name: 'Bangjeff', href: 'https://www.bangjeff.com' },
    ],
    Supports: [
        { name: 'Saweria', href: 'https://www.saweria.co/fahmiidris' },
        { name: 'Trakteer', href: 'https://www.trakteer.id/fahmiidris/tip' },
        { name: 'GitHub Sponsor', href: 'https://github.com/sponsors/fahmiidris-labs' },
    ],
    Works: [
        { name: 'Contacts', href: '/contacts' },
        { name: "Let's Work Together", href: '#' },
        { name: 'Reviews', href: '/reviews' },
    ],
    Others: [
        { name: 'Source Code', href: 'https://www.github.com/fahmiidris-labs/fahmiidris.dev' },
        { name: 'Credits', href: '/credits' },
        { name: 'RRS', href: '#' },
        { name: 'TIL', href: '#' },
        { name: 'Statistics', href: '#' },
        { name: 'Analytics', href: '#' },
    ],
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
