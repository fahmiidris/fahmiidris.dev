import * as React from 'react';
import { ScissorsIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { NoContent } from '@/components/no-content';
import { HeadingSection } from '@/components/heading-section';

export const LatestSnippet = (): JSX.Element => {
  return (
    <section id="latest-snippet" className="relative pt-[80px]">
      <div className="container">
        <HeadingSection
          title="Featured Snippets"
          description="These are a collection of code snippets I've used in the past and saved."
          icon={ScissorsIcon}
        />
      </div>
      <div className="container pt-8">
        <NoContent text="No Content Here!" />
        <div className="py-8">
          <Link
            href="/snippets"
            className="inline-flex items-center space-x-2 rounded-lg border border-slate-300 bg-white py-2 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};
