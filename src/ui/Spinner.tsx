import React from 'react';
import clsx from 'clsx';

interface SpinnerProps {
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  color = 'stroke-secondary-accent'
}) => {
  return (
    <svg className="h-full w-full animate-spin" viewBox="0 0 32 32">
      <circle
        cx="16"
        cy="16"
        fill="none"
        r="14"
        strokeWidth="4"
        className={clsx('opacity-20', color)}
      />
      <circle
        cx="16"
        cy="16"
        fill="none"
        r="14"
        strokeWidth="4"
        className={color}
        style={{
          strokeDasharray: 80,
          strokeDashoffset: 60
        }}
      />
    </svg>
  );
};

export default Spinner;
