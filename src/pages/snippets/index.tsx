import * as React from 'react';
import { ScissorsIcon } from '@heroicons/react/outline';

import { Section } from '@/components/section';

import DefaultLayout from '@/layouts/default-layout';

import type { NextPageWithLayoutType } from 'next';

const SnippetsPage: NextPageWithLayoutType = () => {
    return (
        <Section id="snippets" title="My Snippets" description="These are a collection of code snippets I've used in the past and saved." icon={ScissorsIcon} className="container relative mb-20">
            <div className="py-8">
                <p className="text-sm font-semibold">Currently Under Development!</p>
            </div>
        </Section>
    );
};

SnippetsPage.Props = {
    Layout: DefaultLayout,
    meta: {
        title: "Snippets",
        description: "These are a collection of code snippets I've used in the past and saved.",
    },
};

export default SnippetsPage;
