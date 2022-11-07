import * as React from 'react';
import clsx from 'clsx';
import { InformationCircleIcon } from '@heroicons/react/outline';

type AlertProps = {
  message?: string;
  classNames?: {
    wrapper?: string;
    icon?: string;
    text?: string;
  };
  children?: React.ReactNode;
};

export const Alert = ({ message, classNames, children }: AlertProps) => {
  return (
    <div className={clsx('border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm', classNames?.wrapper)}>
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon className={clsx('h-5 w-5 text-yellow-400', classNames?.icon)} aria-hidden="true" />
        </div>

        <div className={clsx('ml-3 text-yellow-700', classNames?.text)}>{message ? message : children}</div>
      </div>
    </div>
  );
};
