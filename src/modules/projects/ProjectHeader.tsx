import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { GithubIcon, ExternalLinkIcon } from '~/icons';
import type { Project } from 'contentlayer/generated';

interface ProjectHeaderProps {
  project: Project;
}

const linkButtonCn =
  'flex w-full flex-none bg-gray-300 hover:bg-gray-200 dark:bg-primary-700 dark:hover:bg-primary-600 transition-colors items-center justify-center gap-2 rounded-md py-2 px-3 pl-2.5 text-black dark:text-white sm:w-auto';

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <header className="mb-6 w-full">
      <div className="mb-4 flex items-center">
        <Image
          width={84}
          height={84}
          alt={project.title}
          src={project.icon}
          className="mr-4 h-12 w-12 rounded-lg bg-gray-100 dark:bg-primary-800"
        />

        <div>
          <h1 className="text-3xl font-bold text-black dark:text-primary-100 md:text-2xl">
            {project.title}
          </h1>

          <div className="text-sm dark:text-primary-300">
            <div> {format(new Date(project.publishedAt), 'MMMM d, yyyy')}</div>
          </div>
        </div>
      </div>

      <Image
        width={1280}
        height={720}
        alt={project.title}
        src={project.image}
        className="mb-3 h-48 w-full rounded-lg bg-gray-100 object-cover dark:bg-primary-800"
      />

      {project.stack && (
        <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack?.map((item, i) => (
            <span
              key={i}
              className="text-sm font-medium uppercase text-gray-600 dark:text-primary-200"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="flex w-full flex-col gap-3 md:flex-row">
        {project.owner && project.repo ? (
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={`https://github.com/${project.owner}/${project.repo}`}
            className={linkButtonCn}
          >
            <GithubIcon className="text-xl" />
            <span className="text-sm">View on GitHub</span>
          </a>
        ) : null}

        {project.preview && (
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={project.preview}
            className={linkButtonCn}
          >
            <ExternalLinkIcon className="text-xl" />
            <span className="text-sm">View Live</span>
          </a>
        )}
      </div>
    </header>
  );
};
