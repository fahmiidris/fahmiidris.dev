import * as React from 'react';

type AboutSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const AboutSection = ({ title, children }: AboutSectionProps) => {
  return (
    <div className="py-4">
      <dt className="pb-2 text-sm font-medium text-slate-800">{title}</dt>

      <dd className="mt-1 text-sm text-slate-800">
        <ul role="list" className="divide-y divide-slate-200 overflow-hidden rounded-md border border-slate-200">
          {children}
        </ul>
      </dd>
    </div>
  );
};
