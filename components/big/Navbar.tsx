import { Fragment } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import dynamic from "next/dynamic"

import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import ApplicationMark from "../small/ApplicationMark"
import ApplicationLogo from "../small/ApplicationLogo"

import { NavbarLinkType, LinksType } from "@/types/navbar.type"

const ThemeSwitcherDesktop = dynamic(() => import("../small/ThemeSwitcherDesktop"), { ssr: false })
const ThemeSwitcherMobile = dynamic(() => import("../small/ThemeSwitcherMobile"), { ssr: false })

const Navbar: React.FC = () => {
    
    const links: LinksType[] = [
        {
            text: "Experiences",
            url: "/experiences",
        }, {
            text: "Projects",
            url: "/projects",
        }, {
            text: "About",
            url: "/about",
        },
    ]

    return (
        <Disclosure as="nav" className="bg-gray-700 dark:bg-gray-800 fixed top-0 inset-x-0 z-50">
            {({ open }) => (
                <Fragment>
                    <div className="container">
                        <div className="relative flex items-center justify-center sm:justify-between h-16">

                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Theme Button */}
                                <ThemeSwitcherMobile />
                            </div>

                            {/* Left Menu Navigation */}
                            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                                {/* Logo Paperless */}
                                <Link href="/">
                                    <a className="flex-shrink-0 flex items-center">
                                        <ApplicationMark className="hidden lg:block h-8 w-auto" color="white" />
                                        <ApplicationLogo className="block lg:hidden h-8 w-auto" />
                                    </a>
                                </Link>

                                {/* Main Menu Navigration */}
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-1">
                                        {links.map((link, index) => (
                                            <NavbarLink key={index} href={link.url}>
                                                {link.text}
                                            </NavbarLink>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Menu Navigation */}
                            <div className="hidden sm:flex items-center justify-end">
                                <div className="hidden sm:block">
                                    <div className="flex space-x-1">
                                        <ThemeSwitcherDesktop />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center space-x-1 sm:hidden">
                                {/* Mobile Menu Button  */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-white bg-gray-600 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-900 duration-150 ease-in-out">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-4 pt-2 pb-5 space-y-1 sm:hidden">
                            {links.map((link, index) => (
                                <ResponsiveNavbarLink key={index} href={link.url}>
                                    { link.text }
                                </ResponsiveNavbarLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Fragment>
            )}
        </Disclosure>
    )
}

const NavbarLink: React.FC<NavbarLinkType> = ({ href, children, ...props }) => {

    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a className={`inline-flex justify-center items-center text-white ${asPath === href && 'bg-gray-600 dark:bg-gray-700'} px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-600 dark:hover:bg-gray-700 duration-100 ease-in-out`} {...props}>
                {children}
            </a>
        </Link>
    )
}

const ResponsiveNavbarLink: React.FC<NavbarLinkType> = ({ href, children, ...props }) => {

    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a className={`block text-white ${asPath === href && 'bg-gray-600 dark:bg-gray-700'} px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-600 dark:hover:bg-gray-700 duration-100 ease-in-out`} {...props}>
                {children}
            </a>
        </Link>
    )
}

export default Navbar
