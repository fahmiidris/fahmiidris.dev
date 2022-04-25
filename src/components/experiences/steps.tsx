import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export type TSteps = {
  steps: {
    id: number;
    title: string;
    time: string;
    images?: {
      src: string;
      alt: string;
    }[];
    body: () => JSX.Element;
  }[];
};

export const Steps = ({ steps }: TSteps): JSX.Element => {
  return (
    <>
      <ol className="relative space-y-2">
        {steps
          .sort((a, b) => b.id - a.id)
          .map((step, index) => (
            <li
              key={index}
              id={step.id.toString()}
              className={clsx(
                `before:content-['Hi] relative grid-cols-1 gap-8 pl-10 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-slate-700 before:shadow-sm before:ring-1 before:ring-slate-900/5 before:content-[attr(id)] dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:shadow-none dark:before:ring-0 xl:grid`,
                index !== steps.length - 1 &&
                  'pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5'
              )}
            >
              <div className="mb-6 xl:mb-0">
                <h2 className="mb-2 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200">
                  {step.title}
                </h2>
                <time className="mb-2 block text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
                  {step.time}
                </time>
                <div className="porse-slate prose prose-sm font-semibold prose-p:text-slate-500">
                  <step.body />
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {step.images &&
                    step.images.map((item, index) => (
                      <div
                        key={index}
                        className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          priority={false}
                          layout="fill"
                          className="object-cover object-center"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </li>
          ))}
      </ol>
    </>
  );
};
