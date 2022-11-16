import * as React from 'react';

import { Alert } from '@/components/alert';
import { BlogCard } from '@/components/blogs/blog-card';
import { NewsletterForm } from '@/components/blogs/newsletter-form';

import { getBlogPreviews } from '@/services/blog';

import type { NextPageWithLayout } from 'next';

const blogPreviews = getBlogPreviews();

const BlogPage: NextPageWithLayout = () => {
  return (
    <div className="container relative overflow-hidden">
      <header id="blog-header" aria-labelledby="header" className="relative flex flex-col items-start py-16 sm:items-center sm:text-center">
        <div className="max-w-3xl">
          <h1 id="header" className="mb-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            My Blog and Life Story
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
        <h2 className="sr-only">Blog Post</h2>

        {blogPreviews.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {blogPreviews.map((preview, index) => (
              <BlogCard key={index} {...preview} />
            ))}
          </ul>
        ) : (
          <Alert message="Blog or Life Story hasn't been uploaded yet." />
        )}
      </section>
    </div>
  );
};

BlogPage.Props = {
  meta: {
    title: 'My Blog and Life Story',
    description: 'Some personal opinions on technology and my random thoughts. Sometimes, it contains stories about feelings. Happy reading!',
  },
};

export default BlogPage;
