import { motion } from "framer-motion"

import ProjectItem from "./ProjectItem"

import { projectsData } from "@/data/projects"

import { ul } from "@/utils/animation"

const ProjectList: React.FC = () => {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={ul}
            initial="hidden"
            animate="visible"
        >
            {projectsData.map((project, i) => (
                <ProjectItem key={i} {...project} />
            ))}
        </motion.div>
    )
}

export default ProjectList
