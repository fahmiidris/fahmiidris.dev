import * as React from 'react';
import { ClipboardListIcon } from '@heroicons/react/outline';

import { FeaturedSection } from '@/components/home/featured-section';

export const FeaturedBlog = () => {
    return (
        <FeaturedSection id="featured-blog" title="Featured Blog" description="Some personal opinions on technology and my random thoughts." icon={ClipboardListIcon} href="/blog" className="pt-[90px]">
            <p className="text-sm font-semibold">Currently Under Development!</p>
        </FeaturedSection>
    );
};
