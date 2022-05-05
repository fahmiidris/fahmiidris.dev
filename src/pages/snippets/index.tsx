import * as React from 'react';
import { ScissorsIcon } from '@heroicons/react/outline';

import { NoContent } from '@/components/no-content';
import { BasicLayout } from '@/layouts/basic-layout';
import { HeadingSection } from '@/components/heading-section';

import type { TNextPageWithLayout } from 'next';

const SnippetsPage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="relative mb-20">
        <div className="container flex flex-col space-y-6">
          <HeadingSection
            title="My Snippets"
            description="These are a collection of code snippets I've used in the past and saved."
            icon={ScissorsIcon}
          />
        </div>
        <div className="container min-h-screen pt-8">
          <NoContent text="Currently under development!" />
        </div>
      </div>
    </>
  );
};

SnippetsPage.Props = {
  Layout: BasicLayout,
  meta: {
    title: 'Snippets',
    description: "These are a collection of code snippets I've used in the past and saved.",
  },
};

export default SnippetsPage;
