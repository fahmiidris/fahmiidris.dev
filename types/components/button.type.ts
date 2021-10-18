import { ButtonHTMLAttributes } from "react"

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    className: "btn-blue" | string,
    processing?: boolean,
}