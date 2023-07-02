import * as React from 'react';

import Button from '@/components/button';
import Feature from '@/app/(marketing)/_components/feature';
import EmptyState from '@/components/empty-state';

export default function Projects() {
    return (
        <Feature id="projects">
            <Feature.Header
                title="Projects"
                description="A collection of innovative projects featuring practical results and real-world solutions. Prepare to be inspired by the intersection of creativity and functionality!"
            >
                Highlighted projects from practical results to real-world solutions.
            </Feature.Header>

            <Feature.Body>
                <EmptyState title="No projects" description="There are no published projects yet." />
            </Feature.Body>

            <Feature.Footer>
                <Button.Link href="#" variant="outline">
                    Explore all projects
                </Button.Link>

                <Button.Link href="#" variant="outline">
                    GitHub
                </Button.Link>
            </Feature.Footer>
        </Feature>
    );
}
