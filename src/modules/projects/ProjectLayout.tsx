import React from 'react';
import Link from 'next/link';
import Container from '~/ui/Container';
import { ArrowRightIcon } from '~/icons';
import { ProjectHeader } from './ProjectHeader';
import type { Project } from 'contentlayer/generated';

interface ProjectLayoutProps {
  project: Project & { nextProject?: Project };
  children: any;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children, project }) => {
  const nextHref = project.nextProject
    ? `/projects/${project.nextProject.slug}`
    : '/projects';

  return (
    <Container
      meta={{
        title: `${project.title} / Jakub Habrcetl`,
        description: project.description
      }}
    >
      <div className="mx-auto max-w-screen-xs px-6">
        <article className="flex flex-col items-start justify-center w-full mx-auto mb-16">
          <ProjectHeader project={project} />

          <div className="w-full prose dark:prose-dark">{children}</div>

          <footer className="w-full flex mt-8 pt-8 border-t border-secondary-700 dark:border-primary-700">
            <Link href="/projects">
              <a className="text-base md:text-lg text-secondary-300 hover:text-secondary-300 dark:text-primary-300 dark:hover:text-primary-200">
                Back
              </a>
            </Link>

            <Link href={nextHref}>
              <a
                title={project.nextProject?.title || 'No project found'}
                className="flex items-center ml-auto text-base md:text-lg text-secondary-accent hover:text-secondary-accent-hover"
              >
                Next Project <ArrowRightIcon className="ml-3" />
              </a>
            </Link>
          </footer>
        </article>
      </div>
    </Container>
  );
};

export default ProjectLayout;
