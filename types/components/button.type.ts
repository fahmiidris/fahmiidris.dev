import { ButtonHTMLAttributes } from "react"

import { CustomLinkType } from "./link.type"

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string,
    processing?: boolean,
}

export type Buttons = {
    Danger: React.FC<ButtonType>,
    Secondary: React.FC<ButtonType>,
    Icon: React.FC<ButtonType>,
    Link: React.FC<CustomLinkType>,
}