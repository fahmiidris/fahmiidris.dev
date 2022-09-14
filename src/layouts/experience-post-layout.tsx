import * as React from 'react';
import Image from 'next/future/image';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import {
  CalendarIcon,
  ChatAlt2Icon,
  ClockIcon,
  EyeIcon,
  PencilAltIcon,
  ShareIcon,
  ThumbUpIcon,
} from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Prose } from '@/components/prose';
import { TableOfContents } from '@/components/table-of-contents';

import { formatDate } from '@/utils/helpers';

import type { Experience } from '@/types/experience';

type ExperiencePostLayoutProps = {
  slug: string;
  meta: Experience.Module['meta'];
  children: React.ReactNode;
};

export const ExperiencePostLayout = ({ slug, meta, children }: ExperiencePostLayoutProps) => {
  const GITHUB_EDIT_LINK = `https://github.com/fahmiidris-labs/fahmiidris.dev/blob/main/src/pages/experiences/${slug}/index.mdx`;
  const COMMIT_HISTORY_LINK = `https://github.com/fahmiidris-labs/fahmiidris.dev/commits/main/src/pages/experiences/${slug}/index.mdx`;

  const dateTime = (time: number) => {
    return formatDate(time, '{MMMM} {DD}, {YYYY}');
  };

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/experiences"
          className="group flex items-center text-sm font-semibold leading-6 text-slate-800 hover:text-slate-900"
        >
          <ChevronLeftIcon className="mr-2 h-5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600" />
          Go back
        </Link>

        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="group flex items-center justify-center space-x-2 text-sm font-semibold text-slate-800"
          >
            <ThumbUpIcon className="h-5 w-5 overflow-visible text-slate-500 group-hover:text-cyan-400" />
            <span>0</span>
          </button>

          <button
            type="button"
            className="group flex items-center justify-center space-x-2 text-sm font-semibold text-slate-800"
          >
            <ChatAlt2Icon className="h-5 w-5 overflow-visible text-slate-500 group-hover:text-emerald-400" />
            <span>0</span>
          </button>

          <button
            type="button"
            className="group flex items-center justify-center space-x-2 text-sm font-semibold text-slate-800"
          >
            <ShareIcon className="h-5 w-5 overflow-visible text-slate-500 group-hover:text-rose-400" />
            <span>0</span>
          </button>
        </div>
      </div>

      <article className="relative py-8">
        <h1 className="max-w-3xl text-2xl font-extrabold tracking-tight text-slate-800 md:text-3xl">{meta.title}</h1>

        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm font-semibold text-slate-800 md:text-sm">
            <ClockIcon className="h-5 w-5 text-slate-500" />
            <span>0</span>
            <span>min read</span>
          </div>

          <div className="flex items-center space-x-2 px-2 text-sm font-semibold text-slate-800 md:text-sm">
            <EyeIcon className="h-5 w-5 text-slate-500" />
            <span>0</span>
            <span>views</span>
          </div>
        </div>

        {meta.images && meta.images.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {meta.images.map(({ src, alt, ...item }, index) => (
              <div key={index} className="flex flex-col">
                <div
                  onClick={() => console.log('click')}
                  className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-slate-200"
                >
                  <Image src={src} alt={alt} placeholder="blur" className="object-cover object-center" {...item} />
                </div>
                <p className="pt-2 text-xs font-semibold text-slate-800">{alt}</p>
              </div>
            ))}
          </div>
        )}

        <div className="text-sm leading-6">
          <dl>
            <dt className="sr-only">Date</dt>
            <dd className="absolute inset-x-0 top-0 flex items-center justify-start space-x-2 text-slate-800">
              <CalendarIcon className="h-5 w-5" />
              <time dateTime={dateTime(meta.date.start)}>
                {dateTime(meta.date.start)} -{' '}
                {meta.date.end ? dateTime(meta.date.end) : <span className="text-cyan-400">Present</span>}
              </time>
            </dd>
          </dl>
        </div>

        <div className="relative grid grid-cols-1 gap-8 xl:grid-cols-4">
          <section id="content" className="relative xl:col-span-3">
            <Prose className="mt-12">{children}</Prose>

            <div className="col-start-2 mt-12 mb-6 flex items-center justify-between">
              <Link
                href="/experiences"
                className="group flex items-center text-sm font-semibold leading-6 text-slate-800 hover:text-slate-900"
              >
                <ChevronLeftIcon className="mr-2 h-5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600" />
                Go back
              </Link>
              <Link
                href={GITHUB_EDIT_LINK}
                className="group flex items-center text-sm font-semibold leading-6 text-slate-800 hover:text-slate-900"
              >
                Edit this page
                <PencilAltIcon className="ml-2 h-5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600" />
              </Link>
            </div>
          </section>

          <div>
            <div className="mt-0 hidden xl:sticky xl:top-24 xl:mt-[50px] xl:block">
              <TableOfContents />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};