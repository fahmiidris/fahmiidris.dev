import type { ImageProps } from 'next/future/image';

export type EducationType = {
  id: number;
  title: string;
  description: () => JSX.Element;
  major?: string;
  date: {
    start: number;
    end?: number;
  };
  href: string;
  images?: {
    image: ImageProps;
    alt: string;
  }[];
};
