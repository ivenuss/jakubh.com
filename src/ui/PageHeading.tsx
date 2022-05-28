import React from 'react';

interface PageHeadingProps {
  title: string;
  description?: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="font-bold text-black dark:text-primary-100 text-xl md:text-3xl mb-2">
        {title}
      </h1>
      {description && (
        <p className="text-gray-600 dark:text-primary-200 mb-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeading;
