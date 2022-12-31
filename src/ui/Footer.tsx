import React from 'react';
import CustomLink from './mdx/CustomLink';
import { socialMedias } from '~/lib/constants';

const Footer: React.FC = () => {
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
      items: socialMedias.map(({ title, icon, link: path }) => ({
        title,
        icon,
        path
      }))
    },
    {
      title: 'My Work',
      items: [{ title: 'Projects', path: '/projects' }]
    }
  ];

  return (
    <footer className="flex min-h-[355px] w-full flex-col px-6 pt-16">
      <div className="mx-auto grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
        {sections.map((section, i) => (
          <section key={i} className="flex flex-col items-start">
            <span className="text-secondary-200 mb-4 text-lg dark:text-primary-200">
              {section.title}
            </span>
            {section.items.map((item, i) => {
              const Icon = 'icon' in item ? item.icon : undefined;

              return (
                <CustomLink
                  key={i}
                  href={item.path}
                  className="mb-2 flex items-center gap-1.5 text-black hover:underline dark:text-primary-100"
                >
                  {Icon && <Icon className="mr-1 text-lg" />}
                  <span>{item.title}</span>
                </CustomLink>
              );
            })}
          </section>
        ))}
      </div>
      <div className="mx-auto mt-14 flex flex-col items-center pb-12">
        {/* SVG */}
        <span className="text-secondary-300 mt-2 text-sm dark:text-primary-300">
          © {new Date().getFullYear()} jakubh.com
        </span>
      </div>
    </footer>
  );
};

export default Footer;
