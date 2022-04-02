import * as React from 'react';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { HiLink, HiOutlineTemplate } from 'react-icons/hi';

import { Link } from '@/components/atoms/fi-link/link';

export const Topbar = () => {
  return (
    <div className="relative z-40 bg-white dark:bg-gray-700">
      <div className="container">
        <div className="flex h-[32px] items-center justify-between">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <HiLink className="h-4 w-4 text-gray-700 dark:text-white" />
              <Link
                href="https://links.fahmiidris.dev"
                isExternal={true}
                className="animated-underline text-xs font-semibold"
              >
                <span className="hidden sm:block">links.fahmiidris.dev</span>
                <span className="block sm:hidden">Links Fahmi Idris</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2 ">
              <RiCalendarTodoLine className="h-4 w-4 text-gray-700 dark:text-white" />
              <Link
                href="https://todo.fahmiidris.dev"
                isExternal={true}
                className="animated-underline text-xs font-semibold"
              >
                <span className="hidden sm:block">todo.fahmiidris.dev</span>
                <span className="block sm:hidden">Todo Fahmi Idris</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <HiOutlineTemplate className="h-4 w-4 text-gray-700 dark:text-white" />
              <Link
                href="https://starter-template.fahmiidris.dev"
                isExternal={true}
                className="animated-underline text-xs font-semibold"
              >
                <span className="hidden sm:block">starter-template.fahmiidris.dev</span>
                <span className="block sm:hidden">Starter Template</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
