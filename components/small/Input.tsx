import { ChangeEventHandler, FC, InputHTMLAttributes, useEffect, useRef } from "react"

type InputType = InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean,
    handleChange: ChangeEventHandler
}

const Input: FC<InputType> = ({ type = 'text', name, value, className, autoComplete, required, isFocused = false, handleChange, }) => {
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
                className={`border-gray-300 focus:border focus:border-blue-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md shadow-sm ` + className}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

const Checkbox: FC<InputType> = ({ name, value, handleChange }) => {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-400 text-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-300 cursor-pointer"
            onChange={(e) => handleChange(e)}
        />
    )
}

export { Input, Checkbox }
