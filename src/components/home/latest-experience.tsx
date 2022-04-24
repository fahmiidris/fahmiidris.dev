import * as React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

import { NoContent } from '@/components/home/no-content';
import { HeadingSection } from '@/components/heading-section';

export const LatestExperience = (): JSX.Element => {
  return (
    <section id="latest-experience" className="relative pt-[80px]">
      <div className="container">
        <HeadingSection
          title="Featured Experiences"
          description="My historical experience, non-formal education, big event, internship, etc."
          icon={ClockIcon}
        />
      </div>
      <div className="container pt-8">
        <NoContent />
      </div>
    </section>
  );
};
