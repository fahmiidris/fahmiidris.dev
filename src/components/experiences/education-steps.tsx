import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { Link } from '@/components/link';

import { formatDate, sortDateDesc } from '@/utils/helpers';

import type { EducationType } from '@/types/education.type';

type EducationStepsType = {
    steps: EducationType[];
}

export const EducationSteps = ({ steps }: EducationStepsType) => {
    return (
        <ol className="relative space-y-2">
            {steps.sort((a, b) => sortDateDesc(a.date.start, b.date.start)).map(({ id, title, description: Description, date, major, href, images }, index) => (
                <li
                    key={index}
                    id={id.toString()}
                    className={clsx(`relative grid-cols-1 gap-8 pl-10 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-slate-800 before:ring-1 before:ring-slate-900/20 before:content-[attr(id)] dark:before:bg-slate-800 dark:before:text-slate-200 dark:before:ring-0 xl:grid`, index !== steps.length - 1 && 'pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5')}
                >
                    <div className="mb-6 xl:mb-0">
                        <h2 className="mb-2 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200">
                            <Link href={href} openNewTab={true} className="inline hover:text-cyan-400 duration-200 ease-in-out">
                                {title}
                            </Link> - {major}
                        </h2>

                        <time dateTime={date.start.toString()} className="mb-2 block text-sm font-normal leading-none text-slate-500">
                            {formatDate(date.start, "{MMMM}, {YYYY}")} - {date.end ? formatDate(date.end, "{MMMM}, {YYYY}") : 'Present'}
                        </time>

                        <div className="prose prose-slate prose-sm dark:prose-dark max-w-3xl">
                            <Description />
                        </div>
                    </div>

                    {images && images.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {images.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <div onClick={() => console.log("click")} className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 cursor-pointer">
                                        <Image src={item.src} alt={item.alt} placeholder="blur" layout="fill" className="object-cover object-center" />
                                    </div>
                                    <p className="pt-2 text-xs font-semibold text-slate-800 dark:text-slate-400">
                                        {item.alt}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </li>
            ))}
        </ol>
    );
};
