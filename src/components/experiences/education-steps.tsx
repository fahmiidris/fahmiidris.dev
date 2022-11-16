import * as React from 'react';
import clsx from 'clsx';

import { Link } from '@/components/link';
import { Image } from '@/components/image';
import { Prose } from '@/components/prose';

import { formatDate, sortDateDesc } from '@/utils/helpers';

import type { EducationType } from '@/types/education';

type EducationStepsProps = {
  steps: EducationType[];
};

export const EducationSteps = ({ steps }: EducationStepsProps) => {
  return (
    <ol className="relative space-y-2">
      {steps
        .sort((a, b) => sortDateDesc(a.date.start, b.date.start))
        .map(({ id, title, description: Description, date, major, href, images }, index) => (
          <li
            key={index}
            id={id.toString()}
            className={clsx(
              `before:content-[attr(id) relative grid-cols-1 gap-8 pl-10 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-slate-800 before:ring-1 before:ring-slate-900/20 xl:grid`,
              index !== steps.length - 1 &&
                'pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200'
            )}
          >
            <div className="mb-6 xl:mb-0">
              <h2 className="mb-2 text-sm font-semibold leading-6 text-slate-800">
                <Link href={href} openNewTab={true} className="inline duration-200 ease-in-out hover:text-cyan-400">
                  {title}
                </Link>
                {major && ` - ${major}`}
              </h2>

              <time dateTime={formatDate(date.start, '{MMMM}, {YYYY}')} className="mb-2 block text-sm font-normal leading-none text-slate-500">
                {formatDate(date.start, '{MMMM}, {YYYY}')} -{' '}
                {date.end ? formatDate(date.end, '{MMMM}, {YYYY}') : <span className="text-cyan-400">Present</span>}
              </time>

              <Prose className="prose-sm max-w-3xl">
                <Description />
              </Prose>
            </div>

            {images && images.length > 0 && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {images.map((item, index) => (
                  <Image.WithCaption key={index} alt={item.alt} {...item.image} className="aspect-video" />
                ))}
              </div>
            )}
          </li>
        ))}
    </ol>
  );
};
