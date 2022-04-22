import * as React from 'react';
import clsx from 'clsx';

import { Link } from '@/components/link';

import { ReactComponent as NextJsLogo } from '@/images/icons/nextjs.svg';
import { ReactComponent as NodeJsLogo } from '@/images/icons/nodejs.svg';
import { ReactComponent as ReactJsLogo } from '@/images/icons/reactjs.svg';
import { ReactComponent as JavaScriptLogo } from '@/images/icons/javascript.svg';
import { ReactComponent as TypeScriptLogo } from '@/images/icons/typescript.svg';
import { ReactComponent as TailwindCSSLogo } from '@/images/icons/tailwindcss.svg';

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
    icon: JavaScriptLogo,
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: TypeScriptLogo,
  },
  {
    name: 'NodeJS',
    href: 'https://nodejs.org/en/',
    icon: NodeJsLogo,
  },
  {
    name: 'ReactJS',
    href: 'https://reactjs.org/',
    icon: ReactJsLogo,
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    icon: TailwindCSSLogo,
  },
  {
    name: 'NextJS',
    href: 'https://nextjs.org/',
    icon: NextJsLogo,
  },
];

export const CurrentTechStack = ({ className }: TCurrentTechStack): JSX.Element => {
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
