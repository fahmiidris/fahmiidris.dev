import * as React from 'react';

import { Link } from '@/components/link';
import { Section, SectionType } from '@/components/section';
import { ArrowSmRightIcon } from '@heroicons/react/outline';

type FeaturedSectionType = SectionType & {
    href: string;
};

export const FeaturedSection = ({ href, children, ...props }: FeaturedSectionType) => {
    return (
        <Section {...props}>
            <div className="pt-10">{children}</div>

            <div className="z-30 pt-10">
                <Link href={href} className="inline-flex items-center space-x-2 rounded-md border border-slate-300 bg-white py-2 pl-4 pr-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700">
                    <span>View More</span>
                    <ArrowSmRightIcon className='w-5 h-5' />
                </Link>
            </div>
        </Section>
    );
};
