import type { AppProps } from "next/app"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}