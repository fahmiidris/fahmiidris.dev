import * as React from 'react';
import NextLink, { LinkProps } from 'next/link';

export type LinkType = {
  openNewTab?: boolean;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export const Link = ({ href, openNewTab = false, scroll = true, children, ...props }: LinkType) => {
  const isNewTab = openNewTab ? openNewTab : !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <NextLink href={href} scroll={scroll}>
        <a {...props} style={{ outline: 'none' }}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a href={href} {...props} style={{ outline: 'none' }} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
