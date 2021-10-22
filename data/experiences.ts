import { formatDate } from "@/utils/helper"

import { ExperiencesType } from "@/types/experiences.type"

export const experiencesData: ExperiencesType[] = [
    {
        name: "Candradimuka Jabar Coding Camp 2021 Bootcamp",
        category: "Bootcamp",
        description: "Join the JCC 2021 bootcamp (reactjs class) for a month starting from August 2021 to September 2021.",
        time: `${formatDate("2021-8-25")} - ${formatDate("2021-9-25")}`,
        meta: {
            link: "https://jabarcodingcamp.id"
        }
    },
]