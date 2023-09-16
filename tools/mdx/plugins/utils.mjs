import { parse } from 'acorn';

export function addExport(tree, name, value) {
    value = `export const ${name} = ${JSON.stringify(value)}`;

    tree.children.push({
        type: 'mdxjsEsm',
        value,
        data: { estree: parse(value, { ecmaVersion: 'latest', sourceType: 'module' }) },
    });
}
