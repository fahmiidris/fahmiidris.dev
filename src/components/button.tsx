import * as React from 'react';

import Link, { TLinkProps } from '@/components/link';

import clsxm from '@/utils/clsxm';
import modify from '@/utils/modify';

import type { TModifyProps } from '@/types/modify.type';

type TButtonProps = {
    openNewWindow?: boolean;
} & React.ComponentPropsWithRef<'button'>;

type TButtonWithModify = TModifyProps<typeof variants>;

const variants = modify(
    [
        'inline-flex items-center justify-center text-sm font-medium border ease-in-out duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disable:opacity-75 disabled:pointer-events-none',
    ],
    {
        variants: {
            variant: {
                primary: ['border-transparent bg-primary-500 text-white', 'hover:bg-primary-400'],
                outline: ['border-secondary-200 text-secondary-700', 'hover:bg-secondary-50 hover:border-secondary-300'],
            },
            size: {
                xs: ['py-1.5 px-3 text-xs'],
                sm: ['py-2 px-4'],
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'sm',
        },
    }
);

const _Button = React.forwardRef<HTMLButtonElement, TButtonProps & TButtonWithModify>(function _Button(
    { type = 'button', size, variant, children, className, ...props },
    ref
) {
    return (
        <button {...{ type, ref }} className={clsxm(variants({ size, variant, className }))} {...props}>
            {children}
        </button>
    );
});

const _Link = React.forwardRef<HTMLAnchorElement, TLinkProps & TButtonWithModify>(function _Link(
    { href, size, variant, className, children, ...props },
    ref
) {
    return (
        <Link {...{ href, ref }} className={clsxm(variants({ size, variant, className }))} {...props}>
            {children}
        </Link>
    );
});

const Button = Object.assign(_Button, {
    Link: _Link,
});

export default Button;
