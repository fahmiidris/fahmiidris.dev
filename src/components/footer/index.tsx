import * as React from 'react';

import Navigation from '@/components/footer/navigation';

export type TNavigation = typeof navigation;

const navigation = {
    Apps: [
        { name: 'Starter Templates', href: '#' },
        { name: 'Fahmi Idris Store', href: '#' },
        { name: 'Naqimart', href: '#' },
        { name: 'Bangjeff', href: '#' },
    ],
    Supports: [
        { name: 'Saweria', href: '#' },
        { name: 'Trakrteer', href: '#' },
        { name: 'GitHub Sponsor', href: '#' },
    ],
    Works: [
        { name: 'Contacts', href: '#' },
        { name: "Let's Work Together", href: '#' },
        { name: 'Reviews', href: '#' },
    ],
    Others: [
        { name: 'Source Code', href: '#' },
        { name: 'Credits', href: '#' },
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
