import * as React from 'react';

type TAnnouncement = {
  value?: string;
};

export const Announcement = ({ value }: TAnnouncement): JSX.Element | null => {
  return value ? (
    <p className="flex h-10 items-center justify-center bg-cyan-400 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
      {value}
    </p>
  ) : null;
};
