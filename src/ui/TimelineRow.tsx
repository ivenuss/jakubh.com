import React from 'react';

interface TimelineRowProps {
  title: string;
  children: React.ReactNode;
}

const TimelineRow: React.FC<TimelineRowProps> = ({ title, children }) => {
  return (
    <div className="before:bg-secondary-600 group relative flex pt-2 pb-2 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-[2px] first:pt-0 dark:before:bg-primary-600 md:ml-4">
      <div className="bg-secondary-600 border-secondary-900 z-[1] m-2 ml-[-8.5px] h-5 w-5 flex-none self-start rounded-full border-4 group-hover:bg-accent dark:border-primary-900 dark:bg-primary-600" />
      <div className="mt-1 w-full">
        <h2 className="text-secondary-200 text-xl font-bold dark:text-primary-200 md:text-2xl">
          {title}
        </h2>
        <ol className="mt-4">
          <li className="leading-relaxed text-primary-200">{children}</li>
        </ol>
      </div>
    </div>
  );
};

export default TimelineRow;
