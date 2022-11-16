import * as React from 'react';

import { Alert } from '@/components/alert';
import { Section } from '@/components/section';
import { ExperienceSteps } from '@/components/experiences/experience-steps';

import type { Experience } from '@/types/experience';

type LatestExperiencesProps = {
  previews: Experience.Preview[];
};

export const LatestExperiences = ({ previews }: LatestExperiencesProps) => {
  return (
    <Section
      id="latest-experiences"
      title="Latest Experiences"
      subtitle="My work experience, internship, bootcamp training, etc."
      description="My career journey in the programming world started from 2022 to be precise in February 2022, by participating in the Internship program at one of the startups in Bandung, West Java."
      more={{
        href: '/experiences',
        text: 'Explore all experiences',
      }}
    >
      {previews.length > 0 ? <ExperienceSteps steps={previews} /> : <Alert message="Experiences hasn't been uploaded yet." />}
    </Section>
  );
};
