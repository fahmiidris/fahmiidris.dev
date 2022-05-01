import * as React from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { NoContent } from '@/components/no-content';
import { BasicLayout } from '@/layouts/basic-layout';
import { HeadingSection } from '@/components/heading-section';

import { ReactComponent as KloninganIcon } from '@/images/icons/kloningan.svg';

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
          <div className="grid grid-cols-6 gap-8">
            <div className="col-span-6">
              <div className="flex flex-col items-center justify-center">
                <Link
                  href="https://www.kloningan.com"
                  openNewTab={true}
                  className="animated-underline text-xl font-bold text-slate-800 dark:text-slate-200"
                >
                  kloningan.com
                </Link>
                <p className="text-center text-xs font-semibold">
                  Start by imitating the existing one, then create a better one.
                </p>
              </div>
            </div>
            <div className="col-span-6 flex flex-wrap items-center space-y-4 rounded-2xl bg-gradient-to-r from-slate-800 to-cyan-600 p-3 py-6 px-6 dark:from-slate-800 dark:to-cyan-500 md:flex-nowrap md:space-y-0 md:space-x-8 md:py-4 md:pr-5">
              <h2 className="flex-none">
                <span className="sr-only">kloningan.com</span>
                <KloninganIcon className="h-auto w-24 text-white" />
              </h2>
              <p className="flex-auto text-sm font-medium text-white sm:text-lg">
                Cloning the User Interface of Several Famous Websites on the Internet created by
                Fahmi Idris
              </p>
              <Link
                href="https://www.kloningan.com"
                openNewTab={true}
                className="flex-none rounded-lg bg-white py-3 px-5 text-xs font-bold text-slate-900 transition-colors duration-200 hover:bg-slate-100 sm:text-sm sm:font-semibold"
              >
                View Website
              </Link>
            </div>
            <NoContent text="Currently under development!" className="col-span-6" />
            <div className="col-span-6 pt-12">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  Random Project
                </h3>
                <p className="text-xs font-semibold">
                  Crazy things sometimes start with randomness.
                </p>
              </div>
            </div>
            <NoContent text="Currently under development!" className="col-span-6" />
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
