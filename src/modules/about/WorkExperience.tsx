import React from 'react';
import { workExperiences } from '~/lib/constants';
import { ExperienceRow } from './ExperienceRow';

const WorkExperience: React.FC = () => (
  <div className="flex flex-col">
    <h3 className="mb-3 text-xl font-medium text-black dark:text-primary-100">
      Work Experience
    </h3>

    <div className="flex flex-col gap-1.5">
      {workExperiences.map((experience, i) => (
        <ExperienceRow key={i} {...experience} />
      ))}
    </div>
  </div>
);

export default WorkExperience;
