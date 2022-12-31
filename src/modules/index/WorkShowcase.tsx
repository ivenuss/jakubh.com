import React from 'react';
import Link from 'next/link';
import ProjectPreview from './ProjectPreview';
import clsx from 'clsx';
import { ArrowUpRightIcon } from '~/icons';
import type { Project } from 'contentlayer/generated';

interface ProjectShowcaseProps {
  projects: Project[];
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects
}) => {
  return (
    <section>
      <div className="mx-auto mb-12 w-full max-w-screen-xs px-6">
        <h3 className="mb-2.5 text-2xl font-medium text-black dark:text-primary-100">
          My latest projects
        </h3>

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="text-gray-600 dark:text-primary-300">
            I&apos;ve made a lot of projects and this is a small selection of
            some that I found interesting.
          </div>
          <Link
            href="/projects"
            className="flex flex-none items-center gap-2 text-secondary-accent hover:text-secondary-accent-hover hover:underline md:self-end"
          >
            All projects <ArrowUpRightIcon className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-md flex-col gap-10 px-6 sm:gap-0">
        {projects?.map((project, i) => {
          const isOdd = Boolean(i % 2);

          return (
            <div key={i} className="group">
              <ProjectPreview project={project} />

              {/* Is not last */}
              {i !== projects.length - 1 ? (
                isOdd ? (
                  <div className="my-3 mx-[9.5rem] hidden sm:block">
                    <div className="flex w-full">
                      <div className="mt-[0.875rem] h-4 w-4 rounded-tl-2xl border-t-2 border-l-2 border-gray-400 dark:border-primary-600" />
                      <div className="h-4 flex-1 rounded-br-2xl border-b-2 border-r-2 border-gray-400 dark:border-primary-600" />
                    </div>
                  </div>
                ) : (
                  <div className="my-3 mx-[9.5rem] hidden sm:block">
                    <div className="flex w-full">
                      <div className="h-4 flex-1 rounded-bl-2xl border-b-2 border-l-2 border-gray-400 dark:border-primary-600" />
                      <div className="mt-[0.875rem] h-4 w-4 rounded-tr-2xl border-t-2 border-r-2 border-gray-400 dark:border-primary-600" />
                    </div>
                  </div>
                )
              ) : (
                <div className="my-3 mx-[9.5rem] hidden sm:block ">
                  <div
                    className={clsx(
                      'flex w-1/2',
                      isOdd ? 'ml-auto flex-row-reverse' : 'mr-auto'
                    )}
                  >
                    <div
                      className={clsx(
                        'h-4 flex-1 border-b-2 border-gray-400 dark:border-primary-600',
                        isOdd
                          ? 'rounded-br-2xl border-r-2'
                          : 'rounded-bl-2xl border-l-2'
                      )}
                    />
                    <div
                      className={clsx(
                        'mt-[0.875rem] h-4 w-4 border-t-2 border-gray-400 dark:border-primary-600',
                        isOdd
                          ? 'rounded-tl-2xl border-l-2'
                          : 'rounded-tr-2xl border-r-2'
                      )}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <Link
          href="/projects"
          className="mx-auto rounded-md bg-gray-300 py-2 px-6 text-sm font-medium text-black transition-all hover:brightness-110 dark:bg-primary-600 dark:text-white"
        >
          I want to see all!
        </Link>
      </div>
    </section>
  );
};
