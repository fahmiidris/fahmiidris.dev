import * as React from 'react';

import type { TLayoutProps } from '@/types/layout.type';

type TWrapperProps = TLayoutProps<{
    slug: string;
}>;

export default async function Wrapper({ children }: TWrapperProps) {
    return <>{children}</>;
}
