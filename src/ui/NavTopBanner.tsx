import React from 'react';
import NowPlaying from './NowPlaying';
import { socialMedias } from '~/lib/constants';
import type { IconType } from 'react-icons';

interface NavTopBannerProps {}

interface SocialIconProps {
  title: string;
  icon: IconType;
  link: string;
}

const NavTopBanner: React.FC<NavTopBannerProps> = ({}) => {
  return (
    <div className="flex items-center mx-auto w-full max-w-screen-xs px-6 py-1 mt-3">
      <NowPlaying />

      <ul className="flex flex-none ml-auto gap-3">
        {socialMedias.map((s, i) => (
          <SocialIcon key={i} title={s.title} icon={s.icon} link={s.link} />
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
        <Icon className="text-xl transition-colors text-gray-600 hover:text-gray-800 dark:text-primary-200 dark:hover:text-primary-100" />
      </a>
    </li>
  );
};

export default NavTopBanner;
