import * as React from 'react';

import { Link } from '@/components/link';
import { Alert } from '@/components/alert';
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
            These snippets are inspired by <Link href="https://www.theodorusclarence.com/library">Theodorus Clarence</Link> and{' '}
            <Link href="https://www.wisesa.dev/snippet">Anvaqta Tangguh Wisesa</Link>, a great idea to save some code snippets that we often recreate.
          </p>
        )}
        maxWidthDescription="max-w-3xl"
        className="space-y-36 overflow-hidden"
      >
        {snippetPreviews.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {snippetPreviews.map((preview, index) => (
              <SnippetCard key={index} {...preview} />
            ))}
          </ul>
        ) : (
          <Alert message="Library snippets hasn't been uploaded yet." />
        )}
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
