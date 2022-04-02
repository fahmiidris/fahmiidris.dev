import * as React from 'react';
import { HiArrowCircleLeft } from 'react-icons/hi';

import { Link } from '@/components/atoms/fi-link/link';
import { LogoType } from '@/components/atoms/fi-logo/logo';
import { RootLayout } from '@/components/templates/root-layout';

import type { TNextPageWithLayout } from '@/types/app.type';

const Custom404Page: TNextPageWithLayout = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-lg space-y-4 p-4 md:p-10">
        <Link href="/">
          <LogoType className="mx-auto h-10 w-auto" />
        </Link>
        <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-800 dark:text-primary-400">
          404 Page Not Found!
        </h2>
        <p className="my-2 text-center text-sm text-gray-600 dark:text-gray-200">
          Opps! Sorry, The page you are visiting does not exist.
        </p>
        <div className="relative mt-4">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center rounded-lg bg-gray-700 py-3 text-sm font-semibold text-white duration-200 ease-in-out hover:bg-gray-800 hover:ring-2 hover:ring-cyan-400 hover:ring-offset-2 dark:bg-gray-600 dark:ring-offset-gray-700"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <HiArrowCircleLeft className="h-5 w-5" />
            </span>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

Custom404Page.Props = {
  Layout: RootLayout,
  meta: {
    title: '404 Page Not Found!',
  },
};

export default Custom404Page;
