import { ReadTimeResults } from "reading-time";

export type SnippetModuleType = {
    meta: {
        title: string;
        description: string;
        published: number;
    },
    default: () => JSX.Element;
}

export type SnippetPreviewType = {
    slug: string;
    module: SnippetModuleType;
}

export type SnippetType = {
    fm: {
        title: string;
        description: string;
        published: number;
    }
}
