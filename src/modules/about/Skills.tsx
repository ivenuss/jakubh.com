import React from 'react';
import { techStack } from '~/lib/constants';

interface SkillSectionProps {
  title: string;
  items: string[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, items }) => {
  return (
    <section>
      <h3 className="font-medium text-lg text-black dark:text-primary-100 mb-3">
        {title}
      </h3>
      <ul className="text-gray-600 dark:text-primary-200">
        {items.map((text, i) => (
          <li key={i} className="mb-1.5 md:mb-2.5">
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export const Skills: React.FC = ({}) => {
  return (
    <section>
      <div className="mb-3">
        <h2 className="font-medium text-black dark:text-primary-100 text-xl mb-3">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 gap-y-2">
        {Object.entries(techStack).map(([title, items]) => (
          <SkillSection key={title} title={title} items={items} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
