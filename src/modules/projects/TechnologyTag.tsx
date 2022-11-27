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
    <div className="flex items-center px-2.5 py-0.5 rounded text-sm bg-secondary-800 text-black dark:bg-primary-700 dark:text-primary-100">
      <div
        className="w-3 h-3 mr-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {title}
    </div>
  );
};
