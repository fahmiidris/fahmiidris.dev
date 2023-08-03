import * as React from 'react';

import Button from '@/components/button';
import Feature from '@/app/(marketing)/_components/feature';
import EmptyState from '@/components/empty-state';

export default function Experiences() {
    return (
        <Feature id="experiences">
            <Feature.Header
                title="Experiences"
                description="These are a multitude of historical experiences that I have gone through until now, and they have significantly contributed to my ongoing personal growth."
            >
                My career as a software engineer has been enriched with invaluable experiences.
            </Feature.Header>

            <Feature.Body>
                <EmptyState title="No experiences" description="There are no published experiences yet." />
            </Feature.Body>

            <Feature.Footer>
                <Button.Link href="#" variant="outline">
                    Explore all experiences
                </Button.Link>

                <Button.Link href="#" variant="outline">
                    Download Resume
                </Button.Link>
            </Feature.Footer>
        </Feature>
    );
}
