import React from 'react';
import {
  ArrowUpRightIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from '~/icons';
import type { IconType } from 'react-icons';

interface ContactInfoProps {}

interface SocialButtonProps {
  link: string;
  title: string;
  color: string;
  icon: IconType;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  link,
  title,
  color,
  icon: Icon
}) => {
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
          <SocialButton
            link={String(process.env.INSTAGRAM_URL)}
            color="#DD5145"
            title="Instagram"
            icon={InstagramIcon}
          />
          <SocialButton
            link={String(process.env.GITHUB_URL)}
            color="#4078c0"
            title="GitHub"
            icon={GithubIcon}
          />
          <SocialButton
            link={String(process.env.LINKEDIN_URL)}
            color="#0077B5"
            title="LinkedIn"
            icon={LinkedinIcon}
          />
          <SocialButton
            link={String(process.env.TWITTER_URL)}
            color="#1d9bf0"
            title="Twitter"
            icon={TwitterIcon}
          />
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
