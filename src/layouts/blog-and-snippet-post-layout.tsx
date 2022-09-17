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
  XIcon,
} from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';

import { Link } from '@/components/link';
import { Prose } from '@/components/prose';
import { NewsletterForm } from '@/components/blogs/newsletter-form';
import { TableOfContents } from '@/components/table-of-contents';

import { formatDate } from '@/utils/helpers';

import { profile } from '@/me';

import type { Blog } from '@/types/blog';
import type { Snippet } from '@/types/snippet';

type BlogAndSnippetPostLayoutProps = {
  slug: string;
  projectType: 'blogs' | 'snippets';
  meta: Blog.Module['meta'] | Snippet.Module['meta'];
  children: React.ReactNode;
};

export const BlogAndSnippetPostLayout = ({ slug, projectType, meta, children }: BlogAndSnippetPostLayoutProps) => {
  const [openComment, setOpenComment] = React.useState(false);

  const GITHUB_EDIT_LINK = `https://www.github.com/fahmiidris-labs/fahmiidris.dev/blob/main/src/pages/${projectType}/${slug}/index.mdx`;
  const COMMIT_HISTORY_LINK = `https://www.github.com/fahmiidris-labs/fahmiidris.dev/commits/main/src/pages/${projectType}/${slug}/index.mdx`;

  const dateTime = (createdAt: number) => {
    return formatDate(createdAt, '{dddd}, {MMMM} {DD}, {YYYY}');
  };

  return (
    <>
      <div className="container relative">
        <div className="absolute inset-x-0 top-0 z-30 flex justify-between py-8 px-4">
          <Link
            href={`/${projectType}`}
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

            {projectType === 'blogs' && (
              <button
                type="button"
                onClick={() => setOpenComment(true)}
                className="group flex items-center justify-center space-x-2 text-sm font-semibold text-slate-800"
              >
                <ChatAlt2Icon className="h-5 w-5 overflow-visible text-slate-500 group-hover:text-emerald-400" />
                <span>0</span>
              </button>
            )}

            <button
              type="button"
              className="group flex items-center justify-center space-x-2 text-sm font-semibold text-slate-800"
            >
              <ShareIcon className="h-5 w-5 overflow-visible text-slate-500 group-hover:text-rose-400" />
              <span>0</span>
            </button>
          </div>
        </div>

        <div className="relative pb-24 pt-[84px]">
          <article className="relative mx-auto max-w-3xl pt-0 xl:grid xl:max-w-none xl:grid-cols-[1fr_55rem] xl:gap-x-8">
            <div className="col-span-full flex flex-col items-start justify-center sm:items-center xl:mb-16">
              <dt className="sr-only">Date</dt>
              <dd className="flex items-center justify-center space-x-2 text-sm text-slate-800 sm:text-center md:text-lg">
                <CalendarIcon className="h-5 w-5" />
                <time dateTime={dateTime(meta.createdAt)}>{dateTime(meta.createdAt)}</time>
              </dd>

              <h1 className="mb-6 mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-center sm:text-4xl xl:max-w-4xl">
                {meta.title}
              </h1>

              <div className="flex items-center space-x-4">
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
            </div>

            <div className="mb-12 mt-12 self-start text-sm leading-6 xl:sticky xl:top-[59px] xl:mt-2 xl:mb-0">
              <dl className="border-y py-4">
                <div className="sm:flex sm:flex-wrap xl:block">
                  <dt className="sr-only">Author</dt>
                  <dd className="flex items-center space-x-4 font-medium sm:mx-3 xl:mx-0">
                    <Image
                      src={profile.image}
                      alt=" "
                      width={50}
                      height={50}
                      className="rounded-full object-cover object-center"
                    />
                    <div>
                      <div className="text-slate-800">{profile.name}</div>
                      <Link
                        href="https://github.com/fahmiidris-labs"
                        openNewTab={true}
                        className="text-cyan-500 hover:text-cyan-600"
                      >
                        github.com/fahmiidris-labs
                      </Link>
                    </div>
                  </dd>
                </div>
              </dl>

              <div className="mt-6 hidden xl:block">
                <TableOfContents />
              </div>
            </div>

            <Prose>{children}</Prose>

            <div className="col-start-2 mt-12 mb-6 flex items-center justify-between">
              <Link
                href={`/${projectType}`}
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

            <div className="relative col-start-2">
              <section className="relative border-t border-slate-200 py-16">
                <h2 className="text-xl font-semibold text-slate-800">
                  Get notified when I publish something new, and unsubscribe at any time.
                  <br />
                  Sign up for my newsletter.
                </h2>
                <div className="mt-5 max-w-md">
                  <NewsletterForm />
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>

      <Transition.Root show={openComment} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpenComment}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-500/50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={React.Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <Transition.Child
                      as={React.Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpenComment(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col divide-y divide-slate-200 bg-white">
                      <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                        <div className="px-4 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-slate-800">Comments</Dialog.Title>
                          </div>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus ab ut dolores
                          obcaecati sit perferendis cupiditate vitae quod praesentium, beatae veritatis a fuga similique
                          repudiandae est unde blanditiis quas.
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 justify-start px-4 py-4">
                        <button
                          type="submit"
                          className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                        >
                          Comment
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
