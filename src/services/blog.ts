import { sortDateDesc } from "@/utils/helpers";

import type { BlogModuleType, BlogPreviewType } from "@/types/blog.type";

export const getBlogPreviews = (): BlogPreviewType[] => {
    const context = require.context(`../pages/blog/?preview`, true, /\.mdx$/);

    return context
        .keys()
        .filter((file) => file.startsWith('.'))
        .map((file) => ({
            slug: file.substring(2).replace(/\/index\.mdx$/, ''),
            module: context<BlogModuleType>(file),
        }))
        .sort((a, b) => sortDateDesc(a.module.meta.published, b.module.meta.published));
};
