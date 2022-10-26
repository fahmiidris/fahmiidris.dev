import * as React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import {
  CalendarIcon,
  ChatAlt2Icon,
  ClockIcon,
  ExternalLinkIcon,
  EyeIcon,
  PencilAltIcon,
  ShareIcon,
  ThumbUpIcon,
} from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Image } from '@/components/image';
import { Prose } from '@/components/prose';
import { GitHubIcon } from '@/components/social-icons';
import { TableOfContents } from '@/components/table-of-contents';

import { formatDate } from '@/utils/helpers';

import type { Project, ProjectType } from '@/types/project';

type ProjectPostLayoutProps = {
  slug: string;
  projectType: ProjectType;
  meta: Project.Module['meta'];
  children: React.ReactNode;
};

export const ProjectPostLayout = ({ slug, projectType, meta, children }: ProjectPostLayoutProps) => {
  const GITHUB_EDIT_LINK = `https://www.github.com/fahmiidris-labs/fahmiidris.dev/blob/main/src/pages/projects/${projectType}/${slug}/index.mdx`;
  const COMMIT_HISTORY_LINK = `https://www.github.com/fahmiidris-labs/fahmiidris.dev/commits/main/src/pages/projects/${projectType}/${slug}/index.mdx`;

  return (
    <div className="container pt-8">
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/projects"
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

      <div className="relative grid grid-cols-1 gap-8 py-8 xl:grid-cols-4">
        <div className="xl:col-span-3">
          <h1 className="max-w-3xl text-2xl font-extrabold tracking-tight text-slate-800 md:text-3xl">{meta.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4">
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

            {meta.repository && (
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-800 md:text-sm">
                <GitHubIcon className="h-5 w-5 text-slate-500" />
                <Link href={meta.repository} className="animated-underline">
                  Repository
                </Link>
              </div>
            )}

            <div className="flex items-center space-x-2 px-2 text-sm font-semibold text-slate-800 md:text-sm">
              <ExternalLinkIcon className="h-5 w-5 text-slate-500" />
              <Link href={`https://${meta.domain}`} className="animated-underline">
                Open Live Site
              </Link>
            </div>
          </div>

          <div className="text-sm leading-6">
            <dl>
              <dt className="sr-only">Date</dt>
              <dd className="absolute inset-x-0 top-0 flex items-center justify-start space-x-2 text-slate-800">
                <CalendarIcon className="h-5 w-5" />
                <time dateTime={formatDate(meta.createdAt)}>{formatDate(meta.createdAt)}</time>
              </dd>
            </dl>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-md border border-slate-200">
            <Image
              className="aspect-auto"
              src={meta.banner?.src ?? require('@/img/projects/default-banner.jpg').default}
              alt={meta.banner?.alt ?? 'Banner'}
              {...meta.banner}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-white" /> */}
          </div>

          <section id="content" className="relative pt-12">
            <h2 className="sr-only">Content projects</h2>

            <Prose className="prose-figure:my-2">{children}</Prose>
          </section>

          <div className="col-start-2 mt-12 mb-6 flex items-center justify-between">
            <Link
              href="/projects"
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
        </div>

        <div className="hidden xl:block">
          <div className="mt-0  xl:sticky xl:top-24">
            <TableOfContents />
          </div>
        </div>
      </div>
    </div>
  );
};
