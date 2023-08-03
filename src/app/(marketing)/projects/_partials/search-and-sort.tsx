import * as React from 'react';

import Input from '@/components/forms/input';

export default function SearchAndSort() {
    return (
        <div className="container grid grid-cols-3 gap-8 pt-12">
            <div>
                <Input name="search" placeholder="Search" />
            </div>
        </div>
    );
}
