import * as React from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { Products } from '@/components/projects/products';

import DefaultLayout from '@/layouts/default-layout';

import GitHubIcon from '@/images/icons/github.svg';

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

                    <div className="pt-8">
                        <Link href="https://github.com/naqimart" openNewTab={true} className="group inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold">
                            <GitHubIcon className="h-5 w-5" />
                            <span className="group-hover:text-slate-800 dark:group-hover:text-white">GitHub</span>
                        </Link>
                    </div>
                </Section>

                <Section id="kloningan" title="www.kloningan.com" description="Start by imitating the existing one, then create a better one.">
                    <div className="pt-8">
                        <p className="text-sm font-semibold">Currently Under Development!</p>
                    </div>

                    <div className="pt-8">
                        <Link href="https://github.com/kloningan" openNewTab={true} className="group inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold">
                            <GitHubIcon className="h-5 w-5" />
                            <span className="group-hover:text-slate-800 dark:group-hover:text-white">GitHub</span>
                        </Link>
                    </div>
                </Section>

                <Section id="random-projects" title="Personal / Random Projects" description="Crazy things sometimes start with randomness.">
                    <div className="pt-8">
                        <p className="text-sm font-semibold">Currently Under Development!</p>
                    </div>

                    <div className="pt-8">
                        <Link href="https://github.com/fahmiidris-labs" openNewTab={true} className="group inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold">
                            <GitHubIcon className="h-5 w-5" />
                            <span className="group-hover:text-slate-800 dark:group-hover:text-white">GitHub</span>
                        </Link>
                    </div>
                </Section>

                <Section id="ui-ux" title="Fahmi Idris with UI/UX Design" description="I think a Frontend Engineer would be very good if he has skills in UI/UX Design.">
                    <div className="pt-8">
                        <p className="text-sm font-semibold">Currently Under Development!</p>
                    </div>

                    <div className="pt-8">
                        <ul className="flex flex-wrap items-center gap-2">
                            {[
                                {
                                    title: "Dribbble",
                                    href: "https://dribbble.com/_fahmiidris",
                                    icon: require("@/images/icons/dribbble.svg").default
                                },
                                {
                                    title: "Behance",
                                    href: "https://www.behance.net/_fahmiidris",
                                    icon: require("@/images/icons/behance.svg").default
                                },
                                {
                                    title: "Figma",
                                    href: "https://figma.com/@fahmiidris",
                                    icon: require("@/images/icons/figma.svg").default
                                },
                            ].map(({ icon: Icon, ...item }) => (
                                <li key={item.title}>
                                    <Link href={item.href} openNewTab={true} className="group inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold">
                                        <Icon className="h-5 w-5" />
                                        <span className="group-hover:text-slate-800 dark:group-hover:text-white">{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
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
