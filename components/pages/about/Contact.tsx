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
                {/* Also, you can{" "}
                <Link className="underline font-semibold" href="/" isExternal>
                    read my resume here
                </Link>
                . Anyway, thanks for visiting my profile. */}
                Link resume coming soon :&apos;)
            </p>
        </section>
    )
}

export default Contact
