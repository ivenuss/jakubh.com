import React, { useState } from 'react';
import Image from 'next/future/image';

interface ImagePreviewProps {
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

const ImagePreview: React.FC<ImagePreviewProps> = ({
  index,
  photo,
  left,
  top,
  margin,
  onOpen
}: any) => {
  const [isLoading, setLoading] = useState(true);

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
        onLoadingComplete={() => setLoading(false)}
        className={`bg-secondary-800 dark:bg-primary-800 duration-700 ease-in-out ${
          isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'
        }`}
        alt={photo.alt || 'Gallery Image'}
        priority={true}
        {...photo}
      />
    </div>
  );
};

export default ImagePreview;
