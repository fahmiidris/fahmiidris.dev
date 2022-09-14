import * as React from 'react';
import Image from 'next/future/image';

import { Link } from '@/components/link';
import { Illustration } from '@/components/home/illustration';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export const Header = () => {
  const [openSupportModal, setOpenSupportModal] = React.useState(false);

  const greeting = () => {
    const hours = new Date().getHours();

    let greetingText = '';

    if (hours < 12) {
      greetingText = 'Morning';
    } else if (hours < 18) {
      greetingText = 'Afternoon';
    } else {
      greetingText = 'Evening';
    }

    return greetingText;
  };

  return (
    <>
      <header className="relative overflow-hidden bg-slate-50">
        {/* <Image
          src={require('@/img/beams-home.jpg').default}
          alt=""
          className="absolute bottom-0 left-1/2 ml-[-639px] w-[1278px] max-w-none"
          priority={true}
        /> */}

        <div className="absolute inset-0 shadow-[inset_0_-1px_0_rgba(22,27,59,0.04)]" />

        <div className="container relative">
          <div className="flex justify-center text-center lg:pt-5 lg:pb-7 lg:text-left">
            <div className="flex max-w-[37rem] flex-col py-16 lg:py-12">
              <h1 className="mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-800 md:text-4xl">
                A Software Engineer from West Java - Indonesia.
              </h1>

              <div className="order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start">
                {/* <p>
                  <code>{'<Hello.World />'}</code>
                </p>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="w-0.5 fill-current">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <p>
                  <code>{`<Good.${greeting()} />`}</code>
                </p> */}
              </div>

              <p className="mt-4 text-sm text-slate-500">
                This website was established not just as a learning tool, but also as a place for me to write and show
                off my projects, as well as a repository of my past experiences.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-slate-800 py-3 px-4 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                >
                  Send Message
                </Link>
                <Link
                  href="/blogs"
                  className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-transparent py-3 px-4 text-sm font-semibold text-slate-800 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                >
                  Read My Blog
                </Link>
                <button
                  type="button"
                  onClick={() => setOpenSupportModal(true)}
                  className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-transparent py-3 px-4 text-sm font-semibold text-slate-800 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                >
                  Support Fahmi Idris
                </button>
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-auto lg:justify-center">{/* <Illustration /> */}</div>
          </div>
        </div>
      </header>

      <Transition.Root show={openSupportModal} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpenSupportModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-500/75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-full transform overflow-hidden rounded-md bg-white px-4 pt-5 pb-4 text-left transition-all sm:my-8 sm:max-w-md sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                      onClick={() => setOpenSupportModal(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-left sm:mt-0">
                      <Dialog.Title
                        as="h3"
                        className="text-center text-lg font-medium leading-6 text-slate-800 sm:text-left"
                      >
                        Suport Fahmi Idris
                      </Dialog.Title>

                      <div className="mt-6 flow-root w-full">
                        <ul role="list" className="-my-5 divide-y divide-slate-200">
                          {[
                            {
                              title: 'Saweria Fahmi Idris',
                              subtitle:
                                'Thank you! for your support via saweria, so excited to code again! Pluss Ultraaaa!',
                              href: 'https://www.saweria.co/fahmiidris',
                            },
                            {
                              title: 'Trakteer Fahmi Idris',
                              subtitle:
                                'Thanks for the ice cream. Very tasty! so excited to code again! Full Powerrrr!',
                              href: 'https://www.trakteer.id/fahmiidris/tip',
                            },
                            {
                              title: 'GitHub Sponsor Fahmi Idris',
                              subtitle: 'Your support means a lot to keep me motivated to create more website clones!',
                              href: 'https://www.github.com/sponsors/fahmiidris-labs',
                            },
                          ].map((support) => (
                            <li key={support.href} className="py-5">
                              <div className="relative focus-within:ring-2 focus-within:ring-cyan-400">
                                <h3 className="text-sm font-semibold text-slate-800">
                                  <Link href={support.href} className="hover:underline focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {support.title}
                                  </Link>
                                </h3>
                                <p className="mt-1 text-sm text-slate-600 line-clamp-2">{support.subtitle}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex sm:mt-4 sm:hidden sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-base font-medium text-slate-700 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setOpenSupportModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
