import { motion } from "framer-motion"

import Link from "@/components/small/Link"

import { li, ul } from "@/utils/animation"

import socials from "@/data/socials"

const Contact: React.FC = () => {
    return (
        <section className="pr-0 lg:pr-14">
            <address className="not-italic">
                <p className="text-justify">
                    I&apos;m always happy to connect with other people, so feel free to contact me:
                </p>
                <motion.ul
                    className="py-4"
                    variants={ul}
                    initial="hidden"
                    animate="visible"
                >
                    {socials.map((social, i) => (
                        <motion.li key={i} className="pb-2" variants={li}>
                            {social.name} -{" "}
                            <Link href={social.url} isExternal>
                                {social.url.replace("mailto:", "")}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
                <p>
                    Link resume coming soon :&apos;)
                </p>
            </address>
        </section>
    )
}

export default Contact
