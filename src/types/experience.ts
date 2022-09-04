import type { ImageProps } from 'next/future/image';

import type { MDXMetaType } from '@/types/seo';

export declare namespace Experience {
  interface Preview {
    slug: string;
    module: Module;
  }

  interface Module {
    meta: MDXMetaType & {
      date: {
        start: number;
        end?: number;
      };
      banner: ImageProps;
      images: ImageProps[];
    };
    default: (props: any) => JSX.Element;
  }
}
