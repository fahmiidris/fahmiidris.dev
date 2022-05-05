import * as React from 'react';

type TTech = {
  title: string;
  href: string;
  className?: string;
};

type TStatus = {
  title: string;
  className?: string;
};

export type TProject = {
  id: number;
  title: string;
  description: string;
  href: string;
  image?: any;
  github?: string;
  tech?: TTech[];
  status: TStatus;
};

const javascript: TTech = {
  title: 'JavaScript',
  href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  className: 'text-slate-700 bg-yellow-400',
};

const typescript: TTech = {
  title: 'TypeScript',
  href: 'https://www.typescriptlang.org/',
  className: 'text-white bg-sky-500',
};

const reactjs: TTech = {
  title: 'React.js',
  href: 'https://reactjs.org/',
  className: 'text-white bg-cyan-500',
};

const nextjs: TTech = {
  title: 'Next.js',
  href: 'https://nextjs.org/',
  className: 'text-slate-700 bg-slate-200',
};

const vuejs: TTech = {
  title: 'Vue.js',
  href: 'https://vuejs.org/',
  className: 'text-white bg-emerald-500',
};

const nuxtjs: TTech = {
  title: 'Nuxt.js',
  href: 'https://nuxtjs.org/',
  className: 'text-white bg-emerald-500',
};

const tailwindcss: TTech = {
  title: 'Tailwind CSS',
  href: 'https://tailwindcss.com/',
  className: 'text-slate-700 bg-cyan-400',
};

const chakraui: TTech = {
  title: 'Chakra UI',
  href: 'https://chakra-ui.com/',
  className: 'text-white bg-emerald-400',
};

const deprecated: TStatus = {
  title: 'Deprecated',
  className: 'text-white bg-rose-500',
};

const depelopment: TStatus = {
  title: 'In Development',
  className: 'text-slate-700 bg-cyan-400',
};

export const kloningan: TProject[] = [];

export const random: TProject[] = [
  {
    id: 1,
    title: 'Todo List Management',
    description: 'Todo List Management for Manage Your Task!',
    href: 'https://todo.fahmiidris.dev',
    github: 'https://www.github.com/fahmiidris-labs/todo.fahmiidris.dev',
    tech: [typescript, vuejs, tailwindcss],
    status: depelopment,
  },
  {
    id: 2,
    title: 'Movies and Games Rating',
    description: 'Website That Show Ratings Popular Movies and Games!',
    href: 'https://fahmi-final-project.netlify.app',
    image: require('@/images/projects/movies-and-games-rating.jpg').default,
    github: 'https://github.com/fahmiidris-labs/React-JS-JCC-2021/tree/main/Final-Project',
    tech: [javascript, reactjs, chakraui],
    status: deprecated,
  },
  {
    id: 3,
    title: 'Bansos Ku',
    description: 'Only Form Validation Level Frontend Using Formik!',
    href: 'https://bansosku.netlify.app',
    image: require('@/images/projects/bansosku.jpg').default,
    github: 'https://www.github.com/fahmiidris-labs/bansosku',
    tech: [typescript, nextjs, tailwindcss],
    status: deprecated,
  },
  {
    id: 4,
    title: 'Clover Web App',
    description: 'Embrance New Ways to Farm!',
    href: 'https://clover-app.vercel.app',
    image: require('@/images/projects/clover.jpg').default,
    tech: [javascript, nextjs, tailwindcss],
    status: deprecated,
  },
  {
    id: 5,
    title: 'Buku Angkatan JCC Offline 2021',
    description: 'Tinggal di Desa, Rezeki Kota, Skill Mendunia!',
    href: 'https://jcc-offline-member.netlify.app',
    image: require('@/images/projects/class-book.jpg').default,
    github: 'https://github.com/fahmiidris-labs/buku-angkatan-jcc-2021',
    tech: [typescript, nextjs, tailwindcss],
    status: deprecated,
  },
];
