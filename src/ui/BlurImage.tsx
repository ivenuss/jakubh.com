import React, { useState } from 'react';
import Image from 'next/image';
import type { AlbumImage } from '~/types/types';

interface BlurImageProps {
  image: AlbumImage;
}

const BlurImage: React.FC<BlurImageProps> = ({ image }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt=""
        src={image.imageSrc}
        layout="fill"
        objectFit="cover"
        className={`rounded-md duration-700 ease-in-out group-hover:opacity-75
          ${
            isLoading
              ? 'scale-110 blur-sm grayscale'
              : 'scale-100 blur-0 grayscale-0'
          }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
