import Image from "next/image"

import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"

import { NextPageWithLayout } from "@/types/app.type"
import AboutMe from "@/components/pages/about/AboutMe"
import Contact from "@/components/pages/about/Contact"

const About: NextPageWithLayout = () => {
    return (
        <Main title="About" className="container">
            <div className="min-h-screen flex justify-center items-center">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-28">
                        <div className="relative flex justify-center items-center">
                            <Image src={require("public/me.jpg")} quality={100} className="select-none object-cover rounded-full brightness-110" width={300} height={300} alt="Me" />
                        </div>
                        <div className="lg:col-span-2">
                            <h1 className="pb-4 text-3xl md:text-2xl md:leading-none font-pop lg:tracking-wider text-gray-800 dark:text-white">
                                About Fahmi Idris
                            </h1>
                            <AboutMe />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-12 pb-16">
                        <div className="lg:col-start-2 lg:col-span-2">
                            <h1 className="pb-4 text-3xl md:text-2xl md:leading-none font-pop lg:tracking-wider text-gray-800 dark:text-white">
                                Contact
                            </h1>
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
