import * as React from 'react';
import { ScissorsIcon, SearchIcon } from '@heroicons/react/outline';

import { Input } from '@/components/input';
import { Section } from '@/components/section';

import DefaultLayout from '@/layouts/default-layout';

import type { NextPageWithLayoutType } from 'next';

const SnippetsPage: NextPageWithLayoutType = () => {
    return (
        <Section id="snippets" title="My Snippets" description="These are a collection of code snippets I've used in the past and saved." icon={ScissorsIcon} className="container relative mb-20">
            <div className="py-8">
                <section id="previews" className="relative">
                    <div className="flex items-center justify-between">
                        <form className="flex" onSubmit={() => console.log('ashiap')}>
                            <div>
                                <Input
                                    type="text"
                                    name="search-snippets"
                                    placeholder="Search for a snippets"
                                    onChange={() => console.log('ashiap')}
                                    icon={SearchIcon}
                                />
                            </div>
                        </form>
                    </div>

                    <div className="pt-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam quis animi facilis, inventore voluptatum provident ab tempore id natus distinctio, adipisci amet minima alias! Dolorum optio porro eum eius!
                    </div>
                </section>
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
