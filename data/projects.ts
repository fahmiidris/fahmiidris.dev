import { formatDate } from "@/utils/helper"

import { ProjectsType } from "@/types/projects.type"

type TechType = {
    name: string,
    link: string,
}

const reactjs: TechType = {
    name: "React Js",
    link: "https://reactjs.org"
}

const nextjs: TechType = {
    name: "Next Js",
    link: "https://nextjs.org",
}

const typescript: TechType = {
    name: "TypeScript",
    link: "https://https://www.typescriptlang.org.org",
}

const tailwindcss: TechType = {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com",
}

export const projectsData: ProjectsType[] = [
    {
        category: "Programming",
        name: "Bansos Ku",
        description: "Bansosku is a web application to confirm social assistance data collection, this application will be used by RW via cellphone. Bansosku is just a frontend without a backend, this is the result of the 2021 Jabar Coding Camp challenge phase.",
        time: `${formatDate("2021-10-10")} - ${formatDate("2021-10-15")}`,
        image: require("public/images/projects/bansosku.png"),
        tech: [nextjs, typescript, tailwindcss],
        meta: {
            repo: "https://github.com/fahmiidris-labs/bansosku",
            link: "https://bansosku.vercel.app"
        }
    },
    {
        category: "Programming",
        name: "Personal Web Fahmi Idris",
        description: "I designed my personal website with the intention of showcasing my entire portfolio, but it will evolve over time, and I'm excited to add additional features.",
        time: `${formatDate("2021-10-5")} - Current`,
        image: require("public/images/projects/fahmiidris.png"),
        tech: [nextjs, typescript, tailwindcss],
        meta: {
            repo: "https://github.com/fahmiidris-labs/fahmiidris.dev",
            link: "https://fahmiidris.vercel.app"
        }
    },
    {
        category: "Programming",
        name: "Final Project - Movie Game Rating",
        description: "The Movie Game Rating website is the result of the final project Jabar Coding Camp 2021, it is built with react js and the Chakra UI. Unfortunately, this website is not mobile-friendly and is only available on PCs.",
        time: `${formatDate("2021-9-19")} - ${formatDate("2021-9-25")}`,
        image: require("public/images/projects/final-project.png"),
        tech: [reactjs, { name: "Chakra UI", link: "https://chakra-ui.com" }],
        meta: {
            repo: "https://github.com/fahmiidris-labs/React-JS-JCC-2021",
            link: "https://fahmi-final-project.netlify.app"
        }
    },
    
]