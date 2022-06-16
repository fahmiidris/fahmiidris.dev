import * as React from 'react';
import { AcademicCapIcon, BadgeCheckIcon, ClockIcon } from '@heroicons/react/outline';

import { Section } from '@/components/section';
import { EducationCard } from '@/components/experiences/education-card';
import { CertificateCard } from '@/components/experiences/certificate-card';
import { certificates, formalEducation, nonFormalEducation } from '@/components/experiences/educations-certificates';

import DefaultLayout from '@/layouts/default-layout';

import { sortDateDesc } from '@/utils/helpers';

import type { NextPageWithLayoutType } from 'next';

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
                                <EducationCard key={index} {...item} isNew={index < 1} />
                            ))}
                        </ul>
                    </section>

                    <section id="non-formal-educations">
                        <h2 className="text-sm font-semibold text-slate-700 dark:text-white mb-4">Non-Formal Education</h2>
                        <ul className="flex flex-col space-y-4">
                            {nonFormalEducation.sort((a, b) => sortDateDesc(a.date.start, b.date.start)).map((item, index) => (
                                <EducationCard key={index} {...item} isNew={index < 1} />
                            ))}
                        </ul>
                    </section>
                </article>
            </Section>

            <Section id="certificates" title="My Certificates" description="Some of the certificates I got during my career in programming." icon={BadgeCheckIcon} className="container relative">
                <div className="py-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.sort((a, b) => sortDateDesc(a.date.start, b.date.start)).map((item, index) => (
                            <CertificateCard key={index} {...item} isNew={index <= 1} />
                        ))}
                    </ul>
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
