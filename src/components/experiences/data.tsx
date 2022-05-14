import * as React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import { Link } from '@/components/link';

export type TExperience = {
  id: number;
  title: string;
  time: string;
  images?: {
    src: any;
    alt: string;
  }[];
  body: () => JSX.Element;
};

export let data: TExperience[] = [
  {
    id: 1,
    title: 'Field Work Practice at Defense University - LPPPM - Kapus Eva',
    time: 'October 23th, 2019 - February 7th, 2020',
    images: [
      {
        src: require('@/images/sidang-pkl.jpg').default,
        alt: 'Sidang PKL',
      },
    ],
    body: () => (
      <>
        <p>
          Implementing Field Work Practice at the Defense University for 3 Months as a Vocational
          Graduation Requirement.
        </p>
        <Link
          href="https://drive.google.com/file/d/1W3BUSYCBfrLVM0lSlpJSzZVi5_-RVakE/view?usp=sharing"
          openNewTab={true}
          className="inline-flex items-center rounded-md border border-transparent bg-cyan-400 px-4 py-2 text-xs text-white no-underline hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600"
        >
          View Certificate
        </Link>
      </>
    ),
  },
  {
    id: 2,
    title: 'Candradimuka Jabar Coding Camp 2021 Bootcamp - Online',
    time: 'August 25th, 2021 - September 25th, 2021',
    images: [
      {
        src: require('@/images/jcc-online-1.jpg').default,
        alt: 'JCC Online 2021 Bootcamp',
      },
    ],
    body: () => (
      <>
        <p>
          Join the JCC 2021 bootcamp - online phase (react.js class) for a month starting from
          August 2021 to September 2021.
        </p>
        <Link
          href="https://drive.google.com/file/d/1whSsmdfx18tIxbacbXdrVb8sFdOO2fsw/view?usp=sharing"
          openNewTab={true}
          className="inline-flex items-center rounded-md border border-transparent bg-cyan-400 px-4 py-2 text-xs text-white no-underline hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600"
        >
          View e-Certificate
        </Link>
      </>
    ),
  },
  {
    id: 3,
    title: 'Candradimuka Jabar Coding Camp 2020 Bootcamp - Offline',
    time: 'October 6th, 2021 - March 31th, 2022',
    images: [
      {
        src: require('@/images/jcc-offline-1.jpg').default,
        alt: 'JCC 2021 Bootcamp',
      },
      {
        src: require('@/images/jcc-offline-3.jpg').default,
        alt: 'JCC 2021 Bootcamp',
      },
      {
        src: require('@/images/jcc-offline-3.jpg').default,
        alt: 'JCC 2021 Bootcamp',
      },
    ],
    body: () => (
      <>
        <p>
          Passed into the offline phase of Jabar Coding Camp 2021 taken from the best participants
          in the class.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'Internship as a Frontend Web Developer at eFishery',
    time: 'February 14th, 2022 - May 14th, 2022',
    images: [
      {
        src: require('@/images/meet-aquatroops.jpg').default,
        alt: 'Meet Aquatroops',
      },
      {
        src: require('@/images/sprint-review.jpg').default,
        alt: 'Sprint Review',
      },
      {
        src: require('@/images/graduation.jpg').default,
        alt: 'Graduation',
      },
    ],
    body: () => (
      <>
        <p>
          Internship at eFishery to be precise in the Feeder Ops section as a Frontend Engineer.
        </p>
        <div className="pb-5">
          <h3 className="text-sm text-slate-800 dark:text-slate-200">My Graduation Presentation</h3>
          <div className="flex items-center justify-start space-x-2">
            <div className="flex items-center space-x-1">
              <Link
                href="https://drive.google.com/file/d/1NpheHjd3l8UG1jYLn_nXm1D-mZBwODG7/view?usp=sharing"
                className="animated-underline text-xs font-semibold text-slate-800 no-underline dark:text-slate-200"
                openNewTab={true}
              >
                PDF Version
              </Link>
              <ExternalLinkIcon className="h-[16px] w-[16px] text-slate-800 dark:text-slate-200" />
            </div>
            <span className="pr-[2px] text-xs font-semibold dark:text-slate-400">or</span>
            <div className="flex items-center space-x-1">
              <Link
                href="https://graduation-efishery.fahmiidris.dev"
                className="animated-underline text-xs font-semibold text-slate-800 no-underline dark:text-slate-200"
                openNewTab={true}
              >
                Web Version
              </Link>
              <ExternalLinkIcon className="h-[16px] w-[16px] text-slate-800 dark:text-slate-200" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* <Link
            href="#"
            openNewTab={true}
            className="inline-flex items-center rounded-md border border-transparent bg-cyan-400 px-4 py-2 text-xs text-white no-underline hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600"
          >
            View e-Certificate
          </Link> */}
          <Link
            href="https://docs.google.com/document/d/1mCpq6G0aqdBvi3nQsi68VlY6Pp-PwI4zgSGj7F3t0sY/edit?usp=sharing"
            openNewTab={true}
            className="inline-flex items-center rounded-md border border-slate-400/20 bg-transparent px-4 py-2 text-xs text-slate-700 no-underline hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
          >
            Feedback for Me
          </Link>
        </div>
      </>
    ),
  },
];
