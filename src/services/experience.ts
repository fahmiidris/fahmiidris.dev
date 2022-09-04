import { sortDateDesc } from '@/utils/helpers';

import type { Experience } from '@/types/experience';

export const getExperiencePreviews = () => {
  const context = require.context(`../pages/experiences/?preview`, true, /\.mdx$/);

  return context
    .keys()
    .filter((file) => file.startsWith('.'))
    .map((file) => ({
      slug: file.substring(2).replace(/\/index\.mdx$/, ''),
      module: context<Experience.Module>(file),
    }))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => sortDateDesc(a.module.meta.date.start, b.module.meta.date.start));
};
