import * as React from 'react';

type TEmptyStateProps = {
    title: string;
    description: string;
};

export default function EmptyState({ title, description }: TEmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-y-2 border border-slate-200 py-20">
            <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
}
