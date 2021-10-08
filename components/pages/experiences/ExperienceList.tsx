import { experiencesData } from "@/data/experiences"
import ExperienceItem from "./ExperienceItem"

const ExperienceList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiencesData.map((experience, i) => (
                <ExperienceItem key={i} {...experience} />
            ))}
        </div>
    )
}

export default ExperienceList
