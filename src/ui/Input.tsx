import React, { forwardRef } from 'react';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  textarea?: boolean;
  rows?: number;
  error?: boolean;
  transparent?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', textarea, error, transparent, ...props }, ref) => {
    const bg = transparent
      ? `bg-transparent`
      : `bg-gray-200 dark:bg-primary-700`;
    const ring = error ? `ring-2 ring-red-500` : '';
    const cn = `w-full py-2 px-4 rounded-md text-black dark:text-primary-100 placeholder-gray-600 dark:placeholder-secondary-300 dark:placeholder-primary-300 focus:outline-none ${bg} ${ring} ${className} `;

    return textarea ? (
      <textarea
        ref={ref as any}
        className={`${cn} border-none`}
        {...(props as any)}
      />
    ) : (
      <input ref={ref} className={cn} {...props} />
    );
  }
);

export default Input;
