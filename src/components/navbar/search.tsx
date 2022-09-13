import * as React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export const Search = () => {
  return (
    <button
      type="button"
      className="-mr-1 inline-flex items-center justify-center rounded-full p-1 text-slate-500 duration-200 ease-in-out hover:bg-slate-100 hover:text-slate-800"
    >
      <svg width={24} height={24} fill="none" aria-hidden="true">
        <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <circle
          cx={11}
          cy={11}
          r={6}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
