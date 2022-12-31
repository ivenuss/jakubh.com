import React from 'react';

interface PageHeadingProps {
  title: string;
  description?: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="mb-2 text-xl font-bold text-black dark:text-primary-100 md:text-3xl">
        {title}
      </h1>
      {description && (
        <p className="mb-4 text-gray-600 dark:text-primary-200">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeading;
