import { motion } from "framer-motion"

import Footer from "./big/Footer"
import Navbar from "./big/Navbar"

const AppLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col relative min-h-screen">
            <Navbar />
                <motion.main className="flex flex-col h-full flex-grow">
                    { children }
                </motion.main>
            <Footer />
        </div>
    )
}

export const getAppLayout = (page: React.ReactElement) => {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default AppLayout
