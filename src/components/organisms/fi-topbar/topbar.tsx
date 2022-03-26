import * as React from 'react';
import { HiLink } from 'react-icons/hi';
import { RiCalendarTodoLine } from 'react-icons/ri';

import { Link } from '@/components/atoms/fi-link/link';

export const Topbar = () => {
  return (
    <div className="relative z-40 bg-white">
      <div className="container">
        <div className="flex h-[32px] items-center justify-between">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <HiLink className="h-4 w-4 text-gray-700" />
              <Link
                href="https://links.fahmiidris.dev"
                className="animated-underline text-xs font-semibold"
              >
                <span className="hidden sm:block">links.fahmiidris.dev</span>
                <span className="block sm:hidden">Links Fahmi Idris</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2 ">
              <RiCalendarTodoLine className="h-4 w-4 text-gray-700" />
              <Link
                href="https://todo.fahmiidris.dev"
                className="animated-underline text-xs font-semibold"
              >
                <span className="hidden sm:block">todo.fahmiidris.dev</span>
                <span className="block sm:hidden">Todo Fahmi Idris</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
