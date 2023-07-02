import * as React from 'react';

type TRenderTagProps = {
    title: string;
};

export default function RenderTag({ title }: TRenderTagProps) {
    return (
        <div>
            <code>{`<${title} />`}</code>
        </div>
    );
}
