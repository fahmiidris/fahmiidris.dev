type TStatus = {
    title: string;
    className?: string;
};

export type ProjectType = {
    title: string;
    description: string;
    href: string;
    status: TStatus[];
    thumbnail: any;
}
