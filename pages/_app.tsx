import "../styles/globals.css"
import "nprogress/nprogress.css"

import NProgress from "nprogress"
import Router from "next/router"
import { ThemeProvider } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"

import { AppPropsWithLayout } from "@/types/app.type"
import AppLayout from "@/components/AppLayout"

// Loading Progress using NProgress
NProgress.configure({ showSpinner: false })
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {

    const getLayout = Component.getLayout || ((page) => {
        return (
            <AppLayout>{page}</AppLayout>
        )
    })

    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            {getLayout(
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={router.route}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        variants={{
                            initial: { opacity: 0, y: 3 },
                            enter: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                            exit: { opacity: 0, transition: { duration: 0.1 } },
                        }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            )}
        </ThemeProvider>
    )
}

export default MyApp
