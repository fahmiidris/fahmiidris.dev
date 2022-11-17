import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Dialog, Popover, Transition } from '@headlessui/react';
import {
  ArrowSmRightIcon,
  CalendarIcon,
  DownloadIcon,
  // TemplateIcon,
  LinkIcon,
  MenuIcon,
  XIcon,
  ScissorsIcon,
  PuzzleIcon,
  // PhotographIcon,
  PresentationChartLineIcon,
  BookOpenIcon,
} from '@heroicons/react/outline';

import { Logo } from '@/components/logo';
import { Link } from '@/components/link';
import { Search } from '@/components/navbar/search';
import { VersionSwitcher } from '@/components/navbar/version-switcher';
import { DribbbleIcon, GitHubIcon, LinkedInIcon } from '@/components/social-icons';

import { profile } from '@/me';

const navigation = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Projects', href: '/projects' },
    { name: 'Snippets', href: '/snippets' },
    { name: 'About', href: '/about' },
  ],
  categories: [
    {
      name: 'Others',
      href: '/others',
      featured: [
        {
          name: 'Guest Book',
          description: 'Leave any message here. Criticism, suggestions, or whatever you like.',
          href: '/guest-book',
          icon: BookOpenIcon,
        },
        {
          name: 'Tools',
          description: "Make your simple job easier with the tools I made. Let's see what tools are available.",
          href: '/tools',
          icon: ScissorsIcon,
        },
        {
          name: 'Slides',
          description: 'A collection of slides made for presentation needs. You can watch live or download.',
          href: '/slides',
          icon: PresentationChartLineIcon,
        },
        {
          name: 'Fun Quiz',
          description: "Increase your knowledge by taking quizzes. Let's get the maximum score!",
          href: '/quiz',
          icon: PuzzleIcon,
        },
        // {
        //   name: 'Starter Templates',
        //   description: 'Initializing your project is now easier with the use of starter templates.',
        //   href: 'https://templates.fahmiidris.dev',
        //   icon: TemplateIcon,
        // },
        // {
        //   name: 'Open Graph Generator',
        //   description: "Optimize your SEO with OG Image Generator, it's cool! you have to see it!",
        //   href: 'https://og.fahmiidris.dev',
        //   icon: PhotographIcon,
        // },
      ],
    },
  ],
};

