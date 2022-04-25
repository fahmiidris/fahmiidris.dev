import * as React from 'react';

type TSearchProvider = {
  children: React.ReactNode;
};

export const SearchProvider = ({ children }: TSearchProvider): JSX.Element => {
  return <div>{children}</div>;
};

export const SearchButton = (): JSX.Element => {
  return <button type="button">{/*  */}</button>;
};
