import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { CalendarIcon, TemplateIcon, LinkIcon, MenuIcon } from '@heroicons/react/outline';

import { Logo } from '@/components/logo';
import { Link } from '@/components/link';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { GitHubLinkedIn } from '@/components/github-linkedin';
import { VersionSwitcher } from '@/components/version-switcher';

import { navigation } from '@/navs/navigation';

export const Topbar = (): JSX.Element => {
  return (
    <div className="relative z-40 bg-white dark:bg-slate-900">
      <div className="container flex h-[32px] items-center justify-between">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-1">
            <LinkIcon className="h-4 w-4 text-slate-700 dark:text-slate-200" />
            <Link
              href="https://links.fahmiidris.dev"
              className="animated-underline text-xs font-semibold"
              openNewTab={true}
            >
              <span className="block md:hidden">Links</span>
              <span className="hidden md:block">links.fahmiidris.dev</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <CalendarIcon className="h-4 w-4 text-gray-700 dark:text-slate-200" />
            <Link
              href="https://todo.fahmiidris.dev"
              className="animated-underline text-xs font-semibold"
              openNewTab={true}
            >
              <span className="block md:hidden">Planning</span>
              <span className="hidden md:block">todo.fahmiidris.dev</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-1">
            <TemplateIcon className="h-4 w-4 text-slate-700 dark:text-slate-200" />
            <Link
              href="https://starter-template.fahmiidris.dev"
              className="animated-underline text-xs font-semibold"
              openNewTab={true}
            >
              <span className="block md:hidden">Starter Template</span>
              <span className="hidden md:block">starter-template.fahmiidris.dev</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="hidden pl-4 text-xs font-semibold leading-6 dark:text-slate-200 lg:flex lg:items-center">
      <ul className="flex items-center space-x-1">
        {navigation.pages.map((page, idx) => (
          <li key={idx}>
            <Link
              href={page.href}
              className={clsx(
                'rounded-lg px-4 py-2 duration-150 ease-in-out hover:bg-slate-400/10 focus:outline-none dark:hover:bg-slate-400/20',
                {
                  'bg-slate-400/10': pathname === page.href,
                }
              )}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Header = (): JSX.Element => {
  return (
    <>
      <Topbar />
      <header className="sticky inset-x-0 top-0 z-40 w-full flex-none border-y border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-500/10 dark:bg-slate-900/75">
        <div className="container relative">
          <div className="flex h-[58px] w-full items-center justify-between">
            <div className="flex items-center space-x-1">
              <button
                type="button"
                className="mr-2 inline-flex items-center rounded-md bg-slate-400/10 p-2 focus:bg-slate-400/20 lg:hidden"
              >
                <span className="sr-only">Toggle Menu</span>
                <MenuIcon className="h-5 w-5" />
              </button>
              <Link href="/" className="outline-none">
                <span className="sr-only">Fahmi Idris home page</span>
                <Logo className="h-[24px] w-auto" />
              </Link>
              <Navbar />
            </div>
            <div className="flex items-center space-x-4">
              <VersionSwitcher />
              <ThemeSwitcher />
              <span
                className="hidden h-6 w-px bg-slate-200 dark:bg-slate-800 sm:block"
                aria-hidden="true"
              />
              <GitHubLinkedIn />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
