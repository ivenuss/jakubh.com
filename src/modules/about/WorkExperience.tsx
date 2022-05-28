import React from 'react';

interface WorkExperienceProps {}

const WorkExperience: React.FC<WorkExperienceProps> = ({}) => {
  return (
    <div>
      <h3 className="font-medium text-black dark:text-primary-100 text-xl mb-3">
        Work Experience
      </h3>

      <div className="flex items-center space-x-4 group">
        <span className="text-primary-200">Lorem</span>
        <span className="flex-1 border-t border-primary-300 border-dashed shrink dark:border-primary-600"></span>
        <span className="mr-6">Ipsum</span>
        <span>2014-21</span>
      </div>
    </div>
  );
};

export default WorkExperience;
