import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import { slugifyWithCounter } from '@sindresorhus/slugify';

import { addExport } from './utils.mjs';

export default function rehypeTableOfContents() {
    return (tree) => {
        const slugify = slugifyWithCounter();

        const contents = [];

        visit(tree, 'element', (node) => {
            if (['h2', 'h3', 'h4'].includes(node.tagName) && !node.properties.id) {
                const title = toString(node);
                const slug = slugify(title);

                node.properties.id = slug;

                if (node.tagName === 'h2') {
                    contents.push({ title, slug, children: [] });
                } else if (node.tagName === 'h3') {
                    contents[contents.length - 1].children.push({ title, slug, children: [] });
                } else {
                    contents[contents.length - 1].children[contents[contents.length - 1].children.length - 1].children.push({ title, slug });
                }
            }
        });

        addExport(tree, 'tableOfContents', contents);
    };
}
