import * as React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export const Search = () => {
  return (
    <button type="button" className="inline-flex items-center justify-center text-slate-500 hover:text-slate-800">
      <SearchIcon className="h-[22px] w-[22px]" />
    </button>
  );
};
