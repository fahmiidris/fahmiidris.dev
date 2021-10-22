import Image from "next/image"
import { motion } from "framer-motion"
import { HiExternalLink } from "react-icons/hi"

import Link from "@/components/small/Link"
import Button from "@/components/small/Button"

import { li } from "@/utils/animation"
import { classNames } from "@/utils/helper"

import { ProjectsType } from "@/types/projects.type"

const colorMap: Record<string, string> = {
    "React Js": "bg-blue-500 dark:bg-blue-600 text-white",
    "Next Js": "bg-gray-700 dark:bg-gray-800 text-white",
    "TypeScript": "bg-blue-500 dark:bg-blue-600 text-white",
    "Tailwind CSS": "bg-blue-400 text-gray-700 text-white",
}

const ProjectItem: React.FC<ProjectsType> = ({ name, description, time, image, category, tech, meta }) => {
    return (
        <div>
            <motion.div
                className="p-3 lg:p-0 lg:px-7 lg:py-6 rounded-xl border border-gray-300 dark:border-transparent bg-white dark:bg-gray-600"
                variants={li}
            >
                <div className="flex flex-col-reverse md:flex-row justify-between items-start">
                    <div>
                        <h3 className="text-lg py-1 leading-tight">{name}</h3>
                        <p className="text-xs">{time}</p>
                    </div>
                    <div>
                        <h4 className="text-xs bg-none md:bg-red-500 md:px-3 md:py-1 md:rounded-lg">
                            {category}
                        </h4>
                    </div>
                </div>
                <div className="py-3">
                    <div className="pt-2 pb-1">
                        <Image src={image} alt="Thumbnail" placeholder="blur" className="object-cover" />
                    </div>
                    <div className="flex flex-wrap pt-1 pb-2 space-x-2">
                        {tech.map((tech, i) => (
                            <div
                                key={i}
                                className={classNames(
                                    "rounded-md text-xs uppercase px-2 py-1 font-bold",
                                    colorMap[tech.name]
                                        ? colorMap[tech.name]
                                        : "bg-gray-300 dark:bg-white text-gray-700"
                                )}
                            >
                                {tech.link && (
                                    <Link href={tech.link} className="no-underline" isExternal>
                                        {tech.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm font-light text-justify">
                        {description}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center space-y-3 lg:space-y-0">
                    <Link href={`${meta.link}`} className="hover:underline text-blue-500 font-pop text-md md:text-base" isExternal>
                        {meta.link}
                    </Link>
                    <Button.Link href={`${meta.repo}`} isExternal className="space-x-3 dark:hover:ring-offset-gray-600">
                        <span>Repo Github</span>
                        <HiExternalLink className="w-5 h-5" />
                    </Button.Link>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectItem
