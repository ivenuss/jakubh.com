import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import { CloseIcon, MenuIcon } from '~/icons';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavLinkProps {
  title: string;
  path: string;
}

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 mb-2 w-full bg-gray-100 bg-opacity-75 backdrop-blur-xl backdrop-saturate-150 dark:bg-primary-900 dark:bg-opacity-75">
      <div className="mx-auto flex max-w-screen-xs py-5 px-6">
        <Link href="/" className="mr-3.5 flex items-center">
          <div className="text-xl text-black dark:text-primary-100">
            <span className="font-bold">Jakub</span>
            <span>H</span>
          </div>
        </Link>

        <ThemeSwitcher />

        <ul className="ml-auto hidden items-center md:flex">
          <NavLink title="Home" path="/" />
          <NavLink title="About" path="/about" />
          <NavLink title="Projects" path="/projects" />
          <NavLink title="Contact" path="/contact" />
        </ul>

        <button
          aria-label="Menu Button"
          className="ml-auto text-xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <ul className="mx-auto mb-6 flex max-w-screen-xs flex-col items-center px-6 md:hidden">
          <NavLink title="Home" path="/" />
          <NavLink title="About" path="/about" />
          <NavLink title="Projects" path="/projects" />
          <NavLink title="Contact" path="/contact" />
        </ul>
      )}
    </nav>
  );
};

export const NavLink: React.FC<NavLinkProps> = ({ title, path }) => {
  const router = useRouter();
  const isActive = router.asPath === path;

  return (
    <li className="w-full border-b border-primary-600 py-4 md:ml-5 md:w-auto md:border-none md:p-0">
      <Link
        href={path}
        className={clsx(
          'font-medium transition-colors duration-200',
          isActive
            ? 'text-secondary-accent hover:text-secondary-accent-hover'
            : 'text-gray-700 hover:text-secondary-accent dark:text-primary-100 dark:hover:text-secondary-accent'
        )}
      >
        {title}
      </Link>
    </li>
  );
};

export default Nav;
