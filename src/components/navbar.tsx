import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Logo } from '@/components/logo';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { GitHubLinkedIn } from '@/components/github-linkedin';
import { VersionSwitcher } from '@/components/version-switcher';

import { navigation } from '@/navs/navigation';

export const Navbar = (): JSX.Element => {
  const { pathname } = useRouter();
  const [isOpaque, setIsOpaque] = React.useState<boolean>(false);

  React.useEffect(() => {
    let offset: number = 50;
    const onScroll = (): void => {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true);
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false);
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return (): void => {
      (window as any).removeEventListener('scroll', onScroll, { passive: true });
    };
  }, [isOpaque]);

  return (
    <Disclosure
      as="nav"
      className={clsx(
        'sticky top-0 z-40 w-full flex-none border-y backdrop-blur dark:border-slate-50/[0.06] lg:border-slate-900/10',
        isOpaque
          ? 'bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'
          : 'bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'
      )}
    >
      {({ open }) => (
        <>
          <div className="container relative">
            <div className="flex h-[58px] w-full items-center justify-between">
              <div className="flex items-center">
                <Disclosure.Button
                  type="button"
                  className="mr-2 inline-flex items-center rounded-md bg-slate-400/10 p-2 focus:bg-slate-400/20 lg:hidden"
                >
                  <span className="sr-only">Toggle Menu</span>
                  {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                </Disclosure.Button>
                <Link href="/" className="outline-none">
                  <span className="sr-only">Fahmi Idris home page</span>
                  <Logo className="h-[24px] w-auto" />
                </Link>
                <div className="hidden pl-4 text-xs font-semibold leading-6 dark:text-slate-200 lg:flex lg:items-center">
                  <ul className="flex items-center space-x-1">
                    {navigation.pages.map((page, idx) => (
                      <li key={idx}>
                        <Link
                          href={page.href}
                          className={clsx(
                            'rounded-lg px-4 py-2 duration-150 ease-in-out hover:bg-slate-400/10 focus:outline-none dark:hover:bg-slate-400/20',
                            page.href === '/' + pathname.split('/')[1] && 'bg-slate-400/10'
                          )}
                        >
                          {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
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

          <Disclosure.Panel
            className={clsx(
              'lg:hidden',
              open && 'border-t dark:border-slate-50/[0.06] lg:border-slate-900/10'
            )}
          >
            <div className="container">
              <div className="flex flex-col space-y-1 py-4">
                {navigation.pages.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className={clsx(
                      'rounded-lg px-4 py-2 text-sm font-semibold duration-150 ease-in-out hover:bg-slate-400/10 focus:outline-none dark:hover:bg-slate-400/20',
                      pathname === item.href && 'bg-slate-400/10'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
