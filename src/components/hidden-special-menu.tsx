import * as React from 'react';
import clsx from 'clsx';
import { ChevronRightIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';

import LeetCodeIcon from '@/images/icons/leetcode.svg';
import CodeWarsIcon from '@/images/icons/codewars.svg';
import HackerRankIcon from '@/images/icons/hackerrank.svg';
import FreeCodeCampIcon from '@/images/icons/freecodecamp.svg';

type PlusUltraType = {
  title: string;
  description: string;
  href: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

const PLUS_ULTRA: PlusUltraType[] = [
  {
    title: 'HackerRank',
    description:
      'HackerRank is a platform for developers to practice their coding skills and improve their coding skills.',
    href: 'https://www.hackerrank.com/fahmiidris_labs',
    icon: HackerRankIcon,
  },
  {
    title: 'FreeCodeCamp',
    description:
      'FreeCodeCamp is a community of people learning to code for free. It is a great place to learn to code.',
    href: 'https://www.freecodecamp.org/fahmiidris-labs',
    icon: FreeCodeCampIcon,
  },
  {
    title: 'CodeWars',
    description:
      'CodeWars is a platform for developers to practice their coding skills and improve their coding skills.',
    href: 'https://www.codewars.com/users/fahmiidris-labs',
    icon: CodeWarsIcon,
  },
  {
    title: 'LeetCode',
    description: "The World's Leading Online Programming Learning Platform.",
    href: 'https://www.leetcode.com/fahmiidris-labs',
    icon: LeetCodeIcon,
  },
];

export const HiddenSpecialMenu = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <div
        className={clsx(
          'flex items-center space-x-4 duration-500 ease-in-out',
          visible ? 'translate-x-0' : '-translate-x-[calc(100%-38px)]'
        )}
      >
        <div className="inline-flex items-center justify-center space-x-2 rounded-md border border-transparent bg-slate-800 px-2 py-2 text-sm text-white dark:bg-slate-800">
          {PLUS_ULTRA.map(({ icon: Icon, ...item }) => (
            <Link key={item.title} href={item.href} openNewTab={true}>
              <span></span>
              <Icon className="h-5 w-5 rounded-sm" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-800 p-2 text-white focus:outline-none dark:bg-slate-800"
          onClick={() => setVisible(!visible)}
        >
          <ChevronRightIcon className={clsx('h-5 w-5', visible ? 'rotate-180' : 'rotate-0')} />
        </button>
      </div>
    </div>
  );
};
