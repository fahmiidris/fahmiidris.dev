import * as React from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline';

import { Section } from '@/components/section';
import { Products } from '@/components/projects/products';

import DefaultLayout from '@/layouts/default-layout';

import type { NextPageWithLayoutType } from 'next';

const ProjectsPage: NextPageWithLayoutType = () => {
    return (
        <Section id="projects" title="My Projects" description="My project history, starting from personal projects, during internships or work, etc." icon={DesktopComputerIcon} className="container relative mb-20">
            <article className="py-8">
                <Products />
            </article>

            <article className="flex flex-col space-y-32">
                <Section id="naqimart" title="www.naqimart.com" description="Smart shop for you, easier shopping with naqimart.">
                    <div className="pt-8">
                        <p className="text-sm font-semibold">Currently Under Development!</p>
                    </div>
                </Section>

                <Section id="kloningan" title="www.kloningan.com" description="Start by imitating the existing one, then create a better one.">
                    <div className="pt-8">
                        <p className="text-sm font-semibold">Currently Under Development!</p>
                    </div>
                </Section>

                <Section id="random-projects" title="Personal / Random Projects" description="Crazy things sometimes start with randomness.">
                    <div className="pt-8">
                        <p className="text-sm font-semibold">Currently Under Development!</p>
                    </div>
                </Section>

                <Section id="ui-ux" title="Fahmi Idris with UI/UX Design" description="I think a Frontend Engineer would be very good if he has skills in UI/UX Design.">
                    <div className="pt-8">
                        <p className="text-sm font-semibold">Currently Under Development!</p>
                    </div>
                </Section>
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
