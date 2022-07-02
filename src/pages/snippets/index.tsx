import * as React from 'react';
import { ScissorsIcon, SearchIcon } from '@heroicons/react/outline';

import { Input } from '@/components/input';
import { Section } from '@/components/section';
import { SnippetCard } from '@/components/snippets/snippet-card';

import DefaultLayout from '@/layouts/default-layout';

import { getSnippetPreviews } from '@/services/snippets';

import type { NextPageWithLayoutType } from 'next';

const snippets = getSnippetPreviews();

const SnippetsPage: NextPageWithLayoutType = () => {
    const [keyword, setKeyword] = React.useState('');

    const filterByTitle = (title: string, keyword: string) => {
        return title.toLowerCase().includes(keyword.toLowerCase());
    };

    const filteredSnippets = snippets.filter((snippet) => filterByTitle(snippet.module.meta.title, keyword));

    return (
        <Section id="snippets" title="My Snippets" description="These are a collection of code snippets I've used in the past and saved." icon={ScissorsIcon} className="container relative mb-20">
            <div className="py-8">
                <section id="previews" className="relative">
                    <div className="flex items-center justify-between">
                        <form className="flex w-full max-w-none sm:max-w-[300px]" onSubmit={() => console.log('On Submit')}>
                            <Input type="text" id="search-snippets" name="keyword" placeholder="Search for a snippets" onChange={(e) => setKeyword(e.target.value)} icon={SearchIcon} />
                        </form>
                    </div>

                    <div className="pt-8">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredSnippets.length < 1 ? (
                                <div className="flex items-center justify-center col-span-1 sm:col-span-2 lg:col-span-3 h-16">
                                    Oops! The snippet you&apos;re looking for doesn&apos;t exist yet.
                                </div>
                            ) : filteredSnippets.map((snippet, index) => (
                                <SnippetCard key={index} {...snippet} isNew={index < 1} />
                            ))}
                        </ul>
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
