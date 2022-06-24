import * as React from 'react';
import { BadgeCheckIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { certificates } from '@/components/experiences/educations-certificates';
import { CertificateCard } from '@/components/experiences/certificate-card';

import DefaultLayout from '@/layouts/default-layout';

import { sortDateDesc } from '@/utils/helpers';

import type { NextPageWithLayoutType } from 'next';

const CertificationsPage: NextPageWithLayoutType = () => {
    return (
        <>
            <div className="container flex items-center space-x-2">
                <ChevronLeftIcon className="h-4 w-4 text-slate-800 dark:text-white" />
                <Link href="/experiences" className="animated-underline text-sm font-semibold text-slate-800 hover:text-slate-900 dark:text-white">
                    Go Back
                </Link>
            </div>

            <Section id="educations" title="My Certifications" description="Some of the certificates I got during my career in programming." icon={BadgeCheckIcon} className="container relative mb-20 mt-6">
                <div className="py-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.sort((a, b) => sortDateDesc(a.date.start, b.date.start)).map((item, index) => (
                            <CertificateCard key={index} {...item} isNew={index <= 1} />
                        ))}
                    </ul>
                </div>
            </Section>
        </>
    );
};

CertificationsPage.Props = {
    Layout: DefaultLayout,
    meta: {
        title: "My Certifications",
        description: "",
    },
};

export default CertificationsPage;
