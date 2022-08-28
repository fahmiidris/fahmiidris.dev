import * as React from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';

type SectionProps = React.ComponentProps<'section'> & {
  title: string;
  subtitle: string;
  description: string;
  more: {
    href: string;
    text: string;
  };
};

export const Section = ({ title, subtitle, description, more, children, ...props }: SectionProps) => {
  return (
    <section aria-labelledby={`title-${title}`} className="mt-32 w-full overflow-hidden" {...props}>
      <div className="container">
        <div className="max-w-2xl">
          <h2 id={`title-${title}`} className="text-base font-semibold leading-7 text-cyan-400">
            {title}
          </h2>

          <p className="mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">{subtitle}</p>
        </div>

        <div className="max-w-xl">
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">{description}</p>
        </div>

        <div className="mt-6">
          <Link
            href={more.href}
            className="inline-flex items-center space-x-2 text-base font-semibold text-cyan-400 hover:text-slate-700"
          >
            <span>{more.text}</span>
            <ArrowSmRightIcon className="h-5 w-5" />
          </Link>
        </div>

        <div className="pt-12">{children}</div>
      </div>
    </section>
  );
};
