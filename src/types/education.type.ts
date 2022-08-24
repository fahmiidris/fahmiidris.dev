export type EducationType = {
  id: number;
  title: string;
  description: () => JSX.Element;
  major: string;
  date: {
    start: number;
    end?: number;
  };
  href: string;
  images?: {
    src: string;
    alt: string;
  }[];
};
