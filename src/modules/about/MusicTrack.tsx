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
    <div className="flex items-center">
      <div className="text-sm hidden sm:grid flex-none place-content-center w-5 mr-6 text-gray-500 dark:text-primary-300">
        {String('0' + order).slice(-2)}
      </div>

      <div className="relative h-12 w-12 flex-none">
        <Image
          draggable={false}
          layout="fill"
          className="bg-primary-800 rounded-md"
          alt="Thumbnail"
          src={thumbnailUrl}
        />
      </div>

      <div className="ml-4 mr-2">
        <div className="font-medium text-base text-black dark:text-primary-100">
          {title}
        </div>
        <div className="-mt-1 text-sm text-gray-600 dark:text-primary-200">
          {artist}
        </div>
      </div>

      {audioUrl ? (
        <button
          onClick={onToggle}
          className="ml-auto text-gray-800 dark:text-primary-100 hover:scale-105"
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
