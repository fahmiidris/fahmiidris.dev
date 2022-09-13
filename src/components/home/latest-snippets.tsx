import * as React from 'react';

import { Alert } from '@/components/alert';
import { Section } from '@/components/section';
import { SnippetCard } from '@/components/snippets/snippet-card';

import type { Snippet } from '@/types/snippet';

type LatestSnippetsProps = {
  previews: Snippet.Preview[];
};

export const LatestSnippets = ({ previews }: LatestSnippetsProps) => {
  return (
    <Section
      id="latest-snippets"
      title="Latest Snippets"
      subtitle="These are a collection of code snippets I've used in the past and saved."
      description="Hmm, I'm always tired of writing the exact same length of code all the time. Thanks Larry Tesler for inventing the brilliant cut and copy paste method."
      more={{
        href: '/snippets',
        text: 'Explore all snippets',
      }}
    >
      {previews.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previews.map((preview, index) => (
            <SnippetCard key={index} {...preview} />
          ))}
        </ul>
      ) : (
        <Alert message="Library snippets hasn't been uploaded yet." />
      )}
    </Section>
  );
};
