import glob from 'fast-glob';
import compareDesc from 'date-fns/compareDesc';

import type { TContentType, TPickFrontmatter } from '@/types/mdx.type';

const groups = {
    marketing: '(marketing)',
};

export default async function mdx<T extends TContentType>(group: keyof typeof groups, folder: T) {
    return await Promise.all<TPickFrontmatter<T>>(
        (
            await glob('**/page.mdx', { cwd: `src/app/${groups[group]}/${folder}` })
        ).map(async (filename) => {
            const slug = filename.replace(/\/page\.mdx$/, '');

            return {
                slug,
                href: `/${folder}/${slug}`,
                ...(await import(`../app/${groups[group]}/${folder}/${filename}`)).meta,
            };
        })
    ).then((items) => items.sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt))));
}
