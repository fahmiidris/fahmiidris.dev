import * as React from "react";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { CalendarIcon, ClockIcon, EyeIcon, HeartIcon } from "@heroicons/react/outline";

import { Link } from "@/components/link";

import DefaultLayout from "@/layouts/default-layout";

import { formatDate } from "@/utils/helpers";

import type { NextLayoutType } from "next";
import type { ExperienceType } from "@/types/experience.type";

type ExperiencePostLayoutType = ExperienceType;

export const ExperiencePostLayout: NextLayoutType<ExperiencePostLayoutType> = ({ fm: { title, description, date, images }, children, }) => {
    return (
        <DefaultLayout>
            <div className="container">
                <div className="flex item-centet justify-between mb-8">
                    <div className="flex items-center space-x-2">
                        <ChevronLeftIcon className="h-4 w-4 text-slate-800 dark:text-white" />
                        <Link href="/experiences" className="animated-underline text-sm font-semibold text-slate-800 hover:text-slate-900 dark:text-white">
                            Go Back
                        </Link>
                    </div>

                    <div className="flex items-center justify-start space-x-4 sm:justify-center md:space-x-6">
                        <button type="button" className="flex items-center space-x-2 rounded-md border border-slate-400/20 py-1.5 pl-2.5 pr-3 hover:bg-slate-400/10">
                            <HeartIcon className="h-5 w-5 stroke-rose-500" />
                            <span className="flex items-center text-xs font-medium md:text-sm">
                                0 <span className="ml-2 hidden sm:block">likes</span>
                            </span>
                        </button>

                        <div className="flex items-center space-x-2">
                            <EyeIcon className="h-5 w-5 stroke-cyan-400" />
                            <span className="flex items-center text-xs font-medium md:text-sm">
                                0 <span className="ml-2 hidden sm:block">views</span>
                            </span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <ClockIcon className="h-5 w-5 stroke-slate-800 dark:stroke-white" />
                            <span className="text-xs font-medium md:text-sm">0 min read</span>
                        </div>
                    </div>
                </div>

                <article className="relative py-8">
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl max-w-3xl">
                        {title}
                    </h1>

                    {images && images.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-12">
                            {images.map(({ src, alt, ...item }, index) => (
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

                    <div className="text-sm leading-6">
                        <dl>
                            <dt className="sr-only">Date</dt>
                            <dd className="flex items-center justify-start space-x-2 absolute top-0 inset-x-0 text-slate-700 dark:text-slate-400">
                                <CalendarIcon className="w-5 h-5" />
                                <time dateTime={date.start.toString()}>
                                    {formatDate(date.start, "{MMMM} {DD}, {YYYY}")} - {date.end ? formatDate(date.end, "{MMMM} {DD}, {YYYY}") : (<span className="text-cyan-400">Present</span>)}
                                </time>
                            </dd>
                        </dl>
                    </div>

                    <section id="content" className="relative">
                        <div className="mt-12 prose prose-slate dark:prose-dark">
                            {children}
                        </div>
                    </section>
                </article>
            </div>
        </DefaultLayout>
    );
};
