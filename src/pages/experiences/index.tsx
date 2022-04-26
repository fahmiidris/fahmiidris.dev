import * as React from 'react';
import { ClockIcon, SearchIcon } from '@heroicons/react/outline';

import { Steps, TSteps } from '@/components/experiences/steps';
import { BasicLayout } from '@/layouts/basic-layout';
import { HeadingSection } from '@/components/heading-section';

import { data as myExperiences } from '@/components/experiences/data';

import type { TNextPageWithLayout } from 'next';
import { Label } from '@/components/label';

const ExperiencesPage: TNextPageWithLayout = (): JSX.Element => {
  const [search, setSearch] = React.useState<string | null>(null);
  const [data, setData] = React.useState<TSteps['steps']>(myExperiences);

  React.useEffect(() => {
    if (search) {
      const filteredData: TSteps['steps'] = myExperiences
        .sort((a, b) => b.id - a.id)
        .filter((step) => {
          return step.title.toLowerCase().includes(search.toLowerCase());
        });

      setData(filteredData);
    } else {
      setData(myExperiences);
    }
  }, [search]);

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
        <div className="container pt-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="sticky top-20 col-span-12 self-start md:col-span-3">
              <div>
                <Label htmlFor="search" value="Search" />
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="h-[18px] w-[18px]" />
                  </span>
                  <input
                    type="text"
                    name="search"
                    placeholder='Search "My Experiences"'
                    className="block w-full rounded-lg border border-slate-300/50 pl-9 text-xs placeholder:text-xs placeholder:font-semibold focus:border-slate-300/75 focus:ring-2 focus:ring-cyan-400 dark:border-transparent dark:bg-slate-800 dark:ring-offset-slate-900"
                    style={{ outline: 'none' }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-4 md:col-span-9 md:pt-0">
              <Steps steps={data} />
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
