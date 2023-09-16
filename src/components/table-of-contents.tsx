'use client';

import * as React from 'react';

import Link from '@/components/link';

import clsxm from '@/utils/clsxm';

import type { TTableOfContents } from '@/types/mdx.type';

type TTableOfContentsProps = {
    href: string;
    tableOfContents: TTableOfContents;
};

export default function TableOfContents({ href, tableOfContents }: TTableOfContentsProps) {
    return (
        <>
            <h5 className="mb-2 text-sm/6 font-semibold text-slate-700">On this page</h5>

            <ul className="text-sm/6 text-slate-700">
                {tableOfContents.map((section) => (
                    <React.Fragment key={section.slug}>
                        <li>
                            <Link href={`${href}#${section.slug}`} className={clsxm('block py-1 text-slate-500 hover:text-slate-700')}>
                                {section.title}
                            </Link>
                        </li>

                        {section.children.map((subsection) => (
                            <li className="ml-4" key={subsection.slug}>
                                <Link href={`${href}#${subsection.slug}`} className={clsxm('block py-1 text-slate-500 hover:text-slate-700')}>
                                    <svg
                                        width="3"
                                        height="24"
                                        viewBox="0 -9 3 24"
                                        className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600"
                                    >
                                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>

                                    {subsection.title}
                                </Link>
                            </li>
                        ))}
                    </React.Fragment>
                ))}
            </ul>
        </>
    );
}
