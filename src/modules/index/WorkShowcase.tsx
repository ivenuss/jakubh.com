import React from 'react';
import Link from 'next/link';
import ProjectPreview from './ProjectPreview';
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
      <div className="w-full max-w-screen-xs mx-auto px-6 mb-12">
        <h3 className="text-black dark:text-primary-100 font-medium text-2xl mb-2.5">
          My Latest projects
        </h3>

        <div className="flex gap-3">
          <div className="text-gray-600 dark:text-primary-300">
            I've made a lot of projects and this is a small selection of some
            that I found interesting.
          </div>
          <Link href="/projects">
            <a className="flex flex-none self-end items-center gap-2 text-secondary-accent hover:text-secondary-accent-hover hover:underline">
              All projects <ArrowUpRightIcon className="text-xl" />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-10 sm:gap-0 max-w-screen-md mx-auto px-6">
        {projects?.map((project, i) => {
          const isOdd = Boolean(i % 2);

          return (
            <div key={i} className="group">
              <ProjectPreview project={project} />

              {/* Is not last */}
              {i !== projects.length - 1 ? (
                isOdd ? (
                  <div className="hidden sm:block my-3 mx-[9.5rem]">
                    <div className="flex w-full">
                      <div className="w-4 h-4 border-t-2 border-l-2 rounded-tl-2xl mt-[0.875rem] border-gray-400 dark:border-primary-600" />
                      <div className="flex-1 h-4 border-b-2 border-r-2 rounded-br-2xl border-gray-400 dark:border-primary-600" />
                    </div>
                  </div>
                ) : (
                  <div className="hidden sm:block my-3 mx-[9.5rem]">
                    <div className="flex w-full">
                      <div className="flex-1 h-4 border-b-2 border-l-2 rounded-bl-2xl border-gray-400 dark:border-primary-600" />
                      <div className="w-4 h-4 border-t-2 border-r-2 rounded-tr-2xl mt-[0.875rem] border-gray-400 dark:border-primary-600" />
                    </div>
                  </div>
                )
              ) : (
                <div className="hidden sm:block my-3 mx-[9.5rem] ">
                  <div
                    className={`flex w-1/2 ${
                      isOdd ? 'flex-row-reverse ml-auto ' : 'mr-auto'
                    }`}
                  >
                    <div
                      className={`flex-1 h-4 border-b-2 border-gray-400 dark:border-primary-600 ${
                        isOdd
                          ? 'border-r-2 rounded-br-2xl'
                          : 'border-l-2 rounded-bl-2xl'
                      }`}
                    />
                    <div
                      className={`w-4 h-4 border-t-2 mt-[0.875rem] border-gray-400 dark:border-primary-600 ${
                        Boolean(i % 2)
                          ? 'border-l-2 rounded-tl-2xl'
                          : 'border-r-2 rounded-tr-2xl'
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <Link href="/projects">
          <a
            href={`mailto:${process.env.EMAIL}`}
            className="mx-auto text-sm py-2 px-6 font-medium rounded-md transition-all text-black bg-gray-300 dark:text-white dark:bg-primary-600 hover:brightness-110"
          >
            I want to see all!
          </a>
        </Link>
      </div>
    </section>
  );
};
