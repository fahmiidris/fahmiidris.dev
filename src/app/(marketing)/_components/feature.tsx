import * as React from 'react';

import clsxm from '@/utils/clsxm';

type TFeatureProps = React.PropsWithChildren<{
    id: string;
}>;

type THeaderProps = React.PropsWithChildren<{
    title: string;
    description: string;
    maxWidth?: keyof typeof maxWidths;
}>;

type TBodyProps = React.PropsWithChildren<{
    className?: string;
}>;

type TFooterProps = React.PropsWithChildren<{
    className?: string;
}>;

const maxWidths = {
    xs: 'sm:max-w-xs',
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    '4xl': 'sm:max-w-4xl',
    '5xl': 'sm:max-w-5xl',
};

function _Feature({ id, children }: TFeatureProps) {
    return (
        <section {...{ id }} className="relative">
            {children}
        </section>
    );
}

function _Header({ title, description, maxWidth = '3xl', children }: THeaderProps) {
    const maxWidthClass = maxWidths[maxWidth];

    return (
        <div className="container flex flex-col gap-y-4">
            <div className={clsxm('max-w-3xl', maxWidthClass)}>
                <h2 className="text-base/7 font-semibold text-cyan-500">{title}</h2>
                <p className={clsxm('mt-4 text-3xl font-extrabold tracking-tight text-slate-700', 'sm:text-4xl')}>{children}</p>
            </div>

            <p className={clsxm('max-w-3xl text-sm/6 text-slate-700', 'sm:text-base/7')}>{description}</p>
        </div>
    );
}

function _Body({ className, children }: TBodyProps) {
    return <div className={clsxm('container pb-6 pt-4', className)}>{children}</div>;
}

function _Footer({ className, children }: TFooterProps) {
    return <div className={clsxm('container flex items-center gap-x-4', className)}>{children}</div>;
}

const Feature = Object.assign(_Feature, {
    Header: _Header,
    Body: _Body,
    Footer: _Footer,
});

export default Feature;
