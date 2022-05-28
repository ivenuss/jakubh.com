import Link from 'next/link';
import React from 'react';
import Button from '~/ui/Button';

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div className="w-full max-w-screen-xs mx-auto px-6 mb-12">
      <h3 className="text-black dark:text-primary-100 font-medium text-2xl mb-2.5">
        Sounds interesting?
      </h3>

      <div className="mb-5 text-gray-600 dark:text-primary-300">
        Do you have a question, problem or idea that I can help you with? Do not
        hesitate to contact me.
      </div>

      <div className="flex items-center gap-8">
        <Link href="/contact">
          <a>
            <Button>Get in Touch</Button>
          </a>
        </Link>

        <a
          href={`mailto:${process.env.EMAIL}`}
          className="text-lg font-medium text-gray-700 dark:text-primary-200 hover:underline"
        >
          {process.env.EMAIL}
        </a>
      </div>
    </div>
  );
};

export default Contact;
