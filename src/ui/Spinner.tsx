import React from 'react';

interface SpinnerProps {
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  color = 'stroke-secondary-accent'
}) => {
  return (
    <svg className="animate-spin w-full h-full" viewBox="0 0 32 32">
      <circle
        cx="16"
        cy="16"
        fill="none"
        r="14"
        strokeWidth="4"
        className={`opacity-20 ${color}`}
      ></circle>
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
      ></circle>
    </svg>
  );
};

export default Spinner;
