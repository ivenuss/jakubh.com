import React from 'react';
import { ExperienceRow } from './ExperienceRow';

const WorkExperience: React.FC = () => (
  <div className="flex flex-col">
    <h3 className="mb-3 text-xl font-medium text-black dark:text-primary-100">
      Work Experience
    </h3>

    <ExperienceRow
      companyName="Seznam.cz"
      employmentType="Full-time"
      title="UI Developer"
      startDate="11-14-2022"
    />
  </div>
);

export default WorkExperience;
