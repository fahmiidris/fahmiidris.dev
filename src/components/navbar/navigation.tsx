'use client';

import * as React from 'react';

import { Popover } from '@headlessui/react';
import { usePathname } from 'next/navigation';

import Link from '@/components/link';

import clsxm from '@/utils/clsxm';

import type { TNavigation } from '@/components/navbar';

type TNavigationProps = {
    navigation: TNavigation;
};

export default function Navigation({ navigation }: TNavigationProps) {
    const pathname = usePathname();

    return (
        <Popover.Group className={clsxm('absolute inset-x-0 bottom-0', 'sm:static sm:flex-1 sm:self-stretch')}>
            <div
                className={clsxm(
                    'flex h-14 gap-x-8 overflow-x-auto border-t border-slate-200 px-4 pb-px',
                    'sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0'
                )}
            >
                {navigation.pages.map((page) => (
                    <Link
                        key={page.name}
                        href={page.href}
                        className={clsxm(
                            page.href === '/' + pathname.split('/')[1]
                                ? ['border-cyan-500 text-cyan-500']
                                : ['border-transparent text-slate-700', 'hover:border-slate-200 hover:text-slate-800'],
                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-semibold duration-200 ease-out'
                        )}
                    >
                        {page.name}
                    </Link>
                ))}
            </div>
        </Popover.Group>
    );
}
