import * as React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

import { HeadingSection } from '@/components/heading-section';

export const LatestExperience = (): JSX.Element => {
  return (
    <section id="latest-experience" className="relative pt-[80px]">
      <div className="container">
        <HeadingSection
          title="Featured Experiences"
          description="My historical experience, non-formal education, etc."
          icon={ClockIcon}
        />
      </div>
      <div></div>
    </section>
  );
};
