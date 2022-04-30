import * as React from 'react';
import clsx from 'clsx';

type TNoContent = {
  text: string;
  className?: string;
  children?: React.ReactNode;
};

export const NoContent = ({ text, className, children }: TNoContent): JSX.Element => {
  return (
    <div
      className={clsx(
        'block w-full border border-dashed border-slate-700 py-2 px-4 text-sm',
        className
      )}
    >
      <p>{text ? text : children}</p>
    </div>
  );
};
