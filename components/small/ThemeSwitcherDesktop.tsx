import { MoonIcon, SunIcon } from "@heroicons/react/outline"
import { useTheme } from "next-themes"

const ThemeSwitcherDesktop: React.FC = () => {

    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <button type="button" onClick={() => setTheme(isDark ? "light" : "dark")} className="inline-flex justify-center items-center text-white bg-gray-600 dark:bg-gray-700 px-2 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-900 duration-100 ease-in-out">
            <span className="sr-only">Dark or Light</span>
            {!isDark ? (
                <SunIcon className="w-5 h-5" />
            ) : (
                <MoonIcon className="w-5 h-5" />
            )}
        </button>
    )
}

export default ThemeSwitcherDesktop