import * as React from 'react';

import format from 'date-fns/format';

import Link from '@/components/link';
import Jumbotron from '@/app/(marketing)/snippets/_partials/jumbotron';
import SearchAndSort from '@/app/(marketing)/snippets/_partials/search-and-sort';

import mdx from '@/utils/mdx';

export default async function SnippetsPage() {
    const snippets = await mdx('marketing', 'snippets');

    return (
        <>
            <Jumbotron />
            <SearchAndSort />

            <div className="container relative pb-20 pt-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {snippets.map((snippet) => {
                        const publishedAt = format(new Date(snippet.publishedAt), 'MMMM dd, yyyy');

                        return (
                            <article key={snippet.slug} className="flex flex-col items-start justify-between border border-slate-200 p-5">
                                <div className="max-w-xl">
                                    <div className="flex items-center justify-between gap-x-4 text-xs">
                                        <time dateTime={publishedAt} className="text-slate-500">
                                            {publishedAt}
                                        </time>

                                        <div className="flex gap-x-1">
                                            {snippet.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <h3 className="mt-4 text-lg font-semibold leading-6 text-slate-700 group-hover:text-slate-600">
                                            <Link href={snippet.href}>
                                                <span className="absolute inset-0" />
                                                {snippet.title}
                                            </Link>
                                        </h3>

                                        <p className="mt-4 line-clamp-3 text-sm/6 text-slate-600">{snippet.description}</p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
