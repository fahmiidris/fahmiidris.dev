import { sortDateDesc } from '@/utils/helpers';

import type { Snippet } from '@/types/snippet';

export const getSnippetPreviews = () => {
  const context = require.context(`../pages/snippets/?preview`, true, /\.mdx$/);

  return context
    .keys()
    .filter((file) => file.startsWith('.'))
    .map((file) => ({
      slug: file.substring(2).replace(/\/index\.mdx$/, ''),
      module: context<Snippet.Module>(file),
    }))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => sortDateDesc(a.module.meta.createdAt, b.module.meta.createdAt));
};
