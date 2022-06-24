import * as React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { AcademicCapIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { EducationSteps } from '@/components/experiences/education-steps';
import { formalEducation, nonFormalEducation } from '@/components/experiences/educations-certificates';

import DefaultLayout from '@/layouts/default-layout';

import type { NextPageWithLayoutType } from 'next';

const EducationsPage: NextPageWithLayoutType = () => {
    return (
        <>
            <div className="container flex items-center space-x-2">
                <ChevronLeftIcon className="h-4 w-4 text-slate-800 dark:text-white" />
                <Link href="/experiences" className="animated-underline text-sm font-semibold text-slate-800 hover:text-slate-900 dark:text-white">
                    Go Back
                </Link>
            </div>

            <Section id="educations" title="My Educations" description="My educational history from junior high school to last education. - formal and non-formal education." icon={AcademicCapIcon} className="container relative mb-20 mt-6">
                <div className="py-8">
                    <article className="flex flex-col space-y-32">
                        <section id="formal-educations">
                            <div>
                                <h2 className="text-sm font-semibold text-slate-800 dark:text-white">
                                    Formal Educations
                                </h2>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6">
                                    Overall, education at school or campus.
                                </p>
                            </div>

                            <EducationSteps steps={formalEducation} />
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

                            <EducationSteps steps={nonFormalEducation} />
                        </section>
                    </article>
                </div>
            </Section>
        </>
    );
};

EducationsPage.Props = {
    Layout: DefaultLayout,
    meta: {
        title: "My Educations",
        description: "",
    },
};

export default EducationsPage;
