import * as React from 'react';
import { UserCircleIcon } from '@heroicons/react/outline';

import { CV } from '@/components/about/cv';
import { Logo } from '@/components/logo';
import { Link } from '@/components/link';
import { Image } from '@/components/image';
import { Skills } from '@/components/about/skills';
import { Spotify } from '@/components/about/spotify';
import { BasicLayout } from '@/layouts/basic-layout';
import { HeadingSection } from '@/components/heading-section';
import { CurrentTechStack } from '@/components/about/current-tech-stack';

import type { TNextPageWithLayout } from 'next';

const AboutPage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="relative mb-20">
        <div className="container flex flex-col space-y-6">
          <HeadingSection
            title="About Fahmi Idris"
            description="Hi, I'm Fahmi Idris, a frontend engineer based in West Java - Indonesia."
            icon={UserCircleIcon}
          />
          <div className="flex flex-col-reverse space-y-8 lg:flex-col">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-6 lg:col-span-2">
                <div className="flex items-center justify-center pt-2 lg:pt-24">
                  <Image.Wrapper className="relative aspect-square w-64 overflow-hidden rounded-full bg-slate-200 ring-4 ring-cyan-400 ring-offset-4 dark:bg-slate-800 dark:ring-offset-slate-900 md:w-72">
                    <Image
                      src={require('@/images/me.jpg').default}
                      alt="Me"
                      layout="fill"
                      placeholder="blur"
                      className="object-cover object-center"
                    />
                  </Image.Wrapper>
                </div>
              </div>
              <div className="col-span-6 space-y-6 lg:col-span-4">
                <section className="flex flex-col items-start space-y-6">
                  <Link href="/" className="pt-6">
                    <span className="sr-only">Logo Fahmi Idris</span>
                    <Logo className="h-8 w-auto" />
                  </Link>
                  <p>
                    Hello, my name is{' '}
                    <span className="font-semibold text-cyan-400">Fahmi Idris</span>, but my friends
                    call me <span className="font-semibold text-cyan-400">Mi</span> or{' '}
                    <span className="font-semibold text-cyan-400">Fahmi</span>. I just graduated
                    from Vocational High School majoring in Informatics Engineering in 2021. I enjoy
                    learning something new and getting feedback to make myself better and improve.
                  </p>
                  <p>
                    I live in Bogor Regency, West Java Province, in a village. Now I concentrate on
                    web programming especially on the{' '}
                    <span className="font-semibold text-cyan-400">Frontend Development</span>.
                  </p>
                  <p>
                    I created this website not only as a learning tool but also as a place for me to
                    blog and showcase my projects and as a place to see the history of my
                    experiences.
                  </p>
                  <p>
                    I&apos;m always excited and happy to connect with someone, so if you want to
                    connect with me, I&apos;m very open. You can visit my social media or you can
                    email me.
                  </p>
                  <p>You can find my contacts in the footer.</p>
                </section>
                <CurrentTechStack />
                <Spotify />
                <Skills />
                <CV />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutPage.Props = {
  Layout: BasicLayout,
  meta: {
    title: 'About Me!',
    description: "Hi, I'm Fahmi Idris, a frontend engineer based in West Java - Indonesia.",
  },
};

export default AboutPage;
