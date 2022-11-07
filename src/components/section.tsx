import * as React from 'react';
import clsx from 'clsx';
import { ArrowSmRightIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';
import { Prose } from '@/components/prose';

type SectionProps = React.ComponentProps<'section'> & {
  title: string;
  subtitle: string;
  description?: string | (() => JSX.Element);
  more?: {
    href: string;
    text: string;
    className?: string;
  };
  maxWidthDescription?: string;
  colorText?: {
    title?: string;
    subtitle?: string;
    description?: string;
  };
};

export const Section = ({
  title,
  subtitle,
  description,
  more,
  maxWidthDescription = 'max-w-xl',
  className,
  children,
  colorText,
  ...props
}: SectionProps) => {
  return (
    <section aria-labelledby={`title-${title}`} className={clsx('w-full overflow-hidden py-4', className)} {...props}>
      <div className="container">
        <div className="max-w-2xl">
          <h2
            id={`title-${title}`}
            className={clsx('text-base font-semibold leading-7 text-cyan-400', colorText?.title)}
          >
            {title}
          </h2>

          <p
            className={clsx(
              'mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl',
              colorText?.subtitle
            )}
          >
            {subtitle}
          </p>
        </div>

        {description && (
          <div className={clsx('', maxWidthDescription)}>
            {typeof description === 'string' ? (
              <p
                className={clsx(
                  'mt-4 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7',
                  colorText?.description
                )}
              >
                {description}
              </p>
            ) : (
              <Prose className="prose-sm mt-4">{React.createElement(description)}</Prose>
            )}
          </div>
        )}

        <div className="py-8">{children}</div>

        {more && (
          <div>
            <Link
              href={more.href}
              className={clsx(
                'inline-flex items-center space-x-2 rounded-md border border-slate-200 bg-white py-2 pl-4 pr-3 text-sm font-semibold text-slate-800 hover:bg-slate-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2',
                more.className
              )}
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
