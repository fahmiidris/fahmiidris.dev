import * as React from 'react';

import clsxm from '@/utils/clsxm';

export type TLabelProps = React.ComponentPropsWithoutRef<'label'> & {
    value?: string;
};

export default function Label({ htmlFor, value, className, children, ...props }: TLabelProps) {
    return (
        <label {...{ htmlFor }} className={clsxm('block text-xs/6 font-medium text-slate-700', className)} {...props}>
            {value ? value : children}
        </label>
    );
}
