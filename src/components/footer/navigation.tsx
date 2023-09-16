import * as React from 'react';

import Link from '@/components/link';

import clsxm from '@/utils/clsxm';

import type { TNavigation } from '@/components/footer';

type TNavigationProps = {
    navigation: TNavigation;
};

export default function Navigation({ navigation }: TNavigationProps) {
    return (
        <div className="container grid grid-cols-5 gap-8 py-20">
            <div className={clsxm('col-span-5 grid grid-cols-4 gap-8', 'lg:col-span-3')}>
                {Object.entries(navigation).map(([key, items]) => (
                    <div key={key} className={clsxm('col-span-2', 'md:col-span-1')}>
                        <h3 className="text-sm/6 font-semibold text-slate-700">{key}</h3>

                        <ul role="list" className="mt-4 flex flex-col gap-y-4">
                            {items.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className={clsxm('text-sm/6 text-slate-600', 'hover:text-slate-700')}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className={clsxm('col-span-5', 'lg:col-span-2')}></div>
        </div>
    );
}
