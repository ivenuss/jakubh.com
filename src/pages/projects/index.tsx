import Container from '~/ui/Container';
import ProjectThumbnail from '~/modules/projects/ProjectThumbnail';
import PageHeading from '~/ui/PageHeading';
import { allProjects } from 'contentlayer/generated';
import type { InferGetStaticPropsType } from 'next';

const Projects = ({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container
      meta={{
        title: 'Projects / Jakub Habrcetl',
        description:
          'I can turn your idea into a fully working project. Here are some examples.'
      }}
    >
      <div className="mx-auto mb-16 max-w-screen-xs px-6">
        <PageHeading
          title="My Projects"
          description="I've made a lot of projects and this is a small selection of some that I found interesting."
        />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-9">
          {projects.map((project) => (
            <ProjectThumbnail key={project._id} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;

export function getStaticProps() {
  return {
    props: {
      projects: allProjects.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
    }
  };
}
