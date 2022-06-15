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
    <header className="w-full mb-6">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4 ">
          <Image layout="fill" src={project.icon} className="rounded-lg" />
        </div>

        <div>
          <h1 className="text-3xl md:text-2xl font-bold text-black dark:text-primary-100">
            {project.title}
          </h1>

          <div className="text-sm dark:text-primary-300">
            <div> {format(new Date(project.publishedAt), 'MMMM d, yyyy')}</div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-48 mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-primary-800">
        <Image
          layout="fill"
          objectFit="cover"
          draggable="false"
          alt={project.title}
          src={project.image}
        />
      </div>

      {project.stack && (
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
          {project.stack?.map((item, i) => (
            <span
              key={i}
              className="uppercase font-medium text-sm text-gray-600 dark:text-primary-200"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-3 w-full">
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
