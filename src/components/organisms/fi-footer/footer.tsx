import * as React from 'react';
import { IconType } from 'react-icons';

import { Link } from '@/components/atoms/fi-link/link';

import { ReactComponent as GMailIcon } from '@/images/icons/gmail-icon.svg';
import { ReactComponent as InstagramIcon } from '@/images/icons/instagram-icon.svg';
import { ReactComponent as LinkedInIcon } from '@/images/icons/linkedin-icon.svg';
import { GoMarkGithub } from 'react-icons/go';

type TLink = {
  name: string;
  href: string;
};

type TLinkWithIcon = TLink & {
  username?: string;
  icon: IconType;
};

const menu: TLink[] = [
  { name: 'Source Code', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Starter Template', href: '#' },
  { name: 'Subscribe', href: '#' },
];

const socialMedia: TLinkWithIcon[] = [
  {
    name: 'Gmail',
    username: 'fahmiidris.1607@gmail.com',
    href: 'mailto:fahmiidris.1607@gmail.com',
    icon: GMailIcon,
  },
  {
    name: 'Instagram',
    username: '_fahmiidris.a',
    href: 'https://www.instagram.com/_fahmiidris.a/',
    icon: InstagramIcon,
  },
  {
    name: 'LinkedIn',
    username: 'linkedin.com/in/fahmiidris-labs',
    href: 'https://www.linkedin.com/in/fahmiidris-labs/',
    icon: LinkedInIcon,
  },
];

export const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-white">
      <div className="border-t border-gray-200">
        <div className="container">
          <div className="flex flex-col space-y-4 py-5">
            <div className="flex items-center justify-center space-x-8">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="animated-underline inline-flex items-center justify-center font-quicksand text-xs font-bold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-8">
              {socialMedia.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="inline-flex items-center justify-center space-x-2 font-quicksand text-xs font-bold"
                >
                  {<item.icon className="h-[20px] w-[20px]" />}
                  <span>{item.username}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <Link
              href="https://github.com/fahmiidris-labs"
              className="inline-flex items-center justify-center space-x-2 font-quicksand text-xs font-bold"
            >
              <GoMarkGithub className="h-[18px] w-[18px] fill-gray-800" />
              <span>fahmiidris-labs</span>
            </Link>
            <p className="flex items-center justify-center space-x-4 font-quicksand text-xs font-bold">
              © {year} - Fahmi Idris. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
