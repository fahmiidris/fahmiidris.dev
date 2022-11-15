import { sortDateDesc } from '@/utils/helpers';

import type { Project } from '@/types/project';

const importAll = (context: __WebpackModuleApi.RequireContext) => {
  return context
    .keys()
    .filter((file) => file.startsWith('.'))
    .map((file) => ({
      slug: file.substring(2).replace(/\/index\.mdx$/, ''),
      module: context<Project.Module>(file),
    }))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => sortDateDesc(a.module.meta.createdAt, b.module.meta.createdAt));
};

export const getProjectPreviews = {
  fahmiidrisDev: () => {
    const context = require.context(`../pages/projects/fahmiidris-dev/?preview`, true, /\.mdx$/);

    return importAll(context);
  },

  patunganDev: () => {
    const context = require.context(`../pages/projects/patungan-dev/?preview`, true, /\.mdx$/);

    return importAll(context);
  },

  naqimartCom: () => {
    const context = require.context(`../pages/projects/naqimart-com/?preview`, true, /\.mdx$/);

    return importAll(context);
  },

  randomProjects: () => {
    const context = require.context(`../pages/projects/random/?preview`, true, /\.mdx$/);

    return importAll(context);
  },

  UIUXDesignProjects: () => {
    const context = require.context(`../pages/projects/ui-ux-design/?preview`, true, /\.mdx$/);

    return importAll(context);
  },
};
