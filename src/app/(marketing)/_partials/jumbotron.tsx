import * as React from 'react';

import Button from '@/components/button';
import RenderTag from '@/app/(marketing)/_components/render-tag';

import clsxm from '@/utils/clsxm';

function HelloWorld() {
    return (
        <div className={clsxm('order-first flex items-center justify-center gap-x-4 text-sm text-slate-700', 'lg:justify-start')}>
            <RenderTag title="Hello.World" />

            <svg viewBox="0 0 2 2" aria-hidden="true" className="w-0.5 fill-current">
                <circle cx="1" cy="1" r="1" />
            </svg>

            <RenderTag title="Halo.Dunia" />
        </div>
    );
}

function CallToAction() {
    return (
        <div className={clsxm('flex items-center justify-center gap-x-4', 'lg:justify-start')}>
            <Button.Link href="/contacts">Get in touch</Button.Link>

            <Button.Link href="/resume" variant="outline" openNewTab>
                Resume
            </Button.Link>

            <Button.Link href="/supports" variant="outline">
                Supports
            </Button.Link>
        </div>
    );
}

export default function Jumbotron() {
    return (
        <header id="jumbotron" aria-placeholder="title-jumbotron" className="relative overflow-hidden">
            <div className="container grid grid-cols-3 gap-y-8 py-20">
                <div className={clsxm('col-span-3 flex flex-col gap-y-8', 'xl:col-span-2')}>
                    <div className="flex max-w-3xl flex-col gap-y-8">
                        <h1
                            id="title-jumbotron"
                            className={clsxm('text-center text-3xl font-extrabold tracking-tight text-slate-700', 'md:text-4xl lg:text-left')}
                        >
                            Hi, I&#39;m Fahmi Idris. A Software Engineer based in Bogor Regency, West Java, Indonesia.
                        </h1>

                        <div className="flex flex-col gap-y-4">
                            <p className={clsxm('text-center text-sm/6 text-slate-700', 'sm:text-base/7 lg:text-left')}>
                                Welcome to my digital garden, where I share valuable insights and knowledge about website development, empowering
                                developers to grow, while showcasing remarkable projects and curated code snippets I have created.
                            </p>
                        </div>
                    </div>

                    <HelloWorld />
                    <CallToAction />
                </div>

                <div className={clsxm('hidden', 'xl:block')}></div>
            </div>
        </header>
    );
}
