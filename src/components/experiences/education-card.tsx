import * as React from 'react';
import Image from 'next/image';

import { Link } from '@/components/link';

import { formatDate } from '@/utils/helpers';

import type { EducationType } from '@/types/education.type';

type EducationCardType = EducationType & {
    isNew?: boolean;
};

export const EducationCard = ({ title, major, date, href, isNew = false }: EducationCardType) => {
    return (
        <li className="text-sm leading-6">
            <figure className="relative flex flex-col-reverse border border-slate-400/20 rounded-lg p-6 dark:bg-slate-800 dark:border-transparent">
                <blockquote className="mt-6 text-slate-800 dark:text-slate-300">
                    <p>
                        Successfully joined and majored in{' '}
                        <span className="font-semibold text-cyan-500 dark:text-white">{major}</span> at{' '}
                        <Link href={href} openNewTab={true} className="inline-flex leading-5 animated-underline font-semibold text-cyan-500 dark:text-white">
                            {title}
                        </Link>
                        .
                    </p>
                </blockquote>

                <figcaption className="flex items-start space-x-4">
                    <Image
                        src={`https://ui-avatars.com/api/?name=${title}&size=128&rounded=true&bold=true`}
                        alt={title}
                        width={50}
                        height={50}
                        className="flex-none w-14 h-14 rounded-full object-cover"
                    />
                    <div className="flex-auto">
                        <h2 className="text-base text-slate-800 font-semibold dark:text-white">
                            {title}
                        </h2>
                        <p className="mt-0.5">
                            {formatDate(date.start, "{MMMM}, {YYYY}")} - {date.end ? formatDate(date.end, "{MMMM}, {YYYY}") : (<span className="text-cyan-400">Present</span>)}
                        </p>
                    </div>
                </figcaption>

                {isNew && (
                    <span className="absolute -top-2 -right-2 z-10 text-xs rounded-[4px] px-2 py-1 bg-cyan-400 dark:bg-cyan-500 text-slate-800 font-bold">
                        New!
                    </span>
                )}
            </figure>
        </li>
    );
};
