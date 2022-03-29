import * as React from 'react';

import { Link } from '@/components/atoms/fi-link/link';

import type { IconType } from 'react-icons';
import { HiArrowRight } from 'react-icons/hi';

type THeadingSection = {
  title: string;
  description: string;
  icon: IconType;
  link?: {
    title: string;
    href: string;
  };
};

export const HeadingSection = ({ title, description, icon, link }: THeadingSection) => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start justify-start">
        {React.createElement(icon, { className: 'w-8 h-8 -ml-1 mr-2 stroke-gray-700' })}
        <div className="flex flex-col">
          <h2 className="text-lg text-gray-700">{title}</h2>
          <p className="font-quicksand text-xs font-bold text-gray-600">{description}</p>
        </div>
      </div>
      {link && (
        <Link
          href={link.href}
          className="inline-flex items-center justify-center space-x-2 rounded-lg border border-primary-200 py-2 pr-2 pl-3 font-quicksand text-xs font-bold duration-200 ease-in-out hover:bg-primary-50 "
        >
          <span>{link.title}</span>
          <HiArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
};
