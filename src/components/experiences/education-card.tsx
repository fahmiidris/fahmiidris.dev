import * as React from 'react';
import Image from 'next/image';

import { Link } from '@/components/link';

import { formatDate } from '@/utils/helpers';

export type EducationType = {
    title: string;
    major: string;
    date: {
        start: number;
        end?: number;
    },
    href: string;
}

type EducationCardType = EducationType;

export const EducationCard = ({ title, major, date, href }: EducationCardType) => {
    return (
        <li className="text-sm leading-6">
            <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800">
                <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
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
                        className="flex-none w-14 h-14 rounded-full object-cover"
                        width={50}
                        height={50}
                    />
                    <div className="flex-auto">
                        <h2 className="text-base text-slate-700 font-semibold dark:text-white">
                            {title}
                        </h2>
                        <p className="mt-0.5">
                            {formatDate(date.start, "{MMMM}, {YYYY}")} - {date.end ? formatDate(date.end, "{MMMM}, {YYYY}") : 'Present'}
                        </p>
                    </div>
                </figcaption>
            </figure>
        </li>
    );
};
