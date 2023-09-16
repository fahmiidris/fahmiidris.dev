import * as React from 'react';

import clsxm from '@/utils/clsxm';

type TProseProps = React.PropsWithChildren<{
    className?: string;
}>;

export default function Prose({ className, children }: TProseProps) {
    return <div className={clsxm(className, 'prose prose-slate')}>{children}</div>;
}
