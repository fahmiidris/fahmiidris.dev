import type { NextPage } from 'next';
import type { MDXComponents as MDXComponentsType } from 'mdx/types';

declare module 'next' {
    type NextLayoutType<T = {}> = React.ComponentType<T & { children: React.ReactNode }>;

    type MetaType = {
        title: string;
        description?: string;
        url?: string;
        image?: string;
        type?: string;
        robots?: string;
    };

    type NextPageWithLayoutType<T = {}, TP = T> = NextPage<T & { components: MDXComponentsType }, TP> & {
        Props?: {
            Layout: any;
            meta: MetaType;
            fm?: any;
        };
    };
}
