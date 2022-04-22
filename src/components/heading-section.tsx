import * as React from 'react';

type THeadingSection = {
  title: string;
  description: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

export const HeadingSection = ({ title, description, icon }: THeadingSection): JSX.Element => {
  return (
    <div className="flex items-center justify-start">
      <div className="col-span-9 flex items-start justify-start">
        {React.createElement(icon, {
          className: 'w-8 h-8 -ml-1 mr-2 stroke-slate-700 dark:stroke-slate-200',
        })}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{title}</h2>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
};
