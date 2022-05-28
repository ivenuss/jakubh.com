import Container from '~/ui/Container';
import ImageModal from '~/modules/gallery/ImageModal';
import ImagePreview from '~/modules/gallery/ImagePreview';
import Gallery from 'react-photo-gallery-next';
import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';

const images: any[] = [
  // { width: 1920, height: 1080, src: 'url.com' }
];

const Hello: NextPage = () => {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = index !== null ? 'hidden' : '';
  }, [index]);

  const imageRenderer = useCallback(
    ({ index: i, left, top, margin, key, photo }: any) => (
      <ImagePreview
        key={key}
        index={i}
        photo={photo}
        left={left}
        top={top}
        margin={margin}
        onOpen={() => setIndex(i)}
      />
    ),
    []
  );

  return (
    <Container
      meta={{
        title: 'Gallery / Jakub Habrcetl',
        description: 'A selection of my photos that I want to share'
      }}
    >
      {images.length > 0 && (
        <div className="max-w-screen-2xl mx-auto px-6">
          <Gallery
            direction="column"
            margin={6}
            photos={images}
            renderImage={imageRenderer}
          />
        </div>
      )}

      {index != null && (
        <ImageModal
          images={images.map((img) => img.src)}
          index={index}
          onIndexChange={(i) => setIndex(i)}
        />
      )}
    </Container>
  );
};

export default Hello;
