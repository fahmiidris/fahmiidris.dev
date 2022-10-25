import * as React from 'react';
import { MailIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '@/components/social-icons';
import { profile } from '@/me';

const menu = [
  { name: 'Source Code', href: 'https://www.github.com/fahmiidris-labs/fahmiidris.dev' },
  { name: 'Docs', href: '#' },
  { name: 'Starter Template', href: '/templates' },
  { name: 'Subscribe', href: '#' },
];

const socialMedia = [
  {
    name: 'Email',
    username: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: MailIcon,
  },
  {
    name: 'Instagram',
    username: '@fahmiidris.dev',
    href: 'https://www.instagram.com/fahmiidris.dev',
    icon: InstagramIcon,
  },
  {
    name: 'LinkedIn',
    username: 'linkedin.com/in/fahmiidris-dev',
    href: 'https://www.linkedin.com/in/fahmiidris-dev',
    icon: LinkedInIcon,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="border-t lg:border-slate-200">
        <div className="container">
          <div className="flex flex-col space-y-4 py-6">
            <div className="flex items-center justify-center space-x-8">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  openNewTab={true}
                  className="animated-underline inline-flex items-center justify-center text-xs font-semibold hover:text-slate-700 sm:text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-8">
              {socialMedia.map(({ icon: Icon, ...item }, index) => (
                <div key={index} className="group flex items-center space-x-2">
                  <Icon className="h-5 w-5 group-hover:text-slate-800" />
                  <Link
                    href={item.href}
                    openNewTab={true}
                    className="animated-underline text-xs font-semibold hover:text-slate-700 sm:text-sm"
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

      <div className="border-t lg:border-slate-200">
        <div className="container">
          <div className="flex items-center justify-between py-6">
            <Link
              href="https://www.github.com/fahmiidris-labs"
              openNewTab={true}
              className="inline-flex items-center justify-center space-x-2 text-xs font-semibold hover:text-slate-800 sm:text-sm"
            >
              <GitHubIcon className="h-5 w-5 fill-slate-800" />
              <span className="hidden md:block">github.com/fahmiidris-labs</span>
              <span className="block md:hidden">My GitHub</span>
            </Link>

            <p className="flex items-center justify-center space-x-4 text-xs font-semibold sm:text-sm">
              © {new Date().getFullYear()} -
              <Link href="/" className="animated-underline ml-1 text-slate-800">
                Fahmi Idris
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
