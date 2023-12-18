import * as React from 'react';

import Navigation from '@/components/footer/navigation';

import {
    EMAIL_URL,
    SAWERIA_URL,
    TRAKTEER_URL,
    KO_FI_URL,
    GITHUB_SPONSOR_URL,
    BANGJEFF_URL,
    SOURCE_CODE_URL,
    BISNIS_BANGJEFF_URL,
    DOCS_BANGJEFF_URL,
} from '@/constants/urls';

export type TNavigation = typeof navigation;

const navigation = {
    Apps: [
        { name: 'Bangjeff', href: BANGJEFF_URL },
        { name: 'Bisnis Bangjeff', href: BISNIS_BANGJEFF_URL },
        { name: 'Docs Bangjeff', href: DOCS_BANGJEFF_URL },
    ],
    Supports: [
        { name: 'Saweria', href: SAWERIA_URL },
        { name: 'Trakteer', href: TRAKTEER_URL },
        { name: 'Ko-fi', href: KO_FI_URL },
        { name: 'GitHub Sponsor', href: GITHUB_SPONSOR_URL },
    ],
    Works: [{ name: 'Contacts', href: EMAIL_URL }],
    Others: [{ name: 'Source Code', href: SOURCE_CODE_URL }],
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
