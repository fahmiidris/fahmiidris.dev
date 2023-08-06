import { visit } from 'unist-util-visit';

export default function rehypeListRoles() {
    return (tree) => {
        visit(tree, 'element', (element) => {
            if (['ol', 'ul'].includes(element.tagName)) {
                element.properties.role = 'list';
            }
        });
    };
}
