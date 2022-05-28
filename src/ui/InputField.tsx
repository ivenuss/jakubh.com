import React from 'react';
import Input from './Input';

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
    <div className={`h-full w-full block ${className}`}>
      {label ? (
        <div className={`flex mb-2 text-secondary-200 dark:text-primary-200`}>
          {label}
        </div>
      ) : null}
      <Input textarea={textarea} {...props} />
      {errorMsg ? (
        <div className={`flex mt-1 text-sm text-red-500`}>{errorMsg}</div>
      ) : null}
    </div>
  );
};

export default InputField;
