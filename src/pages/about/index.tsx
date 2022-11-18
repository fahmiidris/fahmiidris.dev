import * as React from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { MailIcon, PaperClipIcon } from '@heroicons/react/outline';

import { Logo } from '@/components/logo';
import { Link } from '@/components/link';
import { Image } from '@/components/image';
import { Section } from '@/components/section';
import { Description } from '@/components/about/description';
import { AboutSection } from '@/components/about/about-section';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/social-icons';
import { FigmaIcon, JavaScriptIcon, NextjsIcon, ReactjsIcon, TailwindCSSIcon, TypeScriptIcon, VuejsIcon } from '@/components/tech-icons';

import { profile } from '@/me';

import type { NextPageWithLayout } from 'next';

const attachments = [
  {
    fileName: 'readme_fahmiidris.pdf',
    href: '#',
  },
  {
    fileName: 'cv_fahmiidris.pdf',
    href: profile.attachments.cv,
  },
  {
    fileName: 'portfolio_fahmiidris.pdf',
    href: '#',
  },
];

const follow = [
  {
    title: 'Follow on Instagram',
    href: 'https://www.instagram.com/fahmiidris.dev',
    icon: InstagramIcon,
  },
  {
    title: 'Follow on Twitter',
    href: 'https://www.twitter.com/fahmiidris_dev',
    icon: TwitterIcon,
  },
  {
    title: 'Follow on LinkedIn',
    href: 'https://www.linkedin.com/in/fahmiidris-dev',
    icon: LinkedInIcon,
  },
  {
    title: 'Follow on GitHub',
    href: 'https://www.github.com/fahmiidris-labs',
    icon: GitHubIcon,
  },
  {
    title: 'Message via Email',
    href: `mailto:${profile.contact.email}`,
    icon: MailIcon,
  },
];

const currentFavoriteTechStack = [
  {
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: JavaScriptIcon,
  },
  {
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    icon: TypeScriptIcon,
  },
  {
    title: 'React.js',
    href: 'https://www.reactjs.org',
    icon: ReactjsIcon,
  },
  {
    title: 'Vue.js',
    href: 'https://www.vuejs.org',
    icon: VuejsIcon,
  },
  {
    title: 'Next.js',
    href: 'https://wwww.nextjs.org',
    icon: NextjsIcon,
  },
  {
    title: 'Tailwind CSS',
    href: 'https://www.tailwindcss.com',
    icon: TailwindCSSIcon,
  },
  {
    title: 'Figma for UI/UX Design',
    href: 'https://www.figma.com',
    icon: FigmaIcon,
  },
];

const AboutPage: NextPageWithLayout = () => {
  return (
    <div className="py-8">
      <Section id="about" title="About Fahmi Idris" subtitle="Hi, I'm Fahmi Idris, a Frontend Web Developer based in West Java - Indonesia.">
        <div className="grid grid-cols-1 gap-8 pt-3 lg:grid-cols-4 lg:pt-6 xl:grid-cols-6">
          <div className="col-span-1 flex justify-center xl:col-span-2">
            <figure className="flex flex-col items-center text-center sm:pt-2 lg:pt-16">
              <Image src={profile.image} alt="My Profile" className="aspect-square h-auto w-32 xl:w-48" />

              <figcaption className="flex flex-col pt-4">
                <div className="text-xl font-semibold text-slate-700">{profile.name}</div>
                <div className="text-base font-medium text-slate-700">{profile.workAs}</div>
              </figcaption>
            </figure>
          </div>

          <div className="col-span-1 lg:col-span-3 xl:col-span-4">
            <Link href="/">
              <span className="sr-only">Logo Fahmi Idris</span>
              <Logo className="h-8 w-auto" />
            </Link>

            <Description />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <AboutSection title="Current favorite tech stack">
              {currentFavoriteTechStack.map(({ title, href, icon: Icon }, index) => (
                <li key={index} className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="inline-flex w-0 flex-1 items-center">
                    <Icon className="h-5 w-5 flex-shrink-0 text-slate-500" aria-hidden="true" />
                    <span className="ml-3 w-0 flex-1 truncate">{title}</span>
                  </div>
                </li>
              ))}
            </AboutSection>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <AboutSection title="Follow me on social media">
              {follow.map(({ title, href, icon: Icon }, index) => (
                <li key={index} className="group flex items-center justify-between text-sm">
                  <Link href={href} className="inline-flex w-0 flex-1 items-center py-3 pl-3 pr-4 hover:bg-slate-50">
                    <Icon className="h-5 w-5 flex-shrink-0 text-slate-500 group-hover:text-cyan-400" aria-hidden="true" />
                    <span className="ml-3 w-0 flex-1 truncate">{title}</span>
                  </Link>

                  <ArrowSmRightIcon className="mx-3 hidden h-5 w-5 text-slate-500 group-hover:block" />
                </li>
              ))}
            </AboutSection>
          </div>

          <div className="col-span-1 lg:col-span-4 xl:col-span-2">
            <AboutSection title="Attachments">
              {attachments.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-slate-500" aria-hidden="true" />
                    <span className="ml-3 w-0 flex-1 truncate">{item.fileName}</span>
                  </div>

                  <div className="ml-4 flex flex-shrink-0 space-x-4">
                    <Link
                      href={item.href}
                      className="rounded-md bg-white font-medium text-cyan-400 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                    >
                      View
                    </Link>
                  </div>
                </li>
              ))}
            </AboutSection>
          </div>
        </div>
      </Section>
    </div>
  );
};

AboutPage.Props = {
  meta: {
    title: 'About Fahmi Idris!',
    description: "Hi, I'm Fahmi Idris, a Frontend Web Developer based in West Java - Indonesia.",
  },
};

export default AboutPage;
