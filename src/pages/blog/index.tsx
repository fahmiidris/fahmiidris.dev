import * as React from 'react';
import { HiOutlineClipboardList, HiOutlineInformationCircle } from 'react-icons/hi';

import { MainLayout } from '@/components/templates/main-layout';
import { HeadingSection } from '@/components/molecules/fi-heading-section/heading-section';

import type { TNextPageWithLayout } from '@/types/app.type';

const BlogPage: TNextPageWithLayout = () => {
  return (
    <section id="blog">
      <div className="container pt-[110px]">
        <HeadingSection
          title="My Blog Post"
          description="All Fahmi Idris news, straight from me."
          icon={HiOutlineClipboardList}
        />
        <div className="flex items-center justify-center pt-8">
          <div className="flex items-center justify-center space-x-2">
            <HiOutlineInformationCircle className="h-8 w-8" />
            <h2 className="text-2xl font-semibold text-gray-700">
              This feature is not yet available!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPage.Props = {
  Layout: MainLayout,
  meta: {
    title: 'Blog',
  },
};

export default BlogPage;
