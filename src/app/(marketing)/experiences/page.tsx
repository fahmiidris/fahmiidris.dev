import * as React from 'react';

import Image from 'next/image';

import format from 'date-fns/format';

import Button from '@/components/button';
import Jumbotron from '@/app/(marketing)/experiences/_partials/jumbotron';

import clsxm from '@/utils/clsxm';
import mdx, { getTags } from '@/utils/mdx';

export default async function ExperiencesPage() {
    const experiences = await mdx('marketing', 'experiences');
    const tags = getTags(experiences);

    return (
        <>
            <Jumbotron {...{ tags }} />

            <div className="container relative py-20">
                <ol role="list" className="relative">
                    {experiences.map((experience, index) => {
                        const startDate = format(new Date(experience.date.start), 'MMMM yyyy');
                        const endDate = experience.date.end ? format(new Date(experience.date.end), 'MMMM yyyy') : 'Present';

                        const dateTime = `${startDate} - ${endDate}`;

                        return (
                            <li
                                key={experience.slug}
                                className={clsxm(
                                    `relative grid grid-cols-1 gap-8 pl-10 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:text-[0.625rem] before:font-bold before:text-slate-700 before:ring-1 before:ring-slate-200 before:content-['']`,
                                    index !== experiences.length - 1 &&
                                        'pb-8 after:absolute after:bottom-0 after:left-[0.6875rem] after:top-6 after:w-px after:bg-slate-200'
                                )}
                            >
                                <div className="flex flex-col gap-y-2">
                                    <h2 className="text-sm/6 font-semibold text-slate-700">{experience.title}</h2>

                                    <time {...{ dateTime }} className="block text-sm font-normal leading-none text-slate-500">
                                        {dateTime}
                                    </time>

                                    <p className="line-clamp-2 max-w-3xl pt-4 text-sm/6 text-slate-700">{experience.description}</p>
                                </div>

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

                                <div>
                                    <Button.Link href={experience.href} variant="outline" size="xs">
                                        Read more<span className="sr-only">, {experience.title}</span>
                                    </Button.Link>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </>
    );
}
