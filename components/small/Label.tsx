import { FC, LabelHTMLAttributes } from "react"

type LableType = LabelHTMLAttributes<HTMLLabelElement> & {
    value: string
}

const Label: FC<LableType> = ({ htmlFor, value, className, children }) => {
    return (
        <label htmlFor={htmlFor} className={`block font-semibold text-sm text-gray-700 ` + className}>
            {value ? value : { children }}
        </label>
    );
}

export default Label
