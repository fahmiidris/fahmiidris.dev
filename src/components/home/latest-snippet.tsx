import * as React from 'react';
import { ScissorsIcon } from '@heroicons/react/outline';

import { NoContent } from '@/components/no-content';
import { HeadingSection } from '@/components/heading-section';

export const LatestSnippet = (): JSX.Element => {
  return (
    <section id="latest-snippet" className="relative pt-[80px]">
      <div className="container">
        <HeadingSection
          title="Featured Snippets"
          description="Some personal opinions on technology and my random thoughts."
          icon={ScissorsIcon}
        />
      </div>
      <div className="container pt-8">
        <NoContent text="No Content Here!" />
      </div>
    </section>
  );
};
