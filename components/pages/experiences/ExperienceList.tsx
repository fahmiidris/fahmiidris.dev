import { motion } from "framer-motion"

import ExperienceItem from "./ExperienceItem"

import { ul } from "@/utils/animation"

import { experiencesData } from "@/data/experiences"

const ExperienceList: React.FC = () => {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={ul}
            initial="hidden"
            animate="visible"
        >
            {experiencesData.map((experience, i) => (
                <ExperienceItem key={i} {...experience} />
            ))}
        </motion.div>
    )
}

export default ExperienceList
