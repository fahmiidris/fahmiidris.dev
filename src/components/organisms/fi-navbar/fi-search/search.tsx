import * as React from 'react';
import { HiSearch } from 'react-icons/hi';

export const Search = () => {
  return (
    <button
      type="button"
      className="rounded-lg border border-transparent p-2 text-gray-400 duration-200 ease-in-out hover:text-cyan-500 dark:hover:text-white lg:text-gray-700 dark:lg:text-gray-400"
    >
      <span className="sr-only">Search</span>
      <HiSearch className="h-5 w-5 lg:h-4 lg:w-4" aria-hidden="true" />
    </button>
  );
};
