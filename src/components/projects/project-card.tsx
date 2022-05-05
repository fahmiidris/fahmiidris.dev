import * as React from 'react';
import clsx from 'clsx';

import { Link } from '@/components/link';
import { Image } from '@/components/image';

import type { TProject } from '@/components/projects/data';

type TProjectCard = TProject & {
  className?: string;
};

export const ProjectCard = ({
  id,
  title,
  description,
  href,
  image,
  className,
  github,
  tech,
  status,
}: TProjectCard): JSX.Element => {
  return (
    <div className={clsx('flex flex-col space-y-2', className)}>
      <div>
        <p
          className={clsx(
            'inline-flex items-center justify-center rounded-[4px]  px-1.5 py-0.5 text-[10px] font-bold uppercase',
            status.className ? status.className : 'bg-cyan-400 text-slate-700'
          )}
        >
          {status.title}
        </p>
      </div>
      <Image.Wrapper className="group relative col-span-3 aspect-video w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-200 hover:shadow dark:border-slate-800 dark:bg-slate-800 sm:col-span-1">
        <Image
          src={image ? image : require('@/images/projects/default-cover.jpg').default}
          alt={title}
          layout="fill"
          placeholder="blur"
          className="object-cover object-center"
        />
        <div className="absolute right-2 top-2 flex items-center space-x-2 lg:-translate-y-8 lg:transition-transform lg:duration-500 lg:group-hover:translate-y-0">
          {github && (
            <Link
              href={github}
              openNewTab={true}
              className="inline-flex items-center justify-center rounded-[4px] bg-slate-800 px-1.5 py-0.5 text-[10px] font-bold uppercase text-white"
            >
              GitHub
            </Link>
          )}
          <Link
            href={href}
            openNewTab={true}
            className="inline-flex items-center justify-center rounded-[4px] bg-slate-200 px-1 py-0.5 text-[10px] font-bold uppercase text-slate-700"
          >
            View Website
          </Link>
        </div>
        {tech && (
          <div className="absolute bottom-2 left-2 flex items-center space-x-2">
            {tech.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={clsx(
                  'inline-flex items-center justify-center rounded-[4px]  px-1.5 py-0.5 text-[10px] font-bold uppercase',
                  item.className ? item.className : 'bg-cyan-400 text-slate-700'
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </Image.Wrapper>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
        <p className="text-xs font-semibold">{description}</p>
      </div>
    </div>
  );
};
