import React from 'react';
import Image, { ImageProps } from 'next/future/image';

interface CustomLinkProps extends ImageProps {
  haslink?: boolean;
}

const CustomImage: React.FC<CustomLinkProps> = (props) => {
  if (props.haslink)
    return (
      <a
        target="_blank"
        aria-label="View an image in fullscreen"
        rel="noopener noreferrer"
        href={String(props.src)}
      >
        <Image {...props} />
      </a>
    );

  return <Image {...props} />;
};

export default CustomImage;
