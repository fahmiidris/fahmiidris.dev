import { classNames } from "@/utils/helper"

import { ButtonType } from "@/types/components/button.type"

export const Button: React.FC<ButtonType> = ({ type = "button", className, processing, children, ...props }) => {
    return (
        <button 
            type={type}
            className={classNames("inline-flex justify-center items-center px-4 py-2 uppercase tracking-widest rounded-lg font-semibold text-xs border border-transparent", className, "disabled:opacity-75 ease-in-out duration-150")}
            disabled={processing}
            {...props}
        >
            {children}
        </button>
    )
}

export const ButtonOnlyIcon: React.FC<ButtonType> = ({ type = "button", className, processing, children, ...props }) => {
    return (
        <button 
            type={type}
            className={classNames("inline-flex items-center p-2 uppercase tracking-widest rounded-lg font-semibold text-xs border border-transparent text-white bg-gray-600 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-900", className, "disabled:opacity-75 ease-in-out duration-150")}
            disabled={processing}
            {...props}
        >
            {children}
        </button>
    )
}
