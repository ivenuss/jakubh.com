import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import type { Project } from 'contentlayer/generated';

interface ProjectThumbnailProps {
  project: Project;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ project }) => {
  return (
    <div>
      <Link
        href={`/projects/${project.slug}`}
        className="group relative mb-2.5 block aspect-[4/3] overflow-hidden rounded-xl"
      >
        <Image
          width={1280}
          height={720}
          alt={project.title}
          src={project.image}
          className="z-10 h-full w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-105 dark:bg-primary-800"
        />
        <div className="absolute top-0 left-0 z-0 h-full w-full transition-colors group-hover:bg-black group-hover:bg-opacity-20" />
      </Link>
      <div className="flex items-center justify-between font-medium text-gray-600 dark:text-primary-200">
        <div className="flex items-center">
          <Image
            width={84}
            height={84}
            alt={project.title}
            src={project.icon}
            className="mr-3 h-6 w-6 rounded-full bg-gray-100 dark:bg-primary-800"
          />

          <h3>
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline"
            >
              {project.title}
            </Link>
          </h3>
        </div>

        <div className="text-sm">
          {format(new Date(project.publishedAt), 'MMMM yy')}
        </div>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
