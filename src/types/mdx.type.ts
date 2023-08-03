export type TContentType = 'articles' | 'experiences' | 'projects' | 'snippets';

export type TFrontmatter = {
    id: number;
    title: string;
    description: string;
    slug: string;
    href: string;
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
