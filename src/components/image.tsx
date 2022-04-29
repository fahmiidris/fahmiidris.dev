import * as React from 'react';
import NextImage, { ImageProps } from 'next/image';

type TWrapper = {
  className?: string;
  children: React.ReactNode;
};

type TImage = ImageProps & {};

const Wrapper = ({ className, children }: TWrapper): JSX.Element => {
  return <figure className={className}>{children}</figure>;
};

export const Image = ({ src, className, ...props }: TImage): JSX.Element => {
  return <NextImage {...props} src={src} />;
};

Image.Wrapper = Wrapper;
