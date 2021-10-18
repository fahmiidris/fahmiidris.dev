import { motion } from "framer-motion"

import Link from "@/components/small/Link"

import { li } from "@/utils/animation"

import { ExperiencesType } from "@/types/experiences.type"

const ExperienceItem: React.FC<ExperiencesType> = ({ name, description, time, category, meta }) => {
    return (
        <motion.div
            className="px-7 py-6 rounded-xl border border-gray-300 dark:border-none bg-white dark:bg-gray-600"
            variants={li}
        >
            <div>
                <p className="text-xs">
                    {category}
                </p>
                <h3 className="text-lg py-1 leading-tight">{name}</h3>
                <p className="text-xs">{time}</p>
            </div>
            <div className="py-3">
                <p className="text-sm font-light text-justify">
                    {description}
                </p>
            </div>
            <div>
                <Link href={`${meta.link}`} className="hover:underline text-blue-500 font-pop text-xs md:text-base" isExternal>
                    {meta.link}
                </Link>
            </div>
        </motion.div>
    )
}

export default ExperienceItem
