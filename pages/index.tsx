import Main from "@/components/Main"
import HeroInfo from "@/components/pages/home/HeroInfo"
import HeroImage from "@/components/pages/home/HeroImage"
import { getAppLayout } from "@/components/AppLayout"

import { NextPageWithLayout } from "@/types/app.type"

const Home: NextPageWithLayout = () => {
    return (
        <Main title="Home">
            <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center">
                <section className="md:flex-1">
                    <HeroInfo />
                </section>
                <section className="md:flex-1 flex justify-center items-center pt-10 md:pt-0">
                    <HeroImage />
                </section>
            </div>
        </Main>
    )
}

Home.getLayout = getAppLayout

export default Home
