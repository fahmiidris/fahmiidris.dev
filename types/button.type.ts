import { ButtonHTMLAttributes } from "react";

export type ButtonIconType = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string,
    processing?: boolean,
}