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
      <Link href={`/projects/${project.slug}`}>
        <a>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-xl mb-2.5">
            <Image
              layout="fill"
              objectFit="cover"
              className="rounded-xl transition-transform duration-300 bg-gray-100 dark:bg-primary-800 group-hover:scale-105"
              alt={project.title}
              src={project.image}
            />
            <div className="absolute top-0 left-0 w-full h-full transition-colors hover:bg-black hover:bg-opacity-20" />
          </div>
        </a>
      </Link>
      <div className="flex items-center justify-between font-medium text-gray-600 dark:text-primary-200">
        <div className="flex items-center">
          <div className="relative w-6 h-6 mr-3">
            <Image
              layout="fill"
              className="rounded-full bg-gray-100 dark:bg-primary-700"
              alt={project.title}
              src={project.icon}
            />
          </div>

          <h3>
            <Link href={`/projects/${project.slug}`}>
              <a className="hover:underline">{project.title}</a>
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
