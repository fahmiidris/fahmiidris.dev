import * as React from 'react';
import NextLink, { LinkProps } from 'next/link';

export type LinkType = {
  openNewTab?: boolean;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

// eslint-disable-next-line react/display-name
export const Link = React.forwardRef<HTMLAnchorElement, LinkType>(
  ({ href, openNewTab = false, scroll = true, children, ...props }, ref) => {
    const isNewTab = openNewTab ? openNewTab : !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <NextLink href={href} scroll={scroll} ref={ref}>
          <a {...props} style={{ outline: 'none' }}>
            {children}
          </a>
        </NextLink>
      );
    }

    return (
      <a href={href} ref={ref} {...props} style={{ outline: 'none' }} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
);
