
type FooterType = {
    className?: string
}

const Footer: React.FC<FooterType> = ({ className }) => {

    const year: number = new Date().getFullYear()

    return (
        <footer className={`bg-transparent md:fixed md:bottom-0 md:inset-x-0 md:z-50 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center md:justify-end items-center">
                    <div className="font-pop text-sm text-gray-700 dark:text-white py-5">
                        &copy; {year} - Fahmi Idris. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
