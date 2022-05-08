import * as React from 'react';
import clsx from 'clsx';

import { Link } from '@/components/link';

import { ReactComponent as NextJsIcon } from '@/images/icons/nextjs.svg';
import { ReactComponent as VueJsIcon } from '@/images/icons/vuejs.svg';
import { ReactComponent as ReactJsIcon } from '@/images/icons/reactjs.svg';
import { ReactComponent as JavaScriptIcon } from '@/images/icons/javascript.svg';
import { ReactComponent as TypeScriptIcon } from '@/images/icons/typescript.svg';
import { ReactComponent as TailwindCSSIcon } from '@/images/icons/tailwindcss.svg';

type TCurrentTechStack = {
  className?: string;
};

type TLink = {
  name: string;
  href: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

const stacks: TLink[] = [
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: TypeScriptIcon,
  },
  {
    name: 'ReactJS',
    href: 'https://reactjs.org/',
    icon: ReactJsIcon,
  },
  {
    name: 'VueJS',
    href: 'https://vuejs.org/',
    icon: VueJsIcon,
  },
  {
    name: 'NextJS',
    href: 'https://nextjs.org/',
    icon: NextJsIcon,
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    icon: TailwindCSSIcon,
  },
];

export const TechStack = ({ className }: TCurrentTechStack): JSX.Element => {
  return (
    <div className={clsx('flex items-center justify-center space-x-5', className)}>
      {stacks.map((item, idx) => (
        <Link key={idx} href={item.href} openNewTab={true}>
          <span className="sr-only">{item.name}</span>
          {<item.icon className="h-8 w-full" />}
        </Link>
      ))}
    </div>
  );
};
