import * as React from 'react';

import Button from '@/components/button';
import Feature from '@/app/(marketing)/_components/feature';
import EmptyState from '@/components/empty-state';

export default function Snippets() {
    return (
        <Feature id="snippets">
            <Feature.Header
                title="Snippets"
                description="I've learned a lot of things, but I also often forget a lot of things. Code snippets It can be helpful to record the exact same code in every projects."
            >
                Some collection of code snippets that I put for easy access, feel free to reuse!
            </Feature.Header>

            <Feature.Body>
                <EmptyState title="No snippets" description="There are no published snippets yet." />
            </Feature.Body>

            <Feature.Footer>
                <Button.Link href="#" variant="outline">
                    Explore all snippets
                </Button.Link>
            </Feature.Footer>
        </Feature>
    );
}
