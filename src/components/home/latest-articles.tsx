import * as React from 'react';

import { Alert } from '@/components/alert';
import { Section } from '@/components/section';
import { ArticleCard } from '@/components/articles/article-card';

import type { Article } from '@/types/article';

type LatestArticlesProps = {
  previews: Article.Preview[];
};

export const LatestArticles = ({ previews }: LatestArticlesProps) => {
  return (
    <Section
      id="latest-articles"
      title="Latest Article"
      subtitle="Hi gaes! I have a new story for you! Happy reading!"
      description="Some personal opinions on technology and my random thoughts. Sometimes, it contains stories about feelings."
      more={{
        href: '/articles',
        text: 'Explore all articles',
      }}
    >
      {previews.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previews.map((preview, index) => (
            <ArticleCard key={index} {...preview} />
          ))}
        </ul>
      ) : (
        <Alert message="Article or Life Story hasn't been uploaded yet." />
      )}
    </Section>
  );
};
