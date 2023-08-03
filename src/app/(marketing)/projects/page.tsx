import * as React from 'react';

import Link from '@/components/link';
import Button from '@/components/button';
import Jumbotron from '@/app/(marketing)/projects/_partials/jumbotron';
import SearchAndSort from '@/app/(marketing)/projects/_partials/search-and-sort';

import mdx from '@/utils/mdx';

export default async function ProjectsPage() {
    const projects = await mdx('marketing', 'projects');

    return (
        <>
            <Jumbotron />
            <SearchAndSort />

            <div className="container relative pb-20 pt-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {projects.map((project) => {
                        return (
                            <article key={project.slug} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full bg-slate-100 object-cover" />

                                    <div className="absolute bottom-3 right-3 flex gap-x-1">
                                        {project.tags.map((tag) => (
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
                                    <div className="group relative">
                                        <h3 className="mt-6 text-lg font-semibold leading-6 text-slate-700 group-hover:text-slate-600">
                                            <Link href={project.href}>
                                                <span className="absolute inset-0" />
                                                {project.title}
                                            </Link>
                                        </h3>

                                        <p className="mt-4 line-clamp-3 text-sm/6 text-slate-600">{project.description}</p>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-x-2">
                                    {project.repository ? (
                                        <Button.Link href={project.repository} variant="outline" size="xs">
                                            Repository
                                        </Button.Link>
                                    ) : null}

                                    <Button.Link href={project.url} variant="outline" size="xs">
                                        Live view
                                    </Button.Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
