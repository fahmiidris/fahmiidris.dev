import * as React from 'react';
import { HiCheck, HiChevronDown } from 'react-icons/hi';

import { Dropdown } from '@/components/molecules/fi-dropdown/dropdown';

import { classNames } from '@/utils/helpers';

type TLanguage = {
  name: string;
  checked: boolean;
};

const languages: TLanguage[] = [
  {
    name: 'English',
    checked: true,
  },
  {
    name: 'Indonesian',
    checked: false,
  },
];

export const Internationalization = () => {
  return (
    <Dropdown
      align="right"
      width="48"
      trigger={
        <button className="flex items-center py-2 text-xs font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400">
          <span>EN</span>
          <div className="ml-1">
            <HiChevronDown className="h-4 w-4 fill-current" />
          </div>
        </button>
      }
    >
      {languages.map((language, idx) => (
        <Dropdown.Button key={idx} type="button">
          <div className="flex items-center justify-between text-sm">
            <span className={classNames(language.checked && 'font-semibold')}>{language.name}</span>
            {language.checked && <HiCheck className="h-5 w-5 text-emerald-500" />}
          </div>
        </Dropdown.Button>
      ))}
    </Dropdown>
  );
};
