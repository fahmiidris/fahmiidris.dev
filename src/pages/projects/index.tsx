import * as React from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline';

import { NoContent } from '@/components/no-content';
import { BasicLayout } from '@/layouts/basic-layout';
import { HeadingSection } from '@/components/heading-section';

import type { TNextPageWithLayout } from 'next';

const ProjectsPage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="relative mb-20">
        <div className="container flex flex-col space-y-6">
          <HeadingSection
            title="My Projects"
            description="My project history, starting from personal projects, during internships or work, etc."
            icon={DesktopComputerIcon}
          />
        </div>
        <div className="container pt-8">
          <div className="min-h-screen space-y-16">
            <NoContent text="Currently under development!" />
          </div>
        </div>
      </div>
    </>
  );
};

ProjectsPage.Props = {
  Layout: BasicLayout,
  meta: {
    title: 'Projects',
    description:
      'My project history, starting from personal projects, during internships or work, etc.',
  },
};

export default ProjectsPage;
