import { TNavigation } from '@/types/navbar.type';

export const navigation: TNavigation = {
  categories: [
    // {
    //   id: 'fahmiidris-apps',
    //   name: 'Fahmi Idris Apps',
    //   featured: [
    //     {
    //       name: '',
    //       href: '#',
    //       imageSrc: '',
    //       imageAlt: '',
    //     },
    //   ],
    //   sections: [
    //     {
    //       id: '',
    //       name: '',
    //       items: [{ name: '', href: '#' }],
    //     },
    //   ],
    // },
  ],
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
  ],
};
