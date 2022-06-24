import * as React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { ChatAlt2Icon, EyeIcon, HeartIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';

import type { SnippetPreviewType } from '@/types/snippet.type';

type SnippetCardType = SnippetPreviewType & {
    isNew?: boolean;
};

export const SnippetCard = ({ slug, module: { default: Component, meta }, isNew }: SnippetCardType) => {
    return (
        <li className="text-sm leading-6">
            <figure className="relative flex border border-slate-400/20 rounded-t-lg p-4 dark:bg-slate-800 dark:border-transparent">
                <figcaption className="flex flex-col items-start space-y-4">
                    <div className="flex-auto">
                        <h2 className="text-base text-slate-800 font-semibold dark:text-white line-clamp-1">
                            {meta.title}
                        </h2>
                        <p className="mt-1 text-xs line-clamp-2">
                            {meta.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-start space-x-4">
                        <div className="flex items-center space-x-2">
                            <HeartIcon className="h-5 w-5 fill-rose-500 stroke-rose-500" />
                            <span className="text-xs font-medium md:text-sm">0</span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <ChatAlt2Icon className="h-5 w-5 stroke-emerald-500" />
                            <span className="text-xs font-medium md:text-sm">0</span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <EyeIcon className="h-5 w-5 stroke-cyan-400" />
                            <span className="text-xs font-medium md:text-sm">0</span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Link href={`/snippets/${slug}`} className="animated-underline flex items-center text-sm font-medium text-cyan-500">
                            <span className="relative">
                                Read more<span className="sr-only">, {meta.title}</span>
                            </span>
                        </Link>
                        <ChevronRightIcon className="relative mt-px ml-1.5 h-[18px] w-[18px] overflow-visible text-cyan-400 dark:text-cyan-700" />
                    </div>
                </figcaption>

                {isNew && (
                    <span className="absolute -top-2 -right-2 z-10 text-xs rounded-[4px] px-2 py-1 bg-cyan-400 dark:bg-cyan-500 text-slate-800 font-bold">
                        New!
                    </span>
                )}
            </figure>

            <div className="relative flex border border-t-0 border-slate-400/20 rounded-b-lg p-4 bg-slate-100 dark:bg-slate-700 dark:border-transparent">
                <div className="prose prose-slate prose-sm dark:prose-dark line-clamp-2">
                    <Component />
                </div>
            </div>
        </li>
    );
};
