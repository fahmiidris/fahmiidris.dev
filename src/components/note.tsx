import * as React from 'react';

import { InformationCircleIcon } from '@heroicons/react/24/outline';

type TNoteProps = React.PropsWithChildren;

export default function Note({ children }: TNoteProps) {
    return (
        <div className="my-6 flex gap-2.5 border border-cyan-500/20 bg-cyan-50/50 p-4 text-base/6 text-cyan-800">
            <InformationCircleIcon className="mt-px h-5 w-5 flex-none stroke-cyan-500" />
            <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
        </div>
    );
}
