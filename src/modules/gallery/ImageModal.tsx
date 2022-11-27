import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import type { ImageType } from '~/pages/gallery';

interface ImageModalProps {
  images: ImageType[];
  index: number;
  onIndexChange: (i: number | null) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  index,
  onIndexChange
}) => {
  const handlePrev = useCallback(
    () => onIndexChange(index === 0 ? images.length - 1 : index - 1),
    [index, images.length, onIndexChange]
  );
  const handleNext = useCallback(
    () => onIndexChange(index === images.length - 1 ? 0 : index + 1),
    [index, images.length, onIndexChange]
  );

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (e.keyCode === 37) {
        handlePrev(); // Prev
      } else if (e.keyCode === 39) {
        handleNext(); // Next
      } else if (e.keyCode === 27) {
        // Escape
        onIndexChange(null);
      }
    };

    document.addEventListener('keydown', handleKeyPress, false);
    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, [index, handlePrev, handleNext, onIndexChange]);

  const currentImage = images[index];

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-20">
      <div className="relative w-screen h-screen z-[60]">
        <div className="absolute top-8 bottom-8 right-0 left-0">
          <Image
            width={currentImage.width}
            height={currentImage.height}
            src={currentImage.src}
            alt="Fullscreen image preview"
            className="w-full h-full object-contain mx-auto z-[50]"
          />
        </div>

        <div className="absolute top-10 left-10 text-white z-[60]">
          {index + 1}/{images.length}
        </div>
        <button
          onClick={() => onIndexChange(null)}
          className="absolute top-10 right-10 text-white z-[60]"
        >
          CLOSE
        </button>
      </div>

      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black z-10" />
    </div>
  );
};

export default ImageModal;
