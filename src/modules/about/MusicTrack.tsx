import React from 'react';
import Image from 'next/image';
import { PlayIcon, PauseIcon } from '~/icons';

interface MusicTrackProps {
  order: number;
  artist: string;
  title: string;
  audioUrl: string;
  thumbnailUrl: string;
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicTrack: React.FC<MusicTrackProps> = ({
  order,
  artist,
  title,
  audioUrl,
  thumbnailUrl,
  isPlaying,
  onToggle
}) => {
  return (
    <div className="flex max-w-full flex-row items-center">
      <div className="mr-6 hidden w-5 flex-none place-content-center text-sm text-gray-600 dark:text-primary-300 sm:grid">
        {String('0' + order).slice(-2)}
      </div>

      <Image
        width={64}
        height={64}
        alt="Track cover"
        className="h-12 w-12 flex-none overflow-hidden rounded-md bg-gray-100 dark:bg-primary-800"
        src={thumbnailUrl}
      />

      <div className="mx-4 w-full overflow-hidden">
        <div className="mb-0.5 truncate text-sm font-medium text-black dark:text-primary-100 md:text-base">
          {title}
        </div>
        <div className="-mt-1 truncate text-sm text-gray-600 dark:text-primary-200">
          {artist}
        </div>
      </div>

      {audioUrl ? (
        <button
          type="button"
          onClick={onToggle}
          className="ml-auto text-gray-800 hover:scale-105 dark:text-primary-100"
          aria-label={isPlaying ? 'Pause Button' : 'Play Button'}
        >
          {isPlaying ? (
            <PauseIcon className="text-3xl" />
          ) : (
            <PlayIcon className="text-3xl" />
          )}
        </button>
      ) : null}
    </div>
  );
};

export default MusicTrack;
