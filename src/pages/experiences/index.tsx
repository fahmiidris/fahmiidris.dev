import * as React from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { AcademicCapIcon, BadgeCheckIcon, ClockIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { EducationCard } from '@/components/experiences/education-card';
import { CertificateCard } from '@/components/experiences/certificate-card';
import { ExperienceSteps } from '@/components/experiences/experience-steps';
import { certificates, formalEducation, nonFormalEducation } from '@/components/experiences/educations-certificates';

import DefaultLayout from '@/layouts/default-layout';

import { sortDateDesc } from '@/utils/helpers';
import { getExperiencePreviews } from '@/services/experiences';

import type { NextPageWithLayoutType } from 'next';

const experiences = getExperiencePreviews();

const ExperiencesPage: NextPageWithLayoutType = () => {
    return (
        <article className="flex flex-col space-y-32 mb-20">
            <Section id="experiences" title="My Experiences - Work and Internship" description="My historical work experience, internship, etc." icon={ClockIcon} className="container relative">
                <div className="py-8">
                    <ExperienceSteps steps={experiences} />
                </div>
            </Section>

            <Section id="educations" title="My Educations" description="My educational history from junior high school to last education. - formal and non-formal education." icon={AcademicCapIcon} className="container relative">
                <div className="py-8">
                    <article className="flex flex-col space-y-8">
                        <section id="formal-educations">
                            <div>
                                <h2 className="text-sm font-semibold text-slate-800 dark:text-white">
                                    Formal Educations
                                </h2>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6">
                                    Overall, education at school or campus.
                                </p>
                            </div>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {formalEducation.slice(0, 2).sort((a, b) => sortDateDesc(a.date.start, b.date.start)).map((item, index) => (
                                    <EducationCard key={index} {...item} isNew={index < 1} />
                                ))}
                            </ul>
                        </section>

                        <section id="non-formal-educations">
                            <div>
                                <h2 className="text-sm font-semibold text-slate-800 dark:text-white">
                                    Non-Formal Educations
                                </h2>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6">
                                    Education outside school or campus, such as bootcamp, online learning scholarships, etc.
                                </p>
                            </div>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {nonFormalEducation.slice(0, 2).sort((a, b) => sortDateDesc(a.date.start, b.date.start)).map((item, index) => (
                                    <EducationCard key={index} {...item} isNew={index < 1} />
                                ))}
                            </ul>
                        </section>
                    </article>

                    <div className="pt-10">
                        <Link href="/experiences/educations" className="inline-flex items-center space-x-2 rounded-md border border-slate-300 bg-white py-2 pl-4 pr-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700">
                            <span>View More</span>
                            <ArrowSmRightIcon className='w-5 h-5' />
                        </Link>
                    </div>
                </div>
            </Section>

            <Section id="certificates" title="My Certificates" description="Some of the certificates I got during my career in programming." icon={BadgeCheckIcon} className="container relative">
                <div className="py-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.sort((a, b) => sortDateDesc(a.date.start, b.date.start)).slice(0, 3).map((item, index) => (
                            <CertificateCard key={index} {...item} isNew={index <= 1} />
                        ))}
                    </ul>

                    <div className="pt-10">
                        <Link href="/experiences/certificates" className="inline-flex items-center space-x-2 rounded-md border border-slate-300 bg-white py-2 pl-4 pr-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700">
                            <span>View More</span>
                            <ArrowSmRightIcon className='w-5 h-5' />
                        </Link>
                    </div>
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
