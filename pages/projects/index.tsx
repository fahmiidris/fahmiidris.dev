import { getAppLayout } from "@/components/AppLayout"
import Main from "@/components/Main"

import { NextPageWithLayout } from "@/types/app.type"
import { DesktopComputerIcon } from "@heroicons/react/outline"

const Projects: NextPageWithLayout = () => {

    return (
        <Main title="Projects" className="container">
            <div className="min-h-screen flex flex-col md:flex-row pt-20">
                <div className="flex w-full flex-col space-y-4">
                    {/* Head */}
                    <div className="flex items-center space-x-3">
                        <div>
                            <DesktopComputerIcon className="w-8 h-8 text-gray-600 dark:text-white -rotate-45 animate-wiggle" />
                        </div>
                        <div>
                            <h1 className="text-lg">My Projects</h1>
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
