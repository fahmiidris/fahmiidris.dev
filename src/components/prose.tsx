import * as React from 'react';
import clsx from 'clsx';

type ProseProps = {
  className?: string;
  children: React.ReactNode;
};

export const Prose = ({ className, children }: ProseProps) => {
  return <div className={clsx(className, 'prose prose-slate')}>{children}</div>;
};
