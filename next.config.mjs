import url from 'url';
import path from 'path';
import minimatch from 'minimatch';
import withRemarkGfm from 'remark-gfm';
import bundleAnalyzer from '@next/bundle-analyzer';
import readingTime from 'reading-time';

import { createLoader } from 'simple-functional-loader';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const fallbackDefaultExports = {
  'src/pages/{articles,snippets}/**/*': ['@/layouts/article-and-snippet-post-layout', 'ArticleAndSnippetPostLayout'],
  'src/pages/experiences/**/*': ['@/layouts/experience-post-layout', 'ExperiencePostLayout'],
  'src/pages/projects/**/*': ['@/layouts/project-post-layout', 'ProjectPostLayout'],
};

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx'],
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['i.scdn.co'],
  },

  webpack: (config, options) => {
    const mdx = (plugins = []) => [
      {
        loader: '@mdx-js/loader',
        options: {
          remarkPlugins: [...plugins, withRemarkGfm],
          rehypePlugins: [],
        },
      },
      createLoader(function (source) {
        const timeToRead = readingTime(source);
        const pathSegments = this.resourcePath.split(path.sep);
        const projectType = pathSegments[pathSegments.length - 3];
        const slug =
          pathSegments[pathSegments.length - 1] === 'index.mdx'
            ? pathSegments[pathSegments.length - 2]
            : pathSegments[pathSegments.length - 1].replace(/\.mdx$/, '');

        return (
          source +
          `\n\nexport const slug = '${slug}'` +
          `\n\nexport const projectType = '${projectType}'` +
          `\n\nexport const readingTime = ${JSON.stringify(timeToRead)}`
        );
      }),
    ];

    config.module.rules.push({
      test: /\.mdx$/,
      resourceQuery: /preview/,
      use: [
        options.defaultLoaders.babel,
        ...mdx([
          () => (tree) => {
            const firstParagraphIndex = tree.children.findIndex((child) => child.type === 'paragraph');

            if (firstParagraphIndex > -1) {
              tree.children = tree.children.filter((_, index) => {
                return index <= firstParagraphIndex;
              });
            }
          },
        ]),
      ],
    });

    config.module.rules.push({
      test: { and: [/\.mdx$/] },
      resourceQuery: { not: [/preview/] },
      use: [
        options.defaultLoaders.babel,
        createLoader(function (source) {
          return source + `\n\nMDXContent.Props = { meta: { title: meta.title, description: meta.description } }\n\n`;
        }),
        ...mdx(),
        createLoader(function (source) {
          const extra = [];
          const resourcePath = path.relative(path.dirname(url.fileURLToPath(import.meta.url)), this.resourcePath);

          if (!/^\s*export\s+default\s+/m.test(source.replace(/```(.*?)```/gs, ''))) {
            for (const glob in fallbackDefaultExports) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `\n\nimport { ${fallbackDefaultExports[glob][1]} as Layout } from '${fallbackDefaultExports[glob][0]}'\n\n`,
                  `\n\nexport default (props) => <Layout meta={meta} slug={slug} projectType={projectType} readingTime={readingTime} {...props} />\n\n`
                );
                break;
              }
            }
          }

          return [...extra, source].filter(Boolean).join('\n\n');
        }),
      ],
    });

    return config;
  },
});

export default nextConfig;
