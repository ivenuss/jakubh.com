import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { ExternalLinkIcon, GithubOutlineIcon } from '~/icons';
import type { Project } from 'contentlayer/generated';

interface ProjectTabProps {
  project: Project;
}

interface ProjectLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const ProjectTab: React.FC<ProjectTabProps> = ({ project }) => {
  return (
    <div className="border-secondary-700 mt-1 flex items-center border-b pb-6 last:border-none dark:border-primary-700">
      <div className="mt-3 w-full overflow-hidden">
        <h2 className="mb-1.5 flex items-center text-2xl font-bold md:mb-2 md:text-3xl">
          <span className="truncate text-black dark:text-primary-100">
            {project.title}
          </span>
          <code className="ml-4 flex-none text-xs font-normal text-accent">
            {new Date(project.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </code>
        </h2>

        <p className="text-secondary-300 mb-3 text-base line-clamp-3 dark:text-primary-300">
          {project.description}
        </p>

        <footer className="flex gap-5 text-sm md:text-base">
          <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
            <GithubOutlineIcon className="mr-2 text-base md:text-lg" /> Source
            Code
          </ProjectLink>
          <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="mr-2 text-base md:text-xl" /> Visit
          </ProjectLink>
          <ProjectLink
            href={`/project/${project.slug}`}
            className="hover:text-accent"
          >
            Learn more
          </ProjectLink>
        </footer>
      </div>
    </div>
  );
};

export const ProjectLink: React.FC<ProjectLinkProps> = ({
  href,
  className = '',
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'text-secondary-200 flex items-center hover:text-secondary-accent hover:underline dark:text-primary-200',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ProjectTab;
