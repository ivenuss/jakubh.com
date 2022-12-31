import React from 'react';

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) return 'Good morning 🌅';
  else if (hour >= 12 && hour < 18) return 'Good afternoon ☀️';

  return 'Good evening 🌙';
};

const Header: React.FC = () => {
  return (
    <section className="mx-auto max-w-screen-xs px-6">
      <header>
        <div className="flex flex-col">
          <div className="text-gray-600 dark:text-primary-300">
            {getGreeting()}
          </div>
          <h1 className="mb-2 text-2xl font-bold text-black dark:text-primary-100 md:text-3xl">
            I&apos;m <span className="text-accent">Jakub</span>,
            <br />a web developer and designer.
          </h1>
          <h2 className="mb-8 text-base leading-relaxed text-gray-700 dark:text-primary-200 md:text-lg">
            Web developer with a passion for learning new technologies. I&apos;m
            most passionate about the frontend because of its connection to the
            user interface. I am also a graphic designer and UI/UX enthusiast.
          </h2>
        </div>
      </header>
    </section>
  );
};

export default Header;
