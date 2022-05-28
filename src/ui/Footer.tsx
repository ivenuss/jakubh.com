import React from 'react';
import {
  BehanceIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from '~/icons';
import CustomLink from './mdx/CustomLink';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const sections = [
    {
      title: 'Explore',
      items: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Social',
      items: [
        {
          title: 'Instagram',
          icon: InstagramIcon,
          path: process.env.INSTAGRAM_URL
        },
        {
          title: 'GitHub',
          icon: GithubIcon,
          path: process.env.GITHUB_URL
        },
        {
          title: 'LinkedIn',
          icon: LinkedinIcon,
          path: process.env.LINKEDIN_URL
        },
        {
          title: 'Behance',
          icon: BehanceIcon,
          path: process.env.BEHANCE_URL
        },
        {
          title: 'Twitter',
          icon: TwitterIcon,
          path: process.env.TWITTER_URL
        }
      ]
    },
    {
      title: 'My Work',
      items: [
        { title: 'Projects', path: '/projects' },
        { title: 'Gallery', path: '/gallery' }
      ]
    }
  ];

  return (
    <footer className="flex flex-col w-full px-6 pt-16 min-h-[355px]">
      <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-6 md:gap-10">
        {sections.map((section, i) => (
          <section key={i} className="flex flex-col items-start">
            <span className="text-lg text-secondary-200 dark:text-primary-200 mb-4">
              {section.title}
            </span>
            {section.items.map((item: any, i) => {
              if (!item.path) return;

              const Icon = item.icon;

              return (
                <CustomLink
                  key={i}
                  href={item.path}
                  className="flex gap-1.5 items-center text-black dark:text-primary-100 mb-2 hover:underline"
                >
                  <>
                    {item.icon && <Icon className="text-lg mr-1" />}
                    <span>{item.title}</span>
                  </>
                </CustomLink>
              );
            })}
          </section>
        ))}
      </div>
      <div className="mx-auto flex items-center flex-col mt-14 pb-12">
        {/* SVG */}
        <span className="text-sm mt-2 text-secondary-300 dark:text-primary-300">
          © {new Date().getFullYear()} jakubh.com
        </span>
      </div>
    </footer>
  );
};

export default Footer;
