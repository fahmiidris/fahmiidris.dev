import * as React from 'react';
import { useRouter } from 'next/router';

import { Link } from '@/components/atoms/fi-link/link';

import { classNames } from '@/utils/helpers';

import type { TLayout } from '@/types/app.type';

type TLink = {
  title: string;
  href: string;
};
const links: TLink[] = [
  {
    title: 'About Me',
    href: '/about',
  },
  {
    title: 'Guest Book',
    href: '/about/guest-book',
  },
];

export const AboutLayout = ({ children }: TLayout) => {
  const { pathname } = useRouter();
  return (
    <div className="relative">
      <ul className="flex items-center space-x-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={classNames(
                pathname === link.href
                  ? 'border-primary-400 font-semibold dark:border-primary-500 dark:bg-gray-700'
                  : 'border-transparent font-medium',
                'inline-flex items-center rounded-lg border px-4 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-600'
              )}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="pt-4">{children}</div>
    </div>
  );
};
