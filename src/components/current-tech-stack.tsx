import * as React from 'react';
import clsx from 'clsx';

import { Link } from '@/components/link';

import VuejsIcon from '@/images/icons/vuejs.svg';
import NextjsIcon from '@/images/icons/nextjs.svg';
import ReactjsIcon from '@/images/icons/reactjs.svg';
import JavaScriptIcon from '@/images/icons/javascript.svg';
import TypeScriptIcon from '@/images/icons/typescript.svg';
import TailwindCSSIcon from '@/images/icons/tailwindcss.svg';

type CurrentTechStackType = {
  className?: string;
};

const stacks = [
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    href: 'https://typescriptlang.org',
    icon: TypeScriptIcon,
  },
  {
    name: 'ReactJS',
    href: 'https://reactjs.org',
    icon: ReactjsIcon,
  },
  {
    name: 'VueJS',
    href: 'https://vuejs.org',
    icon: VuejsIcon,
  },
  {
    name: 'NextJS',
    href: 'https://nextjs.org',
    icon: NextjsIcon,
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    icon: TailwindCSSIcon,
  },
];

export const CurrentTechStack = ({ className }: CurrentTechStackType) => {
  return (
    <div className={clsx('flex items-center justify-center space-x-5', className)}>
      {stacks.map(({ icon: Icon, ...item }, idx) => (
        <Link key={idx} href={item.href} openNewTab={true}>
          <span className="sr-only">{item.name}</span>
          <Icon className="h-8 w-full" />
        </Link>
      ))}
    </div>
  );
};
