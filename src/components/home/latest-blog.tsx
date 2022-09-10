import * as React from 'react';

import { Section } from '@/components/section';
import { BlogCard } from '@/components/blog/blog-card';

import type { Blog } from '@/types/blog';

type LatestBlogProps = {
  previews: Blog.Preview[];
};

export const LatestBlog = ({ previews }: LatestBlogProps) => {
  return (
    <Section
      id="latest-blog"
      title="Latest Blog"
      subtitle="Hi gaes! I have a new story for you! Happy reading!"
      description="Some personal opinions on technology and my random thoughts. Sometimes, it contains stories about feelings."
      more={{
        href: '/blog',
        text: 'Explore all blog',
      }}
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {previews.map((preview, index) => (
          <BlogCard key={index} {...preview} />
        ))}
      </ul>
    </Section>
  );
};
