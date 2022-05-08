import * as React from 'react';

import { TechStack } from '@/components/tech-stack';

export const CurrentTechStack = (): JSX.Element => {
  return (
    <section id="current-tech-stack" className="relative pt-4">
      <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
        Current Tech Stack
      </h2>
      <TechStack className="!justify-start pt-4" />
    </section>
  );
};
