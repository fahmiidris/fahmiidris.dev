import * as React from 'react';
import dynamic from 'next/dynamic';
import { HiMenu } from 'react-icons/hi';

import { Link } from '@/components/atoms/fi-link/link';
import { LogoType } from '@/components/atoms/fi-logo/logo';
import { Search } from './fi-search/search';
import { DesktopMenu } from './fi-desktop-menu/desktop-menu';
import { Internationalization } from '@/components/atoms/fi-internationalization/internationalization';

const SwitchTheme = dynamic(() => import('./fi-switch-theme/switch-theme'), { ssr: false });

export const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const openMobileMenu = (value: boolean): void => {
    setOpen(value);
  };

  return (
    <div className="sticky top-0 z-40 bg-white dark:bg-gray-700">
      {/* Mobile Menu */}
      {/* <MobileMenu open={open} openMobileMenu={openMobileMenu} /> */}

      {/* Desktop Menu */}
      <header className="relative bg-white dark:bg-gray-700">
        <nav aria-label="Top" className="bg-white dark:bg-gray-700">
          <div className="border-y border-gray-200 dark:border-gray-600">
            <div className="container">
              <div className="flex h-[58px] items-center">
                <button
                  type="button"
                  className="rounded-lg border border-gray-100 bg-white p-2 text-gray-400 duration-200 ease-in-out hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 lg:hidden"
                  onClick={() => openMobileMenu(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <HiMenu className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="ml-3 flex lg:ml-0">
                  <Link href="/">
                    <span className="sr-only">fahmiidris.dev</span>
                    <LogoType className="h-6 w-auto" />
                  </Link>
                </div>

                {/* Main Menu Navigation */}
                <DesktopMenu />

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:ml-4 lg:flex">
                    <div className="hidden sm:flex sm:items-center">
                      <Internationalization />
                    </div>
                  </div>

                  <div className="flex lg:ml-1">
                    <Search />
                  </div>

                  <div className="flex8 ml-2">
                    <SwitchTheme />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
