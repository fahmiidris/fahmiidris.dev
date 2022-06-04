import type { NextPage } from 'next';

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

    type NextPageWithLayoutType<T = {}, TP = T> = NextPage<T, TP> & {
        Props?: {
            Layout: any;
            meta: MetaType;
        };
    };
}
