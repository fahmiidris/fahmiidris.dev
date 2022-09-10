import * as React from 'react';
import clsx from 'clsx';
import { Tab } from '@headlessui/react';

import { Section } from '@/components/section';
import { EducationSteps } from '@/components/experiences/education-steps';
import { ExperienceSteps } from '@/components/experiences/experience-steps';
import { CertificateCard } from '@/components/experiences/certificate-card';

import { formalEducation, nonFormalEducation, certificates } from '@/resources/educations-certificates';

import { getExperiencePreviews } from '@/services/experience';

import { sortDateDesc } from '@/utils/helpers';

import type { NextPageWithLayout } from 'next';

const experiencePreviews = getExperiencePreviews();

const ExperiencesPage: NextPageWithLayout = () => {
  const [educations] = React.useState({
    'Formal Education': formalEducation,
    'Non-Formal Education': nonFormalEducation,
  });

  return (
    <article className="space-y-36 overflow-hidden py-8">
      <Section
        id="experiences"
        title="My Experiences - Work and Internship"
        subtitle="My work experience, internship, bootcamp training, etc."
        description="My career journey in the programming world started from 2022 to be precise in February 2022, by participating in the Internship program at one of the startups in Bandung, West Java."
        maxWidthDescription="max-w-3xl"
      >
        <ExperienceSteps steps={experiencePreviews} />
      </Section>

      <Section
        id="educations"
        title="My Educations - Formal and Non-Formal"
        subtitle="My educational history from junior high school to last education."
        description="I purposely put Junior High School on the list, I think my first step into programming world started from there. I started loving computers starting in 7th grade."
        maxWidthDescription="max-w-3xl"
        // more={{
        //   href: '/experiences/educations',
        //   text: 'Explore all educations',
        // }}
      >
        <Tab.Group>
          <div className="border-b border-slate-200">
            <Tab.List className="-mb-px flex space-x-8">
              {Object.keys(educations).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    clsx(
                      'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-semibold focus:outline-none',
                      selected
                        ? 'border-cyan-400 text-cyan-400'
                        : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="mt-2">
            {Object.values(educations).map((values, idx) => (
              <Tab.Panel key={idx} className="focus:outline-none">
                <div className="py-4">
                  <EducationSteps steps={values} />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Section>

      <Section
        id="certificates"
        title="My Certificates"
        subtitle="Some of the certificates I got during my career in programming."
        description="Actually this certificate is meaningless, this is not a benchmark for my ability (in my opinion). but I think this certificate is a sign that I have gone down this path. well, so as not to get lost later."
        maxWidthDescription="max-w-3xl"
        more={{
          href: '/experiences/certificates',
          text: 'Explore all certificates',
        }}
      >
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates
            .sort((a, b) => sortDateDesc(a.date.start, b.date.start))
            .slice(0, 3)
            .map((certificate, index) => (
              <CertificateCard key={index} {...certificate} />
            ))}
        </ul>
      </Section>
    </article>
  );
};

ExperiencesPage.Props = {
  meta: {
    title: 'My Experiences',
    description: 'My career journey in the programming world started from 2022.',
  },
};

export default ExperiencesPage;
