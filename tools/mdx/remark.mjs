import path from 'path';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

import remarkMDXLayout from './plugins/remark-mdx-layout.mjs';
import unifiedConditional from './plugins/unified-conditional.mjs';
import escapeStringRegexp from './plugins/escape-string-regexp.mjs';

export const remarkPlugins = [
    remarkGfm,
    remarkUnwrapImages,
    [
        unifiedConditional,
        [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/(marketing)/experiences/(contents)'))}`),
            [[remarkMDXLayout, '@/app/(marketing)/experiences/_components/wrapper']],
        ],
        [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/(marketing)/projects/(contents)'))}`),
            [[remarkMDXLayout, '@/app/(marketing)/projects/_components/wrapper']],
        ],
    ],
];
