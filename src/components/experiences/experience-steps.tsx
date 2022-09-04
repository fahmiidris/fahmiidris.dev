import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/future/image';
import { ChevronRightIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';

import { formatDate } from '@/utils/helpers';

import type { Experience } from '@/types/experience';

type ExperienceStepsProps = {
  steps: Experience.Preview[];
};

export const ExperienceSteps = ({ steps }: ExperienceStepsProps) => {
  return (
    <ol className="relative space-y-2">
      {steps.map(({ slug, module: { default: Component, meta } }, index) => (
        <li
          key={index}
          className={clsx(
            `relative pl-10 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-full before:text-[0.625rem] before:font-bold before:text-slate-800 before:ring-1 before:ring-slate-800/20`,
            index !== steps.length - 1 &&
              'pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200'
          )}
        >
          <div>
            <h2 className="mb-2 text-sm font-semibold leading-6 text-slate-800">
              <Link href={`/experiences/${slug}`} className="inline duration-200 ease-in-out hover:text-cyan-400">
                {meta.title}
              </Link>
            </h2>

            <time
              dateTime={meta.date.start.toString()}
              className="mb-2 block text-sm font-normal leading-none text-slate-500"
            >
              {formatDate(meta.date.start, '{MMMM} {DD}, {YYYY}')} -{' '}
              {meta.date.end ? (
                formatDate(meta.date.end, '{MMMM} {DD}, {YYYY}')
              ) : (
                <span className="text-cyan-400">Present</span>
              )}
            </time>

            <div className="prose prose-sm prose-slate max-w-3xl line-clamp-2">
              <Component />
            </div>
          </div>

          {meta.images && meta.images.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {meta.images.map(({ src, alt, ...image }, index) => (
                <figure key={index} className="flex flex-col items-start justify-start">
                  <div className="relative h-auto w-auto overflow-hidden rounded-md">
                    <Image
                      src={src}
                      alt={alt}
                      placeholder="blur"
                      className="aspect-video cursor-pointer object-cover object-center"
                      onClick={() => {
                        console.log('Show Modal');
                      }}
                      {...image}
                    />
                  </div>

                  <figcaption className="pt-2 text-xs font-semibold text-slate-800">{alt}</figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className="mt-6 flex items-center">
            <Link
              href={`/experiences/${slug}`}
              className="animated-underline flex items-center text-sm font-medium text-cyan-400"
            >
              <span className="relative">
                Read more<span className="sr-only">, {meta.title}</span>
              </span>
            </Link>

            <ChevronRightIcon className="relative mt-px ml-1.5 h-[18px] w-[18px] overflow-visible text-cyan-400" />
          </div>
        </li>
      ))}
    </ol>
  );
};
