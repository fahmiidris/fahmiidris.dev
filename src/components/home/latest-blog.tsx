import * as React from 'react';
import { ClipboardListIcon } from '@heroicons/react/outline';

import { HeadingSection } from '@/components/heading-section';

export const LatestBlog = (): JSX.Element => {
  return (
    <section id="latest-blog" className="relative pt-[80px]">
      <div className="container">
        <HeadingSection
          title="Featured Blogs"
          description="Some personal opinions on technology and my random thoughts."
          icon={ClipboardListIcon}
        />
      </div>
      <div></div>
    </section>
  );
};
