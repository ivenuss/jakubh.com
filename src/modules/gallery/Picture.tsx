import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PictureProps {
  assetid: string;
  src: string;
}

const Picture: React.FC<PictureProps> = ({ assetid, src }) => {
  return (
    <Link
      scroll={false}
      href={{ pathname: "gallery", query: { image: assetid } }}
    >
      <a
        className={`relative w-full h-full aspect-square bg-secondary-800 dark:bg-primary-800`}
      >
        <Image
          priority={true}
          layout="fill"
          src={src}
          alt="Image"
          className="rounded-md"
          objectFit="cover"
        />
      </a>
    </Link>
  );
};

export default Picture;
