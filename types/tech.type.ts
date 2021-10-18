export type TechDescType = {
    title: string,
    description: string,
    link: string,
}

export type TechType = {
    [key: string]: {
        color: string,
        more: TechDescType,
        icon: (() => JSX.Element)
    }
}