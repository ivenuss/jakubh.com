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
    <footer className="border-secondary-700 mt-8 flex w-full border-t pt-8 dark:border-primary-700">
      <Link
        href="/projects"
        className="text-secondary-300 hover:text-secondary-300 text-base dark:text-primary-300 dark:hover:text-primary-200 md:text-lg"
      >
        Back
      </Link>
      <Link
        href={nextHref}
        title={project.nextProject?.title || 'No project found'}
        className="ml-auto flex items-center text-base text-secondary-accent hover:text-secondary-accent-hover md:text-lg"
      >
        Next Project <ArrowRightIcon className="ml-3" />
      </Link>
    </footer>
  );
};

export default ProjectFooter;
