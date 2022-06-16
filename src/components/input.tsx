import * as React from 'react';
import clsx from 'clsx';

type TInput = React.InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean;
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

export const Input = ({
    type = 'text',
    inputMode = 'text',
    name,
    value,
    className,
    autoComplete,
    placeholder,
    required,
    isFocused = false,
    icon,
    onChange
}: TInput) => {
    const input = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, [isFocused]);

    return (
        <div className="group relative flex flex-col items-start">
            {icon && React.createElement(icon, { className: "pointer-events-none absolute inset-y-0 left-2.5 h-full w-6 text-slate-400 group-focus-within:text-cyan-500 dark:group-focus-within:text-slate-400" })}
            <input
                type={type}
                inputMode={inputMode}
                name={name}
                value={value}
                className={clsx("block w-full appearance-none rounded-md border !border-transparent bg-white py-2 pr-3 text-sm leading-5 text-slate-900 ring-1 ring-slate-900/20 placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 dark:bg-slate-700/20 dark:text-white dark:ring-slate-200/20 dark:focus:ring-cyan-500", { "pl-11": !!icon } ,className)}
                placeholder={placeholder}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={onChange}
                style={{ outline: 'none' }}
            />
        </div>
    );
};
