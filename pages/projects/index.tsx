import { motion } from "framer-motion"
import { HiOutlineDesktopComputer } from "react-icons/hi"

import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"

import { NextPageWithLayout } from "@/types/app.type"

const Projects: NextPageWithLayout = () => {
    return (
        <Main title="Projects" className="container">
            <div className="min-h-screen flex flex-col md:flex-row pt-20">
                <div className="flex w-full flex-col space-y-4">
                    {/* Head */}
                    <div className="flex items-center space-x-3">
                        <div>
                            <HiOutlineDesktopComputer className="w-8 h-8 text-gray-600 dark:text-white -rotate-45 animate-wiggle" />
                        </div>
                        <div>
                            <motion.h1
                                className="text-lg inline-block"
                                initial={{ x: 100 }}
                                animate={{ x: 0 }}
                            >
                                My Projects
                            </motion.h1>
                            <p className="text-xs md:text-sm">
                                Some of the projects that I have been and are currently working on.
                            </p>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="pt-1">
                        {/*  */}
                    </div>
                </div>
            </div>
        </Main>
    )
}

Projects.getLayout = getAppLayout

export default Projects
