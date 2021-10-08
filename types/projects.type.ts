export type ProjectsType = {
    name: string,
    description: string,
    category: string,
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