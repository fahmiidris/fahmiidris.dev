import * as React from 'react';
import { DownloadIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Section } from '@/components/section';

export const CV = () => {
    return (
        <Section id="cv-and-portfolio" title="Curriculum Vitae and Portfolio" description="Download my CV and Portfolio" className="relative pt-4">
            <ul className="flex space-x-1 pt-4">
                <li>
                    <Link href="https://drive.google.com/file/d/1pZJB7DrO3RzuXmAXHqyKUQ3B4ug4tHDq/view?usp=sharing" openNewTab={true} className="group inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold">
                        <DownloadIcon className="h-5 w-5" />
                        <span className="group-hover:text-slate-700 dark:group-hover:text-white">CV Fahmi Idris</span>
                    </Link>
                </li>

                {/* <li>
                    <Link href="#" openNewTab={true} className="inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold">
                        <DownloadIcon className="h-5 w-5" />
                        <span>Portfolio Fahmi Idris</span>
                    </Link>
                </li> */}
            </ul>
        </Section>
    );
};
