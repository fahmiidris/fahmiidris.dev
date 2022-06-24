import NextLink from 'next/link';

import type { MDXComponents as MDXComponentsType } from 'mdx/types';

export const MDXComponents: MDXComponentsType = {
    a: ({ href, className, children, ...props }) => {
        const isNewTab = href && !href.startsWith('/') && !href.startsWith('#');

        if (!isNewTab) {
            return (
                <NextLink href={href as string}>
                    <a {...props} className={className} style={{ outline: 'none' }}>
                        {children}
                    </a>
                </NextLink>
            );
        }

        return (
            <a {...props} href={href} className={className} target="_blank" style={{ outline: 'none' }} rel="noopener noreferrer">
                {children}
            </a>
        );
    },
};
