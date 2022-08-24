export type CertificateType = {
  title: string;
  description: string;
  href: string;
  credential: {
    id: string;
    href?: string;
  };
  platform: {
    name: string;
    href: string;
  };
  date: {
    start: number;
    end?: number;
  };
};
