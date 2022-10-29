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
        className="block group relative aspect-[4/3] rounded-xl mb-2.5 overflow-hidden"
      >
        <Image
          width={1280}
          height={720}
          alt={project.title}
          src={project.image}
          className="w-full h-full object-cover z-10 bg-gray-100 dark:bg-primary-800 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full z-0 transition-colors group-hover:bg-black group-hover:bg-opacity-20" />
      </Link>
      <div className="flex items-center justify-between font-medium text-gray-600 dark:text-primary-200">
        <div className="flex items-center">
          <Image
            width={84}
            height={84}
            alt={project.title}
            src={project.icon}
            className="w-6 h-6 mr-3 rounded-full bg-gray-100 dark:bg-primary-800"
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
