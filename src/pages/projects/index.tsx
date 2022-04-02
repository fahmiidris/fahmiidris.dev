import * as React from 'react';
import { HiOutlineDesktopComputer, HiOutlineInformationCircle } from 'react-icons/hi';

import { MainLayout } from '@/components/templates/main-layout';
import { HeadingSection } from '@/components/molecules/fi-heading-section/heading-section';

import type { TNextPageWithLayout } from '@/types/app.type';

const ProjectsPage: TNextPageWithLayout = () => {
  return (
    <section id="experiences">
      <div className="container pt-[110px]">
        <HeadingSection
          title="My Projects"
          description="My project history, starting from personal projects, during internships or work, etc."
          icon={HiOutlineDesktopComputer}
        />
        <div className="flex items-center justify-center pt-8">
          <div className="flex items-center justify-center space-x-2">
            <HiOutlineInformationCircle className="h-8 w-8" />
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
              This feature is not yet available!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectsPage.Props = {
  Layout: MainLayout,
  meta: {
    title: 'My Projects',
    description:
      'My project history, starting from personal projects, during internships or work, etc.',
  },
};

export default ProjectsPage;
