import { useTheme } from "next-themes"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi"

const ThemeSwitcherMobile: React.FC = () => {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <button type="button" onClick={() => setTheme(isDark ? "light" : "dark")} className="inline-flex items-center justify-center p-2 rounded-lg text-white bg-gray-600 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-900 duration-150 ease-in-out">
            <span className="sr-only">Dark or Light</span>
            {!isDark ? (
                <HiOutlineSun className="block h-6 w-6" aria-hidden="true" />
            ) : (
                <HiOutlineMoon className="block h-6 w-6" aria-hidden="true" />
            )}
        </button>
    )
}

export default ThemeSwitcherMobile