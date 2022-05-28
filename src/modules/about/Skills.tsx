import React from 'react';

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
          <li key={i} className="mb-2.5">
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
        <SkillSection
          title="Design"
          items={['UI/UX Design', 'Graphic Design', 'Design Systems']}
        />
        <SkillSection
          title="Development"
          items={['Linux (basics)', 'JavaScript', 'TypeScript', 'PHP']}
        />
        <SkillSection
          title="Frontend"
          items={['React', 'Next.js', 'CSS', 'Tailwind CSS']}
        />
        <SkillSection
          title="Backend"
          items={['Node.js', 'NestJS', 'GraphQL', 'Socket.io']}
        />
        <SkillSection
          title="Tools"
          items={[
            'Figma',
            'Visual Studio Code',
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Adobe InDesign'
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
