import * as React from 'react';
import { ScissorsIcon } from '@heroicons/react/outline';

import { SnippetCard } from '@/components/snippets/snippet-card';
import { FeaturedSection } from '@/components/home/featured-section';

import { getSnippetPreviews } from '@/services/snippets';

const snippets = getSnippetPreviews().slice(0, 3);

export const FeaturedSnippets = () => {
    return (
        <FeaturedSection id="latest-snippet" title="Featured Snippets" description="These are a collection of code snippets I've used in the past and saved." icon={ScissorsIcon} href="/snippets">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {snippets.map((snippet, index) => (
                    <SnippetCard key={index} {...snippet} isNew={index < 1} />
                ))}
            </ul>
        </FeaturedSection>
    );
};
