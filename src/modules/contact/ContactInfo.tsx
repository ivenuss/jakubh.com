import React from 'react';
import { ArrowUpRightIcon } from '~/icons';
import { socialMedias } from '~/lib/constants';

const ContactInfo: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-xl font-medium text-black dark:text-primary-100">
        Social
      </h2>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          {socialMedias.map((s, i) => (
            <SocialButton key={i} link={s.link} title={s.title} />
          ))}
        </div>

        <div>
          <a
            href={`mailto:${process.env.EMAIL}`}
            className="rounded-md bg-gray-300 py-2 px-6 text-sm text-black transition-all hover:brightness-110 dark:bg-primary-600 dark:text-white"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

interface SocialButtonProps {
  link: string;
  title: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ link, title }) => {
  return (
    <a
      href={link}
      rel="noreferrer noopener"
      target="_blank"
      className="group mb-3 flex items-center text-secondary-accent hover:text-secondary-accent-hover hover:underline"
    >
      {title}

      <span className="ml-1">
        <ArrowUpRightIcon className="text-lg" />
      </span>
    </a>
  );
};
