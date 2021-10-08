import { getAppLayout } from "@/components/AppLayout"
import Main from "@/components/Main"
import ExperienceList from "@/components/pages/experiences/ExperienceList"

import { NextPageWithLayout } from "@/types/app.type"
import { ClipboardListIcon } from "@heroicons/react/outline"

const Experiences: NextPageWithLayout = () => {

    return (
        <Main title="Experiences" className="container">
            <div className="min-h-screen flex flex-col md:flex-row pt-20">
                <div className="flex w-full flex-col space-y-4">
                    {/* Head */}
                    <div className="flex items-center space-x-3">
                        <div>
                            <ClipboardListIcon className="w-8 h-8 text-gray-600 dark:text-white -rotate-45 animate-wiggle" />
                        </div>
                        <div>
                            <h1 className="text-lg">My Experiences</h1>
                            <p className="text-xs md:text-sm">
                                My work experience in programming, non-programming and programming training (bootcamp).
                            </p>
                        </div>
                    </div>

                    {/* Experiences */}
                    <div className="pt-1">
                        <ExperienceList />
                    </div>
                </div>
            </div>
        </Main>
    )
}

Experiences.getLayout = getAppLayout

export default Experiences
