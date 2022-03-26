import { useTheme } from 'next-themes';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const isDark: boolean = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group rounded-lg border border-gray-100 bg-white p-2 text-gray-400 duration-200 ease-in-out hover:bg-gray-100 md:text-gray-700"
    >
      <span className="sr-only">Dark or Light</span>
      {!isDark ? (
        <HiOutlineSun className="h-6 w-6 group-hover:animate-spin-slow md:h-5 md:w-5" />
      ) : (
        <HiOutlineMoon className="h-6 w-6 group-hover:animate-wiggle md:h-5 md:w-5" />
      )}
    </button>
  );
};
