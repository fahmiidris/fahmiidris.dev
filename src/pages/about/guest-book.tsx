import * as React from 'react';
import { HiOutlineBookOpen, HiOutlineInformationCircle } from 'react-icons/hi';

import { MainLayout } from '@/components/templates/main-layout';
import { AboutLayout } from '@/components/templates/about-layout';
import { HeadingSection } from '@/components/molecules/fi-heading-section/heading-section';

import type { TNextPageWithLayout } from '@/types/app.type';

const GuestBookPage: TNextPageWithLayout = () => {
  return (
    <section id="about" className="relative">
      <div className="container pt-[110px]">
        <HeadingSection
          title="Guest Book"
          description="Hi, Please write something, impression, message, criticism, or anything here."
          icon={HiOutlineBookOpen}
        />
        <div className="pt-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-200 py-4 px-2 dark:border-gray-600">
                <div className="text-center">
                  <h3 className="text-lg">Guest Identity</h3>
                  <p className="font-quicksand text-xs font-bold">
                    You can fill in or ignore this form.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center space-x-2">
                    <HiOutlineInformationCircle className="h-5 w-5" />
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      This feature is not yet available!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <AboutLayout>
                <div className="flex items-center justify-center pt-8">
                  <div className="flex items-center justify-center space-x-2">
                    <HiOutlineInformationCircle className="h-8 w-8" />
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                      This feature is not yet available!
                    </h2>
                  </div>
                </div>
              </AboutLayout>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GuestBookPage.Props = {
  Layout: MainLayout,
  meta: {
    title: 'Guest Book',
  },
};

export default GuestBookPage;
