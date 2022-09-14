import * as React from 'react';
import { ChatAlt2Icon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Prose } from '@/components/prose';

import { formatDate } from '@/utils/helpers';

import type { Blog } from '@/types/blog';

type BlogCardProps = Blog.Preview;

export const BlogCard = ({ slug, module: { default: Component, meta } }: BlogCardProps) => {
  return (
    <li className="group text-sm leading-6">
      <article className="relative flex flex-col rounded-t-md border border-slate-200 p-4 group-hover:border-slate-300">
        <div className="flex flex-col space-y-2">
          <dl>
            <dt className="sr-only">Date</dt>
            <dd className="whitespace-nowrap text-sm leading-6">
              <time dateTime={formatDate(meta.createdAt, '{MMMM} {DD}, {YYYY}')}>
                {formatDate(meta.createdAt, '{MMMM} {DD}, {YYYY}')}
              </time>
            </dd>
          </dl>

          <h3 className="text-base font-semibold tracking-tight text-slate-800 line-clamp-1">{meta.title}</h3>

          <Prose className="line-clamp-3 prose-a:relative prose-a:z-10">
            <Component />
          </Prose>
        </div>

        <div className="flex items-center justify-between pt-4 font-medium">
          <div>0 min read</div>

          <div className="flex items-center justify-end space-x-4">
            <div>0 likes</div>
            <div>0 comments</div>
          </div>
        </div>

        <Link href={`/blogs/${slug}`}>
          <span className="absolute inset-0 z-10" aria-hidden="true" />
        </Link>
      </article>

      <div className="flex items-center justify-evenly space-x-2 rounded-b-md border border-t-0 border-slate-200 p-2 lg:justify-center">
        <button
          type="button"
          className="flex w-full items-center justify-center space-x-2 rounded-md py-1.5 px-2 font-semibold hover:bg-cyan-400/10 hover:text-cyan-400 xl:px-4"
        >
          <ThumbUpIcon className="h-5 w-5" />
          <span>Like</span>
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center space-x-2 rounded-md py-1.5 px-2 font-semibold hover:bg-emerald-400/10 hover:text-emerald-400 xl:px-4"
        >
          <ChatAlt2Icon className="h-5 w-5" />
          <span>Comment</span>
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center space-x-2 rounded-md py-1.5 px-2 font-semibold hover:bg-rose-400/10 hover:text-rose-400 xl:px-4"
        >
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </li>
  );
};
