import * as React from 'react';
import Image from 'next/image';
import { AcademicCapIcon, BadgeCheckIcon, ClockIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Section } from '@/components/section';

import DefaultLayout from '@/layouts/default-layout';

import { formatDate, sortDateDesc } from '@/utils/helpers';

import type { NextPageWithLayoutType } from 'next';

type EducationType = {
    title: string;
    major: string;
    date: {
        start: number;
        end: number;
    },
    href: string;
}

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
];

const ExperiencesPage: NextPageWithLayoutType = () => {
    return (
        <article className="flex flex-col space-y-32 mb-20">
            <Section id="experiences" title="My Experiences" description="My historical work experience, big event, internship, etc." icon={ClockIcon} className="container relative">
                <div className="py-8">
                    <p className="text-sm font-semibold">Currently Under Development!</p>
                </div>
            </Section>

            <Section id="education" title="My Education" description="My educational history from junior high school to last education. - formal and non-formal education" icon={AcademicCapIcon} className="container relative">
                <div className="py-8">
                    <p className="text-sm font-semibold">Currently Under Development!</p>
                </div>
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
