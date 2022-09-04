import * as React from 'react';
import clsx from 'clsx';
import { ArrowSmRightIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';

type SectionProps = React.ComponentProps<'section'> & {
  title: string;
  subtitle: string;
  description: string;
  more?: {
    href: string;
    text: string;
  };
  maxWidthDescription?: string;
};

export const Section = ({
  title,
  subtitle,
  description,
  className,
  more,
  maxWidthDescription = 'max-w-xl',
  children,
  ...props
}: SectionProps) => {
  return (
    <section aria-labelledby={`title-${title}`} className="w-full overflow-hidden py-4" {...props}>
      <div className="container">
        <div className="max-w-2xl">
          <h2 id={`title-${title}`} className="text-base font-semibold leading-7 text-cyan-400">
            {title}
          </h2>

          <p className="mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">{subtitle}</p>
        </div>

        <div className={clsx('', maxWidthDescription)}>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">{description}</p>
        </div>

        <div className="py-8">{children}</div>

        {more && (
          <div>
            <Link
              href={more.href}
              className="inline-flex items-center space-x-2 rounded-md border border-slate-200 bg-white py-2 pl-4 pr-3 text-sm font-semibold text-slate-800 hover:bg-slate-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            >
              <span>{more.text}</span>
              <ArrowSmRightIcon className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
