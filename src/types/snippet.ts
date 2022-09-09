import type { MDXMetaType } from '@/types/seo';

export declare namespace Snippet {
  interface Preview {
    slug: string;
    module: Module;
  }

  interface Module {
    meta: MDXMetaType;
    default: (props: any) => JSX.Element;
  }
}
