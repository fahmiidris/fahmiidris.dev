import { motion } from "framer-motion"

import { LogoAndMarkType } from "@/types/navbar.type"

const ApplicationLogo: React.FC<LogoAndMarkType> = ({ className }) => {
    return (
        <svg className={className} width={490} height={500} viewBox="0 0 490 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect width={250} height={250} rx={58} fill="#38BDF8"
                animate={{
                    x: [0, 0, 240, 240, 0],
                    y: [0, 250, 250, 0, 0]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeatType: "loop",
                    repeatDelay: 2,
                    repeat: Infinity
                }}
            />
            <rect x={115} y={125} width={250} height={250} rx={58} fill="#0EA5E9" />
            <motion.rect x={240} y={250} width={250} height={250} rx={58} fill="#0284C7"
                animate={{
                    x: [0, 0, -240, -240, 0],
                    y: [0, -250, -250, 0, 0],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeatType: "loop",
                    repeatDelay: 2,
                    repeat: Infinity
                }}
            />
        </svg>
    )
}

export default ApplicationLogo
