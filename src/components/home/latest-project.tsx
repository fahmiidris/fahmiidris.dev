import * as React from 'react';
import clsx from 'clsx';
import { Tab } from '@headlessui/react';
import { DesktopComputerIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { NoContent } from '@/components/no-content';
import { ProjectCard } from '@/components/projects/project-card';
import { HeadingSection } from '@/components/heading-section';

import { kloningan, random, TProject } from '@/components/projects/data';

type Tprojects = {
  'Kloningan Projects': TProject[];
  'Random Projects': TProject[];
};

export const LatestProject = (): JSX.Element => {
  const [projects] = React.useState<Tprojects>({
    'Kloningan Projects': kloningan.sort((a, b) => b.id - a.id).slice(0, 3),
    'Random Projects': random.sort((a, b) => b.id - a.id).slice(0, 3),
  });

  return (
    <section id="latest-experience" className="relative pt-[80px]">
      <div className="container">
        <HeadingSection
          title="Featured Projects"
          description="My project history, starting from personal projects, during internships or work, etc."
          icon={DesktopComputerIcon}
        />
      </div>
      <div className="container pt-8">
        {kloningan.length < 1 && random.length < 1 ? (
          <NoContent text="No Content Here!" />
        ) : (
          <Tab.Group>
            <Tab.List className="flex space-x-3 py-4 text-sm font-medium">
              {Object.keys(projects).map((project) => (
                <Tab
                  key={project}
                  className={({ selected }) =>
                    clsx(
                      'block rounded-lg border px-3 py-2',
                      selected
                        ? 'border-transparent bg-slate-800 text-white'
                        : 'border-slate-200 bg-slate-50 dark:border-transparent dark:bg-transparent'
                    )
                  }
                >
                  {project}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="pt-4">
              {Object.values(projects).map((project, idx) => (
                <Tab.Panel key={idx}>
                  <ul className="grid grid-cols-6 gap-8">
                    {project.length < 1 ? (
                      <NoContent className="col-span-6" text="No Content Here!" />
                    ) : (
                      project.map((item) => (
                        <ProjectCard
                          key={item.id}
                          {...item}
                          className="col-span-6 sm:col-span-3 lg:col-span-2"
                        />
                      ))
                    )}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        )}
        <div className="py-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 rounded-lg border border-slate-300 bg-slate-100 py-2 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};
