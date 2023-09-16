import path from 'path';
import jsx from 'acorn-jsx';

import { Parser } from 'acorn';

export default function remarkMDXLayout(source) {
    const parser = Parser.extend(jsx());
    const parseOptions = { ecmaVersion: 'latest', sourceType: 'module' };

    return (tree, file) => {
        const filename = path.relative(file.cwd, file.history[0]);
        const segments = filename.split(path.sep);
        const slug = JSON.stringify(segments.at(-2));

        const imp = `import _Layout from '${source}'`;
        const exp = `export default function Layout({ children, ...props }) {
            return <_Layout slug={${slug}} {...props}>{children}</_Layout>
        }`;

        tree.children.push(
            {
                type: 'mdxjsEsm',
                value: imp,
                data: { estree: parser.parse(imp, parseOptions) },
            },
            {
                type: 'mdxjsEsm',
                value: exp,
                data: { estree: parser.parse(exp, parseOptions) },
            }
        );
    };
}
