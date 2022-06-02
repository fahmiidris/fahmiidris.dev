import * as React from 'react';
import { MailIcon } from '@heroicons/react/outline';

export const NewsletterForm = (props: { action: string }) => {
  return (
    <form action={props.action} method="post" className="-mx-2 flex flex-wrap">
      <div className="mt-3 grow-[9999] basis-64 px-2">
        <div className="group relative">
          <MailIcon className="pointer-events-none absolute inset-y-0 left-2.5 h-full w-6 text-slate-400 group-focus-within:text-cyan-500 dark:group-focus-within:text-slate-400" />
          <input
            name="email_address"
            type="email"
            required
            aria-label="Email address"
            className="block w-full appearance-none rounded-md border !border-transparent bg-white py-2 pl-11 pr-3 text-sm leading-5 text-slate-900 ring-1 ring-slate-900/20 placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 dark:bg-slate-700/20 dark:text-white dark:ring-slate-200/20 dark:focus:ring-cyan-500"
            placeholder="Subscribe via email"
            style={{ outline: 'none' }}
          />
        </div>
      </div>

      <div className="mt-3 flex grow px-1">
        <button
          type="submit"
          className="flex-auto rounded-md border-y border-transparent bg-slate-800 py-2 px-4 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:bg-white dark:text-slate-800 dark:hover:bg-slate-100 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-900"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};
