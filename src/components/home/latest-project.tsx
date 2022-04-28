import * as React from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline';

import { NoContent } from '@/components/no-content';
import { HeadingSection } from '@/components/heading-section';

export const LatestProject = (): JSX.Element => {
  return (
    <section id="latest-experience" className="relative pt-[80px]">
      <div className="container">
        <HeadingSection
          title="Featured Projects"
          description="My project history, starting from personal projects, during internships or work, etc."
          icon={DesktopComputerIcon}
        />
      </div>
      <div className="container pt-8">
        <NoContent text="No Content Here!" />
      </div>
    </section>
  );
};
