import * as React from 'react';

import Steps from '@/app/(marketing)/experiences/_components/steps';
import Jumbotron from '@/app/(marketing)/_components/jumbotron';

import mdx, { getTags } from '@/utils/mdx';

export default async function ExperiencesPage() {
    const experiences = await mdx('marketing', 'experiences');
    const tags = getTags(experiences);

    return (
        <>
            <Jumbotron
                tags={tags}
                title="Experiences"
                subtitle="My career as a software engineer has been enriched with invaluable experiences."
                description="These are a multitude of historical experiences that I have gone through until now, and they have significantly contributed to my ongoing personal growth."
            />

            <div className="container relative py-20">
                <Steps steps={experiences} />
            </div>
        </>
    );
}
