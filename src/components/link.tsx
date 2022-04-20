import * as React from 'react';
import clsx from 'clsx';
import NextLink, { LinkProps } from 'next/link';

export type TLink = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export const Link = ({ children, href, openNewTab, className, ...props }: TLink): JSX.Element => {
  const isNewTab: boolean = openNewTab
    ? openNewTab
    : !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <NextLink href={href}>
        <a {...props} className={className}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      className={clsx(className, 'cursor-pointer')}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};
