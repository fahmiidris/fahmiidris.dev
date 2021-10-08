import Footer from "./big/Footer"
import Navbar from "./big/Navbar"

const AppLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col relative min-h-screen">
            <Navbar />
                <main className="flex flex-col h-full flex-grow">
                    { children }
                </main>
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
