import * as React from 'react';
import Image from 'next/future/image';

import { Link } from '@/components/link';
import { Illustration } from '@/components/home/illustration';

export const Header = () => {
  return (
    <header className="relative overflow-hidden bg-slate-50">
      <Image
        src={require('@/img/beams.jpg').default}
        alt=""
        className="absolute bottom-0 left-1/2 ml-[-639px] w-[1278px] max-w-none"
        priority={true}
      />

      <div className="absolute inset-0 shadow-[inset_0_-1px_0_rgba(22,27,59,0.04)]" />

      <div className="container relative">
        <div className="flex justify-center text-center lg:pt-5 lg:pb-7 lg:text-left">
          <div className="flex max-w-[37rem] flex-col py-16 lg:py-12">
            <h1 className="mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-800 md:text-4xl">
              A Software Engineer from West Java - Indonesia.
            </h1>

            <div className="order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start">
              <p>{'<Hello.World />'}</p>

              <svg viewBox="0 0 2 2" aria-hidden="true" className="w-0.5 fill-current">
                <circle cx="1" cy="1" r="1" />
              </svg>

              <p>{'<Good.Morning />'}</p>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              This website was established not just as a learning tool, but also as a place for me to write and show off
              my projects, as well as a repository of my past experiences.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-slate-800 py-3 px-4 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Send Message
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-transparent py-3 px-4 text-sm font-semibold text-slate-800 hover:border-slate-300"
              >
                Read My Blog
              </Link>

              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-transparent py-3 px-4 text-sm font-semibold text-slate-800 hover:border-slate-300"
              >
                Trakteer Fahmi Idris
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-auto lg:justify-center">
            <Illustration />
          </div>
        </div>
      </div>
    </header>
  );
};
