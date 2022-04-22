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

export const Link = React.forwardRef<HTMLAnchorElement, TLink>(
  ({ children, href, openNewTab, className, ...props }, ref): JSX.Element => {
    const isNewTab: boolean = openNewTab
      ? openNewTab
      : !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <NextLink href={href}>
          <a {...props} ref={ref} className={className} style={{ outline: 'none' }}>
            {children}
          </a>
        </NextLink>
      );
    }

    return (
      <a
        href={href}
        ref={ref}
        className={clsx(className, 'cursor-pointer')}
        target="_blank"
        rel="noopener noreferrer"
        style={{ outline: 'none' }}
        {...props}
      >
        {children}
      </a>
    );
  }
);
