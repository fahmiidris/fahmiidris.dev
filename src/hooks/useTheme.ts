import * as React from 'react';
import create from 'zustand';

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

type TSettingState = {
  setting: string;
  setSetting: (setting: string) => void;
};

const useSetting = create<TSettingState>((set) => ({
  setting: 'system',
  setSetting: (setting) => set({ setting }),
}));

const update = (): void => {
  const checkExistingTheme: boolean =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (checkExistingTheme) {
    document.documentElement.classList.add('dark', 'changing-theme');
  } else {
    document.documentElement.classList.remove('dark', 'changing-theme');
  }

  window.setTimeout((): void => {
    document.documentElement.classList.remove('changing-theme');
  });
};

export const useTheme = (): TSettingState => {
  const { setting, setSetting } = useSetting();
  const initial: React.MutableRefObject<boolean> = React.useRef<boolean>(true);

  useIsomorphicLayoutEffect(() => {
    if (localStorage.theme === 'light' || localStorage.theme === 'dark') {
      setSetting(localStorage.theme);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (setting === 'system') {
      localStorage.removeItem('theme');
    } else if (setting === 'light' || setting === 'dark') {
      localStorage.setItem('theme', setting);
    }

    initial.current ? (initial.current = false) : update();
  }, [setting]);

  React.useEffect(() => {
    let mediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', update);

    const onStorage = (): void => {
      update();
      localStorage.theme === 'light' || localStorage.theme === 'dark'
        ? setSetting(localStorage.theme)
        : setSetting('system');
    };

    window.addEventListener('storage', onStorage);

    return (): void => {
      mediaQuery.removeEventListener('change', update);
      window.removeEventListener('storage', onStorage);
    };
  }, [setSetting]);

  return { setting, setSetting };
};
