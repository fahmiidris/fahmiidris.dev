import * as React from 'react';

import clsxm from '@/utils/clsxm';

type TStatusProps = {
    message: string;
};

export default function Status({ message }: TStatusProps) {
    return (
        <div className=" relative flex items-center justify-center border-y border-slate-200 py-4">
            <div className="container flex items-center justify-center">
                <p className={clsxm('text-sm/6 text-slate-700', 'sm:text-base/7')}>{message}</p>
            </div>
        </div>
    );
}
