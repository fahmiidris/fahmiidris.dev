import { motion } from "framer-motion"

const ErrorLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col relative h-screen">
            <motion.main className="flex flex-col h-full flex-grow">
                {children}
            </motion.main>
        </div>
    )
}

export const getErrorLayout = (page: React.ReactElement) => {
    return (
        <ErrorLayout>
            {page}
        </ErrorLayout>
    )
}

export default ErrorLayout
