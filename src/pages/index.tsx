import Container from '~/ui/Container';
import Header from '~/modules/index/Header';
import Contact from '~/modules/index/Contact';
import { allProjects } from 'contentlayer/generated';
import { ProjectShowcase } from '~/modules/index/WorkShowcase';
import type { Project } from 'contentlayer/generated';
import type { GetStaticProps, NextPage } from 'next';

interface HomeProps {
  projects: Project[];
}

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <Container
      meta={{
        title: 'Jakub Habrcetl / Web developer & designer'
      }}
    >
      <div className="flex flex-col gap-20">
        <Header />
        <ProjectShowcase projects={projects} />
        <Contact />
      </div>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: allProjects
        .slice(0, 3)
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
    }
  };
};
