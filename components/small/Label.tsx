import { LabelHTMLAttributes } from "react"

import { classNames } from "@/utils/helper"

type LableType = LabelHTMLAttributes<HTMLLabelElement> & {
    value: string
}

const Label: React.FC<LableType> = ({ htmlFor, value, className, children }) => {
    return (
        <label htmlFor={htmlFor} className={classNames("block font-semibold text-sm text-gray-700", className)}>
            {value ? value : { children }}
        </label>
    );
}

export default Label
