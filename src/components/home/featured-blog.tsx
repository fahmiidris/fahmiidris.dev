import * as React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { ChatAlt2Icon, ClipboardListIcon, ClockIcon, EyeIcon, HeartIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { FeaturedSection } from '@/components/home/featured-section';

import { formatDate } from '@/utils/helpers';
import { getBlogPreviews } from '@/services/blog';

const posts = getBlogPreviews().slice(0, 2);

export const FeaturedBlog = () => {
    return (
        <FeaturedSection id="featured-blog" title="Featured Blog" description="Some personal opinions on technology and my random thoughts." icon={ClipboardListIcon} href="/blog" className="pt-[90px]">
            <div className="relative sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)]">
                <div className="absolute top-3 bottom-0 right-full mr-7 hidden w-px bg-slate-200 dark:bg-slate-800 sm:block md:mr-[3.25rem]" />

                <div className="space-y-16">
                    {posts.map(({ slug, module: { default: Component, meta }}, index) => (
                        <article key={index} className="relative">
                            <svg viewBox="0 0 9 9" className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 dark:text-slate-600 sm:block md:mr-12">
                                <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth={2} />
                            </svg>

                            <div className="relative">
                                <h3 className="pt-8 text-base font-semibold tracking-tight text-slate-800 dark:text-slate-200">
                                    {meta.title}
                                </h3>

                                <div className="prose prose-slate mt-2 mb-4 line-clamp-2 dark:prose-dark">
                                    <Component />
                                </div>

                                <dl className="absolute left-0 top-0">
                                    <dt className="sr-only">Date</dt>
                                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                                        <time dateTime={meta.published.toString()}>
                                            {formatDate(meta.published, '{MMMM} {DD}, {YYYY}')}
                                        </time>
                                    </dd>
                                </dl>
                            </div>

                            <div className="mb-4 flex items-center justify-start space-x-4 md:space-x-8">
                                <div className="flex items-center space-x-2">
                                    <HeartIcon className="h-5 w-5 fill-rose-500 stroke-rose-500" />
                                    <span className="text-xs font-medium md:text-sm">0 <span className="hidden sm:inline">likes</span></span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <ChatAlt2Icon className="h-5 w-5 stroke-emerald-500" />
                                    <span className="text-xs font-medium md:text-sm">0 <span className="hidden sm:inline">comments</span></span>
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

                            <div className="flex items-center">
                                <Link href={`/blog/${slug}`} className="animated-underline flex items-center text-sm font-medium text-cyan-500">
                                    <span className="relative">
                                        Read more<span className="sr-only">, {meta.title}</span>
                                    </span>
                                </Link>
                                <ChevronRightIcon className="relative mt-px ml-1.5 h-[18px] w-[18px] overflow-visible text-cyan-400 dark:text-cyan-700" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </FeaturedSection>
    );
};
