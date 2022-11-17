import type { MDXMetaType } from '@/types/seo';

export declare namespace Article {
  interface Preview {
    slug: string;
    module: Module;
  }

  interface Module {
    meta: MDXMetaType & {
      language: 'id' | 'en';
    };
    default: (props: any) => JSX.Element;
  }
}
