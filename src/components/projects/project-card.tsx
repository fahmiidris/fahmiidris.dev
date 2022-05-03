import * as React from 'react';
import clsx from 'clsx';

import { Image } from '@/components/image';

import type { TProject } from '@/components/projects/data';

type TProjectCard = TProject & {
  className?: string;
};

export const ProjectCard = ({
  id,
  title,
  description,
  image,
  className,
}: TProjectCard): JSX.Element => {
  return (
    <div className={clsx('flex flex-col space-y-2', className)}>
      <Image.Wrapper className="relative col-span-3 aspect-video w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 sm:col-span-1">
        <Image
          src={image ? image : require('@/images/projects/default-cover.jpg').default}
          alt={title}
          layout="fill"
          placeholder="blur"
          className="object-cover object-center"
        />
      </Image.Wrapper>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
        <p className="text-xs font-semibold">{description}</p>
      </div>
    </div>
  );
};
