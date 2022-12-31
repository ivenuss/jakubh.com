import React from 'react';
import Input from './Input';
import clsx from 'clsx';

interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  errorMsg?: string;
  label?: string | JSX.Element;
  textarea?: boolean;
  altErrorMsg?: string;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  errorMsg,
  ref: _,
  className,
  ...props
}) => {
  return (
    <div className={clsx('block h-full w-full', className)}>
      {label ? (
        <div className="text-secondary-200 mb-2 flex dark:text-primary-200">
          {label}
        </div>
      ) : null}
      <Input textarea={textarea} {...props} />
      {errorMsg ? (
        <div className="mt-1 flex text-sm text-red-500">{errorMsg}</div>
      ) : null}
    </div>
  );
};

export default InputField;
