import React from 'react';
import { format, intervalToDuration } from 'date-fns';

interface ExperienceRowPros {
  companyName: string;
  companySite: string;
  employmentType: string;
  title: string;
  startDate: string;
  endDate?: string;
}

/**
 *  Adds `s` at the end of the string
 */
const pluralize = (count: number, noun: string, suffix = 's') =>
  `${noun}${count !== 1 ? suffix : ''}`;

export const formatDuration = (start: Date, end: Date) => {
  const duration = intervalToDuration({ start, end });

  return Object.entries(duration)
    .reduce<string[]>((result, [duration, value]) => {
      if (value <= 0) return result;

      let string = '';

      if (duration === 'years') string = `${value} yr`;
      if (duration === 'months') string = `${value} mo`;

      if (string) result.push(pluralize(value, string));

      return result;
    }, [])
    .join(' ');
};

export const ExperienceRow: React.FC<ExperienceRowPros> = ({
  companyName,
  companySite,
  employmentType,
  title,
  startDate,
  endDate
}) => {
  const DATE_FORMAT = 'MMM yyyy';

  const duration = formatDuration(
    new Date(startDate),
    endDate ? new Date(endDate) : new Date()
  );

  return (
    <div className="group flex items-center space-x-4">
      <div>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={companySite}
          className="text-primary-100 transition-colors hover:text-secondary-accent hover:underline"
        >
          {companyName}
        </a>
        <span> · {employmentType}</span>
      </div>
      <div className="flex-1 shrink border-t border-dashed border-primary-300 dark:border-primary-600" />
      <div className="mr-6 font-medium text-primary-100">{title}</div>
      <div className="text-sm text-primary-200">
        <span>{format(new Date(startDate), DATE_FORMAT)}</span>
        {' - '}
        {endDate ? format(new Date(endDate), DATE_FORMAT) : 'Present'}
        {duration ? ' · ' + duration : null}
      </div>
    </div>
  );
};
