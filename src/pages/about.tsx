import Bio from '~/modules/about/Bio';
import Skills from '~/modules/about/Skills';
import Container from '~/ui/Container';
import ProgressTimeline from '~/modules/about/ProgressTimeline';
import dynamic from 'next/dynamic';
import PageHeading from '~/ui/PageHeading';
import type { NextPage } from 'next';

const DynamicTopTracks = dynamic(() => import('~/modules/about/TopTracks'));

const About: NextPage = () => {
  return (
    <Container
      meta={{
        title: 'About / Jakub Habrcetl',
        description: 'Who am I & what do I do? Come and get to know me better.'
      }}
    >
      <div className="w-full max-w-screen-xs mx-auto px-6">
        <PageHeading title="About Me" />

        <div className="flex flex-col gap-12 mt-6">
          <Bio />
          <Skills />
          <ProgressTimeline />
          <DynamicTopTracks />
        </div>
      </div>
    </Container>
  );
};

export default About;
