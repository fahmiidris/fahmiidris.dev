import * as React from 'react';

import { NewsletterForm } from '@/components/blog/newsletter-form';

import DefaultLayout from '@/layouts/default-layout';

import type { NextPageWithLayoutType } from 'next';

const BlogPage: NextPageWithLayoutType = () => {
    return (
        <div className="container relative mb-24 mt-0 md:mt-12">
            <div className="flex flex-col space-y-6">
                <header className="pb-16 sm:text-center">
                    <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-slate-800 dark:text-slate-200 sm:text-4xl">
                        My Blog and Opinions
                    </h1>
                    <p className="text-base text-slate-700 dark:text-slate-400">
                        Some personal opinions on technology and my random thoughts.
                    </p>
                    <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
                        <h2 className="sr-only">Sign up for our newsletter</h2>
                        <NewsletterForm action="#" />
                    </section>
                </header>

                <div>
                    <p className="text-sm font-semibold text-center">Currently Under Development!</p>
                </div>
            </div>
        </div>
    );
};

BlogPage.Props = {
    Layout: DefaultLayout,
    meta: {
        title: "Blog",
        description: "Some personal opinions on technology and my random thoughts.",
    },
};

export default BlogPage;
