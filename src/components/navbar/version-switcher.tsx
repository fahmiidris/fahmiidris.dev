import * as React from 'react';
import { Menu } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';

import pkg from '../../../package.json';

export const VersionSwitcher = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 rounded-full bg-slate-100 py-1 pl-3 pr-2 text-xs font-semibold leading-5 hover:bg-slate-100/75 focus:outline-none">
        v{pkg.version}
        <ChevronDownIcon className="ml-1 h-4 w-4 overflow-visible" />
      </Menu.Button>

      <Menu.Items className="absolute top-full right-0 mt-1 w-40 rounded-md border border-slate-200 bg-white py-2 text-sm font-semibold leading-6 text-slate-800">
        <Menu.Item disabled>
          <span className="flex items-center justify-between px-3 py-1 text-cyan-400">
            v{pkg.version}
            <CheckIcon className="h-4 w-4" />
          </span>
        </Menu.Item>
        <Menu.Item as={Link} href="https://v1.fahmiidris.dev" className="block px-3 py-1 hover:bg-slate-50">
          v1.0.0
        </Menu.Item>
        <Menu.Item as={Link} href="https://v0.fahmiidris.dev" className="block px-3 py-1 hover:bg-slate-50">
          v0.1.0
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
