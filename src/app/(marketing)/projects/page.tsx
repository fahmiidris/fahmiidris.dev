import * as React from 'react';

import Cards from '@/app/(marketing)/projects/_components/cards';

import mdx from '@/utils/mdx';

export default async function ProjectsPage() {
    const projects = await mdx('marketing', 'projects');

    return (
        <div className="container relative py-20">
            <Cards projects={projects} />
        </div>
    );
}
