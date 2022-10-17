import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import { CloseIcon, MenuIcon } from '~/icons';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavProps {}

interface NavLinkProps {
  title: string;
  path: string;
}

const Nav: React.FC<NavProps> = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky mb-2 top-0 bg-gray-100 bg-opacity-75 dark:bg-primary-900 dark:bg-opacity-75 backdrop-saturate-150 backdrop-blur-xl z-10">
      <div className="flex max-w-screen-xs mx-auto py-5 px-6">
        <Link href="/">
          <a className="flex items-center mr-3.5">
            <div className="text-black dark:text-primary-100 text-xl">
              <span className="font-bold">Jakub</span>
              <span>H</span>
            </div>
          </a>
        </Link>

        <ThemeSwitcher />

        <ul className="hidden md:flex items-center ml-auto">
          <NavLink title="Home" path="/" />
          <NavLink title="About" path="/about" />
          <NavLink title="Projects" path="/projects" />
          <NavLink title="Contact" path="/contact" />
        </ul>

        <button
          aria-label="Menu Button"
          className="md:hidden ml-auto text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <ul className="flex md:hidden items-center flex-col max-w-screen-xs mx-auto mb-6 px-6">
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
    <li className="w-full py-4 border-b md:border-none border-primary-600 md:w-auto md:p-0 md:ml-5">
      <Link href={path}>
        <a
          className={clsx(
            'font-medium transition-colors duration-200',
            isActive
              ? 'text-secondary-accent hover:text-secondary-accent-hover'
              : 'text-gray-700 dark:text-primary-100 hover:text-secondary-accent dark:hover:text-secondary-accent'
          )}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default Nav;
