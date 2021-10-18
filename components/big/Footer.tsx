import { classNames } from "@/utils/helper"

type FooterType = {
    className?: string
}

const Footer: React.FC<FooterType> = ({ className }) => {
    const year: number = new Date().getFullYear()

    return (
        <footer>
            <div className={classNames("bg-transparent md:fixed md:bottom-0 md:inset-x-0 md:z-20", className)}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center md:justify-end items-center">
                        <h2 className="font-pop text-sm font-normal text-gray-700 dark:text-white py-5">
                            &copy; {year} - Fahmi Idris. All Rights Reserved.
                        </h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
