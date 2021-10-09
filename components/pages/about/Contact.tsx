import Link from "@/components/small/Link"

import socials from "@/data/socials"

const Contact: React.FC = () => {
    return (
        <section className="pr-0 lg:pr-14">
            <p className="text-justify">
                I&apos;m always happy to connect with other people, so feel free to contact me:
            </p>

            <ul className="py-4">
                {socials.map((data, i) => (
                    <li key={i} className="pb-2">
                        {data.name} -{" "}
                        <Link className="underline font-semibold" href={data.url} isExternal>
                            {data.url.replace("mailto:", "")}
                        </Link>
                    </li>
                ))}
            </ul>

            <p>
                Also, you can{" "}
                <Link className="underline font-semibold" href="https://docs.google.com/document/d/1zPY2bGjRx-Y-HbEODuB0ZCV8bbiGLU5CaxqW71EJOoo/edit?usp=sharing" isExternal>
                    read my resume here
                </Link>
                . Anyway, thanks for visiting my profile :)
            </p>
        </section>
    )
}

export default Contact
