import * as React from 'react';

export type TProject = {
  id: number;
  title: string;
  description: string;
  image?: any;
};

export const kloningan: TProject[] = [];

export const random: TProject[] = [
  {
    id: 1,
    title: 'Todo List Management',
    description: 'Todo List Management for Manage Your Task!',
  },
  {
    id: 2,
    title: 'Movies and Games Rating',
    description: 'Website That Show Ratings Popular Movies and Games!',
    image: require('@/images/projects/movies-and-games-rating.jpg').default,
  },
  {
    id: 3,
    title: 'Bansos Ku',
    description: 'Only Form Validation Level Frontend Using Formik!',
    image: require('@/images/projects/bansosku.jpg').default,
  },
  {
    id: 4,
    title: 'Clover Web App',
    description: 'Embrance New Ways to Farm!',
    image: require('@/images/projects/clover.jpg').default,
  },
  {
    id: 4,
    title: 'Buku Angkatan JCC Offline 2021',
    description: 'Tinggal di Desa, Rezeki Kota, Skill Mendunia!',
    image: require('@/images/projects/class-book.jpg').default,
  },
];
