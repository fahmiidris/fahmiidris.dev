import * as React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

import { BasicLayout } from '@/layouts/basic-layout';
import { HeadingSection } from '@/components/heading-section';

import type { TNextPageWithLayout } from 'next';

const ExperiencesPage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="relative mb-20">
        <div className="container flex flex-col space-y-6">
          <HeadingSection
            title="My Experiences"
            description="My historical experience, non-formal education, big event, internship, etc."
            icon={ClockIcon}
          />
        </div>
        <div className="min-h-screen space-y-16">{/* list pengalaman nya disini */}</div>
      </div>
    </>
  );
};

ExperiencesPage.Props = {
  Layout: BasicLayout,
  meta: {
    title: 'Experiences',
    description: 'My historical experience, non-formal education, big event, internship, etc.',
  },
};

export default ExperiencesPage;
