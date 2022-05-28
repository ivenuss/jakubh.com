import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '~/icons';
import type { Project } from 'contentlayer/generated';

interface ProjectPreviewProps {
  project: Project;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  return (
    <div className="flex gap-3 sm:gap-6 flex-col sm:flex-row sm:group-even:flex-row-reverse">
      <Link href={`/projects/${project.slug}`}>
        <a className="flex-none relative object-center rounded-lg overflow-hidden h-52 sm:w-5/12">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-transform bg-gray-100 dark:bg-primary-800 hover:scale-105"
            alt={project.title}
            src={project.image}
          />
        </a>
      </Link>
      <div>
        <h4 className="text-black dark:text-primary-100 font-medium text-lg mb-2">
          {project.title}
        </h4>
        <p className="text-sm sm:text-base text-gray-600 dark:text-primary-300 line-clamp-3 mb-2">
          {project.description}
        </p>
        <Link href={`/projects/${project.slug}`}>
          <a className="flex items-center gap-2 text-secondary-accent hover:text-secondary-accent-hover hover:underline">
            Read more about the project <ArrowUpRightIcon />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPreview;
