import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { CalendarIcon, ChatAlt2Icon, ClockIcon, EyeIcon, HeartIcon, XIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Textarea } from '@/components/textarea';
import { NewsletterForm } from '@/components/blog/newsletter-form';
import { TableOfContents } from '@/components/blog/table-of-contents';

import DefaultLayout from '@/layouts/default-layout';

import { formatDate } from '@/utils/helpers';

import type { NextLayoutType } from 'next';
import type { BlogType } from '@/types/blog.type';

type BlogPostLayoutType = BlogType;

let grid = 'max-w-3xl mx-auto xl:max-w-none xl:grid xl:grid-cols-[1fr_50rem] xl:gap-x-8';

export const BlogPostLayout: NextLayoutType<BlogPostLayoutType> = ({ fm: { title, description, published }, children }) => {
    const [openComments, setOpenComments] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <DefaultLayout>
                <div className="container max-w-6xl relative mt-0 pb-28 sm:mt-12">
                    <article className={clsx('relative pt-0', grid)}>
                        <div className="col-span-full flex flex-col items-start justify-center sm:items-center xl:mb-16">
                            <dt className="sr-only">Date</dt>
                            <dd className="flex items-center justify-center space-x-2 text-sm text-slate-800 dark:text-slate-400 sm:text-center md:text-lg">
                                <CalendarIcon className="w-5 h-5" />
                                <time dateTime={published.toString()}>
                                    {formatDate(published, '{dddd}, {MMMM} {DD}, {YYYY}')}
                                </time>
                            </dd>

                            <h1 className="mb-6 mt-4 text-3xl font-extrabold tracking-tight text-slate-800 dark:text-slate-200 sm:text-center sm:text-4xl xl:max-w-4xl">
                                {title}
                            </h1>

                            <div className="flex items-center justify-start space-x-4 sm:justify-center md:space-x-8">
                                <button type="button" className="flex items-center space-x-2 rounded-md border border-slate-400/20 py-1.5 pl-2.5 pr-3 hover:bg-slate-400/10">
                                    <HeartIcon className="h-5 w-5 stroke-rose-500" />
                                    <span className="flex items-center text-xs font-medium md:text-sm">
                                        0 <span className="ml-2 hidden sm:block">likes</span>
                                    </span>
                                </button>

                                <button type="button" onClick={() => setOpenComments(true)} className="flex items-center space-x-2 rounded-md border border-slate-400/20 py-1.5 pl-2.5 pr-3 hover:bg-slate-400/10">
                                    <ChatAlt2Icon className="h-5 w-5 stroke-emerald-500" />
                                    <span className="flex items-center text-xs font-medium md:text-sm">
                                        0 <span className="ml-2 hidden sm:block">comments</span>
                                    </span>
                                </button>

                                <div className="flex items-center space-x-2">
                                    <EyeIcon className="h-5 w-5 stroke-cyan-400" />
                                    <span className="flex items-center text-xs font-medium md:text-sm">
                                        0 <span className="ml-2 hidden sm:block">views</span>
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <ClockIcon className="h-5 w-5 stroke-slate-800 dark:stroke-white" />
                                    <span className="text-xs font-medium md:text-sm">0 min read</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 mt-12 self-start text-sm leading-6 xl:sticky xl:top-[59px] xl:mt-0 xl:mb-0">
                            <div className="mb-5 py-5 hidden border-y border-slate-200 dark:border-slate-200/5 xl:flex xl:items-center">
                                <Link href="/blog" className="group inline-flex items-center font-semibold text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                                    <ChevronLeftIcon className="mr-3 h-5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
                                    Go back
                                </Link>
                            </div>

                            <dl>
                                <div className="sm:flex sm:flex-wrap sm:justify-center xl:block">
                                    <dt className="sr-only">Author</dt>
                                    <dd className="flex items-center space-x-4 font-medium sm:mx-3 xl:mx-0">
                                        <Image src={require("@/images/me.jpg").default} alt={`Profile`} width={50} height={50} className="object-cover object-center rounded-full" />
                                        <div>
                                            <div className="text-slate-900 dark:text-slate-200">Fahmi Idris</div>
                                            <Link href="https://github.com/fahmiidris-labs" openNewTab={true} className="text-cyan-500 hover:text-cyan-600 dark:text-cyan-400">
                                                github.com/fahmiidris-labs
                                            </Link>
                                        </div>
                                    </dd>
                                </div>
                            </dl>

                            <div className="hidden mt-10 xl:block">
                                <TableOfContents />
                            </div>
                        </div>

                        <div className="-mt-[11px] prose prose-slate dark:prose-dark">
                            {children}
                        </div>

                        <div className="relative col-start-2 mt-16">
                            <section className="relative border-t border-slate-200 py-16 dark:border-slate-200/5">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    Subscribe to get the newsletter in your email.
                                    <br />
                                    Do&apos;t miss out, get an email when I make a new post, no spam.
                                </h2>
                                <div className="mt-5 max-w-md">
                                    <NewsletterForm />
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </DefaultLayout>

            <Transition.Root show={openComments} as={React.Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setOpenComments}>
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-in-out duration-400"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-400"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-500/75 dark:bg-slate-900/75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={React.Fragment}
                                    enter="transform transition ease-in-out duration-400 sm:duration-500"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-400 sm:duration-500"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={React.Fragment}
                                            enter="ease-in-out duration-400"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-400"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                                <button type="button" onClick={() => setOpenComments(false)} className="rounded-md text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                                    <span className="sr-only">Close panel</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>

                                        <div className="flex h-full flex-col overflow-y-auto bg-white dark:bg-slate-800 py-6 shadow-xl">
                                            <div className="px-4 sm:px-6 flex space-x-2">
                                                <ChatAlt2Icon className="h-6 w-6 mt-0.5 stroke-emerald-500" />
                                                <div>
                                                    <Dialog.Title className="text-lg font-medium text-slate-800 dark:text-white">Comments (0)</Dialog.Title>
                                                    <Dialog.Description className="text-sm font-semibold">
                                                        Give your opinion about this post!
                                                    </Dialog.Description>
                                                </div>
                                            </div>

                                            <form className="flex flex-col mt-4 px-4 sm:px-6" onSubmit={handleSubmit}>
                                                <div className="mt-3">
                                                    <Textarea
                                                        name="comment"
                                                        placeholder="Comment here..."
                                                        aria-label="Comment"
                                                        style={{ outline: 'none' }}

                                                    />
                                                </div>

                                                <div className="mt-3">
                                                    <button type="submit" className="inline-flex items-center rounded-md border-y border-transparent bg-slate-800 py-2 px-4 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:bg-white dark:text-slate-800 dark:hover:bg-slate-100 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-900">
                                                        Comment
                                                    </button>
                                                </div>
                                            </form>

                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div className="absolute inset-0 px-4 sm:px-6">
                                                    <div className="h-full border-2 border-dashed border-slate-400/50 rounded-md" aria-hidden="true" />
                                                </div>
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
