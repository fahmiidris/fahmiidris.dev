import * as React from 'react';

import { Header } from '@/components/home/header';
import { Summary } from '@/components/home/summary';
import { LatestArticles } from '@/components/home/latest-articles';
import { LatestProjects } from '@/components/home/latest-projects';
import { LatestSnippets } from '@/components/home/latest-snippets';
import { LatestExperiences } from '@/components/home/latest-experiences';

import { getArticlePreviews } from '@/services/article';
import { getProjectPreviews } from '@/services/project';
import { getSnippetPreviews } from '@/services/snippet';
import { getExperiencePreviews } from '@/services/experience';

import type { Project } from '@/types/project';
import type { NextPageWithLayout } from 'next';

const articlePreviews = getArticlePreviews();
const experiencePreviews = getExperiencePreviews();

const fahmiidrisDevProjectPreviews = getProjectPreviews.fahmiidrisDev();
const patunganDevProjectPreviews = getProjectPreviews.patunganDev();
const naqimartComProjectPreviews = getProjectPreviews.naqimartCom();
const randomProjectPreviews = getProjectPreviews.randomProjects();
const UIUXDesignProjectPreviews = getProjectPreviews.UIUXDesignProjects();
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
    'Random Projects': {
      projects: randomProjectPreviews.slice(0, 4),
      projectType: 'random',
    },
    'UI/UX Design': {
      projects: UIUXDesignProjectPreviews.slice(0, 4),
      projectType: 'ui-ux-design',
    },
  });

  return (
    <>
      <Header />

      <div className="space-y-36 overflow-hidden py-24">
        <Summary />
        {/* <LatestArticles previews={articlePreviews.slice(0, 3)} /> */}
        <LatestExperiences previews={experiencePreviews.slice(0, 2)} />
        <LatestProjects projects={projects} />
        {/* <LatestSnippets previews={snippetPreviews.slice(0, 3)} /> */}
      </div>
    </>
  );
};

HomePage.Props = {
  meta: {
    title: "Hi, I'm Fahmi Idris",
    description: 'Fahmi Idris Personal Portfolio Website, Article, Project Showcase, and My Experience History.',
  },
};

export default HomePage;
