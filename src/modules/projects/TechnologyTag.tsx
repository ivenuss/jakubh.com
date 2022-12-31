import React from 'react';

interface TechnologyTagProps {
  title: string;
  color: string;
}

export const TechnologyTag: React.FC<TechnologyTagProps> = ({
  title,
  color
}) => {
  return (
    <div className="bg-secondary-800 flex items-center rounded px-2.5 py-0.5 text-sm text-black dark:bg-primary-700 dark:text-primary-100">
      <div
        className="mr-2 h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      {title}
    </div>
  );
};
