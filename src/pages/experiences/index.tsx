import * as React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineHistory } from 'react-icons/md';

import { MainLayout } from '@/components/templates/main-layout';
import { HeadingSection } from '@/components/molecules/fi-heading-section/heading-section';

import { experiences } from '@/data/experiences.data';

import type { TNextPageWithLayout } from '@/types/app.type';
import { ExperienceCard } from '@/components/pages/experiences/fi-experience-card/experience-card';

const ExperiencesPage: TNextPageWithLayout = () => {
  return (
    <section id="experiences">
      <div className="container pt-[110px]">
        <HeadingSection
          title="My Experiences"
          description="My historical experience, non-formal education, etc."
          icon={MdOutlineHistory}
        />
        <div className="pt-8">
          <motion.ul
            className="grid grid-cols-12 gap-4"
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {experiences
              .sort((a, b) => b.id - a.id)
              .map((experience, idx) => (
                <ExperienceCard key={idx} {...experience} />
              ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

ExperiencesPage.Props = {
  Layout: MainLayout,
  meta: {
    title: 'My Experiences',
    description: 'My historical experience, non-formal education, big event, internship, etc.',
  },
};

export default ExperiencesPage;
