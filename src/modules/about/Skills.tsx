import React from 'react';
import { techStack, type StackItem } from '~/lib/constants';

interface SkillSectionProps {
  title: string;
  items: StackItem[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, items }) => {
  return (
    <section>
      <h3 className="mb-3 text-lg font-medium text-black dark:text-primary-100">
        {title}
      </h3>
      <ul className="text-gray-700 dark:text-primary-200">
        {items.map(([text, Icon], i) => (
          <li key={i} className="mb-1.5 flex items-center gap-2 md:mb-2.5">
            {Icon && <Icon className="text-lg" />}
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const Skills: React.FC = () => {
  return (
    <section>
      <div className="mb-3">
        <h2 className="mb-3 text-xl font-medium text-black dark:text-primary-100">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 gap-y-3 sm:grid-cols-3">
        {Object.entries(techStack).map(([title, items]) => (
          <SkillSection key={title} title={title} items={items} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
