import * as React from 'react';
import { AcademicCapIcon, BadgeCheckIcon, ClockIcon } from '@heroicons/react/outline';

import { Section } from '@/components/section';
import { EducationCard, EducationType } from '@/components/experiences/education-card';

import DefaultLayout from '@/layouts/default-layout';

import type { NextPageWithLayoutType } from 'next';
import { sortDateDesc } from '@/utils/helpers';

const formalEducation: EducationType[] = [
    {
        title: "MTs. Al-Hidayah Tajur",
        major: "Haven't Take Course",
        date: {
            start: 1435683600000,
            end: 1525453200000,
        },
        href: "https://goo.gl/maps/E4WA97kJ5bPptrRB6",
    },
    {
        title: "SMK 1 Triple J Citeureup",
        major: "Software Engineering",
        date: {
            start: 1530378000000,
            end: 1619802000000,
        },
        href: "https://www.facebook.com/smk1triplejciteureup/",
    }
];

const nonFormalEducation: EducationType[] = [
    {
        title: "Jabar Coding Camp 2021",
        major: "Frontend Developer - React.js",
        date: {
            start: 1629824400000,
            end: 1648659600000,
        },
        href: "https://www.jabarcodingcamp.id",
    },
    {
        title: "PROA Digital Talent Scholarship 2022",
        major: "Android Developer - Kotlin",
        date: {
            start: 1652720400000,
        },
        href: "https://digitalent.kominfo.go.id",
    },
    {
        title: "IDCamp 2022",
        major: "Frontend Developer Learning Path",
        date: {
            start: 1653584400000,
        },
        href: "https://idcamp.ioh.co.id",
    },
];

const ExperiencesPage: NextPageWithLayoutType = () => {
    return (
        <article className="flex flex-col space-y-32 mb-20">
            <Section id="experiences" title="My Experiences - Work and Internship" description="My historical work experience, internship, etc." icon={ClockIcon} className="container relative">
                <div className="py-8">
                    <p className="text-sm font-semibold">Currently Under Development!</p>
                </div>
            </Section>

            <Section id="educations" title="My Educations" description="My educational history from junior high school to last education. - formal and non-formal education" icon={AcademicCapIcon} className="container relative">
                <article className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <section id="formal-educations">
                        <h2 className="text-sm font-semibold text-slate-700 dark:text-white mb-4">Formal Education</h2>
                        <ul className="flex flex-col space-y-4">
                            {formalEducation.sort((a, b) => sortDateDesc(a.date.start, b.date.start)).map((item, index) => (
                                <EducationCard key={index} {...item} />
                            ))}
                        </ul>
                    </section>

                    <section id="non-formal-educations">
                        <h2 className="text-sm font-semibold text-slate-700 dark:text-white mb-4">Non-Formal Education</h2>
                        <ul className="flex flex-col space-y-4">
                            {nonFormalEducation.sort((a, b) => sortDateDesc(a.date.start, b.date.start)).map((item, index) => (
                                <EducationCard key={index} {...item} />
                            ))}
                        </ul>
                    </section>
                </article>
            </Section>

            <Section id="certificates" title="My Certificates" description="Some of the certificates I got during my career in programming." icon={BadgeCheckIcon} className="container relative">
                <div className="py-8">
                    <p className="text-sm font-semibold">Currently Under Development!</p>
                </div>
            </Section>
        </article>
    );
};

ExperiencesPage.Props = {
    Layout: DefaultLayout,
    meta: {
        title: "My Experiences",
        description: "My historical experience, formal and non-formal education, big event, internship, etc.",
    },
};

export default ExperiencesPage;
