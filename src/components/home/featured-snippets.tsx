import * as React from 'react';
import { ScissorsIcon } from '@heroicons/react/outline';

import { FeaturedSection } from '@/components/home/featured-section';

export const FeaturedSnippets = () => {
  return (
    <FeaturedSection
      id="latest-snippet"
      title="Featured Snippets"
      description="These are a collection of code snippets I've used in the past and saved."
      icon={ScissorsIcon}
      href="/snippets"
    >
      <p className="text-sm font-semibold">Currently Under Development!</p>
    </FeaturedSection>
  );
};
