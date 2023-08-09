import glob from 'fast-glob';
import compareDesc from 'date-fns/compareDesc';

import type { TContentType, TFrontmatterWithTags, TPickFrontmatter } from '@/types/mdx.type';

const groups = {
    docs: '(docs)',
    marketing: '(marketing)',
};

export default async function mdx<T extends TContentType>(group: keyof typeof groups, folder: T) {
    return Promise.all<TPickFrontmatter<T>>(
        (await glob('**/page.mdx', { cwd: `src/app/${groups[group]}/${folder}` })).map(async (filename) => {
            const slug = filename.replace(/^\(contents\)\/|\/page\.mdx$/g, '');

            const { meta, tableOfContents } = await import(`../app/${groups[group]}/${folder}/${filename}`);

            return {
                slug,
                href: `/${folder}/${slug}`,
                tableOfContents,
                ...meta,
            };
        })
    ).then((items) => items.sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt))));
}

export async function meta<T extends TContentType>(group: keyof typeof groups, folder: T, slug: string) {
    return await mdx(group, folder).then((items) => items.find((item) => item.slug === slug));
}

export function getTags<T extends Array<TFrontmatterWithTags>>(contents: T) {
    const tags = contents.reduce((tags: Array<string>, content) => {
        return [...tags, ...content.tags];
    }, []);

    return [...new Set(tags)].sort();
}
