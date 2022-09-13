import { sortDateDesc } from '@/utils/helpers';

import type { Blog } from '@/types/blog';

export const getBlogPreviews = () => {
  const context = require.context(`../pages/blogs/?preview`, true, /\.mdx$/);

  return context
    .keys()
    .filter((file) => file.startsWith('.'))
    .map((file) => ({
      slug: file.substring(2).replace(/\/index\.mdx$/, ''),
      module: context<Blog.Module>(file),
    }))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => sortDateDesc(a.module.meta.createdAt, b.module.meta.createdAt));
};
