import ProjectLayout from '~/modules/projects/ProjectLayout';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allProjects } from 'contentlayer/generated';
import type { Project } from 'contentlayer/generated';
import type { ParsedUrlQuery } from 'querystring';

// Components
import CustomLink from '~/ui/mdx/CustomLink';
import CustomImage from '~/ui/mdx/CustomImage';

export default function ProjectPage(
  project: Project & { nextProject?: Project }
) {
  const MDXComponent = useMDXComponent(project.body.code);

  return (
    <ProjectLayout project={project}>
      <MDXComponent components={{ a: CustomLink, Image: CustomImage }} />
    </ProjectLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: allProjects.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export const getStaticProps = ({
  params
}: {
  params: ParsedUrlQuery | undefined;
}) => {
  const project = allProjects.find((project) => project.slug === params?.slug);

  const index = allProjects.findIndex((p) => p._id === project?._id);

  const num = index >= allProjects.length - 1 ? 0 : index + 1;
  const nextProject = allProjects[num] || null;

  return { props: { ...project, nextProject } };
};
