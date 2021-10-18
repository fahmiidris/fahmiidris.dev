import NextLink, { LinkProps } from "next/link"

type CustomLinkType = {
    href?: string
    isExternal?: boolean
} & React.ComponentPropsWithoutRef<"a"> & LinkProps

const Link: React.FC<CustomLinkType> = ({ 
    href,
    className = "underline font-semibold hover:text-blue-500",
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
                <a {...props} className={className}>{children}</a>
            </NextLink>
        )
    }
    
    return (
        <a href={href} className={className} {...props} {...externalProps}>
            {children}
        </a>
    )
}

export default Link