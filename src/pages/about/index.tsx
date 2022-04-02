import * as React from 'react';
import Image from 'next/image';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { GoMarkGithub, GoFilePdf } from 'react-icons/go';

import { Link } from '@/components/atoms/fi-link/link';
import { LogoType } from '@/components/atoms/fi-logo/logo';
import { MainLayout } from '@/components/templates/main-layout';
import { AboutLayout } from '@/components/templates/about-layout';
import { HeadingSection } from '@/components/molecules/fi-heading-section/heading-section';

import { ReactComponent as GMailIcon } from '@/images/icons/gmail-icon.svg';
import { ReactComponent as InstagramIcon } from '@/images/icons/instagram-icon.svg';
import { ReactComponent as LinkedInIcon } from '@/images/icons/linkedin-icon.svg';

import mySelf from '@/images/random-images/my-self.jpg';

import type { IconType } from 'react-icons';
import type { TNextPageWithLayout } from '@/types/app.type';

type TContact = {
  title: string;
  username: string;
  href: string;
  icon: IconType;
};

const STATUS: string = 'Currently Intern as a Frontend Web Developer at eFishery.';

const contacts: TContact[] = [
  {
    title: 'GitHub',
    username: 'fahmiidris-labs',
    href: 'https://www.github.com/fahmiidris-labs',
    icon: GoMarkGithub,
  },
  {
    title: 'G-Mail',
    username: 'fahmiidris.1607@gmail.com',
    href: 'mailto:fahmiidris.1607@gmail.com',
    icon: GMailIcon,
  },
  {
    title: 'Instagram',
    username: '_fahmiidris.a',
    href: 'https://www.instagram.com/_fahmiidris.a/',
    icon: InstagramIcon,
  },
  {
    title: 'LinkedIn',
    username: 'linkedin.com/in/fahmiidris-labs',
    href: 'https://www.linkedin.com/in/fahmiidris-labs/',
    icon: LinkedInIcon,
  },
  {
    title: 'Resume',
    username: 'Download My Resume',
    href: '#',
    icon: GoFilePdf,
  },
];

const AboutPage: TNextPageWithLayout = () => {
  return (
    <section id="about" className="relative">
      <div className="container pt-[110px]">
        <HeadingSection
          title="About Fahmi Idris"
          description="Hi, I'm Fahmi Idris, a frontend engineer based in West Java - Indonesia."
          icon={HiOutlineUserCircle}
        />
        <div className="pt-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <figure className="flex flex-col items-center justify-center">
                <div className="relative aspect-square w-[280px] overflow-hidden rounded-full ring-4 ring-primary-400 ring-offset-4 dark:ring-offset-gray-700">
                  <Image
                    src={mySelf}
                    layout="fill"
                    alt="My Profile"
                    className="object-cover object-center"
                    priority={true}
                    quality={100}
                  />
                </div>
                <figcaption className="flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-2 pt-4">
                    <HiOutlineUserCircle className="h-6 w-6" />
                    <h4 className="uppercase">Fahmi Idris</h4>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-3">
                    <h6 className="text-xs">Status :</h6>
                    <p className="text-center text-[13px] font-semibold leading-[16px] text-emerald-500">
                      {STATUS}
                    </p>
                  </div>
                </figcaption>
              </figure>
              <div className="py-8">
                <ul className="flex flex-col space-y-4">
                  {contacts.map((item, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <item.icon className="h-5 w-5" />
                      <Link
                        href={item.href}
                        className="animated-underline font-quicksand text-[13px] font-bold leading-[16px]"
                      >
                        {item.username}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <AboutLayout>
                <div className="flex flex-col items-start space-y-8 first:pt-6">
                  <div>
                    <LogoType className="h-8 w-auto" />
                  </div>
                  <p>
                    Hello, my name is{' '}
                    <span className="font-semibold text-primary-400">Fahmi Idris</span>, but my
                    friends call me <span className="font-semibold text-primary-400">Mi</span> or{' '}
                    <span className="font-semibold text-primary-400">Fahmi</span>. I just graduated
                    from Vocational High School majoring in Informatics Engineering in 2021. I enjoy
                    learning something new and getting feedback to make myself better and improve.
                  </p>
                  <p>
                    I live in Bogor Regency, West Java Province, in a village. Now I concentrate on
                    web programming especially on the{' '}
                    <span className="font-semibold text-primary-400">Frontend Development</span>.
                  </p>
                  <p>
                    I created this website not only as a learning tool but also as a place for me to
                    blog and showcase my projects and as a place to see the history of my
                    experiences.
                  </p>
                  <p>
                    I'm always excited and happy to connect with someone, so if you want to connect
                    with me, I'm very open. You can visit my social media or you can email me.
                  </p>
                  <p>You can find my contacts on the left or in the footer.</p>
                </div>
              </AboutLayout>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPage.Props = {
  Layout: MainLayout,
  meta: {
    title: 'About Fahmi Idris',
    description: "Hi, I'm Fahmi Idris, a frontend engineer based in West Java - Indonesia.",
  },
};

export default AboutPage;
