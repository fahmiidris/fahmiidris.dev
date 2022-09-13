import * as React from 'react';
import { SparklesIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';

type AnnouncementProps = {
  href: string;
  message: string;
};

export const Announcement = ({ href, message }: AnnouncementProps) => {
  return message ? (
    <Link
      href={href}
      openNewTab={true}
      className="group block bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 p-3"
    >
      <p className="flex items-center justify-center text-xs font-medium text-white transition group-hover:text-opacity-75">
        <span className="truncate">{message}</span>
        <SparklesIcon className="ml-1.5 h-4 w-4" />
      </p>
    </Link>
  ) : null;
};
