import Image from "next/image"
import { motion } from "framer-motion"

import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"
import AboutMe from "@/components/pages/about/AboutMe"
import Contact from "@/components/pages/about/Contact"

import { NextPageWithLayout } from "@/types/app.type"

const About: NextPageWithLayout = () => {
    return (
        <Main title="About" className="container">
            <div className="min-h-screen flex justify-center items-center">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-28">
                        <div className="relative flex justify-center items-center">
                            <div className="w-[300px] h-[300px] relative">
                                <div className="absolute w-full h-full">
                                    <Image
                                        alt="Fahmi Idris A"
                                        className="object-cover rounded-3xl noselect"
                                        src="/me.png"
                                        width={300}
                                        height={300}
                                        quality={100}
                                    />
                                </div>
                                <div className="relative w-full h-full flex justify-center items-end">
                                    <h4 className="w-[250px] h-[50px] flex justify-center items-center font-pop uppercase font-normal text-white rounded-2xl border backdrop-blur-lg">Fahmi Idris</h4>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <motion.h1
                                className="py-4 text-3xl md:text-2xl md:leading-none font-pop lg:tracking-wider text-gray-800 dark:text-white"
                            >
                                About Fahmi Idris
                            </motion.h1>
                            <AboutMe />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-12 pb-16">
                        <div className="lg:col-start-2 lg:col-span-2">
                            <motion.h1
                                className="pb-4 text-3xl md:text-2xl md:leading-none font-pop lg:tracking-wider text-gray-800 dark:text-white"
                            >
                                Contact
                            </motion.h1>
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

About.getLayout = getAppLayout

export default About
