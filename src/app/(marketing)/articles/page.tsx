import * as React from 'react';

import format from 'date-fns/format';

import Link from '@/components/link';
import Jumbotron from '@/app/(marketing)/articles/_partials/jumbotron';
import SearchAndSort from '@/app/(marketing)/articles/_partials/search-and-sort';

import mdx from '@/utils/mdx';

export default async function ArticlesPage() {
    const articles = await mdx('marketing', 'articles');

    return (
        <>
            <Jumbotron />
            <SearchAndSort />

            <div className="container relative pb-20 pt-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {articles.map((article) => {
                        const publishedAt = format(new Date(article.publishedAt), 'MMMM dd, yyyy');

                        return (
                            <article key={article.slug} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full bg-slate-100 object-cover" />

                                    <div className="absolute bottom-3 right-3 flex gap-x-1">
                                        {article.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="max-w-xl">
                                    <div className="mt-6 flex items-center gap-x-4 text-xs">
                                        <time dateTime={publishedAt} className="text-slate-500">
                                            {publishedAt}
                                        </time>
                                    </div>

                                    <div className="group relative">
                                        <h3 className="mt-4 text-lg font-semibold leading-6 text-slate-700 group-hover:text-slate-600">
                                            <Link href={article.href}>
                                                <span className="absolute inset-0" />
                                                {article.title}
                                            </Link>
                                        </h3>

                                        <p className="mt-4 line-clamp-3 text-sm/6 text-slate-600">{article.description}</p>
                                    </div>

                                    <div className="relative mt-6 flex items-center gap-x-4">
                                        <div className="h-10 w-10 rounded-full bg-slate-200" />

                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-slate-700">
                                                <Link href={article.author.href}>
                                                    <span className="absolute inset-0" />
                                                    {article.author.name}
                                                </Link>
                                            </p>

                                            <p className="text-slate-600">{article.author.role}</p>
                                        </div>
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
