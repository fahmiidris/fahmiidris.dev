import * as React from 'react';
import { DownloadIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';

export const CV = (): JSX.Element => {
  return (
    <section id="skills" className="relative pt-4">
      <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
        Curriculum Vitae and Portfolio
      </h2>
      <ul className="flex space-x-2 pt-4">
        <li>
          <Link
            href="https://drive.google.com/file/d/1NM71_k6blUSAec-tFuG0ch4wjiEB52-m/view?usp=sharing"
            className="inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold"
            openNewTab={true}
          >
            <DownloadIcon className="h-5 w-5" />
            <span>CV Fahmi Idris</span>
          </Link>
        </li>
        {/* <li>
          <Link
            href="#"
            className="inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold"
            openNewTab={true}
          >
            <DownloadIcon className="h-5 w-5" />
            <span>Portfolio Fahmi Idris</span>
          </Link>
        </li> */}
      </ul>
    </section>
  );
};
