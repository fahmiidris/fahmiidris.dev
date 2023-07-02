import * as React from 'react';

import Button from '@/components/button';
import Feature from '@/app/(marketing)/_components/feature';
import EmptyState from '@/components/empty-state';

export default function Experiences() {
    return (
        <Feature id="experiences">
            <Feature.Header
                title="Experiences"
                description="This is a series of historical experiences that I have gone through until now. these experiences that help me keep growing over time."
                maxWidth="2xl"
            >
                The experiences I got during my career as a software engineer.
            </Feature.Header>

            <Feature.Body>
                <EmptyState title="No experiences" description="There are no published experiences yet." />
            </Feature.Body>

            <Feature.Footer>
                <Button.Link href="#" variant="outline">
                    Explore all experiences
                </Button.Link>
            </Feature.Footer>
        </Feature>
    );
}
