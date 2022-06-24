import * as React from 'react';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';
import { Logo } from '@/components/logo';

import ErrorLayout from "@/layouts/error-layout";

import type { NextPageWithLayoutType } from 'next';

const Custom404Page: NextPageWithLayoutType = () => {
    const router = useRouter();

    return (
        <div className="w-full max-w-lg space-y-4 p-4 md:p-10">
            <Link href="/">
                <Logo className="mx-auto h-10 w-auto" />
            </Link>

            <div className="pb-4">
                <h1 className="text-center text-2xl font-extrabold text-slate-800 dark:text-slate-200">
                    404 Page Not Found!
                </h1>
                <p className="text-center text-sm text-slate-600 dark:text-slate-500">
                    Opps! Sorry, The page you are visiting does not exist.
                </p>
            </div>

            <div className="relative">
                <button type="button" onClick={() => router.back()} className="inline-flex w-full items-center justify-center rounded-md bg-slate-800 py-3 text-sm font-semibold text-white duration-200 ease-in-out focus:bg-slate-800 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:bg-slate-800 dark:focus:bg-slate-800 dark:focus:ring-offset-slate-900">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <ArrowLeftIcon className="h-5 w-5" />
                    </span>
                    Back to Previos Page
                </button>
            </div>
        </div>
    );
};

Custom404Page.Props = {
    Layout: ErrorLayout,
    meta: {
        title: '404 Page Not Found!',
        description: 'Opps! Sorry, The page you are visiting does not exist.',
    },
};

export default Custom404Page;
