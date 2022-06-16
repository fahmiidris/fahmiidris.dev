import * as React from 'react';
import { MailIcon } from '@heroicons/react/outline';

import { Input } from "@/components/input";

export const NewsletterForm = (props: { action: string }) => {
    return (
        <form action={props.action} method="post" className="-mx-2 flex flex-wrap">
            <div className="mt-3 grow-[9999] basis-64 px-2">
                <Input
                    type="email"
                    name="email_address"
                    placeholder="Subscribe via email"
                    required
                    aria-label="Email address"
                    style={{ outline: 'none' }}
                    icon={MailIcon}
                />
            </div>

            <div className="mt-3 flex grow px-1">
                <button type="submit" className="flex-auto rounded-md border-y border-transparent bg-slate-800 py-2 px-4 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:bg-white dark:text-slate-800 dark:hover:bg-slate-100 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-900">
                    Subscribe
                </button>
            </div>
        </form>
    );
};
