import { motion } from "framer-motion"
import { HiExternalLink } from "react-icons/hi"

import Link from "@/components/small/Link"
import TechStack from "./TechStack"

const HeroInfo: React.FC = () => {
    return (
        <article className="flex flex-col items-start">
            <motion.h1
                className="order-1 py-2 text-3xl md:text-5xl md:leading-none font-pop tracking-wider text-gray-800 dark:text-white"
                initial={{ x: 100 }}
                animate={{ x: 0 }}
            >
                Fahmi Idris
            </motion.h1>
            <p className="text-base tracking-wide mb-1">Hello, I&apos;m</p>
            <p className="order-2 leading-relaxed text-base mr-6">
            A software developer and a student. I enjoy learning new things about technology,{" "}
            particularly web technology, and am now concentrating on JavaScript and React. js (Next Js)
            </p>
            <div className="order-3">
                <TechStack />
            </div>
            <div className="order-4 w-full py-5 text-center grid grid-cols-1 gap-3 sm:flex sm:gap-0 sm:space-x-6">
                <Link href="/about" className="text-sm font-semibold bg-gray-700 dark:bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900 hover:ring-2 dark:hover:ring-offset-gray-700 hover:ring-offset-2 hover:ring-blue-500 ease-in-out duration-150">
                    Learn More <b>About Me</b>
                </Link>
                <Link href="/" className="flex justify-center items-center space-x-2 text-sm font-semibold bg-blue-500 dark:bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 hover:ring-2 dark:hover:ring-offset-gray-700 hover:ring-offset-2 hover:ring-blue-500 ease-in-out duration-150">
                    <span>Screencast</span>
                    <HiExternalLink className="w-4 h-4" />
                </Link>
            </div>
        </article>
    )
}

export default HeroInfo
