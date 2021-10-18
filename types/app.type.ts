import type { NextPage } from "next"
import type { AppProps } from "next/app"
import type { ReactElement, ReactNode } from "react"

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export type SeoType = {
    title?: string,
    description?: string,
    image?: string,
    type?: string,
    robots?: string,
    date?: string,
}