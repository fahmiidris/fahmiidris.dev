import * as React from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline';

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
      <div></div>
    </section>
  );
};
