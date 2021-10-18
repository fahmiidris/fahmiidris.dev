import Link from "@/components/small/Link"

const AboutMe: React.FC = () => {
    return (
        <section className="pr-0 lg:pr-14">
            <p className="text-left">
                Hi, my name is <b>Fahmi Idris</b>, my friends usually call me <b>Mi</b> or <b>Fahmi</b>.{" "}
                I just graduated in 2021 from{" "}
                <Link href="https://www.facebook.com/smk1triplejciteureup" isExternal>
                    Triple J 1 Vocational High School
                </Link>{" "}
                majoring in Informatics Engineering. I like exploring things related to technology. You can visit{" "}
                <Link href="https://github.com/fahmiidris-labs" isExternal>
                    my github
                </Link>
                .{" "}
                however, I&apos;m new to github.com, so the activity and stats aren&apos;t that impressive.
            </p>
            <p className="py-6 text-left">
                I live in a village in Bogor Regency, West Java Province.{" "}
                and now I&apos;m focusing on learning programming and being a freelancer.
            </p>
            <p className="text-left">
                I prefer and like to sit in front of the laptop.{" "}
                explore the virtual world, see what is happening in the world through this small window,{" "}
                playing game online, etc. but in a reasonable time. Other than that,{" "}
                I enjoy listening to music and hanging out with my friends.
            </p>
        </section>
    )
}

export default AboutMe
