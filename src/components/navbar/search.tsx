import * as React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export const Search = () => {
    return (
        <button type="button" className="inline-flex items-center justify-center text-slate-700 dark:text-white hover:text-slate-800 dark:hover:text-cyan-400">
            <SearchIcon className="h-[22px] w-[22px]" />
        </button>
    );
};
