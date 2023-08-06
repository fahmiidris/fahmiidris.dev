import * as React from 'react';

import format from 'date-fns/format';

import Image from 'next/image';

import { CalendarIcon } from '@heroicons/react/24/outline';

import Prose from '@/components/prose';
import TableOfContents from '@/components/table-of-contents';

import { meta } from '@/utils/mdx';

import type { TLayoutProps } from '@/types/layout.type';

type TWrapperProps = TLayoutProps<{
    slug: string;
}>;

export default async function Wrapper({ slug, children }: TWrapperProps) {
    const experience = await meta('marketing', 'experiences', slug);

    const startDate = experience?.date.start ? format(new Date(experience?.date.start), 'MMMM yyyy') : format(new Date(), 'MMMM yyyy');
    const endDate = experience?.date.end ? format(new Date(experience.date.end), 'MMMM yyyy') : 'Present';

    const dateTime = `${startDate} - ${endDate}`;

    return (
        <div className="container pt-8">
            <article className="relative flex flex-col gap-y-8 py-8">
                <div className="flex flex-col-reverse gap-y-6">
                    <h1 className="max-w-3xl text-2xl font-extrabold tracking-tight text-slate-700 md:text-3xl">{experience?.title}</h1>

                    <dl className="text-sm/6">
                        <dt className="sr-only">Date</dt>

                        <dd className="flex items-center justify-start gap-x-2 text-slate-700">
                            <CalendarIcon className="h-5 w-5" />

                            <time {...{ dateTime }} className="block text-sm font-normal leading-none text-slate-500">
                                {dateTime}
                            </time>
                        </dd>
                    </dl>
                </div>

                {experience?.images ? (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {experience.images.map((image, index) => (
                            <React.Fragment key={index}>
                                <Image
                                    src={image}
                                    className="aspect-[16/9] w-full bg-slate-100 object-cover object-center"
                                    placeholder="blur"
                                    alt=""
                                    priority
                                />
                            </React.Fragment>
                        ))}
                    </div>
                ) : null}

                <div className="relative grid grid-cols-1 gap-8 xl:grid-cols-4">
                    <section id="content" className="relative border-t border-slate-200 xl:col-span-3">
                        <Prose className="w-full min-w-full">{children}</Prose>
                    </section>

                    <div className="hidden xl:block">
                        <div className="xl:sticky xl:top-24">
                            <TableOfContents />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
