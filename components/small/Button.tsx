import NextLink from "next/link"

import { classNames } from "@/utils/helper"

import { CustomLinkType } from "@/types/components/link.type"
import { Buttons, ButtonType } from "@/types/components/button.type"

const defaultClassName: string = "inline-flex justify-center items-center px-4 py-2 uppercase tracking-widest rounded-lg font-semibold text-xs border border-transparent text-white hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-gray-700"

const Button: React.FC<ButtonType> & Buttons = ({ type = "button", className, processing, children, ...props }) => {
    return (
        <button
            type={type}
            className={classNames(defaultClassName, className, "bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-75 ease-in-out duration-150")}
            disabled={processing}
            {...props}
        >
            {children}
        </button>
    )
}

const Danger: React.FC<ButtonType> = ({ type = "button", className, processing, children, ...props }) => {
    return (
        <button
            type={type}
            className={classNames(defaultClassName, className, "bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 disabled:opacity-75 ease-in-out duration-150")}
            disabled={processing}
            {...props}
        >
            {children}
        </button>
    )
}

const Secondary: React.FC<ButtonType> = ({ type = "button", className, processing, children, ...props }) => {
    return (
        <button
            type={type}
            className={classNames(defaultClassName, className, "bg-gray-700 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-900 disabled:opacity-75 ease-in-out duration-150")}
            disabled={processing}
            {...props}
        >
            {children}
        </button>
    )
}

const Icon: React.FC<ButtonType> = ({ type = "button", className, processing, children, ...props }) => {
    return (
        <button
            type={type}
            className={classNames(
                "inline-flex items-center p-2 uppercase tracking-widest rounded-lg font-semibold text-xs border border-transparent text-white bg-gray-600 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-900",
                className,
                "disabled:opacity-75 ease-in-out duration-150"
            )}
            disabled={processing}
            {...props}
        >
            {children}
        </button>
    )
}

const Link: React.FC<CustomLinkType> = ({
    href,
    className,
    isExternal = false,
    children,
    ...props
}) => {
    const externalProps = isExternal && {
        rel: "noreferrer",
        target: "_blank",
    }

    const isRouteLink = href.startsWith("/")

    if (isRouteLink && !isExternal) {
        return (
            <NextLink href={href} passHref>
                <a {...props} className={classNames(defaultClassName, className, "bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-75 ease-in-out duration-150")}>{children}</a>
            </NextLink>
        )
    }

    return (
        <a href={href} className={classNames(defaultClassName, className, "bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-75 ease-in-out duration-150")} {...props} {...externalProps}>
            {children}
        </a>
    )
}

Button.Danger = Danger
Button.Secondary = Secondary
Button.Icon = Icon
Button.Link = Link

export default Button
