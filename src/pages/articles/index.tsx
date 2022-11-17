import * as React from 'react';

import { Alert } from '@/components/alert';
import { ArticleCard } from '@/components/articles/article-card';
import { NewsletterForm } from '@/components/articles/newsletter-form';

import { getArticlePreviews } from '@/services/article';

import type { NextPageWithLayout } from 'next';

const articlePreviews = getArticlePreviews();

const articlePage: NextPageWithLayout = () => {
  return (
    <div className="container relative overflow-hidden">
      <header id="article-header" aria-labelledby="header" className="relative flex flex-col items-start py-16 sm:items-center sm:text-center">
        <div className="max-w-3xl">
          <h1 id="header" className="mb-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            My Article and Life Story
          </h1>

          <p className="text-slate-700">
            Some personal opinions on technology and my random thoughts. Sometimes, it contains stories about feelings. Happy reading!
          </p>
        </div>

        <section className="mt-3 max-w-none sm:max-w-sm">
          <h2 className="sr-only">Sign up for our newsletter</h2>

          <NewsletterForm />
        </section>
      </header>

      <section className="relative pb-24">
        <h2 className="sr-only">article Post</h2>

        {articlePreviews.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {articlePreviews.map((preview, index) => (
              <ArticleCard key={index} {...preview} />
            ))}
          </ul>
        ) : (
          <Alert message="Article or Life Story hasn't been uploaded yet." />
        )}
      </section>
    </div>
  );
};

articlePage.Props = {
  meta: {
    title: 'My article and Life Story',
    description: 'Some personal opinions on technology and my random thoughts. Sometimes, it contains stories about feelings. Happy reading!',
  },
};

export default articlePage;
