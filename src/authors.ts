import { StaticImageData } from 'next/image';

import fahmiidrisAvatar from '@/images/me.png';

export type TAuthor = {
  name: string;
  github: string;
  avatar: StaticImageData;
};

export const fahmiidris: TAuthor = {
  name: 'Fahmi Idris',
  github: 'fahmiidris-labs',
  avatar: fahmiidrisAvatar,
};
