import * as React from 'react';

type TNoContent = {
  text: string;
  children?: React.ReactNode;
};

export const NoContent = ({ text, children }: TNoContent): JSX.Element => {
  return (
    <div className="block w-full border border-dashed border-slate-700 py-2 px-4 text-sm">
      <p>{text ? text : children}</p>
    </div>
  );
};
