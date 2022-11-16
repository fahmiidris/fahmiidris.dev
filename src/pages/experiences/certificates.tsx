import * as React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { CertificateCard } from '@/components/experiences/certificate-card';

import { certificates } from '@/resources/educations-certificates';

import { sortDateDesc } from '@/utils/helpers';

import type { NextPageWithLayout } from 'next';

const CertificatesPage: NextPageWithLayout = () => {
  return (
    <div className="py-6">
      <div className="container flex items-center space-x-2 pb-1">
        <Link href="/experiences" className="group flex items-center text-sm font-semibold leading-6 text-slate-800 hover:text-slate-900">
          <ChevronLeftIcon className="mr-2 h-5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600" />
          Go back
        </Link>
      </div>

      <Section
        id="certificates"
        title="My Certificates"
        subtitle="Some of the certificates I got during my career in programming."
        description="Actually this certificate is meaningless, this is not a benchmark for my ability (in my opinion). but I think this certificate is a sign that I have gone down this path. well, so as not to get lost later."
        maxWidthDescription="max-w-3xl"
      >
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates
            .sort((a, b) => sortDateDesc(a.date.start, b.date.start))
            .map((certificate, index) => (
              <CertificateCard key={index} {...certificate} />
            ))}
        </ul>
      </Section>
    </div>
  );
};

CertificatesPage.Props = {
  meta: {
    title: 'My Certifications',
    description: 'Some of the certificates I got during my career in programming.',
  },
};

export default CertificatesPage;
