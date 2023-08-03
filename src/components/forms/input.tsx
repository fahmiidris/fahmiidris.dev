import * as React from 'react';

import Label from '@/components/forms/label';

import clsxm from '@/utils/clsxm';

type TInputProps = React.ComponentPropsWithRef<'input'> & {
    label?: string;
    helperText?: string;
};

const _Input = React.forwardRef<HTMLInputElement, TInputProps>(function _Input(
    { id, label, helperText, type = 'text', placeholder = 'Enter input here', className, ...props },
    ref
) {
    const hasLabel = !!label;
    const hasHelperText = !!helperText;

    return (
        <div>
            {hasLabel ? (
                <Label htmlFor={id} className="mb-2">
                    {label}
                </Label>
            ) : null}

            <div>
                <input
                    className={clsxm(
                        'block w-full border border-slate-200 py-1.5 text-sm/6 text-slate-700 outline-none duration-200 ease-in-out',
                        'placeholder:text-slate-400 focus:border-slate-200 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2',
                        className
                    )}
                    {...{ type, id, placeholder, ref }}
                    {...props}
                />
            </div>

            {hasHelperText ? (
                <p className="mt-2 text-sm" id="email-description">
                    {helperText}
                </p>
            ) : null}
        </div>
    );
});

const Input = Object.assign(_Input, {});

export default Input;
