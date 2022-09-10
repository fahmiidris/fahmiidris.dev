import * as React from 'react';
import { ArrowSmLeftIcon } from '@heroicons/react/solid';

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
        <Link
          href="/experiences"
          className="inline-flex items-center space-x-2 rounded-md border border-slate-200 bg-white py-2 pr-4 pl-3 text-sm font-semibold text-slate-800 hover:bg-slate-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        >
          <ArrowSmLeftIcon className="h-5 w-5" />
          <span>Go Back</span>
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
