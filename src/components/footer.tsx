import * as React from 'react';

import { Link } from '@/components/link';

import { ReactComponent as GitHubIcon } from '@/images/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '@/images/icons/linkedin.svg';
import { ReactComponent as GMailIcon } from '@/images/icons/gmail.svg';
import { ReactComponent as InstagramIcon } from '@/images/icons/instagram.svg';

type TLink = {
  name: string;
  href: string;
};

type TLinkWithIcon = TLink & {
  username?: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

const menu: TLink[] = [
  { name: 'Source Code', href: 'https://github.com/fahmiidris-labs/fahmiidris.dev' },
  { name: 'Docs', href: '#' },
  { name: 'Starter Template', href: 'https://starter-template.fahmiidris.dev' },
  { name: 'Subscribe', href: '#' },
];

const socialMedia: TLinkWithIcon[] = [
  {
    name: 'G-mail',
    username: 'fahmiidris.1607@gmail.com',
    href: 'mailto:fahmiidris.1607@gmail.com',
    icon: GMailIcon,
  },
  {
    name: 'Instagram',
    username: '_fahmiidris.a',
    href: 'https://instagram.com/_fahmiidris.a/',
    icon: InstagramIcon,
  },
  {
    name: 'LinkedIn',
    username: 'linkedin.com/in/fahmiidris-labs',
    href: 'https://linkedin.com/in/fahmiidris-labs/',
    icon: LinkedInIcon,
  },
];

export const Footer = (): JSX.Element => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900">
      <div className="border-t dark:border-slate-50/[0.06] lg:border-slate-900/10">
        <div className="container">
          <div className="flex flex-col space-y-4 py-5">
            <div className="flex items-center justify-center space-x-8">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  openNewTab={true}
                  className="animated-underline inline-flex items-center justify-center text-xs font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-8">
              {socialMedia.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4 text-sky-700 dark:text-sky-600" />
                  <Link
                    href={item.href}
                    className="animated-underline text-xs font-semibold"
                    openNewTab={true}
                  >
                    <span className="block md:hidden">{item.name}</span>
                    <span className="hidden md:block">{item.username}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t dark:border-slate-50/[0.06] lg:border-slate-900/10">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <Link
              href="https://github.com/fahmiidris-labs"
              className="inline-flex items-center justify-center space-x-2 text-xs font-semibold"
              openNewTab={true}
            >
              <GitHubIcon className="h-[18px] w-[18px] fill-slate-800 dark:fill-slate-200" />
              <span className="hidden md:block">fahmiidris-labs</span>
              <span className="block md:hidden">My GitHub</span>
            </Link>
            <p className="flex items-center justify-center space-x-4 text-xs font-semibold">
              © {year} - Fahmi Idris. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
