import * as React from 'react';
import { ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Prose } from '@/components/prose';

import { formatDate } from '@/utils/helpers';

import type { Snippet } from '@/types/snippet';

type SnippetCardProps = Snippet.Preview & {};

export const SnippetCard = ({ slug, module: { default: Component, meta } }: SnippetCardProps) => {
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

        <div className="flex items-center justify-start space-x-4 pt-4 font-medium">
          <div>0 likes</div>
          <div>0 min read</div>
        </div>

        <Link href={`/snippets/${slug}`}>
          <span className="absolute inset-0 z-10" aria-hidden="true" />
        </Link>
      </article>

      <div className="flex items-center justify-evenly space-x-2 rounded-b-md border border-t-0 border-slate-200 p-2 lg:justify-center">
        <button
          type="button"
          className="flex w-full items-center justify-center space-x-2 rounded-md py-1.5 font-semibold hover:bg-cyan-400/10 hover:text-cyan-400"
        >
          <ThumbUpIcon className="h-5 w-5" />
          <span>Like</span>
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center space-x-2 rounded-md py-1.5 font-semibold hover:bg-rose-400/10 hover:text-rose-400"
        >
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </li>
  );
};
