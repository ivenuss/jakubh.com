import React from 'react';
import { format } from 'date-fns';

interface ExperienceRowPros {
  companyName: string;
  employmentType: string;
  title: string;
  startDate: string;
  endDate?: string;
}

export const ExperienceRow: React.FC<ExperienceRowPros> = ({
  companyName,
  employmentType,
  title,
  startDate,
  endDate
}) => (
  <div className="flex items-center space-x-4 group">
    <div>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.seznam.cz/"
        className="text-primary-100 transition-colors hover:text-secondary-accent hover:underline"
      >
        {companyName}
      </a>
      <span> · {employmentType}</span>
    </div>
    <div className="flex-1 border-t border-primary-300 border-dashed shrink dark:border-primary-600" />
    <div className="mr-6 font-medium text-primary-100">{title}</div>
    <div className="text-sm text-primary-200">
      <span>{format(new Date(startDate), 'MMM yyyy')}</span>
      <span> - </span>
      <span>
        {endDate ? format(new Date(startDate), 'yyyy MMM') : 'Present'}
      </span>
    </div>
  </div>
);
