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
      <div className="flex flex-col items-center text-center max-w-screen-xs mx-auto px-6 mt-4">
        <h1 className="font-mono font-medium text-2xl mb-2">404 not found</h1>

        <p className="text-primary-200 mb-4">
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