export const Navbar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpaque, setIsOpaque] = React.useState(false);

  React.useEffect(() => {
    const offset = 100;

    const onScroll = () => {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true);
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false);
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      (window as any).removeEventListener('scroll', onScroll, { passive: true });
    };
  }, [isOpaque]);

  return (
    <>
      <div className="bg-white">
        <Transition.Root show={isOpen} as={React.Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setIsOpen}>
            <Transition.Child
              as={React.Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={React.Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex flex-row-reverse items-center justify-between p-4">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-slate-400"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="flex">
                      <Link href="/">
                        <span className="sr-only">Fahmi Idris Logo</span>
                        <Logo className="h-6 w-auto" />
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-6 border-t border-slate-200 py-6 px-4">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <Link
                          href={page.href}
                          onClick={() => setIsOpen(false)}
                          className="group -m-2 flex items-center justify-between rounded-md py-2 px-4 font-medium text-slate-800 hover:bg-slate-50"
                        >
                          <span>{page.name}</span>
                          <ArrowSmRightIcon className="hidden h-5 w-5 group-hover:block" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      <div className="relative z-40 bg-white">
        <div className="container flex h-[32px] items-center justify-between sm:h-[36px]">
          <div className="flex items-center justify-center space-x-4">
            {[
              {
                title: { mobile: 'Links', desktop: 'links.fahmiidris.dev' },
                href: 'https://links.fahmiidris.dev',
                icon: LinkIcon,
              },
              {
                title: { mobile: 'Planning', desktop: 'todo.fahmiidris.dev' },
                href: 'https://todo.fahmiidris.dev',
                icon: CalendarIcon,
              },
            ].map(({ icon: Icon, ...item }) => (
              <div key={item.title.desktop} className="flex items-center space-x-1">
                <Icon className="h-4 w-4 text-slate-800 sm:h-5 sm:w-5" />
                <Link href={item.href} openNewTab={true} className="animated-underline text-xs font-medium hover:text-slate-700 sm:text-sm">
                  <span className="block md:hidden">{item.title.mobile}</span>
                  <span className="hidden md:block">{item.title.desktop}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4">
            {[
              {
                title: { mobile: 'CV', desktop: 'cv_fahmiidris.pdf' },
                href: profile.attachments.cv,
                icon: DownloadIcon,
              },
              {
                title: { mobile: 'Portfolio', desktop: 'portfolio_fahmiidris.pdf' },
                href: '#',
                icon: DownloadIcon,
              },
            ].map(({ icon: Icon, ...item }) => (
              <div key={item.title.desktop} className="flex items-center space-x-1">
                <Icon className="h-4 w-4 text-slate-800 sm:h-5 sm:w-5" />
                <Link href={item.href} openNewTab={true} className="animated-underline text-xs font-medium hover:text-slate-700 sm:text-sm">
                  <span className="block md:hidden">{item.title.mobile}</span>
                  <span className="hidden md:block">{item.title.desktop}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav
        className={clsx(
          'sticky top-0 z-40 w-full flex-none border-y border-slate-200 backdrop-blur transition-colors duration-500 lg:z-50',
          isOpaque ? 'bg-white supports-backdrop-blur:bg-white/95' : 'bg-white/95 supports-backdrop-blur:bg-white/60'
        )}
      >
        <div className="container">
          <div className="flex h-[60px] items-center">
            <button type="button" className="rounded-md bg-white text-slate-400 lg:hidden" onClick={() => setIsOpen(true)}>
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <span className="sr-only">Fahmi Idris Logo</span>
                <Logo className="h-7 w-auto" />
              </Link>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-10 lg:block lg:self-stretch">
              <div className="flex h-full space-x-6">
                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className={clsx(
                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                      page.href === '/' + router.pathname.split('/')[1]
                        ? 'border-cyan-400 text-cyan-400'
                        : 'border-transparent text-slate-800 hover:border-slate-500'
                    )}
                  >
                    {page.name}
                  </Link>
                ))}

                {navigation.categories.map((category, index) => (
                  <Popover key={index} className="relative flex">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={clsx(
                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium outline-none transition-colors duration-200 ease-out',
                            open ? 'border-slate-300 bg-slate-100 text-cyan-400' : 'border-transparent text-slate-800 hover:border-slate-500'
                          )}
                        >
                          {category.name}
                        </Popover.Button>

                        <Transition
                          as={React.Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-1/2 z-10 mt-[66px] w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {category.featured.map(({ icon: Icon, ...item }) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-slate-50 focus:ring-2 focus:ring-cyan-400"
                                  >
                                    <Icon className="h-6 w-6 flex-shrink-0 text-cyan-400" aria-hidden="true" />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-slate-900">{item.name}</p>
                                      <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>

                              <div className="bg-slate-50 px-5 py-2 sm:px-8 sm:py-5">
                                <Link
                                  href={category.href}
                                  className="inline-flex items-center space-x-2 font-semibold text-cyan-400 hover:text-cyan-500"
                                >
                                  <span>View all {category.name.toLowerCase()}</span>
                                  <ArrowSmRightIcon className="h-5 w-5" />
                                </Link>
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

            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <VersionSwitcher />

              <span className="hidden h-6 w-px bg-slate-200 sm:block" aria-hidden="true" />

              <div className="hidden items-center space-x-2 sm:flex">
                {[
                  {
                    title: 'GitHub',
                    href: 'https://www.github.com/fahmiidris-labs',
                    icon: GitHubIcon,
                  },
                  {
                    title: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/fahmiidris-dev',
                    icon: LinkedInIcon,
                  },
                  {
                    title: 'Dribbble',
                    href: 'https://www.dribbble.com/fahmiidris_dev',
                    icon: DribbbleIcon,
                  },
                ].map(({ icon: Icon, ...item }, index) => (
                  <Link href={item.href} key={index} className="text-slate-500 hover:text-slate-800">
                    <span className="sr-only">{item.title}</span>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
