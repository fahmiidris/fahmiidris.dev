import * as React from 'react';
import clsx from 'clsx';

export type SectionType = {
  id: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

export const Section = ({
  title,
  description,
  className,
  icon,
  children,
  ...props
}: SectionType) => {
  return (
    <section className={clsx('relative', className)} {...props}>
      <div className="flex items-start justify-start">
        {icon && (
          <div className="mr-2 hidden sm:block">
            {React.createElement(icon, {
              className: 'w-8 h-8 stroke-slate-800 dark:stroke-slate-200',
            })}
          </div>
        )}

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{title}</h2>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{description}</p>
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
};
