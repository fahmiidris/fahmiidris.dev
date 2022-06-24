import type { ImageProps } from "next/image";

export type ExperienceMetaType = {
    title: string;
    description: string;
    date: {
        start: number;
        end?: number;
    },
    images?: ImageProps[];
}

export type ExperienceModuleType = {
    meta: ExperienceMetaType;
    default: () => JSX.Element;
}

export type ExperiencePreviewType = {
    slug: string;
    module: ExperienceModuleType;
}

export type ExperienceType = {
    fm: ExperienceMetaType;
}
