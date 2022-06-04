import * as React from 'react';
import create from 'zustand';

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

type SettingType = {
    setting: string;
    setSetting: (setting: string) => void;
};

const useSetting = create<SettingType>((set) => ({
    setting: 'system',
    setSetting: (setting) => set({ setting }),
}));

const update = () => {
    const checkExistingTheme = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (checkExistingTheme) {
        document.documentElement.classList.add('dark', 'changing-theme');
    } else {
        document.documentElement.classList.remove('dark', 'changing-theme');
    }

    window.setTimeout(() => {
        document.documentElement.classList.remove('changing-theme');
    });
};

export const useTheme = () => {
    const { setting, setSetting } = useSetting();

    const initial = React.useRef(true);

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
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        mediaQuery.addEventListener('change', update);

        const onStorage = () => {
            update();
            localStorage.theme === 'light' || localStorage.theme === 'dark'
                ? setSetting(localStorage.theme)
                : setSetting('system');
        };

        window.addEventListener('storage', onStorage);

        return () => {
            mediaQuery.removeEventListener('change', update);
            window.removeEventListener('storage', onStorage);
        };
    }, [setSetting]);

    return { setting, setSetting };
};
