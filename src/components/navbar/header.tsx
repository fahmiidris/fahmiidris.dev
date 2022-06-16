import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import {
    MenuIcon,
    XIcon,
    CalendarIcon,
    LinkIcon,
    TemplateIcon,
    DownloadIcon,
} from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { Logo } from '@/components/logo';
import { Search } from '@/components/navbar/search';
import { ThemeSwitcher } from '@/components/navbar/theme-switcher';
import { VersionSwitcher } from '@/components/navbar/version-switcher';
import { GitHubLinkedInDribbble } from '@/components/navbar/github-linkedin-dribbble';

import { navigation } from '@/navs/navigation';

export const Header = () => {
    const router = useRouter();

    const [isOpaque, setIsOpaque] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            if (!isOpaque && window.scrollY > 50) {
                setIsOpaque(true);
            } else if (isOpaque && window.scrollY <= 50) {
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
            <div className="relative z-40 bg-white dark:bg-slate-900">
                <div className="container flex h-[32px] items-center justify-between">
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
                                <Icon className="h-4 w-4 text-slate-800 dark:text-slate-200" />
                                <Link href={item.href} openNewTab={true} className="animated-underline text-xs font-semibold">
                                    <span className="block md:hidden">{item.title.mobile}</span>
                                    <span className="hidden md:block">{item.title.desktop}</span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        {[
                            {
                                title: { mobile: 'CV', desktop: 'CV Fahmi Idris' },
                                href: 'https://drive.google.com/file/d/1pZJB7DrO3RzuXmAXHqyKUQ3B4ug4tHDq/view?usp=sharing',
                                icon: DownloadIcon,
                            },
                            {
                                title: { mobile: 'Starter Template', desktop: 'starter-template.fahmiidris.dev' },
                                href: 'https://starter-template.fahmiidris.dev',
                                icon: TemplateIcon,
                            },
                        ].map(({ icon: Icon, ...item }) => (
                            <div key={item.title.desktop} className="flex items-center space-x-1">
                                <Icon className="h-4 w-4 text-slate-800 dark:text-slate-200" />
                                <Link href={item.href} openNewTab={true} className="animated-underline text-xs font-semibold">
                                    <span className="block md:hidden">{item.title.mobile}</span>
                                    <span className="hidden md:block">{item.title.desktop}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Disclosure as="nav" className={clsx(
                'sticky top-0 z-40 w-full flex-none border-y backdrop-blur dark:border-slate-50/[0.06] lg:border-slate-900/10',
                isOpaque
                    ? 'bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'
                    : 'bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'
            )}>
                {({ open }) => (
                    <>
                        <div className="container relative">
                            <div className="flex h-[58px] w-full items-center justify-between">
                                <div className="flex items-center">
                                    <Disclosure.Button type="button" className="mr-4 inline-flex items-center rounded-md bg-slate-400/10 p-2 focus:bg-slate-400/20 lg:hidden">
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
                                                    <Link href={page.href} className={clsx(
                                                        'inline-flex items-center rounded-md px-4 py-1 duration-150 ease-in-out hover:bg-slate-400/10 focus:outline-none dark:hover:bg-slate-400/20',
                                                        page.href === '/' + router.pathname.split('/')[1] && 'bg-slate-400/10'
                                                    )}>
                                                        {page.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Search />
                                    <VersionSwitcher />
                                    <ThemeSwitcher />
                                    <span className="hidden h-6 w-px bg-slate-200 dark:bg-slate-800 sm:block" aria-hidden="true" />
                                    <GitHubLinkedInDribbble />
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className={clsx('lg:hidden', open && 'border-t dark:border-slate-50/[0.06] lg:border-slate-900/10')}>
                            <div className="container">
                                <div className="flex flex-col space-y-1 py-4">
                                    {navigation.pages.map((page) => (
                                        <Disclosure.Button
                                            key={page.name}
                                            as={Link}
                                            href={page.href}
                                            className={clsx(
                                                'rounded-md px-4 py-2 text-sm font-semibold duration-150 ease-in-out hover:bg-slate-400/10 focus:outline-none dark:hover:bg-slate-400/20',
                                                page.href === '/' + router.pathname.split('/')[1] && 'bg-slate-400/10'
                                            )}
                                        >
                                            {page.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};
