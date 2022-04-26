import * as React from 'react';
import clsx from 'clsx';

type TLable = React.LabelHTMLAttributes<HTMLLabelElement> & {
  value: string;
};

export const Label = ({ htmlFor, value, className, children }: TLable) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(className, 'block text-sm font-semibold text-slate-700 dark:text-slate-200')}
    >
      {value ? value : children}
    </label>
  );
};
