import * as React from 'react';

type TableOfContentsProps = {};

export const TableOfContents = ({}: TableOfContentsProps) => {
  return (
    <>
      <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-800">On this page</h5>

      <ul className="text-sm leading-6 text-slate-800">
        <li>Currently under development!</li>
      </ul>
    </>
  );
};
