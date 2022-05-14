import * as React from 'react';
import { CalendarIcon, LinkIcon, TemplateIcon, DownloadIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';

export const Topbar = (): JSX.Element => {
  return (
    <div className="relative z-40 bg-white dark:bg-slate-900">
      <div className="container flex h-[32px] items-center justify-between">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-1">
            <LinkIcon className="h-4 w-4 text-slate-700 dark:text-slate-200" />
            <Link
              href="https://links.fahmiidris.dev"
              className="animated-underline text-xs font-semibold"
              openNewTab={true}
            >
              <span className="block md:hidden">Links</span>
              <span className="hidden md:block">links.fahmiidris.dev</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <CalendarIcon className="h-4 w-4 text-gray-700 dark:text-slate-200" />
            <Link
              href="https://todo.fahmiidris.dev"
              className="animated-underline text-xs font-semibold"
              openNewTab={true}
            >
              <span className="block md:hidden">Planning</span>
              <span className="hidden md:block">todo.fahmiidris.dev</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-1">
            <DownloadIcon className="h-4 w-4 text-slate-700 dark:text-slate-200" />
            <Link
              href="https://drive.google.com/file/d/1NM71_k6blUSAec-tFuG0ch4wjiEB52-m/view?usp=sharing"
              className="animated-underline text-xs font-semibold"
              openNewTab={true}
            >
              <span className="block md:hidden">CV</span>
              <span className="hidden md:block">CV Fahmi Idris</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <TemplateIcon className="h-4 w-4 text-slate-700 dark:text-slate-200" />
            <Link
              href="https://starter-template.fahmiidris.dev"
              className="animated-underline text-xs font-semibold"
              openNewTab={true}
            >
              <span className="block md:hidden">Starter Template</span>
              <span className="hidden md:block">starter-template.fahmiidris.dev</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
