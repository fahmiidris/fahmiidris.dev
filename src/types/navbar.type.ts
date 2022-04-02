type TLink = {
  name: string;
  href: string;
};

export type TSection = {
  id: string;
  name: string;
  items: TLink[];
};

type TCategories = {
  id: string;
  name: string;
  sections: TSection[];
  featured: { name: string; href: string; imageSrc: string; imageAlt: string }[];
};

export type TNavigation = {
  categories: TCategories[];
  pages: TLink[];
};
