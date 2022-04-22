import * as React from 'react';
import clsx from 'clsx';
import { Listbox } from '@headlessui/react';
import { MoonIcon, SunIcon, DesktopComputerIcon } from '@heroicons/react/outline';

import { useTheme } from '@/hooks/useTheme';

type TSetting = {
  value: string;
  label: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

type TThemeSwitcher = {
  className?: string;
};

const settings: TSetting[] = [
  {
    value: 'light',
    label: 'Light',
    icon: SunIcon,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: MoonIcon,
  },
  {
    value: 'system',
    label: 'System',
    icon: DesktopComputerIcon,
  },
];

export const ThemeSwitcher = ({ className = 'mt-2' }: TThemeSwitcher): JSX.Element => {
  let { setting, setSetting } = useTheme();

  return (
    <Listbox value={setting} onChange={setSetting}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button type="button">
        <span className="dark:hidden">
          <SunIcon
            className={clsx('h-[22px] w-[22px]', {
              'stroke-cyan-400': setting !== 'dark',
            })}
          />
        </span>
        <span className="hidden dark:inline">
          <MoonIcon
            className={clsx('h-[22px] w-[22px]', {
              'stroke-cyan-400': setting !== 'light',
            })}
          />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          'absolute top-full right-4 z-50 w-36 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 text-sm font-semibold dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-0 xl:right-0',
          className
        )}
      >
        {settings.map(({ value, label, icon: Icon }) => (
          <Listbox.Option key={value} value={value} as={React.Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  'flex cursor-pointer items-center py-1 px-2',
                  selected && 'text-cyan-400',
                  active && 'bg-slate-50 dark:bg-slate-600/30'
                )}
              >
                <Icon
                  className={clsx('mr-2 h-[22px] w-[22px]', {
                    'stroke-cyan-400': selected,
                  })}
                />
                {label}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
