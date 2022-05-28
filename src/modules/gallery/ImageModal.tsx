import React, { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  images: string[];
  index: number;
  onIndexChange: (i: number | null) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  index,
  onIndexChange
}) => {
  const handlePrev = () =>
    onIndexChange(index === 0 ? images.length - 1 : index - 1);

  const handleNext = () =>
    onIndexChange(index === images.length - 1 ? 0 : index + 1);

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
  }, [index]);

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-20">
      <div className="relative w-full h-screen z-[60]">
        <div className="absolute w-full top-10 bottom-10">
          <Image
            layout="fill"
            objectFit="contain"
            className="z-50"
            src={images[index]}
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
