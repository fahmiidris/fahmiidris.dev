import type { SnippetModuleType, SnippetPreviewType } from "@/types/snippet.type";

export const getSnippetPreviews = (): SnippetPreviewType[] => {
    const context = require.context(`../pages/snippets/?preview`, true, /\.mdx$/);

    return context
        .keys()
        .filter((file) => file.startsWith('.'))
        .map((file) => ({
            slug: file.substring(2).replace(/\/index\.mdx$/, ''),
            module: context<SnippetModuleType>(file),
        }))
        .sort((a, b) => b.module.meta.published - a.module.meta.published);
};
