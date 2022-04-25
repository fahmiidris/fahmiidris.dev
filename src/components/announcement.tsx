import * as React from 'react';

import { Link } from '@/components/link';
import { SparklesIcon } from '@heroicons/react/outline';

type TAnnouncement = {
  message?: string;
};

export const Announcement = ({ message }: TAnnouncement): JSX.Element | null => {
  return message ? (
    <Link
      href="https://github.com/fahmiidris-labs/fahmiidris.dev"
      openNewTab={true}
      className="group block bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 p-3 dark:from-cyan-500 dark:via-cyan-600 dark:to-cyan-700"
    >
      <p className="flex items-center justify-center text-xs font-medium text-white transition group-hover:text-opacity-75">
        {message}
        <SparklesIcon className="ml-1.5 h-4 w-4" />
      </p>
    </Link>
  ) : null;
};
