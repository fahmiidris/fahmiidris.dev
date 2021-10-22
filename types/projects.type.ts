export type ProjectsType = {
    category: string,
    name: string,
    description: string,
    time: string,
    image: string | any,
    tech: {
        name: string,
        link?: string
    }[],
    meta: {
        repo?: string,
        link?: string
    }
}