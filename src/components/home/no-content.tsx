import * as React from 'react';

export const NoContent = (): JSX.Element => {
  return (
    <div className="flex h-32 w-full items-center justify-center rounded-lg border border-dashed border-slate-900/30 dark:border-slate-50/[0.06]">
      <p>No Content Here!</p>
    </div>
  );
};
