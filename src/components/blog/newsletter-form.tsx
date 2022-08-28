import * as React from 'react';
import { MailIcon } from '@heroicons/react/outline';

import { Input } from '@/components/input';

export const NewsletterForm = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="-mx-2 flex flex-wrap" onSubmit={handleSubmit}>
      <div className="mt-3 grow-[9999] basis-64 px-2">
        <Input
          type="email"
          name="email_address"
          id="email_address"
          placeholder="Subscribe via email"
          required={true}
          aria-label="Email address"
          icon={MailIcon}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="mt-3 flex grow px-1">
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
