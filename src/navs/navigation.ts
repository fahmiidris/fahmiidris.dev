type TLink = {
  name: string;
  href: string;
};

type TNavigation = {
  pages: TLink[];
};

export const navigation: TNavigation = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
  ],
};
