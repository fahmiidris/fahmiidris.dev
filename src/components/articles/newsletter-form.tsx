import * as React from 'react';
import { MailIcon } from '@heroicons/react/outline';

export const NewsletterForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <div className="mt-4 grow-[9999] basis-64 px-2">
        <div className="group relative">
          <MailIcon className="pointer-events-none absolute inset-y-0 left-3 h-full w-6 text-slate-400 group-focus-within:text-cyan-400" />
          <input
            name="email_address"
            type="email"
            required
            autoComplete="email"
            aria-label="Email address"
            className="block w-full rounded-md border-slate-200 pl-10 text-sm placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm"
            placeholder="Subscribe via email"
          />
        </div>
      </div>

      <div className="mt-4 flex grow px-2">
        <button
          type="submit"
          className="flex-auto rounded-md border-y border-transparent bg-slate-800 py-2 px-4 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 disabled:opacity-75"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};
