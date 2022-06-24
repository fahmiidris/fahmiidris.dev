import * as React from 'react';
import clsx from 'clsx';

type TextareaType = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    isFocused?: boolean;
};

export const Textarea = ({
    inputMode = 'text',
    name,
    value,
    className,
    autoComplete,
    placeholder,
    required,
    isFocused = false,
    onChange
}: TextareaType) => {
    const input = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, [isFocused]);

    return (
        <div className="group relative flex flex-col items-start">
            <textarea
                inputMode={inputMode}
                name={name}
                value={value}
                className={clsx("block w-full appearance-none rounded-md border !border-transparent bg-white py-2 pr-3 text-sm leading-5 text-slate-900 ring-1 ring-slate-900/20 placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 dark:bg-slate-800/20 dark:text-white dark:ring-slate-200/20 dark:focus:ring-cyan-500", className)}
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
