import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/future/image';
import { ChevronRightIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';
import { Prose } from '@/components/prose';

import type { Project, ProjectType } from '@/types/project';

type ProjectCardProps = Project.Preview & {
  projectType: ProjectType;
};

type ProjectCardGroupProps = {
  children: React.ReactNode;
  className?: string;
};

export const ProjectCardGroup = ({ children, className }: ProjectCardGroupProps) => {
  return <ul className={clsx('grid grid-cols-1 items-start gap-y-10 gap-x-6 lg:grid-cols-3 xl:grid-cols-4', className)}>{children}</ul>;
};

export const ProjectCard = ({ slug, module: { default: Component, meta }, projectType }: ProjectCardProps) => {
  return (
    <li className="relative flex flex-col items-start sm:flex-row lg:flex-col">
      <div className="order-1 sm:ml-6 lg:ml-0">
        <Link href={`https://${meta.domain}`} className="inline text-sm font-medium leading-6 text-cyan-400">
          {meta.domain}
        </Link>

        <h3 className="mt-2 mb-1.5 font-semibold text-slate-800 line-clamp-1">{meta.title}</h3>

        <Prose className="prose-sm line-clamp-2">
          <Component />
        </Prose>

        <div className="mt-3 flex items-center">
          <Link href={`/projects/${projectType}/${slug}`} className="animated-underline flex items-center text-sm font-medium text-cyan-400">
            <span className="relative">
              Read more<span className="sr-only">, {meta.title}</span>
            </span>
          </Link>

          <ChevronRightIcon className="relative mt-px ml-1.5 h-[18px] w-[18px] overflow-visible text-cyan-400" />
        </div>
      </div>

      <Image
        src={meta.banner?.src ?? require('@/img/projects/default-banner.jpg').default}
        alt=""
        className="mb-4 w-full rounded-md border border-slate-200 bg-slate-50 sm:mb-0 sm:w-[17rem] lg:mb-4 lg:w-full"
        {...meta.banner}
      />
    </li>
  );
};
