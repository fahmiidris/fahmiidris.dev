import { sortDateDesc } from '@/utils/helpers';

import type { Article } from '@/types/article';

export const getArticlePreviews = () => {
  const context = require.context(`../pages/articles/?preview`, true, /\.mdx$/);

  return context
    .keys()
    .filter((file) => file.startsWith('.'))
    .map((file) => ({
      slug: file.substring(2).replace(/\/index\.mdx$/, ''),
      module: context<Article.Module>(file),
    }))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => sortDateDesc(a.module.meta.createdAt, b.module.meta.createdAt));
};
