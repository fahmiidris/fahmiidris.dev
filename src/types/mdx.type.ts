import type { StaticImageData } from 'next/image';

export type TTableOfContents = Array<{
    title: string;
    slug: string;
    children: TTableOfContents;
}>;

export type TContentType = 'articles' | 'experiences' | 'projects' | 'snippets';

export type TFrontmatter = {
    id: number;
    title: string;
    description: string;
    slug: string;
    href: string;
    tableOfContents: TTableOfContents;
    createdAt: string;
};

export type TArticleFrontmatter = TFrontmatter & {
    author: {
        name: string;
        href: string;
        role: string;
    };
    tags: Array<string>;
    publishedAt: number;
};

export type TProjectFrontmatter = TFrontmatter & {
    tags: Array<string>;
    publishedAt: number;
    url: string;
    repository?: string;
};

export type TExperienceFrontmatter = TFrontmatter & {
    tags: Array<string>;
    images: Array<StaticImageData>;
    date: {
        start: number;
        end?: number;
    };
};

export type TSnippetFrontmatter = TFrontmatter & {
    tags: Array<string>;
    publishedAt: number;
};

export type TPickFrontmatter<T extends TContentType> = T extends 'articles'
    ? TArticleFrontmatter
    : T extends 'projects'
    ? TProjectFrontmatter
    : T extends 'experiences'
    ? TExperienceFrontmatter
    : TSnippetFrontmatter;
