import { ChangeEventHandler, InputHTMLAttributes, useEffect, useRef } from "react"

import { classNames } from "@/utils/helper"

type InputType = InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean,
    handleChange: ChangeEventHandler
}

const Input: React.FC<InputType> = ({
    type = "text",
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused = false,
    handleChange,
}) => {
    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isFocused) {
            input.current?.focus()
        }
    }, [isFocused])

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={classNames("border-gray-300 focus:border focus:border-blue-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md shadow-sm", className)}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

export { Input }
