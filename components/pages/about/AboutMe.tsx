import Link from "@/components/small/Link"

const AboutMe: React.FC = () => {
    return (
        <section className="pr-0 lg:pr-14">
            <p className="text-left">
                Hello, my name is <b className="text-blue-500">Fahmi Idris</b>, however my friends refer to me as <b className="text-blue-500">Mi</b> or <b className="text-blue-500">Fahmi</b>.{" "}
                I recently graduated from{" "}
                <Link href="https://www.facebook.com/smk1triplejciteureup" isExternal>
                    Triple J 1 Vocational High School
                </Link>
                .{" "}
                with a major in Informatics Engineering in 2021. I enjoy learning about new technologies.{" "}
                <Link href="https://github.com/fahmiidris-labs" isExternal>
                    My github account may be found here
                </Link>
                .{" "}
                However, because I&apos;m new to github.com, the activity and statistics aren&apos;t that spectacular.
            </p>
            <p className="py-6 text-left">
                I live in Bogor Regency, West Java Province, in a village. Now I&apos;m concentrating on programming and working as a freelancer.
            </p>
            <p className="text-left">
                I prefer and enjoy sitting in front of the computer. Explore the virtual world,{" "}
                see what&apos;s going on around the world through this small window, play online games, and so on, all while keeping track of time.{" "}
                Apart from that, I enjoy listening to music and socializing with my friends.
            </p>
        </section>
    )
}

export default AboutMe
