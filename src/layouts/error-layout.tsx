import * as React from 'react';

import type { NextLayoutType } from 'next';

const ErrorLayout: NextLayoutType = ({ children }) => {
    return <main className="flex h-screen items-center justify-center">{children}</main>;
};

export default ErrorLayout;
