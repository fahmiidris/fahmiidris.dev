import type { ExperienceModuleType, ExperiencePreviewType } from "@/types/experience.type";

export const getExperiencePreviews = (): ExperiencePreviewType[] => {
    const context = require.context(`../pages/experiences/?preview`, true, /\.mdx$/);

    return context
        .keys()
        .filter((file) => file.startsWith('.'))
        .map((file) => ({
            slug: file.substring(2).replace(/\/index\.mdx$/, ''),
            module: context<ExperienceModuleType>(file),
        }))
        .sort((a, b) => b.module.meta.date.start - a.module.meta.date.start);
};
