import * as React from 'react';
import { useRouter } from 'next/router';
import { HiChevronDown } from 'react-icons/hi';
import { Popover, Transition } from '@headlessui/react';

import { Link } from '@/components/atoms/fi-link/link';

import { classNames } from '@/utils/helpers';

import { navigation } from '@/components/organisms/fi-navbar/navigation-data';

export const DesktopMenu = () => {
  const { pathname } = useRouter();

  const isActive = (path: string, href: string): boolean => {
    return href === '/' + path.split('/')[1];
  };

  return (
    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full items-center justify-center space-x-1">
        {navigation.pages.map((page) => (
          <Link
            key={page.name}
            href={page.href}
            className={classNames(
              isActive(pathname, page.href) ? 'bg-gray-100 font-semibold' : 'font-medium',
              'inline-flex items-center space-x-1 rounded-lg border border-transparent px-4 py-2 text-xs text-gray-700 duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-800'
            )}
          >
            {page.name}
          </Link>
        ))}

        {navigation.categories.map((category) => (
          <Popover key={category.name} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open && 'bg-gray-100 text-gray-800 hover:text-gray-800',
                      'inline-flex items-center space-x-1 rounded-lg border border-transparent py-2 pl-4 pr-2 text-xs font-medium text-gray-700 duration-200 ease-in-out hover:bg-gray-100'
                    )}
                  >
                    <span>{category.name}</span>
                    <HiChevronDown
                      className={classNames(
                        open && '-rotate-180 text-gray-800',
                        'h-4 w-4 text-gray-700 duration-200 ease-in-out'
                      )}
                    />
                  </Popover.Button>
                </div>

                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 top-full text-xs text-gray-500">
                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                    <div className="relative bg-white">
                      <div className="container">
                        <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-10">
                          <div className="col-start-2 grid grid-cols-2 gap-x-8">{/*  */}</div>
                          <div className="row-start-1 grid grid-cols-4 gap-y-10 gap-x-8 text-xs">
                            <>
                              {category.sections.map((section) => (
                                <div key={section.name}>
                                  <p
                                    id={`${section.name}-heading`}
                                    className="font-medium text-gray-900"
                                  >
                                    {section.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${section.name}-heading`}
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    {section.items.map((item) => (
                                      <li key={item.name} className="block">
                                        <Link href={item.href} className="hover:text-gray-800">
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
      </div>
    </Popover.Group>
  );
};
