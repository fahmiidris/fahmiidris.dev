
const ErrorLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col relative h-screen">
            <main className="flex flex-col h-full flex-grow">
                {children}
            </main>
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
