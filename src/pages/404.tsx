import Container from '~/ui/Container';
import Link from 'next/link';
import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <Container
      meta={{
        title: '404 not found / Jakub Habrcetl',
        description: "This page doesn't seem to exist."
      }}
    >
      <div className="mx-auto mt-4 flex max-w-screen-xs flex-col items-center px-6 text-center">
        <h1 className="mb-2 font-mono text-2xl font-medium">404 not found</h1>

        <p className="mb-4 text-primary-200">
          Looks like you&apos;ve discovered a new page I don&apos;t know about
          yet.
        </p>

        <Link
          href="/"
          className="text-secondary-accent hover:text-secondary-accent-hover hover:underline"
        >
          Take me home...
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
