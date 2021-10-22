import { LinkProps } from "next/link"

export type CustomLinkType = {
    href?: string
    isExternal?: boolean
} & React.ComponentPropsWithoutRef<"a"> & LinkProps