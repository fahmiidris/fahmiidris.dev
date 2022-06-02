import * as React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

import { FeaturedSection } from '@/components/home/featured-section';

export const FeaturedExperiences = () => {
  return (
    <FeaturedSection
      id="featured-experiences"
      title="Featured Experiences"
      description="My historical experience, non-formal education, big event, internship, etc."
      icon={ClockIcon}
      href="/experiences"
    >
      <p className="text-sm font-semibold">Currently Under Development!</p>
    </FeaturedSection>
  );
};
