import React from 'react';
import Link from 'next/link';
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
    <div className="flex items-center mt-1 pb-6 border-b last:border-none border-secondary-700 dark:border-primary-700">
      <div className="mt-3 w-full overflow-hidden">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">
          <span className="truncate text-black dark:text-primary-100">
            {project.title}
          </span>
          <code className="flex-none ml-4 text-xs font-normal text-accent">
            {new Date(project.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </code>
        </h2>

        <p className="text-base text-secondary-300 dark:text-primary-300 line-clamp-3 mb-3">
          {project.description}
        </p>

        <footer className="flex gap-5 text-sm md:text-base">
          <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
            <GithubOutlineIcon className="text-base md:text-lg mr-2" /> Source
            Code
          </ProjectLink>
          <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="text-base md:text-xl mr-2" /> Visit
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
    <Link href={href}>
      <a
        className={`flex items-center text-secondary-200 dark:text-primary-200 hover:text-secondary-accent hover:underline ${className}`}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default ProjectTab;
