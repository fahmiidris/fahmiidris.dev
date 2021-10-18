import { motion } from "framer-motion"

import Seo from "./custom/Seo"

import { classNames } from "@/utils/helper"

type MainType = {
    title: string,
    className?: string
}

const Main: React.FC<MainType> = ({ title, className, children }) => {
    return (
        <>
            <Seo title={`${title} - ${process.env.APP_NAME}`} />
            <motion.main className={classNames("container", className)}>
                {children}
            </motion.main>
        </>
    )
}

export default Main