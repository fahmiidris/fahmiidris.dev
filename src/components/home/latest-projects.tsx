import * as React from 'react';
import clsx from 'clsx';
import { Tab } from '@headlessui/react';

import { Section } from '@/components/section';
import { ProjectCard, ProjectCardGroup } from '@/components/projects/project-card';

import type { Project } from '@/types/project';

type LatestProjectsProps = {
  projects: Project.Latest;
};

export const LatestProjects = ({ projects }: LatestProjectsProps) => {
  return (
    <Section
      id="latest-projects"
      title="Latest Projects"
      subtitle="My project history, ranging from practice to serious projects."
      description="My project may not be anything extraordinary, but I'm proud to be able to make this. I will continue to grow! Make something bigger! and destroy the world! Hahaha. just kidding."
      more={{
        href: '/projects',
        text: 'Explore all projects',
      }}
    >
      <Tab.Group as="div">
        <div className="border-b border-slate-200">
          <Tab.List className="-mb-px flex space-x-8 overflow-auto">
            {Object.keys(projects).map((category) => (
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
          {Object.values(projects).map((values, idx) => (
            <Tab.Panel key={idx} className="focus:outline-none">
              <div className="py-4">
                <ProjectCardGroup>
                  {values.projects.map((preview, index) => (
                    <ProjectCard key={index} projectType={values.projectType} {...preview} />
                  ))}
                </ProjectCardGroup>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Section>
  );
};
