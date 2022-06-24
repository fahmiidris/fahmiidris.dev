import type { ReadTimeResults } from "reading-time";

export type BlogModuleType = {
    meta: {
        title: string;
        description: string;
        published: number;
    },
    default: (props: any) => JSX.Element;
}

export type BlogPreviewType = {
    slug: string;
    module: BlogModuleType;
}

export type BlogType = {
    fm: {
        title: string;
        description: string;
        published: number;
    }
}
