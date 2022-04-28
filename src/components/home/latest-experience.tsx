import * as React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Steps } from '@/components/experiences/steps';
import { NoContent } from '@/components/no-content';
import { HeadingSection } from '@/components/heading-section';

import { data as myExperiences } from '@/components/experiences/data';

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
        {myExperiences.length < 1 ? (
          <NoContent text="No Content Here!" />
        ) : (
          <div className="flex flex-col space-y-8">
            <Steps steps={myExperiences.sort((a, b) => b.id - a.id).slice(0, 2)} />
            <div className="ml-10">
              <Link
                href="/experiences"
                className="inline-flex items-center space-x-2 rounded-lg border border-slate-300 bg-slate-100 py-2 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700"
              >
                View More
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
