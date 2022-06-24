import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { ClockIcon, EyeIcon, HeartIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';

import { formatDate } from '@/utils/helpers';

import type { ExperiencePreviewType } from '@/types/experience.type';

type EducationStepsType = {
    steps: ExperiencePreviewType[]
}

export const ExperienceSteps = ({ steps }: EducationStepsType) => {
    return (
        <ol className="relative space-y-2">
            {steps.map(({ slug, module: { default: Component, meta } }, index) => (
                <li
                    key={index}
                    className={clsx(`relative pl-10 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-full before:text-[0.625rem] before:font-bold before:text-slate-800 before:ring-1 before:ring-slate-900/20 dark:before:bg-slate-800 dark:before:text-slate-200 dark:before:ring-0`, index !== steps.length - 1 && 'pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5')}
                >
                    <div>
                        <h2 className="mb-2 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200">
                            <Link href={`/experiences/${slug}`} className="inline hover:text-cyan-400 duration-200 ease-in-out">
                                {meta.title}
                            </Link>
                        </h2>

                        <time dateTime={meta.date.start.toString()} className="mb-2 block text-sm font-normal leading-none text-slate-500">
                            {formatDate(meta.date.start, "{MMMM} {DD}, {YYYY}")} - {meta.date.end ? formatDate(meta.date.end, "{MMMM} {DD}, {YYYY}") : (<span className="text-cyan-400">Present</span>)}
                        </time>

                        <div className="prose prose-slate prose-sm dark:prose-dark line-clamp-2 max-w-3xl">
                            <Component />
                        </div>
                    </div>

                    {meta.images && meta.images.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-6">
                            {meta.images.map(({ src, alt, ...item }, index) => (
                                <div key={index} className="flex flex-col">
                                    <div onClick={() => console.log("click")} className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 cursor-pointer">
                                        <Image src={src} alt={alt} placeholder="blur" className="object-cover object-center" {...item} />
                                    </div>
                                    <p className="pt-2 text-xs font-semibold text-slate-800 dark:text-slate-400">
                                        {alt}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-6 flex items-center justify-start space-x-4 md:space-x-8">
                        <div className="flex items-center space-x-2">
                            <HeartIcon className="h-5 w-5 fill-rose-500 stroke-rose-500" />
                            <span className="text-xs font-medium md:text-sm">0 <span className="hidden sm:inline">likes</span></span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <EyeIcon className="h-5 w-5 stroke-cyan-400" />
                            <span className="text-xs font-medium md:text-sm">0 <span className="hidden sm:inline">views</span></span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <ClockIcon className="h-5 w-5 stroke-slate-800 dark:stroke-white" />
                            <span className="text-xs font-medium md:text-sm">0 min read</span>
                        </div>
                    </div>

                    <div className="flex items-center mt-6">
                        <Link href={`/experiences/${slug}`} className="animated-underline flex items-center text-sm font-medium text-cyan-500">
                            <span className="relative">
                                Read more<span className="sr-only">, {meta.title}</span>
                            </span>
                        </Link>
                        <ChevronRightIcon className="relative mt-px ml-1.5 h-[18px] w-[18px] overflow-visible text-cyan-400 dark:text-cyan-700" />
                    </div>
                </li>
            ))}
        </ol>
    );
};
