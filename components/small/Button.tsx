import { ButtonIconType } from "@/types/button.type"

export const Button: React.FC<ButtonIconType> = ({ type = "button", className, processing, children, ...props }) => {
    return (
        <button 
            type={type}
            className={
                `inline-flex items-center px-4 py-2 uppercase tracking-widest rounded-lg font-semibold text-xs border border-transparent text-white bg-blue-500 hover:bg-blue-600 hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 ease-in-out duration-150 ${processing && 'opacity-25'} ` + className
            }
            disabled={processing}
            {...props}>
            {children}
        </button>
    )
}

export const ButtonOnlyIcon: React.FC<ButtonIconType> = ({ type = "button", className, processing, children, ...props }) => {
    return (
        <button 
            type={type}
            className={
                `inline-flex items-center p-2 uppercase tracking-widest rounded-lg font-semibold text-xs border border-transparent text-white bg-gray-600 hover:bg-gray-800 ease-in-out duration-150 ${processing && 'opacity-25'} ` + className
            }
            disabled={processing}
            {...props}>
            {children}
        </button>
    )
}
