import { createContext, useContext, useEffect, useState } from "react"

import { classNames } from "@/utils/helper"

const PreloadContext = createContext(false)

export const PreloadProvider: React.FC = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 200)
    }, [])

    return (
        <PreloadContext.Provider value={isLoaded}>
            <div
                className={classNames(
                    "fixed flex items-center justify-center inset-0 transition-opacity bg-white dark:bg-gray-700",
                    isLoaded && "opacity-100 pointer-events-none"
                )}
            ></div>
            {children}
        </PreloadContext.Provider>
    )
}

export const usePreloadState = (): boolean => useContext(PreloadContext)
