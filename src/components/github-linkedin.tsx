import * as React from 'react';

import { Link } from '@/components/link';

import { ReactComponent as GitHubIcon } from '@/images/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '@/images/icons/linkedin.svg';

export const GitHubLinkedIn = () => {
  return (
    <div className="hidden items-center space-x-4 sm:flex">
      <Link
        href="https://linkedin.com/in/fahmiidris-labs"
        className="block text-sky-500 hover:text-sky-600 dark:text-sky-600 dark:hover:text-sky-500"
        openNewTab={true}
      >
        <span className="sr-only">Fahmi Idris on LinkedIn</span>
        <LinkedInIcon className="h-5 w-5" />
      </Link>
      <Link
        href="https://github.com/fahmiidris-labs"
        className="block text-slate-400 hover:text-slate-500"
        openNewTab={true}
      >
        <span className="sr-only">Fahmi Idris on GitHub</span>
        <GitHubIcon className="h-5 w-5" />
      </Link>
    </div>
  );
};
