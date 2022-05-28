import React from 'react';

interface TimelineRowProps {
  title: string;
  children: any;
}

const TimelineRow: React.FC<TimelineRowProps> = ({ title, children }) => {
  return (
    <div className="group relative flex md:ml-4 first:pt-0 pt-2 pb-2 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-[2px] before:bg-secondary-600 dark:before:bg-primary-600">
      <div className="m-2 ml-[-8.5px] flex-none w-5 h-5 rounded-full self-start bg-secondary-600 dark:bg-primary-600 group-hover:bg-accent border-secondary-900 dark:border-primary-900 border-4 z-[1]" />
      <div className="mt-1 w-full">
        <h2 className="text-xl md:text-2xl font-bold text-secondary-200 dark:text-primary-200">
          {title}
        </h2>
        <ol className="mt-4">
          <li className="text-primary-200 leading-relaxed">{children}</li>
        </ol>
      </div>
    </div>
  );
};

export default TimelineRow;
