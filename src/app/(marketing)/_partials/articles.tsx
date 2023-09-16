import * as React from 'react';

import Button from '@/components/button';
import Feature from '@/app/(marketing)/_components/feature';
import EmptyState from '@/components/empty-state';

export default function Articles() {
    return (
        <Feature id="articles">
            <Feature.Header
                title="Articles"
                description="Sometimes I want to write something freely without rules and limitations. therefore, I created this articles and these are the articles I have written so far."
            >
                Stories, random thoughts, and tutorials about software development.
            </Feature.Header>

            <Feature.Body>
                <EmptyState title="No articles" description="There are no published articles yet." />
            </Feature.Body>

            <Feature.Footer>
                <Button.Link href="#" variant="outline">
                    Explore all articles
                </Button.Link>
            </Feature.Footer>
        </Feature>
    );
}
