import "../styles/globals.css"
import "nprogress/nprogress.css"

import Router from "next/router"
import NProgress from "nprogress"
import { ThemeProvider } from "next-themes"

import { AppPropsWithLayout } from "@/types/app.type"
import { PreloadProvider } from "@/contexts/PreloadContext"

// Loading Progress using NProgress
NProgress.configure({ showSpinner: false })
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <PreloadProvider>
                {getLayout(
                    <Component {...pageProps} />
                )}
            </PreloadProvider>
        </ThemeProvider>
    )
}

export default MyApp
