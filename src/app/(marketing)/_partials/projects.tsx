import * as React from 'react';

import Button from '@/components/button';
import Feature from '@/app/(marketing)/_components/feature';
import Cards from '@/app/(marketing)/projects/_components/cards';

import mdx from '@/utils/mdx';

import { GITHUB_URL } from '@/constants/urls';

export default async function Projects() {
    const projects = (await mdx('marketing', 'projects')).slice(0, 3);

    return (
        <Feature id="projects">
            <Feature.Header
                title="Projects"
                description="Explore some of the projects I've worked on. Some of them are open source, you can see the code and are free to do whatever you want with it."
            >
                Highlighted projects from practical results to real-world solutions.
            </Feature.Header>

            <Feature.Body>
                <Cards projects={projects} />
            </Feature.Body>

            <Feature.Footer>
                <Button.Link href="/projects" variant="outline">
                    Explore all projects
                </Button.Link>

                <Button.Link href={GITHUB_URL} variant="outline">
                    GitHub
                </Button.Link>
            </Feature.Footer>
        </Feature>
    );
}
