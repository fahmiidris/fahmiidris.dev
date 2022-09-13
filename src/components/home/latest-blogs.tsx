import * as React from 'react';

import { Alert } from '@/components/alert';
import { Section } from '@/components/section';
import { BlogCard } from '@/components/blogs/blog-card';

import type { Blog } from '@/types/blog';

type LatestBlogsProps = {
  previews: Blog.Preview[];
};

export const LatestBlogs = ({ previews }: LatestBlogsProps) => {
  return (
    <Section
      id="latest-blogs"
      title="Latest Blog"
      subtitle="Hi gaes! I have a new story for you! Happy reading!"
      description="Some personal opinions on technology and my random thoughts. Sometimes, it contains stories about feelings."
      more={{
        href: '/blog',
        text: 'Explore all blog',
      }}
    >
      {previews.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previews.map((preview, index) => (
            <BlogCard key={index} {...preview} />
          ))}
        </ul>
      ) : (
        <Alert message="Blog or Life Story hasn't been uploaded yet." />
      )}
    </Section>
  );
};
