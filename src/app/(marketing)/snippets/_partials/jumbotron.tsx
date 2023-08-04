import * as React from 'react';

import clsxm from '@/utils/clsxm';
import Button from '@/components/button';

const tags = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'MDX',
    'Markdoc',
    'Node.js',
    'Express.js',
    'Nest.js',
    'Golang',
];

export default function Jumbotron() {
    return (
        <header id="jumbotron" aria-placeholder="title-jumbotron" className="relative overflow-hidden border-b border-slate-200">
            <div className="container flex flex-col items-center justify-center gap-y-4 py-20 text-center">
                <div className="flex max-w-3xl flex-col items-center justify-center">
                    <h2 className="text-base/7 font-semibold text-cyan-500">Code Snippets</h2>

                    <p className={clsxm('mt-4 text-3xl font-extrabold tracking-tight text-slate-700', 'sm:text-4xl')}>
                        Some collection of code snippets that I put for easy access, feel free to reuse!
                    </p>
                </div>

                <p className={clsxm('max-w-3xl text-sm/6 text-slate-700', 'sm:text-base/7')}>
                    I have learned a lot of things, but I also often forget a lot of things. Code snippets It can be helpful to record the exact same
                    code in every projects.
                </p>

                <ul role="list" className="flex flex-wrap items-center justify-center gap-4 pt-12">
                    {tags.map((tag) => (
                        <li key={tag}>
                            <Button variant="outline" size="xs">
                                {tag}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
