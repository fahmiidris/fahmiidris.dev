import * as React from 'react';

import Image from 'next/image';

import format from 'date-fns/format';

import Button from '@/components/button';

import clsxm from '@/utils/clsxm';

import type { TExperienceFrontmatter } from '@/types/mdx.type';

type TStepsProps = {
    steps: Array<TExperienceFrontmatter>;
    isLatest?: boolean;
};

export default function Steps({ steps, isLatest = false }: TStepsProps) {
    return (
        <ol role="list" className="relative">
            {steps.map((step, index) => {
                const startDate = format(new Date(step.date.start), 'MMMM yyyy');
                const endDate = step.date.end ? format(new Date(step.date.end), 'MMMM yyyy') : 'Present';

                const dateTime = `${startDate} - ${endDate}`;

                return (
                    <li
                        key={step.slug}
                        className={clsxm(
                            `relative grid grid-cols-1 gap-8 pl-10 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:text-[0.625rem] before:font-bold before:text-slate-700 before:ring-1 before:ring-slate-200 before:content-['']`,
                            index !== steps.length - 1 || isLatest
                                ? 'pb-8 after:absolute after:bottom-0 after:left-[0.6875rem] after:top-6 after:w-px after:bg-slate-200'
                                : ''
                        )}
                    >
                        <div className="flex flex-col gap-y-2">
                            <h2 className="text-sm/6 font-semibold text-slate-700">{step.title}</h2>

                            <time {...{ dateTime }} className="block text-sm font-normal leading-none text-slate-500">
                                {dateTime}
                            </time>

                            <p className="line-clamp-2 max-w-3xl pt-4 text-sm/6 text-slate-700">{step.description}</p>
                        </div>

                        {step.images ? (
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {step.images.map((image, index) => (
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

                        <div>
                            <Button.Link href={step.href} variant="outline" size="xs">
                                Read more<span className="sr-only">, {step.title}</span>
                            </Button.Link>
                        </div>
                    </li>
                );
            })}
        </ol>
    );
}
