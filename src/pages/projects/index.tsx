import * as React from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline';

import { Section } from '@/components/section';

import DefaultLayout from '@/layouts/default-layout';

import type { NextPageWithLayoutType } from 'next';
import { Products } from '@/components/projects/products';

const ProjectsPage: NextPageWithLayoutType = () => {
    return (
        <Section id="projects" title="My Projects" description="My project history, starting from personal projects, during internships or work, etc." icon={DesktopComputerIcon} className="container relative mb-20">
            <article className="py-8">
                <Products />
            </article>
        </Section>
    );
};

ProjectsPage.Props = {
    Layout: DefaultLayout,
    meta: {
        title: "Projects",
        description: "My project history, starting from personal projects, during internships or work, etc.",
    },
};

export default ProjectsPage;
