import * as React from 'react';
import { BadgeCheckIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';
import { NoContent } from '@/components/no-content';
import { BasicLayout } from '@/layouts/basic-layout';
import { HeadingSection } from '@/components/heading-section';

import type { TNextPageWithLayout } from 'next';

const CertificatesPage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="relative mb-20">
        <div className="container flex items-center space-x-1">
          <ChevronLeftIcon className="h-4 w-4 text-slate-700 dark:text-slate-200" />
          <Link href="/experiences" className="animated-underline text-sm font-semibold">
            <span>Go Back</span>
          </Link>
        </div>
        <div className="container flex flex-col space-y-6 pt-6">
          <HeadingSection
            title="My Certificates"
            description="All certificates in the field of programming owned by Fahmi Idris."
            icon={BadgeCheckIcon}
          />
        </div>
        <div className="container min-h-screen pt-8">
          <NoContent text="Currently under development!" />
        </div>
      </div>
    </>
  );
};

CertificatesPage.Props = {
  Layout: BasicLayout,
  meta: {
    title: 'Certificates',
    description: 'All certificates in the field of programming owned by Fahmi Idris.',
  },
};

export default CertificatesPage;
