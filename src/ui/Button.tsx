import React, {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode
} from 'react';
import Spinner from './Spinner';
import clsx from 'clsx';

const sizeClassnames = {
  large: 'py-3.5 px-12 text-base rounded-lg',
  medium: 'py-3 px-8 text-base rounded-lg',
  normal: 'py-2 px-6 text-sm rounded-md',
  small: 'px-2 py-1 text-sm rounded-md',
  tiny: 'px-1 text-sm rounded-5'
};

const colorClassnames = {
  primary:
    'bg-accent text-white transform transition duration-200 filter dark:disabled:text-primary-300 disabled:cursor-not-allowed disabled:bg-secondary-800 dark:disabled:bg-primary-700 disabled:brightness-100 hover:brightness-110',
  secondary:
    'bg-primary-600 text-white transform transition duration-200 filter disabled:text-primary-300 disabled:cursor-not-allowed disabled:bg-primary-700 disabled:brightness-100 hover:brightness-110',
  transparent: 'bg-transparent'
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassnames;
  loading?: boolean;
  icon?: ReactNode;
  transition?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'normal',
  color = 'primary',
  disabled,
  loading,
  icon,
  className = '',
  transition,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        'flex items-center justify-center font-bold focus:outline-none',
        sizeClassnames[size],
        colorClassnames[color],
        { 'transition duration-200 ease-in-out': transition },
        className
      )}
      {...props}
    >
      <span className={loading ? 'opacity-0' : `flex items-center`}>
        {icon ? <span className="mr-2 items-center">{icon}</span> : null}
        {children}
      </span>
      {loading ? (
        <span className="absolute mx-auto h-6">
          <Spinner color="stroke-secondary-300 dark:stroke-primary-300" />
        </span>
      ) : null}
    </button>
  );
};

export default Button;
