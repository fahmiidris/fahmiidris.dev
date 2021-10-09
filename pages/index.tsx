import dynamic from "next/dynamic"
// import { ExternalLinkIcon } from "@heroicons/react/outline"

import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"

import { NextPageWithLayout } from "@/types/app.type"
import Line from "@/components/custom/Line"
import Link from "@/components/small/Link"

const Me = dynamic(() => import("../components/custom/Me"), { ssr: false })

const Home: NextPageWithLayout = () => {
    return (
        <Main title="Home" className="container">
            <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="md:flex-1">
                    <div className="flex flex-col items-start">
                        <h1 className="order-1 py-2 text-3xl md:text-5xl md:leading-none font-pop tracking-wider text-gray-800 dark:text-white">
                            Fahmi Idris
                        </h1>

                        <p className="text-base tracking-wide mb-1">
                            Hello, I&apos;m
                        </p>

                        <p className="order-2 leading-relaxed text-base mr-6">
                            A student and a software engineer. I like exploring things related to technology, especially web technology, and currently focusing on JavaScript and React.js
                        </p>

                        <div className="order-2 w-full py-5 text-center grid grid-cols-1 gap-3 sm:flex sm:gap-0 sm:space-x-6">
                            <Link href="/about" className="text-sm font-semibold bg-gray-700 dark:bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900 hover:ring-2 dark:hover:ring-offset-gray-700 hover:ring-offset-2 hover:ring-blue-500 ease-in-out duration-150">
                                    Learn More <b>About Me</b>
                            </Link>

                            {/* <Link href="/">
                                <a className="flex justify-center items-center space-x-2 text-sm font-semibold bg-blue-500 dark:bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 hover:ring-2 dark:hover:ring-offset-gray-700 hover:ring-offset-2 hover:ring-blue-500 ease-in-out duration-150">
                                    <span>Paperlabs</span>
                                    <ExternalLinkIcon className="w-4 h-4" />
                                </a>
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 flex justify-center items-center pt-10 md:pt-0">
                    <div className="pt-10 md:pt-0">
                        <div className="relative noselect">
                            <Me className="w-[250px] md:w-[300px] h-auto" />
                            <div className="absolute z-10 top-[30px] md:top-[40px]">
                                <Line className="w-[250px] md:w-[300px] h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

Home.getLayout = getAppLayout

export default Home
