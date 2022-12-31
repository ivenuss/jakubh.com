import React from 'react';
import NowPlaying from './NowPlaying';
import { socialMedias } from '~/lib/constants';
import type { IconType } from 'react-icons';

interface SocialIconProps {
  title: string;
  icon: IconType;
  link: string;
}

const NavTopBanner: React.FC = () => {
  return (
    <div className="mx-auto mt-3 flex w-full max-w-screen-xs items-center px-6 py-1">
      <NowPlaying />

      <ul className="ml-auto flex flex-none gap-3">
        {socialMedias.map((social, i) => (
          <SocialIcon
            key={i}
            title={social.title}
            icon={social.icon}
            link={social.link}
          />
        ))}
      </ul>
    </div>
  );
};

export const SocialIcon: React.FC<SocialIconProps> = ({
  title,
  icon: Icon,
  link = '#'
}) => {
  return (
    <li>
      <a
        href={link}
        aria-label={title}
        rel="noreferrer noopener"
        target="_blank"
      >
        <Icon className="text-xl text-gray-600 transition-colors hover:text-gray-800 dark:text-primary-200 dark:hover:text-primary-100" />
      </a>
    </li>
  );
};

export default NavTopBanner;
