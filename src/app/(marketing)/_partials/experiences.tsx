import * as React from 'react';

import Steps from '@/app/(marketing)/experiences/_components/steps';
import Button from '@/components/button';
import Feature from '@/app/(marketing)/_components/feature';

import mdx from '@/utils/mdx';

export default async function Experiences() {
    const experiences = (await mdx('marketing', 'experiences')).slice(0, 3);

    return (
        <Feature id="experiences">
            <Feature.Header
                title="Experiences"
                description="These are a multitude of historical experiences that I have gone through until now, and they have significantly contributed to my ongoing personal growth."
            >
                My career as a software engineer has been enriched with invaluable experiences.
            </Feature.Header>

            <Feature.Body className="pt-8">
                <Steps steps={experiences} isLatest={true} />
            </Feature.Body>

            <Feature.Footer>
                <Button.Link href="/experiences" variant="outline">
                    Explore all experiences
                </Button.Link>

                <Button.Link href="/resume" variant="outline">
                    Resume
                </Button.Link>
            </Feature.Footer>
        </Feature>
    );
}
