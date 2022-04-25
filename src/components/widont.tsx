import * as React from 'react';

type TWidont = {
  children: string;
};

export const Widont = ({ children }: TWidont): JSX.Element => {
  return <>{children.replace(/ ([^ ]+)$/, '\u00A0$1')}</>;
};
