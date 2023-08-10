import * as React from 'react';

import Steps from '@/app/(marketing)/experiences/_components/steps';
import Jumbotron from '@/app/(marketing)/experiences/_partials/jumbotron';

import mdx, { getTags } from '@/utils/mdx';

export default async function ExperiencesPage() {
    const experiences = await mdx('marketing', 'experiences');
    const tags = getTags(experiences);

    return (
        <>
            <Jumbotron {...{ tags }} />

            <div className="container relative py-20">
                <Steps steps={experiences} />
            </div>
        </>
    );
}
