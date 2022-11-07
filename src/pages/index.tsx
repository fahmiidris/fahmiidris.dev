import * as React from 'react';

import { Header } from '@/components/home/header';
import { Summary } from '@/components/home/summary';
import { LatestBlogs } from '@/components/home/latest-blogs';
import { LatestProjects } from '@/components/home/latest-projects';
import { LatestSnippets } from '@/components/home/latest-snippets';
import { LatestExperiences } from '@/components/home/latest-experiences';

import { getBlogPreviews } from '@/services/blog';
import { getProjectPreviews } from '@/services/project';
import { getSnippetPreviews } from '@/services/snippet';
import { getExperiencePreviews } from '@/services/experience';

import type { Project } from '@/types/project';
import type { NextPageWithLayout } from 'next';

const blogPreviews = getBlogPreviews();
const experiencePreviews = getExperiencePreviews();

const fahmiidrisDevProjectPreviews = getProjectPreviews.fahmiidrisDev();
const patunganDevProjectPreviews = getProjectPreviews.patunganDev();
const naqimartComProjectPreviews = getProjectPreviews.naqimartCom();
const kloninganComProjectPreviews = getProjectPreviews.kloninganCom();
const randomProjectPreviews = getProjectPreviews.randomProjects();
const snippetPreviews = getSnippetPreviews();

const HomePage: NextPageWithLayout = () => {
  const [projects] = React.useState<Project.Latest>({
    'www.fahmiidris.dev': {
      projects: fahmiidrisDevProjectPreviews.slice(0, 4),
      projectType: 'fahmiidris-dev',
    },
    'www.patungan.dev': {
      projects: patunganDevProjectPreviews.slice(0, 4),
      projectType: 'patungan-dev',
    },
    'www.naqimart.com': {
      projects: naqimartComProjectPreviews.slice(0, 4),
      projectType: 'naqimart-com',
    },
    'www.kloningan.com': {
      projects: kloninganComProjectPreviews.slice(0, 4),
      projectType: 'kloningan-com',
    },
    'Random Projects': {
      projects: randomProjectPreviews.slice(0, 4),
      projectType: 'random',
    },
    'UI/UX Design': {
      projects: [],
      projectType: 'ui-ux-design',
    },
  });

  return (
    <>
      <Header />

      <div className="space-y-36 overflow-hidden py-24">
        <Summary />
        <LatestBlogs previews={blogPreviews.slice(0, 3)} />
        <LatestExperiences previews={experiencePreviews.slice(0, 2)} />
        <LatestProjects projects={projects} />
        <LatestSnippets previews={snippetPreviews.slice(0, 3)} />
      </div>
    </>
  );
};

HomePage.Props = {
  meta: {
    title: "Hi, I'm Fahmi Idris",
    description: 'Fahmi Idris Personal Portfolio Website, Blog, Project Showcase, and My Experience History.',
  },
};

export default HomePage;
