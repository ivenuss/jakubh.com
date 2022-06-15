import React from 'react';
import {
  ArrowUpRightIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from '~/icons';
import type { IconType } from 'react-icons';
import { socials } from '~/data/about';

interface ContactInfoProps {}

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
      className="group flex items-center mb-3 text-secondary-accent hover:underline hover:text-secondary-accent-hover"
    >
      {title}

      <span className="ml-1">
        <ArrowUpRightIcon className="text-lg" />
      </span>
    </a>
  );
};

const ContactInfo: React.FC<ContactInfoProps> = ({}) => {
  return (
    <section className="mb-8">
      <h2 className="font-medium text-black dark:text-primary-100 text-xl mb-3">
        Social
      </h2>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          {socials.map((s) => (
            <SocialButton link={s.link} title={s.title} />
          ))}
        </div>

        <div>
          <a
            href={`mailto:${process.env.EMAIL}`}
            className="text-sm py-2 px-6 rounded-md transition-all text-black bg-gray-300 dark:text-white dark:bg-primary-600 hover:brightness-110"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
