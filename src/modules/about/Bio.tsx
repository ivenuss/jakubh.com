import React from 'react';
import CzechFlag from '/public/static/images/cz.svg';
import Image from 'next/image';

const Bio: React.FC = () => {
  return (
    <section>
      <h2 className="font-medium text-black dark:text-primary-100 text-xl mb-3">
        Short Bio
      </h2>

      <div className="flex gap-5">
        <p className="text-gray-600 dark:text-primary-300">
          Hey, my name is Jakub. I live in Czechia{' '}
          <CzechFlag className="inline-block h-4" /> and my hobbies are biking,
          working out, coding and playing video games. I also do graphic design,
          but only partly. Currently I'm mostly enjoying full stack web dev.
        </p>

        <div className="relative flex-none h-24 w-24">
          <Image
            layout="fill"
            objectFit="cover"
            alt="Profile Photo"
            className="rounded-full bg-gray-100 dark:bg-primary-700"
            src="/static/images/profile_pic.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Bio;
