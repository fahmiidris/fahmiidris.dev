import * as React from 'react';
import NextLink, { LinkProps } from 'next/link';

type CustomLinkType = {
  href?: string;
  isExternal?: boolean;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export const Link = ({
  href,
  className,
  isExternal = false,
  children,
  ...props
}: CustomLinkType) => {
  const externalProps = isExternal && {
    rel: 'noreferrer',
    target: '_blank',
  };

  const isRouteLink = href.startsWith('/');

  if (isRouteLink && !isExternal) {
    return (
      <NextLink href={href} passHref>
        <a {...props} className={className}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a href={href} className={className} {...props} {...externalProps}>
      {children}
    </a>
  );
};
