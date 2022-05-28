import React from 'react';

interface HeaderProps {}

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    return 'Good morning 🌅';
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon ☀️';
  }

  return 'Good evening 🌙';
};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <section className="max-w-screen-xs mx-auto px-6">
      <header>
        <div className="flex flex-col">
          <div className="text-gray-600 dark:text-primary-300">
            {getGreeting()}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-black dark:text-primary-100">
            I'm <span className="text-accent">Jakub</span>,
            <br />a web developer and designer.
          </h1>
          <h2 className="text-base md:text-lg mb-8 leading-relaxed text-gray-700 dark:text-primary-200">
            Web developer with a passion for learning new technologies. I'm most
            passionate about the frontend because of its connection to the user
            interface. I am also a graphic designer and UI/UX enthusiast.
          </h2>
        </div>
      </header>
    </section>
  );
};

export default Header;
