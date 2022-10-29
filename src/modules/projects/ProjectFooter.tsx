import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '~/icons';
import type { Project } from 'contentlayer/generated';

interface ProjectFooterProps {
  project: Project & { nextProject?: Project };
}

const ProjectFooter: React.FC<ProjectFooterProps> = ({ project }) => {
  const nextHref = project.nextProject
    ? `/projects/${project.nextProject.slug}`
    : '/projects';

  return (
    <footer className="w-full flex mt-8 pt-8 border-t border-secondary-700 dark:border-primary-700">
      <Link
        href="/projects"
        className="text-base md:text-lg text-secondary-300 hover:text-secondary-300 dark:text-primary-300 dark:hover:text-primary-200"
      >
        Back
      </Link>
      <Link
        href={nextHref}
        title={project.nextProject?.title || 'No project found'}
        className="flex items-center ml-auto text-base md:text-lg text-secondary-accent hover:text-secondary-accent-hover"
      >
        Next Project <ArrowRightIcon className="ml-3" />
      </Link>
    </footer>
  );
};

export default ProjectFooter;
