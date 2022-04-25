import * as React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

import { Steps } from '@/components/experiences/steps';
import { BasicLayout } from '@/layouts/basic-layout';
import { HeadingSection } from '@/components/heading-section';

import { data as myExperiences } from '@/components/experiences/data';

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
        <div className="container min-h-screen pt-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-3">{/*  */}</div>
            <div className="col-span-12 md:col-span-9">
              <Steps steps={myExperiences.sort((a, b) => b.id - a.id)} />
            </div>
          </div>
        </div>
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
