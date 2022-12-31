import React from 'react';
import Link from 'next/link';
import Button from '~/ui/Button';

const Contact: React.FC = () => {
  return (
    <div className="mx-auto mb-12 w-full max-w-screen-xs px-6">
      <h3 className="mb-2.5 text-2xl font-medium text-black dark:text-primary-100">
        Did I catch your attention?
      </h3>

      <div className="mb-5 text-gray-600 dark:text-primary-300">
        Do you have a question, problem or idea that I can help you with? Do not
        hesitate to contact me.
      </div>

      <div className="flex items-center gap-8">
        <Link href="/contact">
          <Button>Get in Touch</Button>
        </Link>

        <a
          href={`mailto:${process.env.EMAIL}`}
          className="upp text-base font-medium text-gray-700 hover:underline dark:text-primary-200 xs:text-lg"
        >
          {process.env.EMAIL}
        </a>
      </div>
    </div>
  );
};

export default Contact;
