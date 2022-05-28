import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ImagesIcon } from '~/icons';
import type { Album } from '~/types/types';

interface HeaderProps {
  album: Album;
}

const Header: React.FC<HeaderProps> = ({ album }) => {
  const images = album.images;

  return (
    <picture
      className="relative h-72 grid place-items-center w-full bg-center bg-no-repeat bg-cover select-none"
      style={{
        backgroundImage: album.bannerSrc ? `url(${album.bannerSrc})` : undefined
      }}
    >
      <div className="absolute top-0 w-full h-48 bg-gradient-to-b from-primary-900" />

      <div className="w-full max-w-screen-xs flex items-center mb-3 px-6 z-[2]">
        <h2 className="font-bold text-white text-3xl mr-3">{album.name}</h2>
        <div className="flex items-center">
          <span className="mr-1">{images?.length || 0}</span>
          <ImagesIcon />
        </div>

        <Link href="/gallery">
          <a className="ml-auto flex items-center hover:underline">
            <ArrowLeftIcon className="mr-2" />
            <span>Go back</span>
          </a>
        </Link>
      </div>

      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-primary-900" />
    </picture>
  );
};

export default Header;
