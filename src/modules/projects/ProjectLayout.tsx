import React from 'react';
import Container from '~/ui/Container';
import ProjectFooter from './ProjectFooter';
import { ProjectHeader } from './ProjectHeader';
import type { Project } from 'contentlayer/generated';

interface ProjectLayoutProps {
  project: Project & { nextProject?: Project };
  children: any;
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
        <article className="flex flex-col items-start justify-center w-full mx-auto mb-16">
          <ProjectHeader project={project} />

          <div className="w-full max-w-none prose prose-slate dark:prose-dark prose-a:text-secondary-accent hover:prose-a:text-secondary-accent-hover prose-headings:text-black dark:prose-headings:text-primary-100 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none">
            {children}
          </div>

          <ProjectFooter project={project} />
        </article>
      </div>
    </Container>
  );
};

export default ProjectLayout;
