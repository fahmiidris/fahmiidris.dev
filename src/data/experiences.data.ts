import { formatDate } from '@/utils/helpers';

import type { TExperience } from '@/types/data/experience.type';

export const experiences: TExperience[] = [
  {
    id: 1,
    title: 'Field Work Practice at Defense University - LPPPM - Kapus Eva',
    subtitle: 'Field Practice',
    description:
      'Implementing Field Work Practice at the Defense University for 3 Months as a Vocational Graduation Requirement.',
    url: 'https://www.idu.ac.id/',
    date: `${formatDate('10-23-2019')} - ${formatDate('02-07-2020')}`,
  },
  {
    id: 2,
    title: 'Candradimuka Jabar Coding Camp 2021 Bootcamp - Online',
    subtitle: 'Online Bootcamp',
    description:
      'Join the JCC 2021 bootcamp - online phase (react.js class) for a month starting from August 2021 to September 2021.',
    url: 'https://www.jabarcodingcamp.id/',
    date: `${formatDate('08-25-2021')} - ${formatDate('09-25-2021')}`,
  },
  {
    id: 3,
    title: 'Candradimuka Jabar Coding Camp 2020 Bootcamp - Offline',
    subtitle: 'Offline Bootcamp',
    description:
      'Passed into the offline phase of Jabar Coding Camp 2021 taken from the best participants in the class.',
    url: 'https://www.jabarcodingcamp.id/',
    date: `${formatDate('10-06-2021')} - ${formatDate('03-31-2022')}`,
  },
  {
    id: 4,
    title: 'Internship as a Frontend Web Developer at eFishery',
    subtitle: 'Internship',
    description:
      'Internship at eFishery to be precise in the Feeder Ops section as a Frontend Engineer.',
    url: 'https://www.efishery.com/',
    date: `${formatDate('03-01-2022')} - ${formatDate('06-01-2022')}`,
  },
];
