import * as React from 'react';
import { motion } from 'framer-motion';

import { Link } from '@/components/atoms/fi-link/link';

import type { TExperience } from '@/types/data/experience.type';

type TExperienceCard = TExperience;

export const ExperienceCard = ({
  id,
  title,
  subtitle,
  description,
  url,
  date,
}: TExperienceCard) => {
  return (
    <motion.li
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className="relative col-span-4 rounded-lg border border-gray-200 p-3"
    >
      <div className="absolute -right-2 -top-2 flex space-x-1">
        {/* <button
          type="button"
          className="flex items-center justify-center rounded-md border border-primary-300 bg-primary-50 px-1.5 font-quicksand text-xs font-bold text-gray-700 duration-200 ease-in-out hover:bg-primary-100"
        >
          View Detail
        </button> */}
        <div className="flex aspect-square h-6 items-center justify-center rounded-md border border-gray-200 bg-white text-xs font-semibold">
          {id}
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <p className="font-quicksand text-xs font-semibold text-primary-400">{subtitle}</p>
          <h3 className="font-quicksand text-sm font-bold">{title}</h3>
          <p className="font-quicksand text-xs font-semibold">{date}</p>
        </div>
        <div>
          <p className="h-[55px] font-quicksand text-[13px] font-bold leading-[18px] text-gray-500 line-clamp-3">
            {description}
          </p>
        </div>
        <div>
          <Link
            href={url}
            isExternal={true}
            className="inline-flex items-center font-quicksand text-xs font-semibold text-primary-400"
          >
            {url}
          </Link>
        </div>
      </div>
    </motion.li>
  );
};
