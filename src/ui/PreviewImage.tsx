import Image from 'next/image';
import React from 'react';
import { InfoIcon } from '~/icons';

interface PreviewImageProps {
  index: string;
  left: number;
  top: number;
  margin: number;
  photo: {
    src: string;
    srcSet?: string | string[] | undefined;
    sizes?: string | string[] | undefined;
    width: number;
    height: number;
    alt?: string | undefined;
    key?: string | undefined;
  };
  onOpen: () => void;
}

const PreviewImage: React.FC<PreviewImageProps> = ({
  index,
  photo,
  left,
  top,
  margin,
  onOpen
}: any) => {
  return (
    <div
      className="relative m-0.5 cursor-pointer"
      style={{
        position: 'absolute',
        left,
        top,
        margin,
        height: photo.height,
        width: photo.width
      }}
      onClick={onOpen}
    >
      <Image
        layout="responsive"
        className="bg-secondary-800 dark:bg-primary-800"
        alt={photo.alt || null}
        priority={true}
        {...photo}
      />

      {photo.alt && (
        <div className="group cursor-default flex items-center absolute bottom-0 left-0 m-2.5 px-2 py-1 rounded-md text-primary-light-200 text-sm bg-black bg-opacity-70">
          <InfoIcon className="flex-none text-xl mx-auto text-white" />{' '}
          <span className="ml-1.5 hidden group-hover:block">{photo.alt}</span>
        </div>
      )}
    </div>
  );
};

export default PreviewImage;
