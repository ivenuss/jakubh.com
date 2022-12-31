import React from 'react';
import { progressTimeline } from '~/lib/constants';

const ProgressTimeline: React.FC = () => {
  return (
    <section>
      <h2 className="mb-3 text-xl font-medium text-black dark:text-primary-100">
        Journey
      </h2>

      <div>
        {Object.entries(progressTimeline)
          .sort(([aYear], [bYear]) => parseInt(bYear) - parseInt(aYear))
          .map(([year, lines]) => (
            <div key={year} className="mb-6 flex">
              <strong className="mr-8 text-xl font-bold text-black dark:text-primary-100 md:mr-12 md:text-2xl">
                {year}
              </strong>

              <ul className="mt-1 marker:text-primary-300">
                {lines.map((line, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 before:absolute before:-ml-4 before:text-gray-600 before:content-['-'] dark:text-primary-200 dark:before:text-accent md:text-base"
                  >
                    {line}
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
