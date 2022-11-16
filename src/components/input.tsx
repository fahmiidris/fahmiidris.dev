import * as React from 'react';
import clsx from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  isFocused?: boolean;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

export const Input = ({ type = 'text', inputMode = 'text', isFocused = false, className, label, id, icon, ...props }: InputProps) => {
  const input = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isFocused) {
      input.current?.focus();
    }
  }, [isFocused]);

  const isHaveIcon = icon ? true : false;

  return (
    <div>
      <label htmlFor={id} className={clsx(label ? 'text-slate-800" block text-sm font-medium' : 'sr-only')}>
        {label ?? id}
      </label>

      <div className={clsx(label && 'mt-1', 'group relative rounded-md')}>
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {React.createElement(icon, {
              className: 'h-5 w-5 text-slate-400 group-focus-within:text-cyan-400',
              'aria-hidden': true,
            })}
          </div>
        )}

        <input
          type={type}
          inputMode={inputMode}
          id={id}
          className={clsx(
            'block w-full rounded-md border-slate-200 text-sm placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm',
            { 'pl-10': !!isHaveIcon },
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
};
