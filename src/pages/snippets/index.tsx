import * as React from 'react';

import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { SnippetCard } from '@/components/snippets/snippet-card';

import { getSnippetPreviews } from '@/services/snippet';

import type { NextPageWithLayout } from 'next';

const snippetPreviews = getSnippetPreviews();

const SnippetsPage: NextPageWithLayout = () => {
  return (
    <div className="py-8">
      <Section
        id="snippets"
        title="Library Snippets"
        subtitle="These are a collection of code snippets I've used in the past and saved."
        description={() => (
          <p className="text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
            These snippets are inspired by <Link href="https://www.theodorusclarence.com">Theodorus Clarence</Link> and{' '}
            <Link href="https://www.wisesa.dev">Anvaqta Tangguh Wisesa</Link>, a great idea to save some code snippets
            that we often recreate.
          </p>
        )}
        maxWidthDescription="max-w-3xl"
        className="space-y-36 overflow-hidden"
      >
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {snippetPreviews.map((snippet, index) => (
            <SnippetCard key={index} {...snippet} />
          ))}
        </ul>
      </Section>
    </div>
  );
};

SnippetsPage.Props = {
  meta: {
    title: 'Library Snippets',
    description: "These are a collection of code snippets I've used in the past and saved.",
  },
};

export default SnippetsPage;
