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
      <Link
        href={`/projects/${project.slug}`}
        className="rounded-lg overflow-hidden"
      >
        <Image
          priority
          width={1280}
          height={720}
          alt={project.title}
          src={project.image}
          className="aspect-[2/1] md:aspect-[5/3] object-cover object-center transition-transform bg-gray-100 dark:bg-primary-800 hover:scale-105"
        />
      </Link>
      <div className="flex-none sm:w-6/12">
        <h4 className="text-black dark:text-primary-100 font-medium text-lg mb-2">
          {project.title}
        </h4>
        <p className="text-sm sm:text-base text-gray-600 dark:text-primary-300 line-clamp-3 mb-2">
          {project.description}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center gap-2 text-secondary-accent hover:text-secondary-accent-hover hover:underline"
        >
          Read more <ArrowUpRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectPreview;
