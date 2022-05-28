import React from 'react';
import { timeline } from '~/data/about';

const ProgressTimeline: React.FC = ({}) => {
  return (
    <section>
      <h2 className="font-medium text-black dark:text-primary-100 text-xl mb-3">
        Journey
      </h2>

      <div>
        {timeline.map(({ year, items }) => (
          <div key={year} className="flex mb-6">
            <strong className="text-2xl font-bold text-black dark:text-primary-100 mr-12">
              {year}
            </strong>

            <ul className="mt-1 marker:text-primary-300">
              {items.map((text, i) => (
                <li
                  key={i}
                  className="text-gray-600 dark:text-primary-200 before:absolute before:-ml-4 before:content-['-'] before:text-gray-500 dark:before:text-accent"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgressTimeline;
