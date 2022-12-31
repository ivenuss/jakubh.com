import React from 'react';
import Container from '~/ui/Container';
import ProjectFooter from './ProjectFooter';
import { ProjectHeader } from './ProjectHeader';
import type { Project } from 'contentlayer/generated';

interface ProjectLayoutProps {
  project: Project & { nextProject?: Project };
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children, project }) => {
  return (
    <Container
      meta={{
        title: `${project.title} / Jakub Habrcetl`,
        description: project.description
      }}
    >
      <div className="mx-auto max-w-screen-xs px-6">
        <article className="mx-auto mb-16 flex w-full flex-col items-start justify-center">
          <ProjectHeader project={project} />

          <div className="prose prose-slate w-full max-w-none prose-headings:text-black prose-a:text-secondary-accent hover:prose-a:text-secondary-accent-hover prose-code:bg-gray-200 prose-code:font-normal prose-code:text-black prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-200 dark:prose-dark dark:prose-headings:text-primary-100 dark:prose-code:bg-primary-700 dark:prose-code:text-primary-100 dark:prose-pre:bg-primary-700">
            {children}
          </div>

          <ProjectFooter project={project} />
        </article>
      </div>
    </Container>
  );
};

export default ProjectLayout;
