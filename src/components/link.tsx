import * as React from 'react';
import NextLink, { LinkProps } from 'next/link';

export type LinkType = {
    href: string;
    children: React.ReactNode;
    openNewTab?: boolean;
    className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
    LinkProps;

export const Link = React.forwardRef<HTMLAnchorElement, LinkType>(
    ({ children, href, openNewTab = false, scroll = true, className, ...props }, ref) => {
        const isNewTab = openNewTab ? openNewTab : !href.startsWith('/') && !href.startsWith('#');

        if (!isNewTab) {
            return (
                <NextLink href={href} scroll={scroll}>
                    <a {...props} ref={ref} className={className} style={{ outline: 'none' }}>
                        {children}
                    </a>
                </NextLink>
            );
        }

        return (
            <a {...props} href={href} ref={ref} className={className} style={{ outline: 'none' }} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }
);
