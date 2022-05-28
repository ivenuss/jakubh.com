import React from 'react';
import NowPlaying from './NowPlaying';
import {
  BehanceIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from '~/icons';
import type { IconType } from 'react-icons';

interface NavTopBannerProps {}

interface SocialIconProps {
  icon: IconType;
  path?: string;
}

const NavTopBanner: React.FC<NavTopBannerProps> = ({}) => {
  return (
    <div className="flex items-center mx-auto w-full max-w-screen-xs px-6 py-1 mt-3">
      <NowPlaying />

      <ul className="flex flex-none ml-auto gap-3">
        {process.env.INSTAGRAM_URL && (
          <SocialIcon icon={InstagramIcon} path={process.env.INSTAGRAM_URL} />
        )}
        {process.env.GITHUB_URL && (
          <SocialIcon icon={GithubIcon} path={process.env.GITHUB_URL} />
        )}
        {process.env.LINKEDIN_URL && (
          <SocialIcon icon={LinkedinIcon} path={process.env.LINKEDIN_URL} />
        )}
        {process.env.BEHANCE_URL && (
          <SocialIcon icon={BehanceIcon} path={process.env.BEHANCE_URL} />
        )}
        {process.env.TWITTER_URL && (
          <SocialIcon icon={TwitterIcon} path={process.env.TWITTER_URL} />
        )}
      </ul>
    </div>
  );
};

export const SocialIcon: React.FC<SocialIconProps> = ({
  icon: Icon,
  path = '#'
}) => {
  return (
    <li>
      <a
        href={path}
        aria-label="Social Link"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Icon className="text-xl transition-colors text-gray-600 hover:text-gray-800 dark:text-primary-200 dark:hover:text-primary-100" />
      </a>
    </li>
  );
};

export default NavTopBanner;
