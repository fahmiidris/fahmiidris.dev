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
  status: TStatus[];
  body?: () => JSX.Element;
};

export const javascript: TTech = {
  title: 'JavaScript',
  href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  className: 'text-slate-700 bg-yellow-400',
};

export const typescript: TTech = {
  title: 'TypeScript',
  href: 'https://www.typescriptlang.org/',
  className: 'text-white bg-sky-500',
};

export const reactjs: TTech = {
  title: 'React.js',
  href: 'https://reactjs.org/',
  className: 'text-white bg-cyan-500',
};

export const nextjs: TTech = {
  title: 'Next.js',
  href: 'https://nextjs.org/',
  className: 'text-slate-700 bg-slate-200',
};

export const vuejs: TTech = {
  title: 'Vue.js',
  href: 'https://vuejs.org/',
  className: 'text-white bg-emerald-500',
};

export const nuxtjs: TTech = {
  title: 'Nuxt.js',
  href: 'https://nuxtjs.org/',
  className: 'text-white bg-emerald-500',
};

export const tailwindcss: TTech = {
  title: 'Tailwind CSS',
  href: 'https://tailwindcss.com/',
  className: 'text-slate-700 bg-cyan-400',
};

export const chakraui: TTech = {
  title: 'Chakra UI',
  href: 'https://chakra-ui.com/',
  className: 'text-white bg-emerald-400',
};

export const deprecated: TStatus = {
  title: 'Deprecated',
  className: 'text-white bg-rose-500',
};

export const depelopment: TStatus = {
  title: 'In Development',
  className: 'text-slate-700 bg-cyan-400',
};

export const finished: TStatus = {
  title: 'Finished',
  className: 'text-white bg-emerald-500',
};
