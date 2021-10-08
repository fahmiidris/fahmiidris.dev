import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"

import { NextPageWithLayout } from "@/types/app.type"

const About: NextPageWithLayout = () => {
    return (
        <Main title="About" className="container">
            <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center">
                
            </div>
        </Main>
    )
}

About.getLayout = getAppLayout

export default About
