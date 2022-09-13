import * as React from 'react';
import clsx from 'clsx';
import { InformationCircleIcon } from '@heroicons/react/outline';

type AlertProps = {
  message?: string;
  className?: string;
  children?: React.ReactNode;
};

export const Alert = ({ message, className, children }: AlertProps) => {
  return (
    <div className={clsx('rounded-md bg-cyan-50 p-4', className)}>
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-cyan-700">{message ? message : children}</p>
        </div>
      </div>
    </div>
  );
};
